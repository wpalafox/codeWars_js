/* Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times. */ 

//Psuedocode 

//1.if the counter does not already exist.
//2. Go through the array, for each element, create a new dedicated counter.


function findOdd(A) {
  //happy coding!
  
//Simple solution: run two nested loops. The outer loop picks all the elements
//one by one and the inner loop counts number of occurrences of the element 
//picked up by the outer loop 

  let Arry = A; 

  for(let i=0;i<Arry.length;i++){
  	let count=0
  	
  	for(let j=0;j<Arry.length;j++){
  		if(Arry[i] ==Arry[j]){
  			count +=1 
	}
	}
	if (count%2!= 0){
		return Arry[i]
  	}
  }

} 


console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))