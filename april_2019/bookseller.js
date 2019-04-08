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

 stockList = (listOfArt, listOfCat) => {
  // ... 
  array=[]

  for(i=0;i<listOfCat.length;i++){
  	array.push(listOfCat[i])

  }
  console.log(array)

};


stockList([1,2,3], ["A", "B"])
















