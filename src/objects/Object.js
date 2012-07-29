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

// solid
var Solid = function(color){
	Material.apply(this, [1.0, 1.0, color]);
};

/*
 Physics for PE
 Physics has physical parameters for calculation.
*/

var Physics = function(material, shape) {
	// public 
	this.pos = {x:0, y:0, z:0};
	this.pose = {px:0, py:0, pz:0};
	this.vel = {vx:0, vy:0, vz:0};
	this.ang_vel = {wx:0, wy:0, wz:0};
	this.force = {fx:0, fy:0, fz:0};
	this.torque = {tx:0, ty:0, tz:0};
	this.dynamicsOn = true;
	// private
	var mass = material.density * shape.calcVolume();
	var inertia = shape.calcInertia(mass);
	var reflection = material.reflection;
};

Physics.prototype = {
	// get paramaters
	getPosition : function(){ return this.pos; };
	    getPose : function() { return this.pose; };
	getVelocity : function(){ return this.vel; };
	  getAngVel : function(){ return this.ang_vel; };
	   getForce : function() {return this.force; };
	  getTorque : function(){ return this.torque; };
	// set paramaters
	setPosition : function(pos){ this.pos = pos; };
	    setPose : function(pose){ this.pose = pose; };
	setVelocity : function(vel){ this.vel = vel; };
	  setAngVel : function(ang_val){ this.ang_vel = ang_val; };
	   setForce : function(force){ this.force = force; };
	  setTorque : function(torque){ this.torque = torque; };
	// change dynamics
     dynamicsEnable : function(){ dynamicsOn = true; };
    dynamicsDisable : function(){ dynamicsOn = false; };
};



