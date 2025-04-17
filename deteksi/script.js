function showNotification(message) {
  var notif = document.getElementById("notification");
  var messageElem = document.getElementById("notificationMessage");
  
  messageElem.innerText = message;
  notif.classList.add("show");

  // Hide the notification after 3 seconds
  setTimeout(function() {
    notif.classList.remove("show");
  }, 3000);
}

// Function to add a new image to the grid
function addImageToGrid(imageSrc) {
  const imageContainer = document.getElementById("imagesGrid");

  // Create a new image element
  const img = document.createElement("img");
  img.src = imageSrc + "?t=" + new Date().getTime(); // Prevent cache issues
  img.alt = "Hasil Deteksi";
  
  // Add the new image to the grid
  imageContainer.appendChild(img);
}

// Update image every 3 seconds
setInterval(() => {
  // Add new image to the grid
  addImageToGrid("images/latest.jpg");
  
  // Show notification
  showNotification("Gambar diperbarui!");
}, 3000); // Update every 3 seconds
