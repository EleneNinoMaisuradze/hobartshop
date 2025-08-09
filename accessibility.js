document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const contrastToggle = document.getElementById('contrastToggle');
  const fontSizeRange = document.getElementById('fontSizeRange');
  const dyslexicToggle = document.getElementById('dyslexicToggle');
  const accessibilityBtn = document.querySelector('.accessibility-btn');
  const accessibilityPanel = document.getElementById('accessibilityPanel');

  // ფუნქცია კლასი ჩართვა/გამორთვისთვის
  function toggleClass(element, className, condition) {
    if (!element) return;
    element.classList.toggle(className, condition);
  }

  if (contrastToggle) {
    contrastToggle.addEventListener('change', () => {
      toggleClass(body, 'high-contrast', contrastToggle.checked);
      contrastToggle.setAttribute('aria-pressed', contrastToggle.checked);
    });
  }

  if (fontSizeRange) {
    // მინიმუმ, მაქსიმუმ და ც_DEFAULT
    const minSize = parseInt(fontSizeRange.min) || 12;
    const maxSize = parseInt(fontSizeRange.max) || 24;
    const defaultSize = parseInt(fontSizeRange.value) || 16;

    fontSizeRange.addEventListener('input', () => {
      let size = Math.min(Math.max(parseInt(fontSizeRange.value), minSize), maxSize);
      body.style.fontSize = size + 'px';
      fontSizeRange.setAttribute('aria-valuenow', size);
    });

    // სტარტზე დააყენე ზომა
    body.style.fontSize = defaultSize + 'px';
  }

  if (dyslexicToggle) {
    dyslexicToggle.addEventListener('change', () => {
      toggleClass(body, 'dyslexic-font', dyslexicToggle.checked);
      dyslexicToggle.setAttribute('aria-pressed', dyslexicToggle.checked);
    });
  }

  if (accessibilityBtn && accessibilityPanel) {
    accessibilityBtn.setAttribute('aria-expanded', 'false');
    accessibilityPanel.setAttribute('aria-hidden', 'true');
    accessibilityPanel.style.display = 'none';

    accessibilityBtn.addEventListener('click', () => {
      const isVisible = accessibilityPanel.style.display === 'block';
      accessibilityPanel.style.display = isVisible ? 'none' : 'block';
      accessibilityBtn.setAttribute('aria-expanded', !isVisible);
      accessibilityPanel.setAttribute('aria-hidden', isVisible);
      if (!isVisible) {
        accessibilityPanel.setAttribute('tabindex', '-1');
        accessibilityPanel.focus();
      }
    });

    accessibilityBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        accessibilityBtn.click();
      }
    });

    // ფანჯრის ზომის შეცვლისას პანელის დახურვა
    window.addEventListener('resize', () => {
      accessibilityPanel.style.display = 'none';
      accessibilityBtn.setAttribute('aria-expanded', 'false');
      accessibilityPanel.setAttribute('aria-hidden', 'true');
    });
  }
});
