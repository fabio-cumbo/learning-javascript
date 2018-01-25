console.log("EXERCISE01");

function functionNumber1(n) {
	var arr = [];
	for (var i = 1; i<=n; i++) {
		arr.push(i);
	}
	
	arr = arr.filter(function(item){
		return (item % 2 === 0);
	});
	arr = arr.map(function(item){
		return item * 2;
	});
	arr = arr.filter(function(item){
		return (item % 4 === 0);
   	});
	arr = arr.reduce(function(prev, cur){
		return prev + cur;
	});

	return arr;
}
