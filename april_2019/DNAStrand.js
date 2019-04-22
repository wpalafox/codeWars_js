/*Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells 
and carries the "instructions" for the development and functioning of living organisms.
If you want to know more http://en.wikipedia.org/wiki/DNA
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
You have function with one side of the DNA (string, except for Haskell); 
you need to get the other complementary side. DNA strand is never empty or there is no 
DNA at all (again, except for Haskell). More similar exercise are found here 
http://rosalind.info/problems/list-view/ (source)
*/

"use strict";

const DNAStrand = dna => {
  //your code here
  complementary=[]

 for(i=0;i<dna.length;i++){
 	if(dna[i] === "A"){
 		complementary += "T"
 	}
 	else if(dna[i] === "T"){
 		complementary += "A"
 	}
 	else if(dna[i] === "C"){
 		complementary += "G"
 	}
 	else if(dna[i] === "G"){
 		complementary += "C"
 	}
 	else{
 		console.log("Error- not acceptable argument.")
 	}







 }

return complementary


}


//Best Practices 

var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}