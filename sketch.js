let fft;
let smoothing = 0.6;
let mic;
let bins;
let flesh = 40;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  mic = new p5.AudioIn();
  mic.start();
  cam = createCapture(VIDEO)

  fft = new p5.FFT(smoothing, bins);
  fft.setInput(mic);
}

function draw() {
  background(0,255,0);

  let spectrum = fft.analyze();

  bass = fft.getEnergy("bass");
  mid = fft.getEnergy("mid");

  let size = map(mid, 0, 255, 80, 150);

  noStroke();
  texture(cam)
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);

  push();
  translate(-140, -140);
  sphere(bass);
  pop();

  push();
  translate(-50, -90);
  sphere(size);
  pop();
  
  push();
  translate(50, 150);
  sphere(bass);
  pop();
  
  push();
  translate(50, 220);
  sphere(size);
  pop();

  push();
 translate(-50, -320);
  sphere(size);
  pop();

  push();
  translate(90, -270);
  sphere(size);
  pop();
  
  push();
  translate(-50, -190);
  sphere(mid);
  pop();

  push();
  translate(-10, -280);
  sphere(bass);
  pop();

  push();
  translate(-100, 10);
  sphere(bass);
  pop();

  push();
  translate(-170, -190);
  sphere(bass);
  pop();

  push();
  translate(50, 20);
  sphere(bass);
  pop();

  push();
  translate(30, 80);
  sphere(bass);
  pop();

  push();
  translate(230, 40);
  sphere(size);
  pop();

  push();
  translate(100, 150);
  sphere(mid);
  pop();
  
  push();
  translate(160, 110);
  sphere(bass);
  pop();

  push();
  translate(-220, 80);
  sphere(mid);
  pop();

  push();
  translate(-150, -20);
  sphere(size);
  pop();

  push();
  translate(-20, -170);
  sphere(mid);
  pop();

  push();
  translate(-150, 170);
  sphere(bass);
  pop();

  push();
  translate(-205, -130);
  sphere(mid);
  pop();

  push();
  translate(255, -130);
  sphere(size);
  pop();
  
  push();
  translate(105, -130);
  sphere(size);
  pop();
  
  push();
  translate(220, -240);
  sphere(size);
  pop();

  push();
  translate(130, -80);
  sphere(mid);
  pop();

  push();
  translate(-40, -10);
  sphere(size);
  pop();

  push();
  translate(-227, -148);
  sphere(size);
  pop();

}
function mousePressed() {
  fullscreen(true);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
