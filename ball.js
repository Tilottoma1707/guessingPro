class ball{
    constructor(x,y){
      
    var options = {
           isStatic:true
            }
    this.body = Bodies.circle(x,y,20,20);
    //this.image = loadImage("../butterfly image.jpg")
    this.x = mouseX;
    this.y = mouseY;
    World.add(world,this.body); 
    }
    display(){
      console.log("in display")
      var pos = this.body.position;
       
    ellipseMode(CENTER);
    fill("violet")
    //fillStroe("orange")
    ellipse(pos.x,pos.y,20,20);
   // imageMode(CENTER)
    //image(this.image, this.body.position.x,this.body.position.y, 30,30);

    
    
    }
       
    } 