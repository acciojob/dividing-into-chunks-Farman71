const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
	let chunk = [];
	let result = [];
	let sum = 0;

	for(let i = 0; i < arr.length; i++) {
		if(sum + arr[i] <= n) {
			chunk.push(arr[i]);
			sum += arr[i];
		} else {
			result.push(chunk);
			chunk = [arr[i]];
			sum = arr[i];
		}
	}
	
	// Push the last chunk into the result
	if (chunk.length > 0) {
		result.push(chunk);
	}

	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));