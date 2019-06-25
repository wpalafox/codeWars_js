
/*
Every week (Friday and Saturday night), the farmer and his son count amount of 
sheep returned to the yard of their farm. They count sheep on Friday night, 
the same goes for Saturday (suppose that sheep returned on Friday are not feeding 
back on hills on Saturday). As sheep are not coming in one flock, you will be 
given two arrays (one for each night) representing number of sheep as they were 
returning to the yard during the evenings (entries are positive ints, higher than zero).
Farmer and his son know the total amount of their sheep, you will be given this number as third parameter.
Your goal is to calculate the amount of sheep lost (not returned) to the farm after Saturday night counting.

Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5

Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6

Good luck! :-)


*/

var lostSheep = (friday,saturday,total) =>{
  //your code here
	let sumSheep=0; 
	let flock=total

//friday loop
	for(i=0;i<friday.length;i++){
		sumSheep += friday[i]
	}


//saturday loop
	for(i=0;i<saturday.length;i++){
		sumSheep += saturday[i]
	}

//sheep lost calculation 
	let lostSheep = flock-sumSheep

	return lostSheep

}



console.log(lostSheep([1,2],[3,4],15))
