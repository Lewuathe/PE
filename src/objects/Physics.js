/* 
 Pysics is rule of dynamics for one of the rigidbody.
 Collision is rule of dynamics become rigidbodies' collision
*/

// 0->x, 1->y, 2->z
var Pysics = function(_rgd, _timestep){
	this.posCoef = function(){
		return [{pos:1.0, vel:_timestep}, {pos:1.0, vel:_timestep}, {pos:1.0, vel:_timestep}];
	};
	this.velCoef = function() {
		var fCoef = _timestep / rgd.mass;
		return [{vel:1.0, force:fCoef}, {vel:1.0, force:fCoef}, {vel:1.0, force:fCoef}];
	};
	this.poseCoef = function(){
		return [{pose:1.0, ang_vel:_timestep}, {pose:1.0, ang_vel:_timestep}, {pose:1.0, ang_vel:_timestep}];
	};
	this.ang_velCoef = function(){
		var tCoef = _timestep / rgd.inertia;
		return [{ang_vel:1.0, torque:tCoef} ,{ang_vel:1.0, torque:tCoef} ,{ang_vel:1.0, torque:tCoef}];
    };
};

/*
 * 
*/

Collision = function(){
   this. 
};

Collision.prototype = {
    
};
