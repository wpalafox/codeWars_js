/*For example, if we run 9119 through the function, 
811181 will come out, 
because 92 is 81 and 12 is 1.*/


var squareDigits = (n) => {
	//create an array of number
	let number = n;
	let result = 0;
	let digits = (""+number).split("");
	
	const map1 = digits.map(x => x*x)

	const joinMap = map1.join("")

	return joinMap
}


console.log(squareDigits(9119))




/*
for(let i=0;i<n.length;i++){
		let Num = parseInt(digits[i])
		console.log("Parse In is "+Num)
		let squareNum = Num*Num
		console.log("Squared Num is "+squareNumbb)
		result += squareNum
	}
	*/