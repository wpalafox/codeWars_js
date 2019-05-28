

const isTriangle = (a,b,c) => {      
	
	arry = [a,b,c];
	//Check to see if all variables are positive
	for(i=0;i<arry.length;i++){
		if(arry[i] < 0){
			return false; 
		} else{
			console.log(arry[i]+" is positive") 
		}
	}
	//Ordering the numbers 
	const orderArry = arry.sort()

	//Check if pythangoran theorum applies
	if((Math.sqrt(Math.pow(orderArry[0], 2) + Math.pow(orderArry[1], 2))) == Math.sqrt(Math.pow(orderArry[2],2))){

		return true;
	}else if(orderArry[0] == orderArry[1] && orderArry[0] == orderArry[2]){
		return true
	}

	return false;

}


console.log(isTriangle(2,2,2))