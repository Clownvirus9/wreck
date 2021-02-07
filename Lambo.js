class Lamborghini{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
 }
this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width
this.height = height
this.image = loadImage("lambo.png")
World.add(world, this.body)
} 
display(){
    var angle = this.body.angle
    var pos = this.body.position
    push();
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,this.width,this.height)

 }
}