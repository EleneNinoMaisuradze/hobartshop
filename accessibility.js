document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  // ელემენტები
  const accessibilityBtn = document.querySelector('.accessibility-btn');
  const accessibilityPanel = document.getElementById('accessibilityPanel');

  // შემოგვაქვს პანელი, თუ არ არსებობს (სასურველია HTML-ში იყოს, თუ არ გაქვს, აქ შევქმნათ)
  if (!accessibilityPanel) {
    const panel = document.createElement('div');
    panel.id = 'accessibilityPanel';
    panel.innerHTML = `
      <h3>Accessibility პარამეტრები</h3>
      <label>
        <input type="checkbox" id="contrastToggle" /> მაღალი კონტრასტი
      </label>
      <label>
        ტექსტის ზომა
        <input type="range" id="fontSizeRange" min="12" max="24" value="16" />
      </label>
      <label>
        <input type="checkbox" id="dyslexicToggle" /> დისპლექსიური შრიფტი
      </label>
      <button id="closeAccessibilityPanel" aria-label="დახურვა">დახურვა</button>
    `;
    panel.style.position = 'fixed';
    panel.style.bottom = '70px';
    panel.style.right = '20px';
    panel.style.backgroundColor = '#fff';
    panel.style.border = '1px solid #ccc';
    panel.style.borderRadius = '10px';
    panel.style.padding = '15px';
    panel.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    panel.style.zIndex = 9999;
    panel.style.display = 'none';

    document.body.appendChild(panel);
  }

  // ახლა ვიღებთ ელემენტებს (თუ იყო HTML-ში)
  const contrastToggle = document.getElementById('contrastToggle');
  const fontSizeRange = document.getElementById('fontSizeRange');
  const dyslexicToggle = document.getElementById('dyslexicToggle');
  const closeBtn = document.getElementById('closeAccessibilityPanel');

  // პანელის გახსნა/დახურვა
  accessibilityBtn.addEventListener('click', () => {
    const panel = document.getElementById('accessibilityPanel');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
      accessibilityBtn.setAttribute('aria-expanded', 'false');
    } else {
      panel.style.display = 'block';
      accessibilityBtn.setAttribute('aria-expanded', 'true');
      panel.focus();
    }
  });

  // დახურვა ღილაკზე დაჭერა
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      const panel = document.getElementById('accessibilityPanel');
      panel.style.display = 'none';
      accessibilityBtn.setAttribute('aria-expanded', 'false');
      accessibilityBtn.focus();
    });
  }

  // Helper ფუნქცია კლასის ჩართვის/გამორთვისთვის
  function toggleClass(element, className, condition) {
    if (!element) return;
    element.classList.toggle(className, condition);
  }

  // მაღალი კონტრასტი
  if (contrastToggle) {
    contrastToggle.addEventListener('change', () => {
      toggleClass(body, 'high-contrast', contrastToggle.checked);
      contrastToggle.setAttribute('aria-pressed', contrastToggle.checked);
    });
  }

  // დისპლექსიური შრიფტი
  if (dyslexicToggle) {
    dyslexicToggle.addEventListener('change', () => {
      toggleClass(body, 'dyslexic-font', dyslexicToggle.checked);
      dyslexicToggle.setAttribute('aria-pressed', dyslexicToggle.checked);
    });
  }

  // ტექსტის ზომა
  if (fontSizeRange) {
    const minSize = parseInt(fontSizeRange.min) || 12;
    const maxSize = parseInt(fontSizeRange.max) || 24;
    const defaultSize = parseInt(fontSizeRange.value) || 16;

    fontSizeRange.addEventListener('input', () => {
      let size = Math.min(Math.max(parseInt(fontSizeRange.value), minSize), maxSize);
      body.style.fontSize = size + 'px';
      fontSizeRange.setAttribute('aria-valuenow', size);
    });

    // სტანდარტული ზომა
    body.style.fontSize = defaultSize + 'px';
  }

  // კლავიატურის მხარდაჭერა - accessibilityBtn-ზე enter / space
  accessibilityBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      accessibilityBtn.click();
    }
  });
});
