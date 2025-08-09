document.addEventListener('DOMContentLoaded', () => {
  const contrastToggle = document.getElementById('contrastToggle') as HTMLInputElement | null;
  const fontSizeRange = document.getElementById('fontSizeRange') as HTMLInputElement | null;
  const dyslexicToggle = document.getElementById('dyslexicToggle') as HTMLInputElement | null;
  const body = document.body;

  // Contrast toggle
  if (contrastToggle) {
    contrastToggle.addEventListener('change', () => {
      body.classList.toggle('high-contrast', contrastToggle.checked);
    });
  }

  // Font size slider
  if (fontSizeRange) {
    fontSizeRange.addEventListener('input', () => {
      const size = parseInt(fontSizeRange.value, 10);
      if (size >= 12 && size <= 36) { // უსაფრთხო ზომის დიაპაზონი
        body.style.fontSize = `${size}px`;
      }
    });
  }

  // Dyslexic font toggle
  if (dyslexicToggle) {
    dyslexicToggle.addEventListener('change', () => {
      body.classList.toggle('dyslexic-font', dyslexicToggle.checked);
    });
  }

  // Accessibility panel keyboard navigation and toggle
  const accessibilityBtn = document.querySelector('.accessibility-btn') as HTMLButtonElement | null;
  const accessibilityPanel = document.getElementById('accessibilityPanel') as HTMLElement | null;

  if (accessibilityBtn && accessibilityPanel) {
    accessibilityBtn.addEventListener('click', () => {
      const isVisible = accessibilityPanel.style.display === 'block';
      accessibilityPanel.style.display = isVisible ? 'none' : 'block';
      if (!isVisible) {
        accessibilityPanel.setAttribute('tabindex', '-1');
        accessibilityPanel.focus();
      }
    });

    accessibilityBtn.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); // გადაშლას არ დააბრუნებს გვერდის სქროლს
        accessibilityBtn.click();
      }
    });

    // Accessibility panel-ის დამალვა ESC ღილაკზე
    accessibilityPanel.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        accessibilityPanel.style.display = 'none';
        accessibilityBtn.focus();
      }
    });
  }
});
