var mp3;

var sliderR;
var sliderG;
var sliderB;

function preload() {
  	img = loadImage("SpongeBob_RockPants.png");
    mp3 = loadSound("ARPEGGIO-ChanchinArpSteady.mp3");
}

function setup() {
  createCanvas(400, 400, WEBGL);
  noStroke();
  sliderR = createSlider(0,255,0);
  sliderR.position(10, height-60);
  sliderR.size(width-40, 20);
  sliderG = createSlider(0,255,0);
  sliderG.position(10, height-40);
  sliderG.size(width-40, 20);
  sliderB = createSlider(0,255,0);
  sliderB.position(10, height-20);
  sliderB.size(width-40, 20);
  sliderScale = createSlider(1,5,1);
  sliderScale.position(10, 20);
  sliderScale.size(width-40, 20);
  
  mp3.loop();
}

function draw() {
  background(sliderR.value(),sliderG.value(),sliderB.value());
	scale(sliderScale.value());
  
  //push();
  spinCube();
  //pop();
  
  //push();
  drawCircle(width/2, 280, 6);
  //pop();
  
  //push();
  fill(0,0);
  texture(img);
  plane(90, 90);
  //pop();
  }

function drawCircle(x, radius, level) {                    
  var tt = 126 * level/4.0;
  fill(tt, random(255));
  translate(-20, -20, 0);
  ellipse(x, height/2, radius*2, radius*2);      
  if(level > 1) {
    level = level - 1;
    drawCircle(x - radius/2, radius/2, level);
    drawCircle(x + radius/2, radius/2, level);
  }
}

function spinCube() {
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
	box(50, 50, 50);
}
