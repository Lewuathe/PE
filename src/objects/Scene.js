/* 
 Every objects is a array of rigit bodies in a scene.
 Each rijid body has infomation of its material, shape and physics.
 Createshape functions make certain shaped rejid body and push it objects.
*/

var Scene = function(){
	// public
	this.rijidbodys = [];
	this.time = 0.0;
	this.gravityOn = true;
	this.timerOn = false;
	this.timestep = 0.1;
	this.gravity = -9.8;
};

Scene.prototype = {
	createSpere : function(_material, _sphereif){
		var rgd = new Rijidbody(_material, _sphereif);
		this.rijidbodys.push(rgd);
	};
	gravityEnable : function(){ this.gravityOn = true; };
       gravityDisable : function(){ this.gravityOn = false; };
	  timerSwitch : function(){ this.timerOn = !this.timerOn; };
	  getTimestep : function(){ return timestep; };
	   getGravity : function(){ return gravity; };
	  setTimestep : function(_timestep){ timestep = _timestep; };
	   setGravity : function(_gravity){ gravity = _gravity; };
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


