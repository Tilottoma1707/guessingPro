const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
  bgImg= loadImage("eiffel.jpg")
}


var engine, world;
function setup(){
    createCanvas(400,425);
    

    engine = Engine.create();
   world = engine.world;
   ground100 = new Ground(600,height,1200,20);
   ground200 = new Ground(400,height,20,1200);
   ground300 = new Ground(2,height,20,1200);
   ball1 = new ball(150,15,20,20);
   box10 = new Box(25,25,40,40);
   box2 = new Box(75,25,45,30);
   box3 = new Box(125,25,45,45);
   box4 = new Box(175,25,40,30);
   box5 = new Box(225,25,45,20);
   box6 = new Box(275,25,43,40);
   box7 = new Box(325,25,40,36);
   box8 = new Box(375,25,55,25);
   box11 = new Box(25,75,44,10);
   box12 = new Box(75,75,50,43);
   box13 = new Box(125,75,40,20);
   box14 = new Box(175,75,55,55);
   box15 = new Box(225,75,50,42);
   box16 = new Box(275,75,42,33);
   box17 = new Box(325,75,57,27);
   box18 = new Box(375,75,42,42);
   box21 = new Box(25,125,56,56);
   box22 = new Box(75,125,40,40);
   box23 = new Box(125,125,60,50);
   box24 = new Box(175,125,54,54);
   box25 = new Box(225,125,66,36);
   box26 = new Box(275,125,54,48);
   box27 = new Box(325,125,55,40);
   box28 = new Box(375,125,55,50);
   box31 = new Box(25,175,40,30);
   box32 = new Box(75,175,59,30);
   box33 = new Box(125,175,49,42);
   box34 = new Box(175,175,40,40);
   box35 = new Box(225,175,44,41);
   box36 = new Box(275,175,41,40);
   box37 = new Box(325,175,59,61);
   box38 = new Box(375,175,43,44);
   box41 = new Box(25,225,62,41);
   box42 = new Box(75,225,40,45);
   box43 = new Box(125,225,39,40);
   box44 = new Box(175,225,43,50);
   box45 = new Box(225,225,47,59);
   box46 = new Box(275,225,42,43);
   box47 = new Box(325,225,40,40);
   box48 = new Box(375,225,55,55);
   box51 = new Box(25,275,47,66);
   box52 = new Box(75,275,66,42);
   box53 = new Box(125,275,55,40);
   box54 = new Box(175,275,54,40);
   box55 = new Box(225,275,63,49);
   box56 = new Box(275,275,42,32);
   box57 = new Box(325,275,44,52);
   box58 = new Box(375,275,60,60);
   box61 = new Box(25,325,55,43);
   box62 = new Box(75,325,60,60);
   box63 = new Box(125,325,57,57);
   box64 = new Box(175,325,40,40);
   box65 = new Box(225,325,55,55);
   box66 = new Box(275,325,43,42);
   box67 = new Box(325,325,40,39);
   box68 = new Box(375,325,50,44);
   box71 = new Box(200,25,45,40);
   box72 = new Box(250,25,45,40);
   box73 = new Box(200,20,43,34);
   box74 = new Box(230,20,30,33);
   box75 = new Box(200,20,30,44);




}



function draw(){
    background(bgImg);
    Engine.update(engine);
    ground100.display();
    ground200.display();
    ground300.display();
    ball1.display();
     box10.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box11.display();
     box12.display();
     box13.display();
     box14.display();
     box15.display();
     box16.display();
     box17.display();
     box18.display();
     box21.display();
     box22.display();
     box23.display();
     box24.display();
     box25.display();
     box26.display();
     box27.display();
     box28.display();
     box31.display();
     box32.display();
     box33.display();
     box34.display();
     box35.display();
     box36.display();
     box37.display();
     box38.display();
     box41.display();
     box42.display();
     box43.display();
     box44.display();
     box45.display();
     box46.display();
     box47.display();
     box48.display();
     box51.display();
     box52.display();
     box53.display();
     box54.display();
     box55.display();
     box56.display();
     box57.display();
     box58.display();
     box61.display();
     box62.display();
     box63.display();
     box64.display();
     box65.display();
     box66.display();
     box67.display();
     box68.display();
     box71.display();
     box72.display();
     box73.display();
     box74.display();
     box75.display();

     noStroke();
    textSize(17)
     fill("white")
     text("GUESS PICTURE BY MOVING THE BLOCKS",7,20)

}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY})
  }
  

