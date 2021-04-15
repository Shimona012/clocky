var hr,mn,sec;
var HRangle,MNangle,SECangle;

function setup() {

  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);

}

function draw() {
 
  background(0);  
  
  translate(200,200)

  rotate(-90);

  hr = hour();

  mn = minute();

  sec = second();
  push();
  fill(rgb(255, 95, 31));
rotate(+90)
  textSize(20);
  strokeWeight(0);
  text("Time is"+hr+":"+mn+":"+sec,windowWidth/2,windowHeight/4);
  pop();

SECangle = map(sec,0,60,0,360);

MNangle = map(mn,0,60,0,360);

HRangle = map(hr%12,0,12,0,360)

push();
rotate(SECangle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();

push();
rotate(MNangle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,75,0);
pop();

push();
rotate(HRangle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,50,0);
pop();

strokeWeight(10);

noFill();

stroke(255,0,0);
arc(0,0,300,300,0,SECangle);

stroke(0,255,0);
arc(0,0,280,280,0,MNangle);

stroke(0,0,255);
arc(0,0,260,260,0,HRangle);

  drawSprites();
 
  console.log("The Time is",hr,":",mn,":",sec);

}