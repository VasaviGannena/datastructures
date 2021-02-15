// Complete the bubble sort function to sort array1 in a crescent order.
//array1 = [-5, -8, 12, 8, 35];
const bubbleSortCrescent = (array) => {
  let n = array.length;
  let sorted = true;
  while (sorted) {
    //change sorted value to false
    sorted = false;
    for (let i = 0; i < n; i++) {
      if (array[i] > array[i + 1]) {
        let tempVar = array[i];
        //swap array items
        array[i] = array[i + 1];
        array[i + 1] = tempVar;
        //change sorted value to true
        sorted = true;
      }
    }
  }
  // return the array
  return array;
};

// Complete the bubble sort function to sort array2 in a decrescent order.
//array2 = [26, 15, 33, 76, 8];
const bubbleSortDecrescent = (array) => {
  let n = array.length;
  let sorted = true;
  while (sorted) {
    sorted = false;
    for (let i = 0; i < n; i++) {
      // complete the condition to sort the array in a decrescent order
      if (array[i] < array[i + 1]) {
        let tempVar = array[i];
        //swap array items
        array[i] = array[i + 1];
        array[i + 1] = tempVar;
        sorted = true;
      }
    }
  }
  return array;
};

// Rewrite bubble sort function using do...while loop and sort array 3 in a crescent order.
//array3 = [111, 79, 23, 4, -10];
const bubbleSortDoWhile = (array) => {
  let n = array.length;
  let sorted = true;

  do {
    //code here
    sorted = false;
    for (let i = 0; i < n; i++) {
      if (array[i] < array[i + 1]) {
        let tempVar = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tempVar;
        sorted = true;
      }
    }
  } while (sorted);
  return array;
};

const array1 = [-5, -8, 12, 8, 35];
//call function bubbleSortCrescent
bubbleSortCrescent(array1);
//log array1
console.log(array1);

const array2 = [26, 15, 33, 76, 8];
//call function bubbleSortDecrescent
bubbleSortDecrescent(array2);
//log array2
console.log(array2);

const array3 = [111, 79, 23, 4, -10];
//call function bubbleSortDoWhile
bubbleSortDoWhile(array3);
//log array3
console.log(array3);
