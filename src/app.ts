// Add this to your app.ts
window.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.querySelector('#theme-toggle') as HTMLInputElement;
    toggleSwitch.addEventListener('change', switchTheme, false);
  
    function switchTheme(e: Event) {
      if (toggleSwitch.checked) {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
    }
  });
  