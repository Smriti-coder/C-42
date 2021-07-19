class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  //function start is not an automatic function 
  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }

    car1 = createSprite(250, 390);
    car2 = createSprite(450, 390);
    car3 = createSprite(650, 390);
    car4 = createSprite(850, 390);

    car1.addImage(carImg1);
    car2.addImage(carImg2);
    car3.addImage(carImg3);
    car4.addImage(carImg4);
    
    
    
    

    cars = [car1, car2, car3, car4];

   
  }

  
  play(){
 
   form.hide();
  
  // text("Let's start bro!", 200,200);
   player.getPlayerInfo();
 

   //if we write !==undefined it is checking if it is
    if(allPlayers !==undefined){
      background("orange"); 
     image(trackImg, 0,-displayHeight*4,displayWidth, displayHeight*5);
      var index = 0;
      var x = 200
      var y;
      for(var plr in allPlayers){
       
        index = index+1;
        x = x+200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x
        cars[index-1].y=y;

      }
    }

       if(keyDown(UP_ARROW) && player.index !== null){

           player.distance = player.distance + 10; 

           player.update();
          
       }
    
      

   
       drawSprites();
  }
  
}

//! is a signal for not or no