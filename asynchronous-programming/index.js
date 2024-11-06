// Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.
async function iterateWithAsyncAwait(values) {
    for (let value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
        console.log(value);
    }
};

// Usage example
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);



// Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message
async function awaitCall() {
    try {
        const response = await someApiCall(); // Assume someApiCall is the async API function
        console.log("API call successful:", response);
        return response; // Returning the response in case further use is needed
    } catch (error) {
        console.error("An error occurred while fetching data. Please try again later.");
        console.error("Error details:", error.message); // Logs the actual error message for debugging
    }
};


// Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.
async function awaitCall() {
    // Simulate an API call with a delay
    const fetchData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: "Sample API data" });
            }, 2000); // 2-second delay to simulate fetching data
        });
    };

    // Await the simulated API response
    const response = await fetchData();
    console.log("API response:", response.data);
}

// Example usage
awaitCall();


