const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
const width = context.width;
const height = context.height;

class Road {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = 'images/road.png';
  }

  draw() {
    context.drawImage(this.image, this.x, this.y);
  }
}
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

const car = new Car(width - , height / 2, 0.3); // Last parameter  Scale =>  0.0 - 1.0
const road = new Road(0, 0);
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    context.fillStyle = 'orange';
    context.fillRect(50, 50, width, height);

    road.draw();
    car.draw();
    console.log(car.image.width);
    console.log(car.image.height);
  }
};
