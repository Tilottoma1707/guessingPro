class Box{
  constructor(x,y,width,height){
     var options = {
         isStatic:true,
         restitution:0.01
          }
  this.body = Bodies.rectangle(x,y,width,height);
 // this.Visiblity = 255;
 this.width = width;
 this.height = height;
 this.velocityY = 100;
  World.add(world,this.body); 
  
  //this.image = loadImage("../butterfly image.jpg")
  }
  display(){
   //console.log(this.body.speed);
   //if(this.body.speed > 3){
    
   
    //} else{
     //World.remove(world, this.body);
     push();
     var pos =this.body.position;
     //this.Visiblity = this.Visiblity -200;
     //tint(255,this.Visiblity);
     rect(pos.x,pos.y,this.width,this.height);
   // imageMode(CENTER)
    //image(this.image, this.body.position.x,this.body.position.y, 30,30);


     pop();
     fill(223,1,119)
  }
  }
  
  
 /* score(){
   if (this.Visiblity < 0 && this.Visiblity > -1005){
     score++;
   }
  }*/
//}

  
  
