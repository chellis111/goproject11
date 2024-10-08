# Insertion Sort Algorithm

This document provides an implementation of the insertion sort algorithm in JavaScript.

## Function Definition

```javascript
/**
 * Sorts an array of numbers using the insertion sort algorithm.
 *
 * @param {Array} arr - The array of numbers to be sorted.
 * @returns {Array} - The sorted array.
 */
function insertionSort(arr) {
  // Check if array is empty or consists of one element
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements of array greater than key,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key; // Place the key in its correct position
  }

  return arr;
}
```

## Example Usage

```javascript
let arr = [13, 5, 7, 9, 1, 4, 3, 8, 6];
console.log("Sorted array", insertionSort(arr)); // Output: [1, 3, 4, 5, 6, 7, 8, 9, 13]
```

## Explanation

1. **Initial Check**: The function first checks if the array is empty or has only one element. If so, it returns the array as it is already sorted.
2. **Outer Loop**: The outer loop iterates over each element starting from the second element.
3. **Inner Loop**: The inner loop shifts elements that are greater than the key to one position ahead.
4. **Placement**: The key is then placed in its correct position in the sorted part of the array.

This algorithm has a time complexity of O(n^2) in the worst case, making it less efficient for large datasets compared to more advanced algorithms like quicksort or mergesort. However, it is simple and efficient for small datasets or nearly sorted arrays.
