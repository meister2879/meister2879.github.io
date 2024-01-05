let currentPhotoIndex = 0;
const photoUrls = [
  "https://images.unsplash.com/photo-1527383418406-f85a3b146499?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1429772011165-0c2e054367b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyJTIwcGFydHN8ZW58MHx8MHx8fDA%3D"
];

function changePhoto(direction) {
  if (direction === "next") {
    currentPhotoIndex = (currentPhotoIndex + 1) % photoUrls.length;
  } else if (direction === "prev") {
    currentPhotoIndex =
      (currentPhotoIndex - 1 + photoUrls.length) % photoUrls.length;
  }

  const heroImage = document.getElementById("heroImage");
  heroImage.src = photoUrls[currentPhotoIndex];
}

/* Existing scripts below */
// Your existing JavaScript code

// Function to change the photo automatically
function changePhotoAutomatically() {
    changePhoto('next'); // Change to the next photo
  }
  
  // Set up a timer to call the changePhotoAutomatically function every 5 seconds (5000 milliseconds)
  setInterval(changePhotoAutomatically, 5000);
  
  // Your existing JavaScript code
  