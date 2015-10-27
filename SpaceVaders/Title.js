function Title()
{
	var logo
	var play
	var backGround

	this.backGround = new Image();
	this.backGround.src = "images/MainMenuScreen/background.png";

	this.logo = new Image();
	this.logo.src = "images/MainMenuScreen/Game_Title.png";

	this.play = new Image();
	this.play.src = "images/MainMenuScreen/Play_Button.png";
}
Title.prototype = new Scene("Title");


Title.prototype.clickEvents = function(e)
{
	if (e.x > this.play.x && e.x < this.play.x + this.play.width && e.y > this.play.y && e.y < this.play.y + this.play.height && i == 1)
	{
		game.changeMenu("playing");
	}
}

Title.prototype.render = function()
{
	//ctx.drawImage(this.backGround, 0, 0);

    ctx.drawImage(this.logo, 100, 100);

    ctx.drawImage(this.play, 100, 200);
}
