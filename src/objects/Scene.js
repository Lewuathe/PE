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
	// private
	var timestep = 0.1;
	var gravity = -9.8;
	// get private paramaters
	this.getTimestep = function(){ return timestep; };
	this.getGravity = function(){return gravity; };
	this.setTimestep = function(_timestep){ timestep = _timestep; };
	this.setGravity = function(_gravity){ gravity = _gravity; };
};

Scene.prototype = {
	createSpere : function(_material, _sphereif){
		var rjd = new Rijidbody(_material, _sphereif);
		this.rijidbodys.push(rjd);
	};
	gravityEnable : function(){ this.gravityOn = true; };
       gravityDisable : function(){ this.gravityOn = false; };
	  timerSwitch : function(){ this.timerOn = !this.timerOn; };
	
	step() : function(timestep){
		/// hogehoge ///
	};
	draw() : function(){
		/// hogehoge ///
	};
	
	timerFunc() : function(){ 
		if(!this.timerOn){ return; };	
		else{
			var timestep = getTimestep();
			this.step(timestep); // undifined
			this.draw(); // undifined	
			this.time += timestep;	
		}
	};
	
};


