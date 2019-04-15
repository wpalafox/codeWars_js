/* A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. 
Each book has a code c of 3, 4, 5 or more capitals letters. 
The 1st letter of a code is the capital letter of the book category. 
In the bookseller's stocklist each code c is followed by a space and by a 
positive integer n (int n >= 0) which indicates the quantity of books of 
this code in stock.

For example an extract of one of the stocklists could be: 

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.

or

L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....


You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

M = {"A", "B", "C", "W"} 

or

 M = ["A", "B", "C", "W"] or ...

 where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 
 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to 
 category 'W' since there are no code beginning with W.

If L or M are empty return string is "" (Clojure should return an empty array instead).
*/

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]

 stockList = (listOfArt, listOfCat) => {
  // ... 
//Might need these later: 
//How to compare and extract the first letter 
//if (c[0] == b[0].charAt(0)){return console.log(c[0]+"+1")}
//How to parse the integer from a string: parseInt




let myCodes = {}
//Creating the object with key:value pairs 

for(let i=0;i<c.length;i++){
	myCodes.push(c[i])
	console.log(myCodes)


}
//Adding to the

for(let i=0;i<b.length;i++){
	
	if (c[0] == b[i].charAt(0))
		{/*create variable counter */
		   console.log("test")

									}
	else if(c[1] == b[i].charAt(0))
		{/*create variable counter */

				console.log("test")					}
	}


};


stockList(b, c)



//Pseudo Code.
//
//
//2. Compare element to each first letter in B array
//2a. Take each C array element and create a value for each  
//3. If they match, extract stock number, starting from 5th position
//4. Add the stock number to the previously created values
//5. Once complete, return values and associated stock numbers, return a string (in Haskell/Clojure)











