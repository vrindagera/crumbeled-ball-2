class Paper {
    constructor(x, y, r) {
      var options = {
          'restitution':0,
          'friction':0,
          'density':1.2
      }
      this.x = x
      this.y = y
      this.r = 39.5
      this.body = Bodies.circle(this.x, this.y, this.r/2, options);
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    } 
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      fill("pink");
      image(this.image,0, 0, this.r, this.r);
      pop();
    }
  }
  