export default function sketch(p5) {
  const size = 16;
  // padding must be equal or less than velocity to keep illusion of unbroken line
  const padding = 2;
  const velMag = 2;
  const perlinSpeed = 0.005;
  const backgroundColor = "#212121";
  let pos;
  let vel;
  let perlinIn = 0;
  let cX;
  let cY;
  let customWidth = p5.windowWidth;
  let customHeight = p5.windowHeight;

  function customCreateCanvas() {
    p5.createCanvas(customWidth, customHeight);
    p5.background(backgroundColor);
    cX = customWidth / 2;
    cY = customHeight / 2;
  }

  p5.setup = () => {
    customCreateCanvas();
    p5.colorMode(p5.HSB);
    p5.noStroke();
    p5.frameRate(60);

    pos = p5.createVector(p5.random(customWidth), p5.random(customHeight));
    vel = p5.createVector(0, 0);
  };

  p5.draw = () => {
    let dx = p5.abs(pos.x - cX) / cX;
    let dy = p5.abs(pos.y - cY) / cY;
    let d = p5.max(dx, dy);

    if (padding) {
      p5.fill(backgroundColor);
      p5.ellipse(pos.x, pos.y, size + padding, size + padding);
    }

    let shade = p5.map(d, 0, 1, 13, 100); // #212121 has brightness of 13
    p5.fill(0, 0, shade);
    p5.ellipse(pos.x - vel.x, pos.y - vel.y, size, size);
    p5.ellipse(pos.x, pos.y, size, size);

    let perlin = p5.noise(perlinIn);
    perlinIn += perlinSpeed;
    let angle = p5.map(perlin, 0, 1, 0, p5.TWO_PI);
    vel.x = velMag * p5.cos(angle);
    vel.y = velMag * p5.sin(angle);

    pos.add(vel);

    if (pos.x < -size) {
      pos.x = customWidth;
    }
    if (pos.x > customWidth + size) {
      pos.x = 0;
    }
    if (pos.y < -size) {
      pos.y = customHeight;
    }
    if (pos.y > customHeight + size) {
      pos.y = 0;
    }
  };

  // p5.myCustomRedrawAccordingToNewPropsHandler = props => {
  //   console.log(props.width, props.height);
  //   customWidth = props.width;
  //   customHeight = props.height;
  //   customCreateCanvas();
  // };
}
