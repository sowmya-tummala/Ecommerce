const beforeImageInput = document.getElementById('before-image');
const beforePreview = document.getElementById('before-preview');
const afterImageInput = document.getElementById('after-image');
const afterPreview = document.getElementById('after-preview');

beforeImageInput.addEventListener('change', function () {
  showPreview(this, beforePreview);
});

afterImageInput.addEventListener('change', function () {
  showPreview(this, afterPreview);
});

function showPreview(input, previewElement) {
  previewElement.innerHTML = '';
  const files = input.files;
  
  for (const file of files) {
    const previewItem = document.createElement('div');
    previewItem.className = 'preview-item';
    
    if (file.type.startsWith('image')) {
      const image = document.createElement('img');
      image.src = URL.createObjectURL(file);
      image.alt = 'Preview';
      previewItem.appendChild(image);
    } else if (file.type.startsWith('video')) {
      const video = document.createElement('video');
      video.src = URL.createObjectURL(file);
      video.controls = true;
      previewItem.appendChild(video);
    }
    
    previewElement.appendChild(previewItem);
  }
}
