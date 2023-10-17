function findMax(arr) {
  let max = 0;
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

function radixSort(arr) {
  if (arr.length === 0) {
    return arr;
  }

  const max = findMax(arr);
  const maxDigits = String(max).length;

  for (let digitPlace = 0; digitPlace < maxDigits; digitPlace++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let num of arr) {
      const digit = Math.floor((num / Math.pow(10, digitPlace)) % 10);
      buckets[digit].push(num);
    }
    arr = [].concat(...buckets);
  }

  return arr;
}

module.exports = { findMax, radixSort };
