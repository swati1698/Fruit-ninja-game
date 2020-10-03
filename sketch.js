var fruit1Img, fruit2Img, fruit3Img, fruit4Img, gameoverImg, swordImg, alien1Img, alien2Img;

var PLAY=1, END=0, gamestate=PLAY;

var sword, alien, fruit,fruitleft;

var aliengroup, fruitgroup,fruitgroupleft;

var score=0;

var rand1, rand2;

function preload() {
  
  fruit1Img=loadImage("fruit1.png");
  fruit2Img=loadImage("fruit2.png");
  fruit3Img=loadImage("fruit3.png");
  fruit4Img=loadImage("fruit4.png");
  
  gameoverImg=loadImage("gameover.png");
  
  swordImg=loadImage("sword.png");
  
  alien1Img=loadImage("alien1.png");
  alien2Img=loadImage("alien2.png");
  
  knifesound=loadSound("knifeSwoosh.mp3");
  gameoversound=loadSound("gameover.mp3");
}


function setup() {
  
  createCanvas(400,400);
  
  sword=createSprite(200,300,30,60);
  sword.addImage(swordImg);
  sword.scale=0.7;
  sword.debug=false;
  
  fruitgroup= new Group();
  fruitgroupleft= new Group();
  aliengroup= new Group();
  
}

function draw(){
  background("lightgreen");
  
  textSize(30);
  fill("brown");
  stroke("black");
  text("FRUIT NINJA",15,40);
  
  fill("yellow");
  stroke("blue");
  text("FRUIT NINJA",20,40);
  
  textSize(20);
  fill("black");
  text("score: " + score, 300,50);
  
  
  if(gamestate===PLAY) {
    
    sword.x=World.mouseX;
    sword.y=World.mouseY;
    
    
    if(fruitgroup.isTouching(sword) || fruitgroupleft.isTouching(sword))
       {
       fruitgroup.destroyEach();
          fruitgroupleft.destroyEach();
         knifesound.play();
        score=score+2;
       }
    
    if(score===4)
      {
       fruit.velocityX=-8;
        fruitleft.velocityX=8;
       }
    
    if(score===10)
      {
      alien.velocityX=-10;
      
      }
    spawnfruit();
    spawnfruitleft();
    spawnalien();
    
    if(aliengroup.isTouching(sword))
    {
     gamestate=END;
     fruitgroup.destroyEach();
       fruitgroupleft.destroyEach();
      aliengroup.destroyEach();
      gameoversound.play();
    }
  }
  
  else if(gamestate===END) {
    sword.addImage(gameoverImg);
    sword.x=200;
    sword.y=200;
    sword.scale=1.3;
  }
  
  drawSprites();
}


function spawnfruit() {
  if(frameCount%60===0)
  {
   
  fruit=createSprite(400,150,20,50);
  fruit.velocityX=-4;
  fruit.scale=0.2;
  fruit.y=Math.round(random(50,290));
  rand1=Math.round(random(1,4));
  fruit.setLifetime=20;
  fruit.debug=false;

  switch(rand1)
  {
    case 1: fruit.addImage(fruit1Img);
            break;
    case 2:fruit.addImage(fruit2Img);
            break;
    case 3:fruit.addImage(fruit3Img);
            break;
    case 4:fruit.addImage(fruit4Img);
            break;
    default:break;
  }
  fruitgroup.add(fruit);
  }
}

function spawnalien() {
  
   if(frameCount%100===0)
  {
    
  alien=createSprite(400,200,20,50);
  alien.velocityX=-5;
  alien.y=Math.round(random(50,200));
  alien.setLifetime=20;
  rand2=Math.round(random(1,2));
    alien.debug=false;
  
  switch(rand2) 
  {
    case 1:alien.addImage(alien1Img);
            break;
    case 2:alien.addImage(alien2Img);
            break;
    default:break;
  }
  aliengroup.add(alien);
  }
}


function spawnfruitleft() {
  if(frameCount%70===0)
  {
   
  fruitleft=createSprite(0,150,20,50);
  fruitleft.velocityX=4;
  fruitleft.scale=0.2;
  fruitleft.y=Math.round(random(50,290));
  rand1=Math.round(random(1,4));
  fruitleft.setLifetime=20;
    fruitleft.debug=false;
  switch(rand1)
  {
    case 1: fruitleft.addImage(fruit1Img);
            break;
    case 2:fruitleft.addImage(fruit2Img);
            break;
    case 3:fruitleft.addImage(fruit3Img);
            break;
    case 4:fruitleft.addImage(fruit4Img);
            break;
    default:break;
  }
  fruitgroupleft.add(fruitleft);
  }
}
