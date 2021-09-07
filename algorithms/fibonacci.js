// Based on master theorem by dividing the biggest problem into smaller subproblems

function calculateFibonacci(number) {
	// First stop function
	if (number == 1) return 1;

	// Second stop function
	if (number == 0) return 0;

	// Recursive function
	return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
}