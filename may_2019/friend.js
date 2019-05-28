
/*
function friend(friends){
  //your code here
}

*/ 
persons =  ["Ryan", "Kieran", "Jason", "Yous"]

const friend = (friends) => {     
	
	const result = friends.filter(person => person.length == 4);
	
	return result 

}

console.log(friend(persons))