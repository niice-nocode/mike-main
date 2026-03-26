function initFalling2DMatterJS() {
  const canvas = document.querySelector("#canvas-target");

  if (!canvas) return;

  const canvasWidth = canvas.clientWidth + 2;
  const canvasHeight = canvas.clientHeight + 2;
  const canvasWallDepth = canvasWidth / 4;
  const shapeAmount = 15;
  const shapeWidth = canvasWidth / 6;
  const shapeHeight = canvasWidth / 10;
  const shapeRestitution = 0.75;
  const worldGravity = 2;

  let { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;

  let engine = Engine.create();
  engine.world.gravity.y = worldGravity;

  let render = Render.create({
    element: canvas,
    engine: engine,
    options: {
      background: "transparent",
      wireframes: false,
      width: canvasWidth,
      height: canvasHeight,
      pixelRatio: 2,
      border: "none",
    }
  });

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  let min = shapeWidth / 2;
  let max = canvasWidth - (shapeWidth / 2);

  // Kleuren array
  const colorArray = ['#EECD64', '#12173D', '#E43D45', '#5EBE87'];

  let colorIndex = 0;
  function getNextColor() {
    const color = colorArray[colorIndex];
    colorIndex = (colorIndex + 1) % colorArray.length;
    return color;
  }

  const shapeCreate = () => {
    let shape = Bodies.rectangle(
      getRandomNumber(min, max),
      shapeHeight,
      shapeWidth,
      shapeHeight,
      {
        restitution: shapeRestitution,
        render: {
          fillStyle: getNextColor()
        }
      }
    );
    Composite.add(engine.world, shape);
  };

  let boxTop = Bodies.rectangle(
    canvasWidth / 2 + (canvasWallDepth * 2),
    canvasHeight + canvasWallDepth,
    canvasWidth + (canvasWallDepth * 4),
    canvasWallDepth * 2,
    { isStatic: true, render: { visible: false } }
  );

  let boxLeft = Bodies.rectangle(
    canvasWallDepth * -1,
    canvasHeight / 2,
    canvasWallDepth * 2,
    canvasHeight,
    { isStatic: true, render: { visible: false } }
  );

  let boxRight = Bodies.rectangle(
    canvasWidth + canvasWallDepth,
    canvasHeight / 2,
    canvasWallDepth * 2,
    canvasHeight,
    { isStatic: true, render: { visible: false } }
  );

  let boxBottom = Bodies.rectangle(
    canvasWidth / 2 + (canvasWallDepth * 2),
    canvasWallDepth * -1,
    canvasWidth + (canvasWallDepth * 4),
    canvasWallDepth * 2,
    { isStatic: true, render: { visible: false } }
  );

  Composite.add(engine.world, [boxTop, boxLeft, boxRight, boxBottom]);

  Render.run(render);
  let runner = Runner.create();
  Matter.Runner.run(runner, engine);

  function repeatedFunction(count, maxCount) {
    if (count < maxCount) {
      shapeCreate();
      setTimeout(() => repeatedFunction(count + 1, maxCount), 100);
    }
  }
  setTimeout(() => repeatedFunction(0, shapeAmount), 300);

  let mouse = Mouse.create(render.canvas);
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: { visible: false }
    }
  });

  Composite.add(engine.world, mouseConstraint);

  mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
  mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

  mouseConstraint.mouse.element.removeEventListener('touchstart', mouseConstraint.mouse.mousedown);
  mouseConstraint.mouse.element.removeEventListener('touchmove', mouseConstraint.mouse.mousemove);
  mouseConstraint.mouse.element.removeEventListener('touchend', mouseConstraint.mouse.mouseup);

  mouseConstraint.mouse.element.addEventListener('touchstart', mouseConstraint.mouse.mousedown, { passive: true });
  mouseConstraint.mouse.element.addEventListener('touchmove', (e) => {
    if (mouseConstraint.body) mouseConstraint.mouse.mousemove(e);
  });
  mouseConstraint.mouse.element.addEventListener('touchend', (e) => {
    if (mouseConstraint.body) mouseConstraint.mouse.mouseup(e);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initFalling2DMatterJS();
});
