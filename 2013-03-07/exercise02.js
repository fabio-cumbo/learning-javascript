function fibonacci (n) {
  if (!(n in fibonacci)) {
    fibonacci[n] = fibonacci(n-2) + fibonacci(n-1); 
  }
  return fibonacci[n];
}
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

var fib = "";
for (var i=1; i<=10; i++) {
	fib += fibonacci(i) + "\t";
}
console.log(fib);