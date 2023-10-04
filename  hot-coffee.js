// hot-coffee.js
const hotCoffeeContainer = document.querySelector("#hot-coffee-container");

// Function to fetch and display hot coffee data
async function fetchHotCoffeeData() {
    try {
        const response = await fetch("https://api.sampleapis.com/coffee/hot");
        const data = await response.json();

        // Display the data on the page
        // Customize the code to format and display the data as per your requirements
        hotCoffeeContainer.innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error("Error fetching hot coffee data:", error);
    }
}

// Call the fetchHotCoffeeData function when the page loads
window.addEventListener("load", fetchHotCoffeeData);
