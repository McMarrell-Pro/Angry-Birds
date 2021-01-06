class SlingShot{
    constructor(bodyA,pointB){
    var options = {bodyA:bodyA,
    pointB:pointB,
    stiffness:0.05,
    length:60}
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world,this.sling);

    }
    fly(){
    this.sling.bodyA = null;
    }
    display(){
    if(this.sling.bodyA){
    push();
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(5);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop();
    }
    }
}
