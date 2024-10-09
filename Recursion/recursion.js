// function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

function isLeapYear(year) {
    let isLeap;

    // using if-else statement to determine if its a leap year
    if (year % 4 === 0){
        if (year % 100 === 0) {
            // if divisible by 100 and 400
            if (year % 400 === 0) {
                isLeap = true; //leap year
            } else {
                isLeap = false; //not a leap year
            }
        } else {
            isLeap = true; // leap year
        }
    } else {
        isLeap = false; // not a leap year
    }

    // Using switch to return result
    switch (isLeap) {
        case true:
            return `${year} is a leap year.`;
        case false:
            return `${year} is not a leap year.`;
    }
}



// program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria

// Function to determine movie ticket price based on age
function movieTicketPrice(age) {
    let ticketPrice;

    // Determine the ticket price based on the user's age
    if (age <= 12) {
        ticketPrice = 10;
    } else if (age >= 13 && age <= 17) {
        ticketPrice = 15;
    } else if (age >= 18) {
        ticketPrice = 20;
    } else {
        console.log("INVALID AGE");
        return;
    }

    // Display the ticket price
    // console.log(`Ticket price is $${ticketPrice}.`);
}

// Call the function with different age values to determine the movie ticket price
// movieTicketPrice(15); // Output: Ticket price is $15.
// movieTicketPrice(10); // Output: Ticket price is $10.
// movieTicketPrice(18); // Output: Ticket price is $20.
// movieTicketPrice(-5); // Output: INVALID AGE







// Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).
function fibonacci(n) {
    if (n <= 0) {
        return 0; // Base case for fib(0)
    } else if (n === 1) {
        return 1; // Base case for fib(1)
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
    }
}

// Example usage
// console.log(fibonacci(5)); // Output: 5
// console.log(fibonacci(10)); // Output: 55





// Power Function: Write a recursive function to calculate the result of raising a number to a given power.
function power(base, exponent) {
    // Base case
    if (exponent === 0) {
        return 1; // Any number raised to the power of 0 is 1
    } else if (exponent < 0) {
        return 1 / power(base, -exponent); // Handle negative exponents
    } else {
        return base * power(base, exponent - 1); // Recursive case
    }
  }
  
  // Example usage
//   console.log(power(2, 3)); // Output: 8
//   console.log(power(5, 0)); // Output: 1
//   console.log(power(2, -2)); // Output: 0.25