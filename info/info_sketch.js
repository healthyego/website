var konkret;
var info;
var cnv;
var w;

function LINK(){
window.open("https://www.instagram.com/haelthyego/");
}

function setup(){
cnv=createCanvas(windowWidth,windowHeight),
cnv.mousePressed(LINK);
background(0);
konkret= loadImage('info/konkret.png');
info= loadImage('info/info.png');
 
w=height/1.77
 
image(konkret,0,0,w,height);

 
 imageMode(Center);
 push();
 image(info,windowWidth/2-w/4,windowHeight/2,w,height)
 pop();

}

