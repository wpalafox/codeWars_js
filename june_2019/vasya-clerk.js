/*New avengers movie release. Each person in line has a single 100, 50 or 25 
Vasya is currently working as a clerk. He wants to sell a ticket to every single 
person in this line. Can Vasya sell a ticket to each person and give the change 
if he initially has no money and sells the tickets strictly in the order people 
follow in the line? Return YES, if Vasya can sell a ticket to each person and 
give the change with the bills he has at hand at that moment. Otherwise return 
NO. */ 


function tickets(peopleInLine){
  //Keep track of number of bills collect
  let twentyFive=0;
  let fifty=0;
  let hundred=0; 
  //Keep track of state of vasya 
  let vasyaSays = "";


  for(let i =0; i<peopleInLine.length;i++){
  	if(peopleInLine[i] === 25){
  		console.log(peopleInLine[i])
  		vasyaSays = "YES"
  		twentyFive +=1 
  	}else if(peopleInLine[i] === 50){
  		console.log(peopleInLine[i])
  		if(twentyFive > 0){
  			vasyaSays = "YES"
  			fifty += 1 
  			console.log("Fifty count +1")
  			twentyFive -= 1 
  			console.log("twentyFive count -1")
  		}else{
  			vasyaSays = "NO"
  			return vasyaSays
  		}
  	}else if(peopleInLine[i] === 100){
  		console.log(peopleInLine[i])
  		if((fifty>0)&&(twentyFive>0)){
  			vasyaSays = "YES"
  			fifty -= 1
  			console.log("fifty count -1")
  			twentyFive -= 1
  			console.log("twentyFive count -1")
  		}else if(twentyFive > 2){
  			vasyaSays = "YES"
  			twentyFive -= 3

  		}
		else{
  			vasyaSays = "NO"
  			return vasyaSays
  		}

  	}

  

}
return vasyaSays

}


console.log(tickets([25,25,50,50]))
console.log(tickets([25,100]))

