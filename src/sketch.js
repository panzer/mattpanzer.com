export default function sketch(p5) {
  const spacing = 32;
  const size = 16;

  const padding = 2;
  const velMag = 2;

  const colorPerlinSpeed = 0.05;
  const perlinSpeed = 0.005;
  const backgroundColor = "#212121";
  let pos;
  let vel;
  let perlinIn = 0;
  let cX;
  let cY;
  let customWidth = p5.windowWidth;
  let customHeight = p5.windowHeight;
  let cornerToCenterDistance;

  function customCreateCanvas() {
    p5.createCanvas(customWidth, customHeight);
    p5.background(backgroundColor);
    cX = customWidth / 2;
    cY = customHeight / 2;
    cornerToCenterDistance = p5.dist(0, 0, cX, cY);
  }

  p5.setup = () => {
    customCreateCanvas();
    p5.colorMode(p5.HSB);
    p5.angleMode(p5.RADIANS);
    p5.noStroke();
    p5.frameRate(60);

    pos = p5.createVector(p5.random(customWidth), p5.random(customHeight));
    vel = p5.createVector(0, 0);
  };

  p5.draw = () => {
    p5.background(backgroundColor);

    // evenly spaced grid of points, centered (same margin on all sides)
    let nRows = p5.floor(customHeight / spacing);
    let nCols = p5.floor(customWidth / spacing);
    let marginX = (customWidth - nCols * spacing) / 2;
    let marginY = (customHeight - nRows * spacing) / 2;
    for (let i = 0; i <= nCols; i++) {
      for (let j = 0; j <= nRows; j++) {
        let x = marginX + i * spacing;
        let y = marginY + j * spacing;

        // posA is point on grid, posB is closer of pos and its wraparound points (mirrored across edges)
        let posA = p5.createVector(x, y);
        let posBreal = p5.createVector(pos.x, pos.y);
        let posBwrapX = p5.createVector(
          pos.x < cX ? pos.x + customWidth : pos.x - customWidth,
          pos.y,
        );
        let posBwrapY = p5.createVector(
          pos.x,
          pos.y < cY ? pos.y + customHeight : pos.y - customHeight,
        );
        let posBwrapXY = p5.createVector(
          pos.x < cX ? pos.x + customWidth : pos.x - customWidth,
          pos.y < cY ? pos.y + customHeight : pos.y - customHeight,
        );

        let dReal = p5.dist(posA.x, posA.y, posBreal.x, posBreal.y);
        let dWrapX = p5.dist(posA.x, posA.y, posBwrapX.x, posBwrapX.y);
        let dWrapY = p5.dist(posA.x, posA.y, posBwrapY.x, posBwrapY.y);
        let dWrapXY = p5.dist(posA.x, posA.y, posBwrapXY.x, posBwrapXY.y);

        let sortedDistances = [dReal, dWrapX, dWrapY, dWrapXY].sort(
          (a, b) => a - b,
        );
        let d = sortedDistances[0];
        let runnerUpD = sortedDistances[1];
        let posB =
          d === dReal
            ? posBreal
            : d === dWrapX
              ? posBwrapX
              : d === dWrapY
                ? posBwrapY
                : posBwrapXY;

        let hue = p5.map(
          p5.noise(i * colorPerlinSpeed, j * colorPerlinSpeed),
          0,
          1,
          0,
          p5.TWO_PI,
        );
        p5.fill(hue, 80, 80);

        let arrowSize = p5.map(
          d,
          0,
          p5.min(cornerToCenterDistance, runnerUpD),
          size,
          0,
        );
        // let arrowSize = 6;
        p5.push();
        p5.translate(x, y);
        p5.angleMode(p5.RADIANS);
        p5.circle(0, 0, size);
        p5.rotate(p5.atan2(posB.y - posA.y, posB.x - posA.x));
        p5.translate(arrowSize / 2, 0);
        p5.circle(0, 0, size);
        // p5.triangle(0, -arrowSize / 3, 0, arrowSize / 3, arrowSize, 0);
        p5.pop();
      }
    }

    // let dx = p5.abs(pos.x - cX) / cX;
    // let dy = p5.abs(pos.y - cY) / cY;
    // let d = p5.max(dx, dy);

    if (padding) {
      p5.fill(backgroundColor);
      p5.ellipse(pos.x, pos.y, size + padding, size + padding);
    }

    let shade = p5.map(1, 0, 1, 13, 100); // #212121 has brightness of 13
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
