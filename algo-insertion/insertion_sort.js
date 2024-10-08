// @param {Array} arr  // The array of numbers to be sorted
// @returns {Array}  // The sorted array

function insertionSort(arr) {
    // Check if array is empty or consists of elements
    if (arr.length <= 1) {
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of array greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) { // Corrected the condition here
            arr[j + 1] = arr[j]; // Fixed the assignment here
            j = j - 1;
        }

        arr[j + 1] = key; // Place the key in its correct position
    }

    return arr;
} 

let arr = [13, 5, 7, 9, 1, 4, 3, 8, 6];

console.log("Sorted array",insertionSort(arr)); // Output: [1, 3, 4, 5, 6, 7, 8, 9, 13]
