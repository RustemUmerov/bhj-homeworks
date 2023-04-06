 const fileInput = document.getElementById('file');
  const progress = document.getElementById('progress');
  
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://example.com/upload');
    xhr.upload.addEventListener('progress', (event) => {
      const percent = (event.loaded / event.total) * 100;
      progress.value = percent;
    });
    xhr.send(formData);
  });
