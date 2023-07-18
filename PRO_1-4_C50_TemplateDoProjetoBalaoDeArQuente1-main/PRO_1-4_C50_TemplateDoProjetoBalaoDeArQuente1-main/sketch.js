var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obs1,obs2,obs3,obs1Img,obs2Img,obs3Img,
obs4,obs5,obs4Img,obs5Img,gpbs5,gpbs1

gameState=1
function preload(){
  bgImg = loadImage("assets/bg.png");
  obs1Img=loadImage('assets/obsBottom1.png');
  obs2Img=loadImage('assets/obsBottom2.png');
  obs3Img=loadImage('assets/obsBottom3.png');
  obs4Img=loadImage('assets/obsTop1.png');
  obs5Img=loadImage('assets/obsTop2.png');
  balloonImg = loadAnimation("assets/balloon1.png","assets/balloon1.png","assets/balloon1.png")
}

function setup(){

//imagem de fundo
createCanvas(400,400);
  bg = createSprite(165,485,1,1);
  bg.addImage(bgImg);
  bg.scale = 1.3
  bg.velocityX =-2

  //criar o solo superior e inferior
  bottomGround = createSprite(200,390,800,20);
  bottomGround.visible = false;

  topGround = createSprite(200,10,800,20);
  topGround.visible = false;
        
  //criar o balão     
  balloon = createSprite(100,200,20,50);
  balloon.addAnimation("balloon",balloonImg);
  balloon.scale = 0.2;
  gpbs1=createGroup();
  gpbs5=createGroup();
}

function draw() {
  background("black");
  if (gameState===1){
  if(bg.x<0 ){
    bg.x=width/2;
  }
  
  
          //faça o balão de ar quente pular
          if(keyDown("space")) {
            balloon.velocityY= -5 ;
            
          }

          //adicione gravidade
           balloon.velocityY = balloon.velocityY+0.4;
          if(frameCount %350==0){
            gerarPredios();}
           if(frameCount%250===0){
            gerarPassaros()
           }
        
        if(balloon .isTouching(gpbs1)
        || balloon.isTouching(gpbs5)){
        gameState=2
        }
          }else{
            balloon.destroy()
            gpbs1.destroyEach()
            gpbs5.destroyEach()
          }
          drawSprites();
}
function gerarPredios(){
  obs1=createSprite(420,250)
  obs1.addImage(obs1Img)
  obs1.velocityX=-1;
  obs1.scale = 0.15
  gpbs1.add(obs1)
}
function gerarPassaros(){
  obs5 = createSprite(400,random(10,150));
  obs5.addImage(obs5Img);
  obs5.scale=0.1;
obs5.velocityX=-5;
gpbs5.add(obs5)
}