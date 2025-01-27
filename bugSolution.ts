function printNumbers(n: number): void {
  if (n <= 0) {
    console.error('Input must be a positive number.');
    return; 
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Prints 1 to 5
printNumbers(-5); // Prints an error message
printNumbers(0); // Prints an error message