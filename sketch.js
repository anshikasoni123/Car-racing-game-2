var database;

var form, game;

function setup()
{
  database = firebase.database();
  
  createCanvas(500,500);

  game = new Game()
  game.getState()
  game.getUpdate();
  
}

function draw()
{
  background("white");
  
    if(playerCount === 4)
    {
      game.update(1);
    }
    
    if(gameState === 1)
    {
      clear();
      game.play();
    }
  
}
