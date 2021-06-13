class Bird extends Amniotes{
     
   constructor(x,y){
   
  super(x,y,50,50);
   this.image=loadImage("robin.png")
      
   }
   
   display(){
super.display();
this.body.position.x=mouseX;
this.body.position.y=mouseY;

   }

   }