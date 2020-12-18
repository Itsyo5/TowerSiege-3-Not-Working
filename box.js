class box {
  constructor(x,y,width,height) {
    var options = {
        stiffness:0.8,
        friction:5.0,
        restitution:0.4,
    } 
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.Visibility = 225;
    this.height = height;
    World.add(world, this.body);
    this.width = 45
    this.length = 55
    stroke("white")
    strokeWeight(4)
  }
  display(){
    if(this.body.speed<10){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0, this.width, this.height);
    pop();
  }
  else{
    World.remove(world, this.body);
    push();
    this.Visibility = this.Visibility - 5;
    tint(225,this.Visibility);
    pop();
  }
}

score(){
  if(this.Visibility < 0 && this.Visibility> -105){
    score++;
  }
 }  
}
