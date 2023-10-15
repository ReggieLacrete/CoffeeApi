// hot-coffee.js

// Create a function to fetch and render content
function fetchAndRenderContent() {
    // Fetch data from your API or source
    fetch('https://api.sampleapis.com/coffee/hot')
      .then((response) => response.json())
      .then((data) => {
        // Create and populate your content
        const content = document.createElement('div');
        content.innerHTML = `
          <h2>Hot Coffee</h2>
          <p>Description: ${data.description}</p>
          <!-- Add more content as needed -->
        `;
  
        // Get the container element and append the content
        const container = document.querySelector('.container');
        container.appendChild(content);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Call the fetchAndRenderContent function when the page loads
  window.addEventListener('load', fetchAndRenderContent);
  