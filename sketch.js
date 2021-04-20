var bg;
var ground, man, man1, farmer, farmer1;
var moneyGroup, enenemyGroup;
var coin;




function preload(){
 bg = loadImage("images/BG.png");
 man = loadAnimation("images/Run__000.png","images/Run__001.png","images/Run__002.png",
 "images/Run__003.png","images/Run__004.png","images/Run__005.png",
 "images/Run__006.png","images/Run__007.png","images/Run__008.png","images/Run__009.png");
 farmer = loadAnimation("images/Run (1).png","images/Run (2).png","images/Run (3).png",
 "images/Run (4).png","images/Run (5).png","images/Run (6).png","images/Run (7).png","images/Run (8).png");
 coin = loadImage("images/coin.png");
}

function setup() {
  createCanvas(2000,900);
  ground = createSprite(900,350,20,20);
  ground.addImage(bg);
  ground.velocityX = -3;
  ground.scale = 1.5;

 
  farmer1 = createSprite(50,750,20,20);
  farmer1.addAnimation("running",farmer);
  farmer1.scale = 0.4;
  //farmer1.velocityX=2;
  //farmer1.debug = true;
  //farmer1.setCollider("rectangle",0,0,100,100);

enemyGroup = new Group();
moneyGroup = new Group();
  //farmer1.velocityX = 1;
}

function draw() {
background("white");
if(ground.x<0){
  ground.x = ground.width/2;
}

if(keyDown(RIGHT_ARROW)){
  farmer1.x = farmer1.x + 10 ;
}

if(farmer1.isTouching(moneyGroup)){
  moneyGroup.destroyEach();
}

spawnEnemy();
money();

//camera.position.x = 10;//farmer1.x;
//camera.position.y = 10;//height/2;
drawSprites();
}

function spawnEnemy(){
  if(frameCount%300 === 0){
    man1 = createSprite(1600,750,20,20);
    man1.addAnimation("running",man);
    man1.scale = 0.3;
    man1.velocityX = -3;
    enemyGroup.add(man1);
  }
 

}

function money(){
  if(frameCount%200 === 0){
    var money = createSprite(1600,600,20,20);
    money.addImage(coin);
    money.velocityX = -2;
    money.scale = 0.05;
    money.debug = true;
    money.setCollider("rectangle",0,0,money.width, money.height);
    moneyGroup.add(money);
  }
}