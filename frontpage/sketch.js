var anzahllinks; // Anzahl der Spalten, errechnet sich aus "folder"-Länge
var Höhe; // Höhe ohne "HE-HEAD"
var Breite;
var HE_Height; // Höhe "HE-HEAD"
var HE_Logo;
var font;

var folder=['association','events','visualizer','socialmedia''HELPCREATECHANGE']; //Namen der Unterpunkte
var Schrift=['A S S O Z I A T I O N','E V E N T S','V I S U A L I Z E R','S O C I A L M E D I A','HELPCREATECHANGE'];
var Schriftextra=['ASS OZ IAT ION','EV EN TS','VIS UAL IZER','SOC IAL MED IA','HELPCREATECHANGE'];
var Schrift_Protrait=['ASSOZIATION','EVENTS','VISUALIZER','SOCIALMEDIA','HELPCREATECHANGE'];






/*function preload(){
  font = loadFont('frontpage/HelveticaNeue-Light.otf');}*/

function setup (){
var cnv=createCanvas(windowWidth, windowHeight); cnv.id('cnv');
font = loadFont('frontpage/HelveticaNeue-Light.otf');

HE_Height= 0.07*windowHeight;
Höhe= windowHeight - HE_Height;
Breite= windowWidth;

HE_Logo=loadImage('frontpage/HE.png');

anzahllinks=folder.length;

//DIV-Links,----nicht optimal gelöst, eig. for-loop; Links mechanisch ändern-------------------------------------------------
if(width/height>=1.5){
  var div0=createDiv();
  div0.class('div_style_landscape');
  div0.position((0*Breite/anzahllinks),HE_Height);
  div0.mousePressed(Link0);

  var div1=createDiv();
  div1.class('div_style_landscape');
  div1.position((1*Breite/anzahllinks),HE_Height);
  div1.mousePressed(Link1);

  var div2=createDiv();
  div2.class('div_style_landscape');
  div2.position((2*Breite/anzahllinks),HE_Height);
  div2.mousePressed(Link2);

  var div3=createDiv();
  div3.class('div_style_landscape');
  div3.position((3*Breite/anzahllinks),HE_Height);
  div3.mousePressed(Link3);

  /*var div4=createDiv();
  div4.class('div_style_landscape');
  div4.position((4*Breite/anzahllinks),HE_Height);
  div4.mousePressed(Link4);*/

  
}
if(width/height<1.5){
  var div0=createDiv();
  div0.class('div_style_portrait');
  div0.position(0,(0*Höhe/anzahllinks)+HE_Height);
  div0.mousePressed(Link0);

  var div1=createDiv();
  div1.class('div_style_portrait');
  div1.position(0,(1*Höhe/anzahllinks)+HE_Height);
  div1.mousePressed(Link1);

  var div2=createDiv();
  div2.class('div_style_portrait');
  div2.position(0,(2*Höhe/anzahllinks)+HE_Height);
  div2.mousePressed(Link2);

  var div3=createDiv();
  div3.class('div_style_portrait');
  div3.position(0,(3*Höhe/anzahllinks)+HE_Height);
  div3.mousePressed(Link3);

  /*var div4=createDiv();
  div4.class('div_style_portrait');
  div4.position(0,(4*Höhe/anzahllinks)+HE_Height);
  div4.mousePressed(Link4);*/
}



//Links mit A ----------------------------------------------------------------------------------------------------------------
for (var n=0;n<anzahllinks;n++){
  if(width/height>=1.5){  //Landscape
    var a1 = createA('https://www.healthyego.studio/'+folder[n],Schriftextra[n]);
    a1.class('icon_landscape');
    a1.center();

    //a1.position((n*Breite/anzahllinks), (Höhe/2)+HE_Height);

    a1.position((n*Breite/anzahllinks), HE_Height);
  }
  if(width/height<1.5){  //Portrait
    var a1 = createA('https://www.healthyego.studio/'+folder[n],Schrift_Protrait[n]);
     a1.class('icon_portrait');
     a1.position(0, ((n*Höhe/anzahllinks)+HE_Height));
  }
}



//Canvas in html eingliedern--------------------------------------------------------------------------------------------------
var canvas= createDiv();
canvas.id('canvas');
canvas.child('cnv');
}

function draw(){
 //background(255);
 clear();

 //HE_Logo---------------------------------------------------------------------------------------------------------------
 var scale=0.35
 image(HE_Logo,scale*HE_Height,scale*HE_Height,787*((1-2*scale)*HE_Height/100),(1-2*scale)*HE_Height);

 //Linien----------------------------------------------------------------------------------------------------------------
 stroke(0);
 strokeWeight(0.5);
 line(0,HE_Height,width,HE_Height);

 if (width/height>=1.5){
   for (var i=0; i<= anzahllinks; i++){
     line(i*Breite/anzahllinks,HE_Height,i*Breite/anzahllinks,windowHeight);
   }
 }
 if(width/height<1.5){
   for (var i=0; i<= anzahllinks; i++){
     line(0,(i*Höhe/anzahllinks)+HE_Height,Breite,(i*Höhe/anzahllinks)+HE_Height);
   }
 }

 //text------------------------------------------------------------------------------------------------------------------

 textSize(12);
 textFont(font);
 textAlign(CENTER, CENTER);
 for (var n=0;n<=anzahllinks;n++){
   if(width/height>=1.5){
     text( Schrift[n-1], (n*Breite/anzahllinks)-(Breite/anzahllinks)/2, (Höhe/2)+HE_Height);
   }
   if(width/height<1.5){
      text( Schrift[n-1], (width/2), ((n*Höhe/anzahllinks)+HE_Height)-(Höhe/anzahllinks/2));
   }
 }
}








//Hilfsfunktionen----------------------------------------------------------------------------------------------------------
function Link0(){
  window.open('https://www.healthyego.studio/'+folder[0],'_self');
}
function Link1(){
  window.open('https://www.healthyego.studio/'+folder[1],'_self');
}
function Link2(){
  window.open('https://www.healthyego.studio/'+folder[2],'_self');
}
function Link3(){
  window.open('https://www.healthyego.studio/'+folder[3],'_self');
}
function Link4(){
  window.open('https://www.healthyego.studio/'+folder[4],'_self');
}
/*function Link5(){
  window.open('https://www.healthyego.studio/'+folder[5],'_self');
}*/
