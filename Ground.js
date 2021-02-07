class Ground {
    constructor(x,y,width,height){
        var options = {
            isStactic : true
}
this.body = Bodies.rectangle(x,y,width,options)
this.width = width
this.height = height
World.add(world,this.body)
}
display(){
    var pos = this.body.position
    rectmode(CENTER)
    fill("black");
    rect(pos.x,pos.y,this.width,this.height)

  }
}