const mergeSort = (arr) => {
	if (arr.length === 1) return arr;

	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid, arr.length);

	return merge(mergeSort(left), mergeSort(right));
}

const merge = (leftArr, rightArr) => {
  let result = [];

  i = 0; // leftArr index
  j = 0; // rightArr index

  while (i < leftArr.length && j < rightArr.length){
    if (leftArr[i] < rightArr[j]){
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
  }

  // Copying the remaining elements
	while (i < leftArr.length) {
		result.push(leftArr[i]);
		i++;
	}

	while (j < rightArr.length) {
		result.push(rightArr[j]);
		j++;
	}

	return result;
}

console.log(merge([1,3,7,8], [0,4,5,6]))
console.log(merge([1,3,7,8], [0,4,6,9]))

console.log(mergeSort([123,1234,98,1,89,23,8,12]))
