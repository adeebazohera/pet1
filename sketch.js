//Create variables here
var database, game, form, food1,foodinfo;

var dogImage,happyDogImage;

var dog;

function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png");

  happyDogImage = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(800, 700);

  database = firebase.database();

  dog = createSprite(400,500);
  dog.addImage(dogImage);
  dog.scale = 0.3;
  game = new Game();
  game.play();
}


function draw() {  
  background(46, 139, 87);

  game.start();
  drawSprites();
  //add styles here

}



