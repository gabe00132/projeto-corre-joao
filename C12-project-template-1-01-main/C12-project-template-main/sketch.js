var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg=loadImage("ground2.png")

  //loadAnimation (carregarAnimação) de corrida para o menino
 boyImg=loadAnimation("runner-1.png", "runner-2.png")
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 pista1= createSprite(400,200,1,2)
//adicione uma imagem para a pista
pista1.addImage(pathImg)
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
pista.velocityY=-4

//crie um sprite de menino
boy=createSprite(200,200,20,20)
//adicione uma animação de corrida para ele
boy.addAnimation("runner", boyImg)
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,410,100,800);
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
invisiblePath.visible =false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  mouseX= boyX

  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
