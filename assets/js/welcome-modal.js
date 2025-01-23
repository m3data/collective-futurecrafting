document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('welcomeModal');
    const continueButton = document.getElementById('welcomeModalContinue');
    const hasSeenModal = localStorage.getItem('hasSeenWelcomeModal');
  
    // Show modal if user hasn't seen it before
    if (!hasSeenModal) {
      // Short delay to ensure smooth transition
      setTimeout(() => {
        modal.classList.add('is-active');
        // Prevent scrolling on the body while modal is open
        document.body.style.overflow = 'hidden';
      }, 500);
    }
  
    continueButton.addEventListener('click', function() {
      modal.classList.remove('is-active');
      document.body.style.overflow = '';
      localStorage.setItem('hasSeenWelcomeModal', 'true');
    });
  });