 class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }
  shoot(){
  var newangle = cannon.angle-28;
  newangle=newangle*(3.14/180);
  var Velocity = p5.Vector.fromAngle(newangle);
  Velocity.mult(0.5);
  Matter.Body.setStatic(this.body,false);
  Matter.Body.setVelocity(this.body,{x:Velocity.x *(180/3.14),y:Velocity.y *(180/3.14)})
  
  }

  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
 }
