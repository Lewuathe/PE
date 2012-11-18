/* 
 Every objects is a array of rijit bodies in a scene.
 Each rijid body has infomation of its material, shape and physics.
 Createshape functions make certain shaped rejid body and push it objects.
*/

var Scene = function(){
	// public
	this.rijidbodys = [];
	this.time = 0.0;
	this.gravityOn = true;
	this.timerOn = false;
	this.gravity = -9.8;
};
