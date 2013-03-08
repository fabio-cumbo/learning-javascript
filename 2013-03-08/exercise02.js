console.log("EXERCISE02");
function functionNumber2(n) {
	
	var arr = [];

	var compare = function (value1, value2) {
		return value1 - value2;
	};
	
	for (var i = 1; i<=n; i++) {
		arr.push(Math.random(i));
	}
	
	arr = arr.filter(function(item, index, array){ 
		return (item % 2 !== 0);
	}).sort(compare);
	
return arr;
}