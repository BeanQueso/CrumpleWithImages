class Paper{
constructor(){
  var  options = {
isStatic:false,
restitution:0.3,
friction:1,
density:0.2,

    }
this.body = Bodies.circle(100, 50, 20, options);
this.radius = 20;
this.image = loadImage("Imgfolder/paper.png");
World.add(world, this.body);

}
display(){
  imageMode(CENTER)
    image(this.image, this.body.position.x, this.body.position.y, 50,50);

}

}