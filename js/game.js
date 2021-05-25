class Game
{
    constructor()
    {

    }

    getState()
    {
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",
        (data)=>
        {
            gameState = data.val();
        }
        )
    }

    getUpdate(state)
    {
        database.ref("/").update({
            gameState : state
        })
    }

    async start()
    {
        if(gameState === 0)
        {
            player = new Player();

            var playerCountRef = playerCount.ref("playerCount").once("value");
            if(playerCountRef.exists())
            {
               playerCount = playerCountRef.val();
               player.getCopunt();
            }
            form = new Form()
            form.display();
        }
    }

    play()
    {
        form.hide()
        textSize(30)
        text("GAME START", 250, 250)
    }
}