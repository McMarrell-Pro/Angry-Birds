class SlingShot{
    constructor(bodyA,pointB){
    var options = {bodyA:bodyA,
    pointB:pointB,
    stiffness:0.05,
    length:60}
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    this.sling1 = loadImage("sprites/sling1.png");
    this.sling2 = loadImage("sprites/sling2.png");
    this.sling3 = loadImage("sprites/sling3.png");
    World.add(world,this.sling);

    }
    fly(){
    this.sling.bodyA = null;
    }
    display(){
    image(this.sling1,100,502);
    image(this.sling2,72,500);
    if(this.sling.bodyA){
    push();
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    stroke(85,40,15);
    if(pointA.x < 130){
    strokeWeight(5);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    line(pointA.x,pointA.y,pointB.x+40,pointB.y);
    image(this.sling3,pointA.x-25,pointA.y-10,15,30);
    }
    else{
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    line(pointA.x,pointA.y,pointB.x+40,pointB.y);
    image(this.sling3,pointA.x+23,pointA.y-10,15,30);
    }
    pop();
    }
    }
}
