// The following function is an example of an asynchronous function:
function EVAL(func, num) {
	// waits 1 second before returning the result
	return eval(func)(num);
}