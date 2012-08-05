/*
 ShapeIf for PE
 ShapeIf has basic information of rijid bodies' shape in a scene.
*/

// Sphere
var SphereIf = function(radius){
	this.radius = radius || 1.0;
};

SphereIf.prototype = {
	calcVolume : function(){
		  	radius3 = this.radius*this.radius*this.radius;	
		   	massbase = 4*Math.PI*radius3/3;
			return massbase;
		   },
	calcInertia : function(mass){
			radius2 = this.radius * this.radius;
		      	inertia = 2*mass*radius2/5;
			return inertia;
		      }, 
	
};

/*
 Material for PE
 Material has basic information of rijid bodies in a scene.
*/

var Material = function(density, reflection, color){
	this.density = density;
	this.reflection = reflection;
	this.color = color;
};

// example
var Stone = function(color){
	Material.apply(this, [1.0, 1.0, color]);
};

var Sponge = function(color){
	Material.apply(this, [0.3, 0.5, color]);
}; 

/*
 Varialbe for Physical Engine
 Variable has physical parameters for calculation.
*/

var Variable = function() { 
	this.pos = {x:0.0, y:0.0, z:0.0};
	this.pose = {x:0.0, y:0.0, z:0.0};
	this.vel = {x:0.0, y:0.0, z:0.0};
	this.ang_vel = {x:0.0, y:0.0, z:0.0};
	this.force = {x:0.0, y:0.0, z:0.0};
	this.torque = {x:0.0, y:0.0, z:0.0};
};

var Rigidbody = function(_material, _shape) {
	// public 
	this.variable = new Variable();
	this.dynamicsOn = true;
	this.material = _material;
	this.shape = _shape;
	this.mass = material.density * shape.calcVolume();
	this.inertia = shape.calcInertia(mass);
	this.reflection = material.reflection;
};

Rigidbody.prototype = {
	// get variables
	getPosition : function(){ return this.variable.pos; };
	    getPose : function() { return this.variable.pose; };
	getVelocity : function(){ return this.variable.vel; };
	  getAngVel : function(){ return this.variable.ang_vel; };
	   getForce : function() {return this.variable.force; };
	  getTorque : function(){ return this.variable.torque; };
	// set variables
	setPosition : function(pos){ this.variable.pos = pos; };
	    setPose : function(pose){ this.variable.pose = pose; };
	setVelocity : function(vel){ this.variable.vel = vel; };
	  setAngVel : function(ang_val){ this.variable.ang_vel = ang_val; };
	   setForce : function(force){ this.variable.force = force; };
	  setTorque : function(torque){ this.variable.torque = torque; };
	// change dynamics
     dynamicsEnable : function(){ dynamicsOn = true; };
    dynamicsDisable : function(){ dynamicsOn = false; };
};

