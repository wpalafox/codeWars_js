
//es6
const bouncingBall = (h, bounce, window) => { 

  //Qualify the experiment 
  if(h <= 0){
  	console.log("h is less than 0")
  	return -1 
  }
  else if((0<bounce)  == true && (bounce < 1) == true){
	console.log("bounce is less than 0 or more than 1")
	return -1
  }else if (window > h){
  	console.log("bounce is less than 0 or more than 1")
  	return -1 
  }

}


 console.log(bouncingBall(3,.5,1.5))