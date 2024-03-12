/* 
so i basically would be designing a resizable array which has diffrent operations 
which would start by having a class function to have all the operations

The fill() method is used to change the elements of the array to a static value from the initial index (by default 0) to the end index (by default array.length).

for the class construtor it would have the capacity, the length which starts at 0
and the arr that has 0 but then changes when a value is inserted into the arr
Operations done are
- get: check if value is in the arr if yes return value and if no return false
-set: set a value a new value into the arr
- pushback: this operation is basically taking a value from tha arr then making it the last element
check if capcity is equal to length and return d size
-pop: this is deleting a value from the arr 
check if size/length is > 0,then reduce the length and then return the length of the arr
-resize: here the capacity is doubled which would has a new arr and then loop thru the the length to assign a new arr
-getsize: to get the length of the array
-getcapacity: get the capcacity.
*/

class DynamicArray {
  constructor(capicity) {
    this.capacity = capicity;
    this.length = 0;
    this.arr = new Array(this.capacity).fill(0);
  }
  //t=> O(1) S=> O(1)
  get(i) {
    return this.arr[i];
  }
  //t=> O(1) S=> O(1)
  insert(i, n) {
    return (this.arr[i] = n);
  }
  //t=>  O(1) S=> O(1)
  // TC is o(1) because of the resizeable function which already created space
  pushback(n) {
    if (this.capacity === this.length) {
      this.resize();
    }
    this.arr[this.length] = n;
    this.length++;
  }
  //t=> O(1) S=> O(1)
  pop() {
    if (this.length > 0) {
      this.length--;
    }
    return this.arr[this.length];
  }
  //t=> O(N) S=> O(N)
  resize() {
    this.capacity *= 2;
    let newArr = new Array(this.capacity).fill(0);
    for (let i = 0; i < this.length; i++) {
      this.newArr[i] = this.arr[i];
    }
    this.arr = newArr;
  }
  //t=> O(1) S=> O(1)
  getSize() {
    return this.length;
  }
  //t=> O(1) S=> O(1)
  getCapacity() {
    return this.capacity;
  }
}
