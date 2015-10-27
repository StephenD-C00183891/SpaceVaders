function Menu()
{
	
}
Menu.prototype = new Scene("Menu");


Menu.prototype.render = function()
{
	ctx.font = "48px serif";
  	ctx.strokeText("Game Over", 10, 50);
}