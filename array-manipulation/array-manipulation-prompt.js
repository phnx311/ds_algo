// Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in your array.
//Input Format
//n size of the zero array
//array of arrays, each array of format [a,b,k]
//   Constraints
// 3 <= n <= 10^7 //size of the zero , 1 indexed array
// 1 <= m <= 2*10^5 //the number of arrays
// 1 <= a <= b <= n; indexes of zero array
// 0 <= k <= 10^9 ; the vale to add at that index
// Output Format
// Return the integer maximum value in the finished array.

function arrayManipulation() {
  var arr = [];
  var max = 0;
  // init each element of arr to 0
  for (let l = 0; l < n; l++) {
    arr[l] = 0;
  }
  // for each sum operation in queries
  for (let i = 0; i < queries.length; i++) {
    // update arr with number to add at index=queries[i][0]  and number to remove at index=queries[i][0]+1 => this will allow us to build each element of the final array by summing all elements before it. The aim of this trick is to lower time complexity
    arr[queries[i][0] - 1] += queries[i][2];
    if (queries[i][1] < arr.length) {
      arr[queries[i][1]] -= queries[i][2];
    }
  }
  for (let j = 1; j < n; j++) {
    arr[j] += arr[j - 1];
  }
  for (let k = 0; k < arr.length; k++) {
    max = Math.max(max, arr[k]);
  }
  //max = Math.max(...arr); // not working for big arrays
  return max;
}

arrayManipulation([[1,2,100], [2,5,100], [3,4,100]]) // should return 200