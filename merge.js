function merge(arrA, arrB) {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < arrA.length && j < arrB.length) {
    if (arrB[j] > arrA[i]) {
      results.push(arrA[i]);
      i++;
    } else {
      results.push(arrB[j]);
      j++;
    }
  }

  while (i < arrA.length) {
    results.push(arrA[i]);
    i++;
  }

  while (j < arrB.length) {
    results.push(arrB[j]);
    j++;
  }

  return res;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

module.exports = { merge, mergeSort };
