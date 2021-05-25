class Form
{
    constructor()
    {
       this.input = createInput("Write Your Name Here");
       this.button = createButton("Play");
       this.element = createElement("h3")
    }

    hide()
    {
        this.input.hide();
        this.button.hide();
        this.element.hide();
    }

    display()
    {

        var title = createElement("h2")
        title.html("Car Racing Game")
        title.position(150, 50);

        
        this.input.position(150, 200);
        this.button.position(300, 250);

        this.button.mousePressed(
            ()=>
            {
                this.input.hide();
                this.button.hide();

                player.name = this.input.val();
                playerCount+=1;
                player.index = playerCount;
                player.update(playerCount);
                
                this.element.html("Hello " + player.name + " Welcome to the Game");
                this.element.position(50, 300)
            }
        )
    }
}