# Async/Await Examples

This repository contains examples of using async/await for handling asynchronous operations in JavaScript. The examples cover:

1. Iterating with async/await
2. Handling errors with async/await
3. Awaiting a simulated API call

Each function demonstrates a different aspect of async/await usage in JavaScript.

## Functions

### 1. iterateWithAsyncAwait

**Description:** This function takes an array of values and logs each value with a delay of 1 second between logs, showcasing how async/await can control the sequence and timing of asynchronous operations.

Code:

```
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
        console.log(value);
    }
}

// Example usage
iterateWithAsyncAwait([1, 2, 3, 4]);
```

**Usage:** To use this function, call iterateWithAsyncAwait and pass an array of values. Each item in the array will be logged with a 1-second delay.

### 2. awaitCall (Awaiting a Call)

**Description:** This function simulates an API call, waits for the response, and then logs the data. It demonstrates the use of await to handle the completion of an asynchronous operation.

Code:

```
async function awaitCall() {
    const fetchData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: "Sample API data" });
            }, 2000); // 2-second delay to simulate fetching data
        });
    };

    const response = await fetchData();
    console.log("API response:", response.data);
}

// Example usage
awaitCall();
```

**Usage:** Call awaitCall to simulate an asynchronous API request. After a 2-second delay, the function logs a sample response to the console.

## 3. awaitCall (Handling Errors with Async/Await)

**Description:** This modified version of awaitCall includes error handling. If the API call fails, it catches the error and logs a user-friendly error message.

Code:

```
async function awaitCall() {
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("API request failed"));
            }, 2000); // 2-second delay to simulate an API error
        });
    };

    try {
        const response = await fetchData();
        console.log("API response:", response.data);
    } catch (error) {
        console.error("Failed to fetch data:", error.message);
    }
}

// Example usage
awaitCall();
```

**Usage:** Call awaitCall to simulate an API request with error handling. If the request fails, it logs a custom error message to the console.

## Requirements

- Node.js (for running JavaScript code in the terminal)

## Running the Code

1. Clone this repository.
2. Install Node.js (if not already installed).
3. Run the functions by creating a file with the code snippets above and using node filename.js in the terminal.
