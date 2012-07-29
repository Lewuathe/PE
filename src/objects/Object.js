/*
 ShapeIf for PE
 ShapeIf has basic information of rijid bodies' shape in a scene.
*/

// Sphere
var SphereIf = function(radius){
	this.radius;
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
	// private
	var mass = material.density * shape.calcVolume();
	var inertia = calcInertia(mass);
	var reflection = material.reflection;
};

/* 
 Objects is a array of rijit bodies in a scene.
 Each rijid body has infomation of its material, shape and physics.
 Createshape functions make certain shaped rejid body and push it objects.
*/
var objects = [];

function createSphere(_material, _sphereif){
	var pys = new Physics(_material, _sphereif);
	var obj = {material:_material, shape:_sphereif, pysics:pys};
	objects.push(obs);
};



