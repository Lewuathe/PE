/* 
 Pysics is rule of dynamics for one of the rigidbody.
 Collision is rule of dynamics become rigidbodies' collision
*/

var Pysics = function(_rgd, _timestep){
	this.posCoef = function(){
		return [{scalar:{x:1.0, y:1.0, z:1.0}, var:pos},
		 	{scalar:{x:_timestep, y:_timestep, z:_timestep}, var:vel}];
	}();
	this.velCoef = function() {
		var fCoef = _timestep / rgd.mass;
		return [{scalar:{x:1.0, y:1.0, z:1.0}, var:vel},
		        {scalar:{x:fCoef, y:fCoef, z:fCoef}, var:force}];
	}();
	this.poseCoef = function(){
		return [{scalar:{x:1.0, y:1.0, z:1.0}, var:pose},
		{scalar:{x:_timestep, y:_timestep, z:_timestep}, var:ang_vel}
			];
	}();
	this.ang_velCoef = function(){
		var tCoef = _timestep / rgd.inertia;
		return [{scalar:{x:1.0, y:1.0, z:1.0}, var ang_vel},
		       {scalar:{x:tCoef, y:tCoef, z:tCoef}, var torque}
			];
	};
};

Pysics.prototype = {
	hoge : function()
};
