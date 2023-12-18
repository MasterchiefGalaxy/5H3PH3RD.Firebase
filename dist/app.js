"use strict";
// Add this to your app.ts
window.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.querySelector('#theme-toggle');
    toggleSwitch.addEventListener('change', switchTheme, false);
    function switchTheme(e) {
        if (toggleSwitch.checked) {
            document.body.classList.add('light-mode');
        }
        else {
            document.body.classList.remove('light-mode');
        }
    }
});
