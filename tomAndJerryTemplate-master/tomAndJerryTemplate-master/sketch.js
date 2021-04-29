var fr,catImg,catC;
var mr,mouseImg,mouseM;
var bg, bgm;

function preload() {
    catImg = loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png");
    catC = loadImage("images/cat4.png");
    
    mouseImg = loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png");
    mouseM = loadImage("images/mouse4.png");

    bgm = loadImage("images/garden.png");
}

function setup(){
 createCanvas(1000,800);
 bg = createSprite(500,400);
 bg.addImage("bg",bgm);

 fr = createSprite(850,600,100,100);
 fr.addAnimation("cat",catImg);
 fr.scale = .25;
 fr.debug = true;
 //fr.shapeColor = "blue";

 mr = createSprite(150,600,100,100);
 mr.addAnimation("mouse",mouseImg);
 mr.scale = .25;
 mr.debug = true;
 //mr.shapeColor = "blue";

}

function draw() {
    background("black");

    if(mr.x - fr.x < mr.width / 2 + fr.width / 2 && fr.x - mr.x < mr.width / 2 + fr.width / 2 && mr.y - fr.y < mr.height / 2 + fr.height / 2 && fr.y - mr.y < mr.height / 2 + fr.height / 2){
        mr.addImage("mouseM",mouseM);
        fr.addImage("catC",catC);
        mr.changeAnimation("mouseM",mouseM);
        fr.changeImage("catC",catC);
        //mr.shapeColor = "red";
        //fr.shapeColor = "red";
        }
        else{
            mr.changeAnimation("mouse",mouseImg);
            fr.changeAnimation("cat",catImg);
            //mr.shapeColor = "blue";
            //fr.shapeColor = "blue";
        }

keyPressed();

    drawSprites();
}


function keyPressed(){

if(keyDown("left")){
 fr.x = fr.x - 5;
}

if(keyDown("right")){
    fr.x = fr.x + 5;
}

}
