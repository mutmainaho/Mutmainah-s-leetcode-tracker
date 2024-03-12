function binarySearch(num, target) {
  let l = 0; //starting from the frist number in the list
  let r = num.length - 1; //starting from last number in the list
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (num[mid] === target) {
      return mid;
    } else if (num[mid] < target) {
      l = l + 1;
    } else {
      r = r - 1;
    }
  }
  return -1;
}
