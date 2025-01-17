const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
  // Write your code here
	let chunk=[];
	let result = [];
	let sum=0

for(i=0;i<arr.length;i++)
{
  if(sum+arr[i]<=n)
  {
    chunk.push(arr[i]);
    sum=sum+arr[i];
    console.log("sum ",sum);
    console.log("Chunk",chunk);
    console.log("Array ",arr[i]);
  }
   else {
            result.push(chunk);
            console.log("Chunk 2 ",chunk);
            console.log("Result ",chunk);
            chunk = [arr[i]];
            sum = arr[i];
        }
}
if (chunk.length > 0) {
        result.push(chunk);
    }

console.log(result)
};
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

