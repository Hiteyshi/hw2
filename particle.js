class Praticle{
  constructor(x,y,r){
      var options={
       restitution: 0.4  
      }
      this.r=r;
      this.body = Bodies.circle(x,y,r,options);
  }  
}