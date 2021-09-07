
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bols=0
var balls=[]
var ballpos=[]
var bosszombey
var zombie1,zombie2,zombie3
var zombilyf=5


function preload(){
  zombe=loadImage("./assets/zombie.png")
}

function setup() {
  createCanvas(windowWidth-1,windowHeight-5);

  engine = Engine.create();
  world = engine.world;

                                                                              
  bosszombey=createSprite(-10,windowHeight-100,100,100)
  bosszombey.addImage(zombe)
  bosszombey.scale=0.2
  

  bosszombey.x=-10

  if(bosszombey.x=windowWidth/4){
    zombie1=createSprite(-10,windowHeight-55,100,100)
    zombie1.addImage(zombe)
    zombie1.scale=0.1
    zombie1.velocityX=5
  }
  

  if(bosszombey.x=windowWidth/2){
    zombie2=createSprite(-10,windowHeight-55,100,100)
    zombie2.addImage(zombe)
    zombie2.scale=0.1
    zombie2.velocityX=4
  }

  if(bosszombey.x=windowWidth/4*3){
    zombie3=createSprite(-10,windowHeight-55,100,100)
    zombie3.addImage(zombe)
    zombie3.scale=0.1
    zombie3.velocityX=3
  }
 
  if(bosszombey.x=-10){
    bosszombey.velocityX=2
  }

  button=createButton("Button")
  button.position(windowWidth/2,50)
  button.size(60,50)
  button.mouseClicked(drop)

   button2=createButton("Button")
  button2.position(100,50)
  button2.size(60,50)
  button2.mouseClicked(drop2)

   button3=createButton("Button")
  button3.position(windowWidth-140,50)
  button3.size(60,50)
  button3.mouseClicked(drop3)

}


function draw() 
{
  background("blue");
  Engine.update(engine);
 
  
drawSprites()





  for(var ball of balls){
    ball.display()
  }
}


function drop(){
var ball=new CannonBall(this.width,this.height,this.x,this.y)
var pos=ball.position
var distance=dist(bosszombey.position.x,bosszombey.position.y,pos.x,pos.y);
console.log(pos)
console.log(distance)
if (distance<=50){
  bosszombey.velocityX=0;
  Matter.Body.setVelocity(ball.body,{x:-10,y:-10})
  console.log("collide")
  zombilyf===zombilyf-1

if(zombilyf=zombilyf-1){
  console.log("zombio")
}

  if(zombilyf===0){
    dedzombo()
    
  }
}
bols=bols+1

}

function drop2(){
  for(var i=0;i<=0;i++){
  var ball=new CannonBall(130,100,50,50)
  balls.push(ball)
  }
  var pos=ball.body.position
var distance=dist(bosszombey.position.x,bosszombey.position.y,pos.x,pos.y);
console.log(pos)
console.log(distance)
if (distance<=500){
  Matter.Body.setVelocity(ball.body,{x:-10,y:-10})
  console.log("collide")
}
  
  bols=bols+1
  }
  
function drop3(){
    for(var i=0;i<=0;i++){
    var ball=new CannonBall(windowWidth-110,100,50,50)
    balls.push(ball)
    }
    var pos=ball.body.position
var distance=dist(bosszombey.position.x,bosszombey.position.y,pos.x,pos.y);
console.log(pos)
console.log(distance)
if (distance<=500){
  bosszombey.velocityX=0;
  Matter.Body.setVelocity(ball.body,{x:-10,y:-10})
  console.log("collide")
}
    bols=bols+1
    }
    
  
  function dedzombo(){
     bosszombey.velocityX=0
     bosszombey.velocityY=5
    }
    
  


  