function(coef, param){
	//Ax=b
	//coef = A, param = b
	//We should get A^(-1)
	
	const THRESHOLD = 10e-8;
	
	var param_map = new Array();
	var count = 0;
	for(var x in param){
		param_map[count] = x;
		++count;
	}
	
	var coef_diagonal = new Array(count);
	
	for(var coef_d in coef){
		var d = (coef_d[1] == coef_d[2]) ? coef_diagonal[d] = coef_d[0] : ;
	}
	
	var param_diff = new Array(count);
	
	
	while(true){
		//Break if time is over.
		
		flag ? break : ;
		
		var next_param = new Array(count);
		
		//initialize to 0 in all element of next_param.
		for(var i = 0; i < count ++i){
			next_param[i] = 0;
		}
		
		
		for(var element in coef){
		
			//Calucurate x = A^(-1) * b
			//element[1] != element[2] ? next_param[element[1]] -= element[1] * param[param_map[element[2]]] : ;
			
		}
		
		var flag = 0;
		
		for(var i = 0; i < count; ++i){
			next_param[i] /= coef_diagonal[i];
			param_diff[i] = next_param[i] - param[i];
			param_diff[i] < THRESHOLD ? ++flag : ;
			param[param_map[i]] = next_param[i];
		}
		
		flag == count ? break : ;
		
	}

	for(var i = 0; i < count; ++i){
		param[param_map[i]] = nextparam[i];
	}
}


