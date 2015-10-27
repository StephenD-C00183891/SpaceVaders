function Pause()
{
	var resume
	var mainMenu
	var quit
	var backGround

	this.backGround = new Image();
	this.backGround.src = "images/PauseScreen/background.png";

	this.resume = new Image();
	this.resume.src = "images/PauseScreen/Resume_Button.png";

	this.mainMenu = new Image();
	this.mainMenu.src = "images/PauseScreen/Menu_Button.png";

	this.quit = new Image();
	this.quit.src = "images/PauseScreen/Quit_Button.png";
}
Pause.prototype = new Scene("Game Playing");


//Pause.prototype.clickEvents = function(e)
//{
//	if (e.x > this.pauseButton.x && e.x < this.pauseButton.x + this.pauseButton.width && e.y > this.pauseButton.y && e.y < this.pauseButton.y + this.pauseButton.height && i == 2);
//	{
//		game.changeMenu("title");
//	}
//}

Pause.prototype.render = function()
{
	ctx.drawImage(this.backGround, 0, 0);
    ctx.drawImage(this.resume, 100, 100);
    ctx.drawImage(this.quit, 100, 250);
    ctx.drawImage(this.mainMenu, 100, 400);
}