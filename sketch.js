var bg, bgimg;
var cat, cat1, cat2, cat3;
var mouse, mouse1, mouse2, mouse3;

function preload() {
    //load the images here
    bgimg = loadImage ("images/garden.png");

    cat1 = loadImage ("images/cat1.png");
    cat2 = loadAnimation ("images/cat2.png", "images/cat3.png");
    cat3 = loadImage ("images/cat4.png");

    mouse1 = loadImage ("images/mouse1.png");
    mouse2 = loadAnimation ("images/mouse2.png", "images/mouse3.png");
    mouse3 = loadImage ("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(300,400,1000,800);
    bg.addImage(bgimg);

    cat = createSprite(680,600);
    cat.addImage(cat1);
    cat.scale = 0.16;

    mouse = createSprite(170,600);
    mouse.addImage(mouse1);
    mouse.scale = 0.12;


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
         cat.velocityX=0;
          cat.addAnimation("tomLastImage", cat3);
           cat.x =300;
            cat.scale=0.16; 
            cat.changeAnimation("tomLastImage");
             mouse.addAnimation("jerryLastImage",mouse3);
              mouse.scale=0.12;
               mouse.changeAnimation("jerryLastImage");
             }


    drawSprites();
}


function keyPressed(){ 
    if(keyCode === LEFT_ARROW){
         cat.velocityX = -5;
          cat.addAnimation("tomRunning", cat2); 
          cat.changeAnimation("tomRunning");
 mouse.addAnimation("jerryTeasing", mouse2);
  mouse.changeAnimation("jerryTeasing"); 
}
 }
