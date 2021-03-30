var bgImg,boyImg,boy_walk,triviaImg,chemImg,bioImg,phyImg,mathImg;
var boy,bg,triviaChem,triviaBio,triviaPhy,triviaMath1,triviaChem1,triviaBio1,triviaPhy1,triviaMath1;
var START = 0;
var STORY = 1;
var LEVEL1 = 2;
var LEVEL2 = 3
var LEVEL3 = 4;
var LEVEL4 = 5
var gameState = START;
var door;
var tittle,s;
var play,play2;
var collectCount = 0;
var Tex,Tex2; 
var ballons,ballon,ballonB,ballonG;
var atom,quiz1;
var BALOONSGroup,BALOONGroup,BALOONBGroup,BALOONGGroup;
var next,next1,next2,next3;
var applause,sound;
var correctAnswer = 0
var entrance,congrat,door2;
var door3;
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20,cardboard21,cardboard22
function preload(){
  boyImg = loadAnimation("images/boy.png");
  boy_walk = loadAnimation("images/boy1.png","images/boy2.png","images/boy3.png");
  triviaImg = loadImage("images/tri.png");
  chemImg = loadImage("images/chem.png");
  mathImg = loadImage("images/mat.png");
  bioImg = loadImage("images/bio.png");
  phyImg = loadImage("images/phy.png");
  bgImg = loadImage("images/a.jpg");
  s = loadImage("images/s.png");
  playImg = loadImage("images/play.png");
  art = loadImage("images/heart.png");
  plant = loadImage("images/img.jpg");
  math = loadImage("images/math.jpg");
  tom = loadImage("images/image.png")
  teddy = loadImage("images/teddy.png")
  cricket = loadImage("images/cricke.png")
  doorImg = loadImage("images/door.png")
  congrats = loadImage("images/images.jfif")
  applause = loadSound("images/applause8.mp3")
  balonImg  = loadImage("images/baloon.png");
  blueB = loadImage("images/blueB.png");
  greenB = loadImage("images/greenB.png");
  goldB = loadImage("images/goldB.png")
  sound = loadSound("images/applause.wav")
  ohno = loadSound("images/oh no.mp3")
  dooImg = loadImage("images/doo.png")
  congrat = loadImage("images/congr.jfif")
  maze = loadImage("images/untitled.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  

  bg = createSprite(width/2,height/2,20,20);
  bg.scale = 2.5;
  bg.addImage(bgImg);

  tittle = createSprite(800,200,20,20);
  tittle.scale =1.5
  tittle.addImage(s);

 

  play = createSprite(800,height-100);
  play.addImage(playImg)
  


  boy = createSprite(50,height - 100) ;
  boy.addAnimation("static",boyImg);
  boy.addAnimation("walk",boy_walk);


  door = createSprite(5100,470)
  door.addImage(doorImg);
  door.visible = false;
  door.scale = 0.3


  door2 = createSprite(5100,470)
  door2.addImage(doorImg);
  door2.visible = false;
  door2.scale = 0.3

  
  door3 = createSprite(5100,470)
  door3.addImage(doorImg);
 
  door3.scale = 0.3;

 entrance = createSprite(5100,470)
entrance.addImage(dooImg);

entrance.scale = 0.3

  triviaChem = createSprite(1000,90);
  triviaChem.addImage(chemImg)
  triviaChem.scale = 0.2
  triviaBio = createSprite(1300,450);
  triviaBio.addImage(bioImg)
  triviaBio.scale = 0.1
  triviaPhy = createSprite(500,700);
  triviaPhy.addImage(phyImg)
  triviaPhy.scale = 0.1
  triviaMath = createSprite(800,500);
  triviaMath.addImage(mathImg)
  triviaMath.scale = 0.1

  triviaChem1 = createSprite(1000,90);
  triviaChem1.addImage(chemImg)
  triviaChem1.scale = 0.2
  triviaBio1 = createSprite(1300,450);
  triviaBio1.addImage(bioImg)
  triviaBio1.scale = 0.1
  triviaPhy1 = createSprite(500,700);
  triviaPhy1.addImage(phyImg)
  triviaPhy1.scale = 0.1
  triviaMath1 = createSprite(800,500);
  triviaMath1.addImage(mathImg)
  triviaMath1.scale = 0.1

     triviaPhy.visible = false;
     triviaBio.visible = false;
     triviaMath.visible = false;
     triviaChem.visible = false;
     
     triviaPhy1.visible = false;
     triviaBio1.visible = false;
     triviaMath1.visible = false;
     triviaChem1.visible = false;;

     Tex = createSprite(0,100);
     Tex.addImage(congrats);
  
     Tex.visible = false;

     Tex2 = createSprite(10,100);
     Tex2.addImage(congrat);
  
     Tex2.visible = false;


   cardboard2=createSprite(1150,350,20,200);
   cardboard2.shapeColor=('brown');
  cardboard2.visible = false;


   cardboard1 = createSprite(140,570,20,200);
   cardboard1.shapeColor=('brown');
   cardboard1.visible = false;

    cardboard3=createSprite(300,400,20,200);
    cardboard3.shapeColor=('brown');
    cardboard3.visible = false;

   cardboard4=createSprite(1380,500,20,200);
    cardboard4.shapeColor=('brown');
    cardboard4.visible = false;


     cardboard5=createSprite(500,500,200,20);
       cardboard5.shapeColor=('brown');
       cardboard5.visible = false;

    cardboard6=createSprite(649,653,200,20);
     cardboard6.shapeColor=('brown');
     cardboard6.visible = false;

   cardboard7=createSprite(1220,590,20,200);
     cardboard7.shapeColor=('brown');
  cardboard7.visible = false;

  cardboard8=createSprite(1090,803,20,200);
      cardboard8.shapeColor=('brown');
      cardboard8.visible = false;

    cardboard9=createSprite(986,938,20,300);
       cardboard9.shapeColor=('brown');
    cardboard9.visible = false

   cardboard10=createSprite(1000,504,300,20);
       cardboard10.shapeColor=('brown');
       cardboard10.visible = false;

 cardboard11=createSprite(850,100,20,200);
       cardboard11.shapeColor=('brown');
       cardboard11.visible = false;

   cardboard12=createSprite(950,304,200,20);
       cardboard12.shapeColor=('brown');
       cardboard12.visible = false;

    cardboard13 = createSprite(750,706,20,200);
      cardboard13.shapeColor = "brown"
      cardboard13.visible = false;

   cardboard14=createSprite(650,170,20,200);
       cardboard14.shapeColor = "brown"
      cardboard14.visible   = false;

    cardboard15=createSprite(550,400,20,200);
       cardboard15.shapeColor=('brown');
       cardboard15.visible = false

    cardboard16=createSprite(453,116,20,200);
        cardboard16.shapeColor=('brown');
        cardboard16.visible = false;

    cardboard17=createSprite(350,214,200,20);
       cardboard17.shapeColor=('brown');
   cardboard17.visible = false;

    cardboard18=createSprite(255,96,200,20);
        cardboard18.shapeColor=('brown');
        cardboard18.visible = false;
       
   cardboard19=createSprite(152,110,20,200);
        cardboard19.shapeColor=('brown');
       cardboard19.visible = false;


     cardboard20=createSprite(29,282,20,200);
         cardboard20.shapeColor=('brown');
         cardboard20.visible =  false;

      cardboard21=createSprite(900,500,20,200);
       cardboard21.shapeColor=('brown');
       cardboard21.visible = false
     
      cardboard22=createSprite(310,312,200,20);
         cardboard22.shapeColor=('brown');
         cardboard22.visible = false;
   
  


   
   
 BALOONSGroup = new Group();
 BALOONGroup = new Group();
 BALOONBGroup =   new Group();
BALOONGGroup = new Group()

next = createButton("NEXT");
next1 = createButton("NEXT");
next2 = createButton("NEXT");
next3 = createButton("NEXT");

atom = createButton("ATOM");
bacteria = createButton("BACTERIA")
higgsBosson = createButton("HIGGS BOSSON")
quiz1 = createElement("h2");

fifty = createButton("FIFTY");
infinite = createButton("INFINITE")
seven = createButton("SEVEN")
quiz2 = createElement("h2");


eightyThousand= createButton("80,000");
ALLPLANTS = createButton("ALL plants")
seventy = createButton("SEVENTY")
quiz3 = createElement("h2");

heart= createButton("HEART");
LUNGS = createButton("LUNGS")
KIDNEY = createButton("KIDNEY")
quiz4 = createElement("h2");


next4 = createButton("NEXT")
next5 = createButton("NEXT")

next6 = createButton("NEXT")

next7 = createButton("NEXT")





 
  
}

function draw() {
  background(0);  

   drawSprites();
          
   if(gameState === START) {
    if(mousePressedOver(play)){
      tittle.visible = false;
      bg.visible = false;
      play.visible = false;
      gameState = STORY
    }
  
  
   }


   if(gameState === STORY){
     textSize(30);
     fill("red")
     text("STORY OF THE GAME",600,100);

     fill("cyan")
     text("George a boy of 12 always hates to study he didn't realise its value .",100,400)
     text("After getting  a lot of advice from his parents and teachers he fins its value. ",100,450);
     text("But he don't know were to start with and he was unable to realise the theories ,he wanted to learn practically.",100,500)
     text("Help george to study practically by this game.",110,550)
     fill("green")
     text("press on george to help him",600,600)
  
     
    if(mousePressedOver(boy)){
      gameState = LEVEL1
    }
     
   }

   if(gameState === LEVEL1){
     bg.visible = true;
     play.visible =false;
     tittle.visible = true;
     tittle.scale = 1;

     if(keyIsDown(RIGHT_ARROW)){
       boy.changeAnimation("walk",boy_walk);
       boy.x = boy.x+10;
      
     }
     
     else if(keyIsDown(LEFT_ARROW)){
      boy.changeAnimation("walk",boy_walk);
      boy.x = boy.x-10;
    
    }
    
    else if(keyIsDown(UP_ARROW)){
      boy.changeAnimation("walk",boy_walk);
      boy.y = boy.y-10;
      
    }
    
    else if(keyIsDown(DOWN_ARROW)){
      boy.changeAnimation("walk",boy_walk);
      boy.y = boy.y+10;
     
    }
     else{
       boy.changeAnimation("static",boyImg)
     }

     triviaPhy.visible = true;
     triviaBio.visible = true;
     triviaMath.visible = true;
     triviaChem.visible = true;


      

       textSize(20);
       fill("red")
       text(" GOAL : Collect All The Four Objects Related To  ",100,100)
       text(" Physics, Maths, Biology, Chemistry",200,150)


       if(boy.isTouching(triviaChem)){
         fill("darkBlue")
         text("During an average lifetime, the heart pumps nearly ",980,120);
         text("1.5 million barrels of blood, which is enough to fill 200 train tank cars",900,140)
         image(art,1000,200)

         next2.position(900,170);
         next2.mousePressed(NEXT2)
        
               
       
       }


       if(boy.isTouching(triviaBio)){
         fill("darkBlue")
         text("The earth has more than 80,000 species of edible plants.",1000,550)
         image(plant,1230,600)

         next1.position(1000,590);
         next1.mousePressed(NEXT1)
        
       }


       if(boy.isTouching(triviaMath)){
         
         fill("darkRed")
         text("Roman numerals only have seven different letters which form the entire number system:  I, V, X, L, C, D, and M.",550,600);
         image(math,650,650)

         next3.position(870,670);
         next3.mousePressed(NEXT3)
       }

       if(boy.isTouching(triviaPhy)){
         triviaPhy.visible = false;
      
         fill("darkBlue");
         text("Atoms are made of tiny particles called protons, neutrons and electrons.",750,670);
         image(tom,800,500) 
        
         next.position(1000,720);
         next.mousePressed(Next)
       }
         image(teddy,130,300);
         image(cricket,360,450);
         
        if(collectCount %4  ===0 && collectCount>0){
          door.visible = true;
          triviaMath.visible = false;
          door.x = 1100
         
        }
        if(boy.isTouching(door)){
         gameState = LEVEL2;
        }

          text ("objects collected : "+ collectCount,1130,30)

   }



   if(gameState === LEVEL2){
     


     if(keyIsDown(RIGHT_ARROW)){
      boy.changeAnimation("walk",boy_walk);
      boy.x = boy.x+10;
     
    }
    
    else if(keyIsDown(LEFT_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.x = boy.x-10;
   
   }
   
   else if(keyIsDown(UP_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.y = boy.y-10;
     
   }
   
   else if(keyIsDown(DOWN_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.y = boy.y+10;
    
   }
    else{
      boy.changeAnimation("static",boyImg)
    }
        triviaChem.velocityX = 8;
        triviaMath.velocityX = 8;
        triviaBio.velocityX = 8;
        triviaPhy.velocityX = 8;
        
        door.destroy();
        

      
  
     Tex.visible = true;
     Tex.velocityX =5;


       if(Tex.x<1000){
       sound.play()

       }

      fill("blue");
      textSize(30)
      text("HIT THE BALOONS AND ANSWER",780,50)


     
      spawnBaloons();
      spawnBaloon();
      blueBaloon();
      Baloons();



      textSize(20);
      text("MAKE THE BOY HIT THE BALOON  BEFORE IT GETS DESTROYED AND ANSWER THE QUESTIONS TO PASS TO THE NEXT STAGE",20,180)
      
       tittle.scale = 0.7;
       tittle.x = 810;
       tittle.y  = 460;


    if(BALOONSGroup.isTouching(boy) &&  atom){
       
        BALOONSGroup.setLifetimeEach(-1)
        BALOONSGroup.setVelocityXEach(6)
           

        BALOONGGroup.destroyEach()
           
        BALOONBGroup.destroyEach()
     
        BALOONGroup.destroyEach()
     

       
     
        quiz1.html("WHICH HAS ELECTRON,PROTON,NUETON IN IT ??")
        quiz1.position(320,300)


       
        atom.position(320,360);
        atom.mousePressed(correctAnswer1);
 
        bacteria.position(400,360);
        bacteria.mousePressed(wrongAnswer1)

        higgsBosson.position(490,360);
        higgsBosson.mousePressed(wrongAnswer2)



      
         
        
    }


    if(BALOONGroup.isTouching(boy) && seven){

        BALOONGroup.setLifetimeEach(-1)
        BALOONSGroup.setVelocityXEach(6)
           

        BALOONGGroup.destroyEach()
        BALOONBGroup.destroyEach()
     
        BALOONSGroup.destroyEach()
     

       
     
        quiz2.html("ROMAN NUMERALS HAVE HOW MANY LETTERS IN THEM??")
        quiz2.position(320,300)


       
       infinite.position(320,360);
      infinite.mousePressed(wrongAnswer3);
 
      seven.position(400,360);
      seven.mousePressed(correctAnswer2)

       fifty.position(490,360);
       fifty.mousePressed(wrongAnswer4)



    }


    
    if(BALOONGGroup.isTouching(boy)  && eightyThousand){

      BALOONGGroup.setLifetimeEach(-1)
      BALOONGGroup.setVelocityXEach(6)
         

      BALOONGroup.destroyEach()
      BALOONBGroup.destroyEach()
      BALOONSGroup.destroyEach()
   

     
   
      quiz3.html("HOW MANY EDIBLE PLANT SPECIES ARE THERE IN THE EARTH ??")
      quiz3.position(320,300)


     
     ALLPLANTS.position(320,360);
    ALLPLANTS.mousePressed(wrongAnswer6);

    seventy.position(400,360);
    seventy.mousePressed(wrongAnswer5)

    eightyThousand.position(490,360);
    eightyThousand.mousePressed(correctAnswer3)



  }

  if(BALOONBGroup.isTouching(boy)&& heart){

    BALOONBGroup.setLifetimeEach(-1)
    BALOONBGroup.setVelocityXEach(6)
       

    BALOONGroup.destroyEach()
    BALOONGGroup.destroyEach()
 
    BALOONSGroup.destroyEach()
 

   
 
    quiz4.html("WHICH PUMPS 1.5 MILLON OF BLOOD??")
    quiz4.position(320,300)


   
  LUNGS.position(320,360);
LUNGS.mousePressed(wrongAnswer7);

 heart.position(400,360);
 heart.mousePressed(correctAnswer4)

 KIDNEY.position(490,360);
 KIDNEY.mousePressed(wrongAnswer8)



}


  if(correctAnswer ===  4 ){
  BALOONBGroup.setVelocityXEach(0);
  BALOONGGroup.setVelocityXEach(0);
  BALOONSGroup.setVelocityXEach(0);
  BALOONGroup.setVelocityXEach(0);

    
      entrance.x =1110;
  }
  
  if(boy.isTouching(entrance)){
    boy.x = 50;
    boy.y = height-100
    sound.play(); 
    gameState = LEVEL3
  }





        

   
   }



   if(gameState === LEVEL3){

   

    if(keyIsDown(RIGHT_ARROW)){
      boy.changeAnimation("walk",boy_walk);
      boy.x = boy.x+10;
     
    }
    
    else if(keyIsDown(LEFT_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.x = boy.x-10;
   
   }
   
   else if(keyIsDown(UP_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.y = boy.y-10;
     
   }
   
   else if(keyIsDown(DOWN_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.y = boy.y+10;
    
   }
    else{
      boy.changeAnimation("static",boyImg)
    }


    boy.scale = 0.3;

    entrance.destroy();

    BALOONBGroup.destroyEach()
  BALOONGGroup.destroyEach()
  BALOONSGroup.destroyEach()
  BALOONGroup.destroyEach()

  image(maze,1200,0)



 
    cardboard1.visible = true;
    cardboard2.visible = true;
    cardboard3.visible = true;
    cardboard4.visible = true;
    cardboard5.visible = true;
    cardboard6.visible  = true;
    cardboard7.visible = true;
    cardboard8.visible = true;
    cardboard9.visible = true;
   cardboard10.visible = true;
   cardboard11.visible = true;
   cardboard12.visible = true;
   cardboard13.visible = true;
   cardboard14.visible = true;
   cardboard15.visible = true;
   cardboard16.visible = true;
   cardboard17.visible = true;
   cardboard18.visible = true;
   cardboard19.visible = true;
   cardboard20.visible = true;
   cardboard21.visible = true;
   cardboard22.visible = true;
   


         boy.bounceOff(cardboard1)
         boy.bounceOff(cardboard2)

         boy.bounceOff(cardboard3)

         boy.bounceOff(cardboard4)

         boy.bounceOff(cardboard5)

         boy.bounce(cardboard6)
         boy.bounce(cardboard7)
         boy.bounce(cardboard8)
         boy.bounce(cardboard9)
         boy.bounce(cardboard10)
         boy.bounce(cardboard11)
         boy.bounce(cardboard12)
         boy.bounce(cardboard13)
         boy.bounce(cardboard14)
         boy.bounce(cardboard15)
         boy.bounce(cardboard16)
         boy.bounce(cardboard17)
         boy.bounce(cardboard18)
         boy.bounce(cardboard19)
         boy.bounce(cardboard20)
         boy.bounce(cardboard21)
         boy.bounce(cardboard22)


       
      triviaBio1.visible= true;
      triviaChem1.visible = true;
      triviaPhy1.visible = true;
      triviaMath1.visible = true


      if(boy.isTouching(triviaBio1)){
        fill("white");
        textSize(20)
        text("plants have veins like humans caled phloem,xylem",1000,550)
        image(plant,1230,600)
        next4.position(1000,590);
        next4.mousePressed(Next4)


      }

      if(boy.isTouching(triviaPhy1)){
        fill("white");
        textSize(20);
        text("MAN Weighs less in moon compared to earth due to gravity",750,670);
       
        next5.position(1000,720);
        next5.mousePressed(Next5)
      }


      if(boy.isTouching(triviaMath1)){
        fill("white");
        textSize(20);
        text("positive number and a negative number will always give  negative number",550,600);
       
        next6.position(870,670);
        next6.mousePressed(Next6)
      }


   if(boy.isTouching(triviaChem1)){
    fill("white");
    textSize(20);
    text("Do you know the Queen of acids?? it is sulphuric acids",900,140);
   
    next7.position(900,170);
    next7.mousePressed(Next7)
   }



   if(collectCount === 8){
    door3.x = 100;
  
   }


   if(boy.isTouching(door3)){
     gameState = LEVEL4
   }



   
   
   
   }




   if(gameState ===LEVEL4 ){

    if(keyIsDown(RIGHT_ARROW)){
      boy.changeAnimation("walk",boy_walk);
      boy.x = boy.x+10;
     
    }
    
    else if(keyIsDown(LEFT_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.x = boy.x-10;
   
   }
   
   else if(keyIsDown(UP_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.y = boy.y-10;
     
   }
   
   else if(keyIsDown(DOWN_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.y = boy.y+10;
    
   }
    else{
      boy.changeAnimation("static",boyImg)
    }




    sound.play()

     triviaBio1.velocityY = 5;
     triviaChem1.velocityY =-5;
     triviaPhy1.velocityX = 5;
     triviaMath1.velocityX = -5;

     cardboard1.velocityX = -5
     cardboard2.velocityX  =  5;
     cardboard3.velocityY = 5;
     cardboard4.velocityY = -5;
     cardboard5.velocityX = 5;
     cardboard6.velocityX = -5;
     cardboard7.velocityY = 5;
     cardboard8.velocityY = -5;
     cardboard9.velocityX = -5;
     cardboard10.velocityX = 5;
     cardboard11.velocityY = 5;
     cardboard12.velocityY = -5;
     cardboard13.velocityX = 5;
     cardboard14.velocityX = -5;
     cardboard15.velocityY = 5;
     cardboard16.velocityY = -5;
     cardboard17.velocityX = -5;
     cardboard18.velocityX = 5;
     cardboard19.velocityY = -5;
     cardboard20.velocityY = 5;
     cardboard21.velocityX = -5;
     cardboard22.velocityX  = 5;

     door3.destroy()

  
   


       

    
   }
   
 
  fill("black")
  textSize(20)
  text(mouseX +","+ mouseY,200,50)


  
}


function spawnBaloons(){
 if(frameCount%100 === 0){
  var y = Math.round(random(10,900))
  ballons = createSprite(1900,y);
  ballons.addImage(balonImg)
  ballons.scale = 0.2;
  ballons.velocityX= -6;
  ballons.lifetime = 300;
  BALOONSGroup.add(ballons);
 }
}

function spawnBaloon(){
  if(frameCount%60=== 0){
   var y = Math.round(random(10,800))
   ballon = createSprite(1900,y);
   ballon.addImage(goldB)
   ballon.scale = 0.1;
   ballon.velocityX= -6;
   ballon.lifetime = 300;
   BALOONGroup.add(ballon);
  }
 }

 function blueBaloon(){
  if(frameCount%80 === 0){
   var y = random(10,700)
   ballonB = createSprite(1900,y);
   ballonB.addImage(blueB)
   ballonB.scale = 0.3;
   ballonB.velocityX= -6;
   ballonB.lifetime = 300;
   BALOONBGroup.add(ballonB);
  }
 }

 function Baloons(){
  if(frameCount%20 === 0){
   var y = random(10,9000)
   ballonG = createSprite(1900,y);
   ballonG.addImage(greenB)
   ballonG.scale = 0.1;
   ballonG.velocityX= -6;
   ballonG.lifetime = 300;
   BALOONGGroup.add(ballonG);
  }
 }
 
 function correctAnswer1(){
    
    sound.play();
    atom.hide();
    bacteria.hide();
    higgsBosson.hide()
    quiz1.hide();
    BALOONSGroup.x = -5000;
    BALOONSGroup.setVelocityXEach(6)
   correctAnswer+= 1
 } 
 function correctAnswer2(){
    
  sound.play();
 seven.hide();
 infinite.hide();
  fifty.hide()
  quiz2.hide();
  BALOONGroup.x = -5000;
  BALOONGroup.setVelocityXEach(6)
 correctAnswer += 1
} 


function correctAnswer3(){
    
  sound.play();
eightyThousand.hide();
  ALLPLANTS.hide();
 seventy.hide()
  quiz3.hide();
  BALOONGGroup.x = -5000;
  BALOONGGroup.setVelocityXEach(6)
 correctAnswer += 1
} 


function correctAnswer4(){
    
  sound.play();
heart.hide();
KIDNEY.hide();
LUNGS.hide()
  quiz4.hide();
  BALOONBGroup.x = -5000;
  BALOONBGroup.setVelocityXEach(6)
 correctAnswer += 1
} 


 function wrongAnswer1(){
    
  ohno.play();
  

 
} 

function wrongAnswer2(){
  ohno.play();

 
}

function wrongAnswer3(){
  ohno.play();

 
}

function wrongAnswer4(){
  ohno.play();

 
}
function wrongAnswer5(){
  ohno.play();

 
}
function wrongAnswer6(){
  ohno.play();

 
}

function wrongAnswer7(){
  ohno.play();

 
}

function wrongAnswer8(){
  ohno.play();

 
}
 
 
function Next(){
  collectCount += 1
  boy.x = boy.x-300
  
  next.hide();

}


function NEXT1(){
  collectCount += 1
  boy.x = boy.x-300
  
  next1.hide();

}

function NEXT2(){
  collectCount += 1
  boy.x = boy.x-300
  
  next2.hide();

}



function NEXT3(){
  collectCount += 1
  boy.x = boy.x-300
  
  next3.hide();

}




function Next4 (){
  collectCount += 1
  boy.x = boy.x-100
 next4.hide()
}


function Next5(){
  collectCount += 1
  boy.x = boy.x-100
 next5.hide()
}


function Next6(){
  collectCount += 1
  boy.x = boy.x-100
 next6.hide()
}
 



function Next7(){
  collectCount += 1
  boy.x = boy.x-100
 next7.hide()
}