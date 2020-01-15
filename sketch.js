
let teapot;
let wood;
let camera;

function preload() {

  teapot = loadModel('assets/mirror.obj', true);
  wood = loadImage('assets/wood.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  camera = createCapture(VIDEO);

  slider = createSlider(0.2, 2.5, 1, 0.1);
  
}

function draw() {
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  let r = slider.value();

  ambientLight(120, 120, 120);
  directionalLight(255, 0, 10, 0, 1, 0);
  pointLight(255, 255, 255, locX, locY, 0);

  background(200);
  scale(2);
  noStroke();
  rotateX(r);
  rotateZ(frameCount * 0.01);

  push();
  texture(wood);
  model(teapot);
  pop();

  push();
  translate(0, 2, 15);
  rotateX(1.83);
  rotateZ(3.15);
  texture(camera);
  plane(58,140);

  pop();

}
