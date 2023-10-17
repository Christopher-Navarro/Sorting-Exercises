function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let curValue = arr[i];

    for (var j = i - 1; j > -1 && arr[j] > curValue; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = curValue;
  }

  return arr;
}

module.exports = insertionSort;
