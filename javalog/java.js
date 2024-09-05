// reverse a String: Write a function that reverses a given string.

function reversesString(string) {
    return string.split('').reverse().join('');
}



console.log(reversesString("Good Morning"));

// Count Characters: Create a function that counts the number of characters in a string.

function CountCharacters(string) {
    return string.length;
}


console.log(CountCharacters("Welcome World"));

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

function capitalizeWords(sentence) {
    return sentence
        .split(' ') // Split the sentence into words
        .map(word => {
            // Capitalize the first letter and keep the rest of the word unchanged
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' '); // Join the words back into a sentence
    }

    
console.log(capitalizeWords("Mr ola benson smokes weed and drinks"))

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
// max
function findMax(arr) {
    if (arr.length === 0) return undefined; // Handle empty array
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([1, 4, 55, 92, 66, 10, 1, 5]));

// min
function findMin(arr) {
    if (arr.length === 0) return undefined; // Handle empty array
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(findMin([1, 4, 55, 92, 66, 10, 1, 5]));

// Sum of Array: Create a function that calculates the sum of all elements in an array.

function sumArr(elements) {
    return elements.reduce((prev, next) => prev + next, 0);
}

console.log(sumArr([1, 4, 55, 92, 66, 10, 1, 5]));

// Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterArr(arr, condition) {
    return arr.filter(condition);
}
const numbers = [1, 4, 55, 92, 66, 10, 1, 5];
const oddNumbers = filterArr(numbers, num => num % 2 !== 0)
console.log(oddNumbers);

// Factorial: Write a function to calculate the factorial of a given number.

function factorial(n) {
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers.');
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(10));

// Prime Number Check: Create a function to check if a number is prime or not.

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}

console.log(isPrime(11));

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}

console.log(fibonacci(10));