/* 
 Every objects is a array of rijit bodies in a scene.
 Each rijid body has infomation of its material, shape and physics.
 Createshape functions make certain shaped rejid body and push it objects.
*/

var Scene = function(){
	// public
	this.objects = [];
	this.gravityOn = true;
};

Scene.prototype = {
	createSpere : function(_material, _sphereif){
		var pys = new Physics(_material, _sphereif);
		var obj = {material:_material, shape:_sphereif, pysics:pys};
		this.objects.push(obs);
	};
	gravityEnable : function(){ this.gravityOn = true; };
       gravityDisable : function(){ this.gravityOn = false; };
}


