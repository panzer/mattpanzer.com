export default function sketch(p5) {
  const size = 6;
  const velMag = 2;
  const perlinSpeed = 0.01;
  let pos;
  let vel;
  let perlinIn = 0;
  let cX;
  let cY;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.background("#212121");
    p5.colorMode(p5.HSB);
    p5.noStroke();
    p5.frameRate(60);

    pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
    vel = p5.createVector(0, 0);

    cX = p5.width / 2;
    cY = p5.height / 2;
  };

  p5.draw = () => {
    let dx = p5.abs(pos.x - cX) / cX;
    let dy = p5.abs(pos.y - cY) / cY;
    let d = p5.max(dx, dy);

    let shade = p5.map(d, 0, 1, 13, 100); // #212121 has brightness of 13
    p5.fill(0, 0, shade);
    p5.ellipse(pos.x, pos.y, size, size);

    let perlin = p5.noise(perlinIn);
    perlinIn += perlinSpeed;
    let angle = p5.map(perlin, 0, 1, 0, p5.TWO_PI);
    vel.x = velMag * p5.cos(angle);
    vel.y = velMag * p5.sin(angle);

    pos.add(vel);

    if (pos.x < 0) {
      pos.x = p5.width;
    }
    if (pos.x > p5.width) {
      pos.x = 0;
    }
    if (pos.y < 0) {
      pos.y = p5.height;
    }
    if (pos.y > p5.height) {
      pos.y = 0;
    }
  };
}
