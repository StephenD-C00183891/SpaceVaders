
function GameOver()
{
	var backGround
	var gOver
	var mainMenu
	var retry

	this.backGround = new Image();
	this.backGround.src = "images/GameOverScreen/background.png";

	this.gOver = new Image();
	this.gOver.src = "images/GameOverScreen/Game_Over.png";

	this.mainMenu = new Image();
	this.mainMenu.src = "images/GameOverScreen/Menu_Button.png";

	this.retry = new Image();
	this.retry.src = "images/GameOverScreen/Retry_Button.png";
}
GameOver.prototype = new Scene("Game Over");


GameOver.prototype.render = function()
{

    //ctx.drawImage(this.backGround, 0, 0);

    ctx.drawImage(this.gOver, 100, 100);

	ctx.drawImage(this.mainMenu, 100, 300);

	ctx.drawImage(this.retry, 100, 200);    
}