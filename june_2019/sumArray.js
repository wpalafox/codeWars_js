 /* Sum all the numbers of the array (in F# and Haskell you get a list)
  except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, 
even if there are more than one with the same value!) */






 var sumArray = (array) => {
 	if(array === 1 || array === 0 || array === null){
 		return 0
 	}else{ 


 	let sortedArr = array.sort(function(a, b) {return a-b});
 	console.log(sortedArr)
 	sortedArr.splice(0,1)
 	console.log(sortedArr)
 	sortedArr.splice(-1,1)
 	console.log(sortedArr)

 	let sum = 0;

 	for(i=0;i<sortedArr.length;i++){
 		sum += sortedArr[i]


 	}

 	return sum

 }

}



console.log(sumArray([6,2,1,8,10]))