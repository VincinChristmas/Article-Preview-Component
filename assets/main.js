document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.getElementById('shareButton');
    const sharePopup = document.getElementById('sharePopup');
    let isPopupOpen = false;
  
    // Toggle share popup when share button is clicked
    shareButton.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleSharePopup();
    });
  
    // Close popup when clicking outside
    document.addEventListener('click', function(e) {
      if (!shareButton.contains(e.target) && !sharePopup.contains(e.target)) {
        closeSharePopup();
      }
    });
  
    // Close popup on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeSharePopup();
      }
    });
  
    function toggleSharePopup() {
      if (isPopupOpen) {
        closeSharePopup();
      } else {
        openSharePopup();
      }
    }
  
    function openSharePopup() {
      sharePopup.classList.add('active');
      shareButton.style.backgroundColor = 'hsl(214, 17%, 51%)';
      shareButton.querySelector('.share-icon').style.filter = 'brightness(0) invert(1)';
      isPopupOpen = true;
    }
  
    function closeSharePopup() {
      sharePopup.classList.remove('active');
      shareButton.style.backgroundColor = 'hsl(210, 46%, 95%)';
      shareButton.querySelector('.share-icon').style.filter = 'none';
      isPopupOpen = false;
    }
  
    // Add hover effects for social media links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
      link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
      });
      
      link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
      });
    });
  });
  
