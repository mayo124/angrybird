class steel{
    //helps to create objects of bird class   
   constructor(x,y,width,angle){
   //set the physics props
   var options={
       'density':3,                          
       'friction':1.0,
       'restitution':0.5
   }

   this.body=Bodies.rectangle(x,y,width,20,options);
   this.width=width;
   this.height=20;
   Matter.Body.setAngle(this.body,angle);
   World.add(world,this.body);
      
   }
   //display objects on the canvas
   display(){
//namespacing the reference
var pos=this.body.position;

var angle=this.body.angle;

push();
translate(pos.x,pos.y);
rotate(angle);
fill("silver");
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop(); 
   }
   
}