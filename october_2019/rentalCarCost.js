

var rentalCarCost = (d) => {
	
	console.log(d)
	cost=0;

	for(i=0;i<d;i++){
		cost+=40
	}

	if((40*3)<=cost<=(40*7))
	{
		cost = cost - 20; 
	}
	else if((40*7)<=cost)
	{
		cost = cost - 50;
	}
	else{
		console.log("no discount")
	}
	
	
	return cost

}



console.log(rentalCarCost(7));