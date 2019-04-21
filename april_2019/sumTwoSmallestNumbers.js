/*Create a function that returns the sum of the two lowest positive numbers given an 
array of minimum 4 integers. No floats or empty arrays will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455. */


testArry =[19,5,42,1]


function sumTwoSmallestNumbers(numbers) {  
  //Code here
     let tempArry = numbers;
     let addedMinValue = 0;
//This loops takes the 2 smallest values out of the temporary array and adds tem
     while(tempArry.length > 2){ 
        addedMinValue += parseInt(tempArry.splice(tempArry.indexOf(Math.min(...tempArry)),1))
      }

   

     return addedMinValue

};




console.log(sumTwoSmallestNumbers(testArry))



//Best Practices Answer

function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};