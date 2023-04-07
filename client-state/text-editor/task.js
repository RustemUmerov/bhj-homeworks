const editor = document.getElementById('editor');
editor.value = localStorage.getItem('editorValue');
editor.addEventListener('input', () => {
  localStorage.setItem('editorValue', editor.value);
});
