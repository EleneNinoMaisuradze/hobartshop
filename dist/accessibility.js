"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const contrastToggle = document.getElementById('contrastToggle');
    const fontSizeRange = document.getElementById('fontSizeRange');
    const dyslexicToggle = document.getElementById('dyslexicToggle');
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
            const size = fontSizeRange.value;
            body.style.fontSize = size + 'px';
        });
    }
    // Dyslexic font toggle
    if (dyslexicToggle) {
        dyslexicToggle.addEventListener('change', () => {
            body.classList.toggle('dyslexic-font', dyslexicToggle.checked);
        });
    }
    // Accessibility panel keyboard navigation
    const accessibilityBtn = document.querySelector('.accessibility-btn');
    const accessibilityPanel = document.getElementById('accessibilityPanel');
    if (accessibilityBtn && accessibilityPanel) {
        accessibilityBtn.addEventListener('click', () => {
            accessibilityPanel.style.display = accessibilityPanel.style.display === 'block' ? 'none' : 'block';
            accessibilityPanel.setAttribute('tabindex', '-1');
            accessibilityPanel.focus();
        });
        accessibilityBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                accessibilityBtn.click();
            }
        });
    }
});
//# sourceMappingURL=accessibility.js.map