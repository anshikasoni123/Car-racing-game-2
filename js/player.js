class Player
{
    constructor()
    {
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount()
    {
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value",
        (data)=>
        {
            playerCount = data.value();
        }
        )
    }

    getUpdate(count)
    {
        database.ref("/").update({
            playerCount : count
        })
    }
}