class Road{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src ='images/road.png'
  }

  draw (){
    context.drawImage(this.image.src, this.x, this.y)
  }
}