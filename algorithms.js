function findMax(array) {
  return array.length === 0
    ? undefined
    : array.reduce((prev, cur) => (cur > prev ? cur : prev), array[0]);
}

function filter(array) {
  return array.filter(value => value);
}

function binarySearch(needle, array) {
  let start = 0;
  let end = array.length - 1;
  while (end >= start) {
    let index = Math.floor((start + end) / 2);
    if (array[index] === needle) {
      return index;
    }
    if (array[index] < needle) {
      start = index + 1;
    }
    if (array[index] > needle) {
      end = index - 1;
    }
  }
}

const array = Array.from(Array(10000).keys());

console.time("10000 elements");
const found = binarySearch(3, array);
console.timeEnd("10000 elements");
console.log(found);
if (found !== undefined) {
  console.log("Found at index: ", found);
} else {
  console.log("Not found");
}
