console.log("EXERCISE01");

 var mat = "";
 for (var i=1; i<=10; i+=1) {
 	for (var j=1; j<=10; j+=1) {
 		if (j===10) {
 			mat += (i*j) + "\t";
 		}
 		else {
 			mat += (i*j) + ",\t";
 		}
 	}
 	mat += "\n";
 }
 
console.log(mat);