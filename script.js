document.addEventListener("DOMContentLoaded", function () {
    const photoContainer = document.getElementById("photoContainer");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
  
    function fetchAndReplacePhotos() {
      // Clear the existing content of the photo container
      photoContainer.innerHTML = "";
  
      // Fetch 4 random photos from the API
      for (let i = 0; i < 4; i++) {
        fetch("https://picsum.photos/200/300")
          .then((response) => {
            if (response.ok) {
              return response.url;
            } else {
              throw new Error("Failed to fetch photo");
            }
          })
          .then((photoUrl) => {
            // Create an image element and append it to the container
            const img = document.createElement("img");
            img.src = photoUrl;
            img.alt = "Random Photo";
            photoContainer.appendChild(img);
          })
          .catch((error) => console.error(error));
      }
    }
  
    // Initial load of photos
    fetchAndReplacePhotos();
  
    // Load more photos when the button is clicked
    loadMoreBtn.addEventListener("click", function () {
      fetchAndReplacePhotos();
    });
  });