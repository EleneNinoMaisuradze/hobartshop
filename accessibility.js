document.addEventListener('DOMContentLoaded', () => {
    const contrastToggle = document.getElementById('contrastToggle');
    const fontSizeRange = document.getElementById('fontSizeRange');
    const dyslexicToggle = document.getElementById('dyslexicToggle');
    const body = document.body;
  
    // Contrast toggle
    contrastToggle.addEventListener('change', () => {
      body.classList.toggle('high-contrast', contrastToggle.checked);
    });
  
    // Font size slider
    fontSizeRange.addEventListener('input', () => {
      const size = fontSizeRange.value;
      body.style.fontSize = size + 'px';
    });
  
    // Dyslexic font toggle
    dyslexicToggle.addEventListener('change', () => {
      body.classList.toggle('dyslexic-font', dyslexicToggle.checked);
    });
  });
  