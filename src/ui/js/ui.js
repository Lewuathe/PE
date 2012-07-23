/*
 UI program for PE
 UI is a object for drawing and keeping objects.
 UI's public member is below.
      * UI.gl
      * UI.shaderProgram
      * UI.mvMatrix
      * UI.pMatrix
      * UI.mMatrixStack

      - constructor
      - getShader(gl, id)
      - initShaders()
      - mvPushMatrix()
      - mvPopMatrix()
      - setMatrixUniforms()

*/



var UI = UI || { "version" : "0.1" };

var UI = function( canvas ){
	try{
		this.gl                = canvas.getContext( "experimental-webgl" );
		this.gl.viewportWidth  = canvas.width;
		this.gl.viewportWidth  = canvas.height;
		this.mvMatrix          = mat4.create();
		this.pMatrix           = mat4.create();
		this.mvMatrixStack     = [];
		
	}
	catch( e ){
		if( !this.gl ){
			alert( "Could not initialize WebGL" );
		}
	}
}
	

UI.prototype.getShader = function( gl, id ){
    var shaderScript = document.getElementId( id );
    if( !shaderScript ){
		return null;
    }
	
    var str = "";
    var k = shaderScript.firstChild;
    while( k ){
		if( k.nodeType == 3 ){
			str += k.textContent;
		}
		k = k.nextSibling;
    }
    
    if ( shaderScript.type == "x-shader/x-fragment" ) {
		shader = gl.createShader( gl.FRAGMENT_SHADER );
    }
	else if ( shaderScript.type == "x-shader/x-vertex" ) {
		shader = gl.createShader( gl.VERTEX_SHADER );
    }
	else {
		return null;
    }
	
    gl.shaderSource( shader, str );
    gl.compileShader( shader );
	
    if (!gl.getShaderParameter( shader, gl.COMPILE_STATUS )) {
		alert(gl.getShaderInfoLog( shader ));
		return null;
    }
	
    return shader;
    
	
}

UI.prototype.initShaders = function(){
	var fragmentShader = getShader( this.gl, "shader-fs" );
	var vertexShader   = getShader( this.gl, "shader-vs" );

	this.shaderProgram   = this.gl.createProgram();
	this.gl.attachShader( shaderProgram, fragmentShader );
	this.gl.attachShader( shaderProgram, vertexShader   );
	this.gl.linkProgram( shaderProgram );

	if( !this.gl.getProgramParameter( shaderProgram, this.gl.LINK_STATUS )) {
		alert( "Could not get shader program !" );
	}

	this.gl.useProgram( shaderProgram );

	this.shaderProgram.vertexPositionAttribute = this.gl.getAttribLocation( shaderProgram, "aVertexPosition" );
	this.gl.enableVertexAttribArray( shaderProgram.vertexPositionAttribute );

	this.shaderProgram.vertexColorAttribute = this.gl.getAttribLocation( shaderProgram, "aVertexColor" );
	this.gl.enableVertexAttribArray( shaderProgram.vertexColorAttribute );

	this.shaderProgram.pMatrixUniform   = this.gl.getUniformLocation( shaderProgram, "uPMatrix" );
	this.shaderProgram.mvMatrixUniform  = this.gl.getUniformLocation( shaderProgram, "uMVMatrix" );

}


UI.prototype.mvPushMatrix = function(){
	var copy = mat4.create();
	mat4.set( this.mvMatrix, copy );
	this.mvMatrixStack.push( copy );
}

UI.prototype.mvPopMatrix = function(){
	if( this.mvMatrixStack.length == 0 ){
		throw "Stack is void";
	}
	this.mvMatrix = mvMatrixStack.pop();
}

UI.prototype.setMatrixUniforms = function(){
	this.gl.uniformMatrix4fv( this.shaderProgram.pMatrixUniform, false, pMatrix );
	this.gl.uniformMatrix4fv( this.shaderProgram.mvMatrixUniform, false, mvMatrix );
}







