window.addEventListener('DOMContentLoaded', (event) => {
    const textarea = document.getElementById('textbox');
    const counter = document.getElementById('counter');
    
    textarea.addEventListener('input', (event) => {
      const text = textarea.value;
      const uniqueChars = countUniqueCharacters(text);
      counter.textContent = `${uniqueChars} unique character${uniqueChars === 1 ? '' : 's'}`;
    });
  });
  
  function countUniqueCharacters(text) {
    const charSet = new Set(text);
    return charSet.size;
  }
  