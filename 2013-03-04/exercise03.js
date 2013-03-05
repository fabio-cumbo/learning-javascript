console.log("EXERCISE03");

 var mat = "";
 var diag = 1;
 var oldDiag = 1;
 for (var i=1; i<=10; i+=1) {
 	for (var j=1; j<=10; j+=1) {
 		if (i===j) {
 			if (i===10)
 				mat += "1";
 			else
 				mat += "1,\t";
 		}
 		else {
 			if (j==10)
 				mat += "0";
 			else
 				mat += "0,\t";
 		}
 	}
 	mat += "\n";
 }
 
console.log(mat);