document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const switchTabButtons = document.querySelectorAll('[data-tab-switch]');
  
    // Function to switch tabs
    function switchTab(tabId) {
      // Update tab buttons
      tabButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-tab') === tabId) {
          button.classList.add('active');
        }
      });
  
      // Update tab content
      tabContents.forEach(content => {
        content.classList.add('hidden');
        if (content.id === tabId) {
          content.classList.remove('hidden');
        }
      });
    }
  
    // Initialize default tab
    switchTab('overview');
  
    // Add click event listeners to tab buttons
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        switchTab(tabId);
      });
    });
  
    // Add click event listeners to buttons that switch tabs
    switchTabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab-switch');
        switchTab(tabId);
      });
    });
  });