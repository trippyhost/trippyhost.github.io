document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const input = document.getElementById('imageInput');
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageContainer = document.getElementById('imageContainer');
            const img = document.createElement('img');
            img.src = e.target.result;
            imageContainer.innerHTML = ''; // Clear previous images
            imageContainer.appendChild(img);

            // Create shareable link
            const link = document.createElement('a');
            link.href = e.target.result;
            link.textContent = "Shareable Link";
            link.target = "_blank";
            imageContainer.appendChild(link);
        };
        reader.readAsDataURL(file);
    }
});
