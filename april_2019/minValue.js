/* Task
Given a list of digits, return the smallest number 
that could be formed from these digits, 
using the digits only once ( ignore duplicates). */



function minValue(values){
  //your code here  

//Create a blank variable to hold the min value 
//loop through the array of numbers and place the lowest number in the 0th position of minValue 
//This means you may have to turn it into an array and then back into a number to return 

//Idea: keep removing values from a temporary array, and finding the minimum value, then pushing
// the minimum value into the minValue array. No duplicates. 
	
	minValueArry=[]
	
	tempArray=values.sort()

	
	minValue[0] = Math.min(...tempArray)


	//This will check whether the value already exists in our minValue array
	
	for(i=0;i<values.length;i++){
		if(minValueArry.includes(tempArray[i])){
			console.log("Value already included")

		}else if(minValueArry.includes(tempArray[i]) === false){
			
			//Push the minimum value in the min value array 
			minValueArry.push(tempArray[i])

			
		}else
		{

			console.log("error")

		}

	}

	return parseInt(minValueArry.join(""))



}

console.log(minValue([6,4,2,2,1]))