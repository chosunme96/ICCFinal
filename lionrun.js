var sound, amplitude, cnv;
var button, slider, slidervalue, buttonPause, buttonContinue, buttonRestart;
var lion;
var level_one_x=[], level_one_y=[], level_two_x=[], level_two_y=[];
var level;   //gets the volume of the sound.
var size;
var count=0;
var objectNum=15;
//var img;

function preload() {
  sound=loadSound("in-the-bleak-midwinter.mp3");
  //img=loadImage('left.gif');
}


function setup() {
  //frameRate(30);
  cnv=createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  background(150);
  amplitude=new p5.Amplitude([0.5]);


  /*
  lion=createSprite(width/2, height-200, 50, 100);
   lion.addAnimation("leftjump", "left.gif", "jumpleft.gif");
   myAnimation.offY=18;
   lion.addAnimation("rightjump", "right.gif", "jumpright.gif");
   */

  slider=createSlider(0, 5, 0, 1);
  slidervalue=slider.value();
  slider.position(30, 30);

  fill(0);
  textSize(100);
  textAlign(CENTER);
  text("Lion Run", windowWidth/2, windowHeight/2-50);
  button=createButton('Game Start');
  button.position(width/2-100, height/2);
  button.size(200, 50);

  buttonPause=createButton('Pause');
  buttonPause.position(width-300, 30);
  buttonPause.size(100, 30);
  buttonPause.mouseClicked(function() {
    if (sound.isPlaying()) {
      sound.stop();
      noLoop();
    }
  }
  );


  buttonContinue=createButton('Continue');
  buttonContinue.position(width-150, 30);
  buttonContinue.size(100, 30);
  buttonContinue.mouseClicked(function() {
    if (!sound.isPlaying()) {
      sound.play();
      loop();
    }
  }
  );


  for (var i=0; i<objectNum; i++) {
    level_one_x[i]=random(0, width);
    level_one_y[i]=random(0, height-300);
  }

  for (var i=0; i<objectNum; i++) {
    level_two_x[i]=random(400, width);
    var identifier=random();
    if (identifier>0.5) {
      level_two_y[i]=height-40;
    } else {
      level_two_y[i]=height-200;
    }
  }


  button.mousePressed(gamestart);
  button.style('border', 'none');
  noLoop();
}



function gamestart() {
  sound.play();

  cnv.mouseClicked(function() {
    if (sound.isPlaying()) {
      sound.stop();
      noLoop();
    } else {
      loop();
      sound.play();
    }
  }
  );

  background(200, 200, 50);
  slider.value(++slidervalue);
  button.remove();

  fill(255);

  loop();

  /*
 lion.changeAnimation("rightjump");
   */
}

function draw() {
  if (slidervalue==1) {
    background(200, 200, 50);
    noStroke();
    fill(255);
    textSize(50);

    text("LEVEL 1", width/2, 70);
    level=amplitude.getLevel();    //gets the volume of the sound.
    size=map(level, 0, 1, 0.5, 5);


    for (var i=0; i<objectNum; i++) {
      ellipse(level_one_x[i], level_one_y[i], 20*size, 20*size);
    }

    for (var i=0; i<objectNum; i++) {
      level_one_x[i]+=random(-2, 2);
      level_one_y[i]+=random(4, 9);
      if (level_one_y[i]>height) {
        level_one_y[i]=0;
        level_one_x[i]=random(0, width);
      }
    }

    count++;
    if (count>1000) {
      ++slidervalue;
    }
  }

  if (slidervalue==2) {
    background(200, 200, 50);
    noStroke();
    fill(255);
    textSize(50);

    text("LEVEL 2", width/2, 70);
    for (var i=0; i<objectNum-5; i++) {
      rect(level_two_x[i], level_two_y[i]+random(-1, 1), 10, 40);
    }

    for (var i=0; i<objectNum-5; i++) {
      level_two_x[i]-=random(2, 5);
      if (level_two_x[i]<0) {
        level_two_x[i]=width;
      }
    }
    count++;
    if (count>2000) {
      ++slidervalue;
    }
  }

  if (slidervalue==3) {
    background(200, 200, 50);
    noStroke();
    fill(255);
    textSize(50);

    text("LEVEL 3", width/2, 70);

    count++;
    if (count>3000) {
      ++slidervalue;
    }
  }

  if (slidervalue==4) {
    background(200, 200, 50);
    noStroke();
    fill(255);
    textSize(50);

    text("LEVEL 4", width/2, 70);

    count++;
    if (count>4000) {
      ++slidervalue;
    }
  }


  if (slidervalue==5) {
    background(200, 200, 50);
    noStroke();
    fill(255);
    textSize(50);

    text("LEVEL 5", width/2, 70);

    count++;
    if (count>5000) {
      ++slidervalue;
    }
  }

  if (slidervalue==6) {
    background(200, 200, 50);
    noStroke();
    fill(255);
    textSize(50);

    text("Congradulations!! You Passed Every Stage!!", width/2, 70);

    slidervalue=0;
    buttonRestart=createButton('RESTART');
    buttonRestart.position(width/2-50, height/2);
    buttonRestart.size(100, 30);
    buttonRestart.mouseClicked(function() {
      slidervalue=1;
      count=0;
    }
    );
  }
}



function keyPressed() {


  if (keyCode==LEFT) {
    noLoop();
  }
  if (keyCode==RIGHT) {
    loop();
  }
}