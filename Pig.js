class Pig extends Base{
  constructor(x, y) {
  super(x,y,50,50);
  this.image = loadImage("sprites/enemy.png");
  this.Visibility = 255;
  
  };
  display(){
    if(this.body.speed < 3){
    super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility - 10;
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop();
    }
  }
  Scoring(){
    var score = 0;
    if(this.body.speed > 3){
score = score + 10;
    }
    textSize(20);
    text("Score " + score, 1000,100);
  }
}