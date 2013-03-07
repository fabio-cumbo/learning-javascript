function identity(n) {
	var matrix = "";
	for (var i=0; i<=n; i++) {
		for (var j=0; j<=n; j++) {
			if (i===j)
				matrix += "1\t";
			else
				matrix += "0\t";
		}
		matrix += "\n";
	}
	console.log(matrix);
}

identity(10);