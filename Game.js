class Game{
   constructor(){        
   }

   //read the game State from the DATABASE
   getState(){
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value",function(data){
      gameState = data.val();
      });
   }
  
   //UPDATE THE STATE IN DB TO VALUE PASSED IN THE PARANTHESES ()
  update(state){
     database.ref('/').update({
        gameState : state
     });
  }

  start(){
      if(gameState === 0 ) {
          player = new Player();
          player.getCount();
          form = new Form();
          form.display();
      }
  }
}