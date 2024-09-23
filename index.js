// Remove the <main> element with id 'main'
document.getElementById('main').remove();

// Create a new <h1> element and set its id to 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Set the text content of the newHeader
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your actual name

// Append the newHeader to the body
document.body.appendChild(newHeader);
