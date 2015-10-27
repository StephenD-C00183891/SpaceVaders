function Playing()
{
	var backGround
	var pauseButton

	this.backGround = new Image();
	this.backGround.src = "images/GameScreen/Background.png";

	this.pauseButton = new Image();
	this.pauseButton.src = "images/GameScreen/Pause_Button.png";
}
Playing.prototype = new Scene("Game Playing");


Playing.prototype.clickEvents = function(e)
{
	if (e.x > this.pauseButton.x && e.x < this.pauseButton.x + this.pauseButton.width && e.y > this.pauseButton.y && e.y < this.pauseButton.y + this.pauseButton.height && i == 2);
	{
		game.changeMenu("title");
	}
}

Playing.prototype.render = function()
{
    ctx.drawImage(this.backGround, 0, 0);

    ctx.drawImage(this.pauseButton, 10, 10);
}