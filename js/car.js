class Car {
  constructor(x, y, scale) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = 'images/car.png';
    this.sizeX = this.image.width * scale; // reduce the car's size
    this.sizeY = this.image.height * scale; //  reduce the car's size
  }

  draw() {
    context.drawImage(this.image, this.x, this.y, this.sizeX, this.sizeY);
  }

  carWidthSize (){
     return this.image.width
  }

  carHeightSize (){
    return this.image.height
 }
}