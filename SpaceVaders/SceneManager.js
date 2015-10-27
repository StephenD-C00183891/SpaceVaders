function SceneManager()
{
	var state

	this.GameStates = [new Title(), new Playing(), new Pause(), new GameOver()]

	this.state = this.GameStates[0];
}

SceneManager.prototype.addScene = function()
{

}

SceneManager.prototype.goToScene = function(string)
{
	if (string == "title")
	{
		this.state.stop();
		this.state = this.GameStates[0];
		this.state.start();
	}
	if (string == "playing")
	{
		this.state.stop();
		this.state = this.GameStates[1];
		this.state.start();
	}

	if (string == "pause")
	{
		this.state.stop();
		this.state = this.GameStates[2];
		this.state.start();
	}

	if (string == "gameOver")
	{
		this.state.stop();
		this.state = this.GameStates[3];
		this.state.start();
	}
}

SceneManager.prototype.nextScene = function()
{

}

