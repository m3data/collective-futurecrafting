document.addEventListener('DOMContentLoaded', function() {
    const footnoteRefs = document.querySelectorAll('.footnote-ref');
    
    // Handle touch devices
    footnoteRefs.forEach(ref => {
      ref.addEventListener('touchstart', function(e) {
        e.preventDefault();
        // Hide any other visible tooltips
        footnoteRefs.forEach(other => {
          if (other !== ref) {
            other.querySelector('.footnote-tooltip').style.visibility = 'hidden';
          }
        });
        // Toggle this tooltip
        const tooltip = ref.querySelector('.footnote-tooltip');
        tooltip.style.visibility = tooltip.style.visibility === 'visible' ? 'hidden' : 'visible';
      });
    });
    
    // Close tooltips when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.footnote-ref')) {
        footnoteRefs.forEach(ref => {
          ref.querySelector('.footnote-tooltip').style.visibility = 'hidden';
        });
      }
    });
  });