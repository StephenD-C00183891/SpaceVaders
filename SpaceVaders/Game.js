var canvas
var ctx
var i
	
function Game()
{
	var manager 
	this.manager = new SceneManager();

	var title
	this.titleScreen = new Title();

	var playing
	this.playing = new Playing();

	this.init();
}

Game.prototype.init = function()
{
	canvas= document.createElement("canvas");
	ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	document.addEventListener("click",keyDownHandler, true);
	this.changeMenu("title");
}

Game.prototype.changeMenu = function(string)
{
	if(string == "title")
	{
		clearCanvas();
		i = 1;
		this.manager.goToScene("title");
	}

	if(string == "playing")
	{
		clearCanvas();
		i = 2;
		this.manager.goToScene("playing");
	}

	if(string == "pause")
	{
		clearCanvas();
		i = 3;
		this.manager.goToScene("pause");
	}

	if(string == "gameOver")
	{
		clearCanvas();
		i = 4;
		this.manager.goToScene("gameOver");
	}
}

Game.prototype.gameloop = function()
{
	console.log("gameLoop");
	game.draw();
	window.requestAnimationFrame(game.gameloop);
} 

Game.prototype.draw = function()
{
	this.manager.state.render();
}

function clearCanvas()
{
	canvas.width = canvas.width;
}

function keyDownHandler(e)
{
	if (e.x > 100 && e.x < 300 && e.y > 200 && e.y < 250 && i == 1)
	{
		game.changeMenu("playing");
	}

	if (e.x > 10 && e.x < 60 && e.y > 10 && e.y < 60 && i == 2)
	{
		game.changeMenu("pause");
	}

	if (e.x > 100 && e.x < 250 && e.y > 100 && e.y < 150 && i == 3)
	{
		game.changeMenu("playing");
	}

	if (e.x > 100 && e.x < 250 && e.y > 250 && e.y < 300 && i == 3)
	{
		game.changeMenu("gameOver");
	}

	if (e.x > 100 && e.x < 300 && e.y > 400 && e.y < 450 && i == 3)
	{
		game.changeMenu("title");
	}

	if (e.x > 100 && e.x < 300 && e.y > 200 && e.y < 250 && i ==4)
	{
		game.changeMenu("playing");
	}

	if (e.x > 100 && e.x < 300 && e.y > 300 && e.y < 350 && i ==4)
	{
		game.changeMenu("title");
	}

	if (e.x > 0 && e.x < 10 && e.y > 0 && e.y < 10 )
	{
		game.changeMenu("title");
	}
}