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
            imageContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
