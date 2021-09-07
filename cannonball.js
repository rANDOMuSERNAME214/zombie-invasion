class CannonBall {
  constructor(x, y, width,height) {
    var options = {
      restitution: 0.8,
    };
    
    this.body = Bodies.rectangle(x, y,width,height, options);
    this.width=width
    this.height=height
    this.image = loadImage("./assets/cannonball.png");
    this.pos=[]

    World.add(world, this.body);
  }

  remove(index) {
    
    this.speed = 0.05;
    this.width = 50
    this.height = 50
    setTimeout(() => {
      Matter.World.remove(world, this.body);
      balls.splice(index, 1);
    },0);
  }


  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("yellow");
    imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
    pop();
  }
}

function drop(){
  for(var i=0;i<=0;i++){
  this.body.x=windowWidth/2+30
  this.body.y=100
  this.body.width=50
  this.body.height=50
  balls.push(ball)
  }
}