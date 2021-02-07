class Rails{
    constructor(x,y,width,height){
        var options = {
            restitution:0.4,
            friction:1,
            
           
 }
this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width
this.height = height
World.add(world, this.body)
this.image = loadImage("Guardrail.jpg")
} 
display(){
    var angle = this.body.angle
    var pos = this.body.position

    push();
    translate(pos.x,pos.y)
    rotate(angle)
    imagemode(CENTER)
    image(this.image,pos.x,pos.y,this.width,this.height)
    pop();
 }
}