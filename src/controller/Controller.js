var Controller = function(){
	this.scene = new Scene();
	this.state = new State();
	this.timestep = 0.1;
};

Controller.prototype = {
	createSphere : function(_material, _sphereif){
		var rgd = new Rijidbody(_material, _sphereif);
		this.scene.rijidbodys.push(rgd);
		this.state.rijidbodys.push(rgd,this.timestep);
	},
	
	gravityEnable : function(){ this.scene.gravityOn = true; };
       gravityDisable : function(){ this.scene.gravityOn = false; };
	  timerSwitch : function(){ this.scene.timerOn = !this.timerOn; };
	  getTimestep : function(){ return this.timestep; };
	   getGravity : function(){ return gravity; };
	  setTimestep : function(_timestep){ this.scene.timestep = _timestep; };
	   setGravity : function(_gravity){ this.scene.gravity = _gravity; };
	step() : function(timestep){
		//ToDo
		//Call solver function
		//Stateとtimestepを用いてPhysicsから使うメソッドを呼び出して
		//Solverに渡してあげる
	},
	draw() : function(){
		//ToDo
		//UI側でビュー表示できるように呼ぶ
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

/*
Physics
h=1.0;
m=1.0;
var hoge = function(){
    return [
        { 
          scolor:{x:1,y:1,z:1},
          var:"vel"
        },
        {
            scolor:{x:h/m,y:h/m,z:h/m},
            var:"f"
        }
    ];
}();
console.log(hoge);
*/
