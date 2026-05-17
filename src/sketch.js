export default function sketch(p5) {
  const spacing = 36;
  const size = 18;

  const padding = 2;
  const velMag = 2;

  const colorPerlinSpeed = 0.005;
  const speedSquared = colorPerlinSpeed * colorPerlinSpeed;
  let colorPerlin = 0;
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
    console.log(customWidth, customHeight);
  };

  p5.draw = () => {
    p5.background(backgroundColor);

    // evenly spaced grid of points, centered (same margin on all sides)
    let nRows = p5.floor(customHeight / spacing);
    let nCols = p5.floor(customWidth / spacing);
    let marginX = (customWidth - nCols * spacing) / 2;
    let marginY = (customHeight - nRows * spacing) / 2;

    let posBreal = p5.createVector(pos.x, pos.y);
    let posBwrapX = p5.createVector(pos.x + customWidth, pos.y);
    let posBwrapX2 = p5.createVector(pos.x - customWidth, pos.y);
    let posBwrapY = p5.createVector(pos.x, pos.y + customHeight);
    let posBwrapY2 = p5.createVector(pos.x, pos.y - customHeight);
    // let posBwrapX2 = p5.createVector(pos.x - customWidth, pos.y);
    // let posBwrapY2 = p5.createVector(pos.x, pos.y - customHeight);
    let posBwrapXY = p5.createVector(pos.x + customWidth, pos.y + customHeight);

    let posBwrapXY2 = p5.createVector(
      pos.x - customWidth,
      pos.y + customHeight
    );
    let posBwrapXY3 = p5.createVector(
      pos.x + customWidth,
      pos.y - customHeight
    );
    let posBwrapXY4 = p5.createVector(
      pos.x - customWidth,
      pos.y - customHeight
    );

    let posBmirrorX = p5.createVector(customWidth - pos.x, pos.y);
    let posBmirrorY = p5.createVector(pos.x, customHeight - pos.y);
    let posBmirrorXY = p5.createVector(
      customWidth - pos.x,
      customHeight - pos.y
    );

    for (let i = 0; i <= nCols; i++) {
      for (let j = 0; j <= nRows; j++) {
        let x = marginX + i * spacing;
        let y = marginY + j * spacing;

        // draw grid point as a circle
        p5.fill("#505050");
        p5.circle(x, y, size);

        // posA is point on grid, posB is closer of pos and its wraparound points (mirrored across edges)
        let posA = p5.createVector(x, y);

        let dReal = p5.dist(posA.x, posA.y, posBreal.x, posBreal.y);
        let dWrapX = p5.dist(posA.x, posA.y, posBwrapX.x, posBwrapX.y);
        let dWrapY = p5.dist(posA.x, posA.y, posBwrapY.x, posBwrapY.y);
        let dWrapXY = p5.dist(posA.x, posA.y, posBwrapXY.x, posBwrapXY.y);
        let dWrapX2 = p5.dist(posA.x, posA.y, posBwrapX2.x, posBwrapX2.y);
        let dWrapY2 = p5.dist(posA.x, posA.y, posBwrapY2.x, posBwrapY2.y);
        let dWrapXY2 = p5.dist(posA.x, posA.y, posBwrapXY2.x, posBwrapXY2.y);
        let dWrapXY3 = p5.dist(posA.x, posA.y, posBwrapXY3.x, posBwrapXY3.y);
        let dWrapXY4 = p5.dist(posA.x, posA.y, posBwrapXY4.x, posBwrapXY4.y);
        let dMirrorX = p5.dist(posA.x, posA.y, posBmirrorX.x, posBmirrorX.y);
        let dMirrorY = p5.dist(posA.x, posA.y, posBmirrorY.x, posBmirrorY.y);
        let dMirrorXY = p5.dist(posA.x, posA.y, posBmirrorXY.x, posBmirrorXY.y);

        // let distances = [dReal, dWrapX, dWrapY, dWrapXY];
        let distances = [
          dReal,
          dWrapX,
          dWrapY,
          dWrapXY,
          dWrapXY2,
          dWrapXY3,
          dWrapXY4,
        ];

        // if (i + j == 0) {
        //   console.log(dReal, dWrapX, dWrapY, dWrapXY);
        // }
        let sortedDistances = distances.sort((a, b) => a - b);
        // let sortedDistancesWithMirrors = [
        //   dReal,
        //   dWrapX,
        //   dWrapY,
        //   dWrapX2,
        //   dWrapY2,
        //   dWrapXY,
        //   dMirrorX,
        //   dMirrorY,
        //   dMirrorXY,
        // ].sort((a, b) => a - b);
        // if (i + j == 0) {
        //   console.log(sortedDistances);
        // }
        let d = sortedDistances[0];
        // let d = sortedDistancesWithMirrors[0];
        let runnerUpD = sortedDistances[1];
        // let runnerUpD = p5.max(
        //   sortedDistances[1],
        //   sortedDistancesWithMirrors[0]
        // );
        // let runnerUpD = sortedDistancesWithMirrors[6];

        // let runnerUpD = sortedDistancesWithMirrors[1];

        let posB =
          d === dReal
            ? posBreal
            : d === dWrapX
            ? posBwrapX
            : d === dWrapY
            ? posBwrapY
            : d === dWrapX2
            ? posBwrapX2
            : d === dWrapY2
            ? posBwrapY2
            : d === dWrapXY2
            ? posBwrapXY2
            : d === dWrapXY3
            ? posBwrapXY3
            : d === dWrapXY4
            ? posBwrapXY4
            : // : d === dMirrorX
              // ? posBmirrorX
              // : d === dMirrorY
              // ? posBmirrorY
              // : d === dMirrorXY
              // ? posBmirrorXY
              posBwrapXY;

        let hue = p5.map(
          p5.noise(
            (x + posB.x) * speedSquared,
            (y + posB.y) * speedSquared,
            colorPerlin
          ),
          0,
          1,
          0,
          100
        );

        // so there are no sudden jumps, the maximum is bounded by the second closest point
        // let maxD = p5.min(sortedDistances[1], runnerUpD);
        // let maxD = p5.min(
        //   sortedDistances[0],
        //   sortedDistances[1],
        //   sortedDistances[2],
        //   runnerUpD
        // );
        let maxD = runnerUpD;

        let saturation = p5.map(d, 0, maxD, 60, 40, true);

        p5.fill(hue, 100, saturation);

        let arrowSize = p5.map(d, 0, maxD, size, 0, true);
        // let arrowSize = 6;

        const t = arrowSize / 2;
        if (d > t) {
          p5.push();
          p5.translate(x, y);
          // p5.circle(0, 0, size);
          p5.rotate(p5.atan2(posB.y - posA.y, posB.x - posA.x));
          p5.translate(t, 0);
          p5.circle(0, 0, size);
          // p5.triangle(0, -arrowSize / 3, 0, arrowSize / 3, arrowSize, 0);
          p5.pop();
        } else {
          p5.circle(pos.x, pos.y, size);
        }
      }
    }

    // let dx = p5.abs(pos.x - cX) / cX;
    // let dy = p5.abs(pos.y - cY) / cY;
    // let d = p5.max(dx, dy);

    // if (padding) {
    //   p5.fill(backgroundColor);
    //   p5.ellipse(pos.x, pos.y, size + padding, size + padding);
    // }

    // draw the focus point (pos)
    let shade = p5.map(1, 0, 1, 13, 100); // #212121 has brightness of 13
    p5.fill(0, 0, shade);
    // p5.ellipse(pos.x - vel.x, pos.y - vel.y, size, size);
    // p5.circle(pos.x, pos.y, size);

    // Move the color noise
    colorPerlin += colorPerlinSpeed;

    // Move the focus noise and its point
    perlinIn += perlinSpeed;
    let perlin = p5.noise(perlinIn);

    let angle = p5.map(perlin, 0, 1, 0, p5.TWO_PI);
    vel.x = velMag * p5.cos(angle);
    vel.y = velMag * p5.sin(angle);

    // control via mouse
    // pos.x = p5.mouseX;
    // pos.y = p5.mouseY;

    pos.add(vel);

    // snap to nearest grid line
    // one
    // if ((pos.x + vel.x) % spacing < (pos.y + vel.y) % spacing) {
    //   pos.x += vel.x;
    // } else {
    //   pos.y += vel.y;
    // }

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
