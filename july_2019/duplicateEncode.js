/* Covert a string to a new string 
Rules:
1. Character in new string is '(' if that character appears only once
in the original string 

2. Character in new string is ')' if that character appears more than once
in the original string. 

Ignore Capitalization.
*/ 


var duplicateEncode = (word) => {
	let tempWord = word.toLowerCase().split("")
	let response = []
	//take letter out of temp word, then check if letter still exists in
	//temp word

	for(i=0;i<word.length;i++){
		let checkedLetter = tempWord[i]
		tempWord.splice(i, 1)

		if(tempWord.includes(checkedLetter) === true){
			console.log("This word includes more than 1 "+String(checkedLetter))

		}else{
			console.log("This word only has 1 "+String(checkedLetter))
		}

	}


}

console.log(duplicateEncode('recede'))
