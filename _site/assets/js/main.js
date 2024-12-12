document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('mobile-active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Animate organic blobs
  const blobs = document.querySelectorAll('.organic-blob');
  blobs.forEach(blob => {
    blob.style.animation = 'float 20s ease-in-out infinite';
  });

  // Feature circle hover effects
  const circles = document.querySelectorAll('.feature-circle');
  circles.forEach(circle => {
    circle.addEventListener('mouseenter', () => {
      circle.querySelector('.feature-circle__description').style.opacity = '1';
    });
    circle.addEventListener('mouseleave', () => {
      circle.querySelector('.feature-circle__description').style.opacity = '0';
    });
  });
});