/*Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59) */


var humanReadable = (seconds) => {
	//Total time (in seconds)
	const totalTime = seconds;
	let result = '';
	
	if(totalTime < 60){
		result += '00:00:'+totalTime
	}
	else if(totalTime >= 60 && totalTime < 3600){
		result += "00:"
		
		let minutes = Math.floor((totalTime/60))
			if(minutes.length<2){
				result+="0"+minutes+":"
			}else if(minutes.length > 1){
				result+=minutes+":"
			}

		let seconds = totalTime - (minutes*60)
			if(seconds.length<2){
				result+="0"+seconds
			}else if (seconds.length >1){
				result+=seconds
			}
		}

	return result

}


//console.log("minutes: "+humanReadable(120))
console.log(humanReadable(60))

