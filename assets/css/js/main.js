
document.addEventListener('DOMContentLoaded', function() {

  // Tab functionality
  var allTabBtns = document.querySelectorAll('.tab-btn');
  allTabBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var tabGroup = this.closest('.section-container') || this.closest('main');
      var tabId = this.getAttribute('data-tab');

      // Remove active from sibling tabs
      var siblingTabs = this.parentElement.querySelectorAll('.tab-btn');
      siblingTabs.forEach(function(sib) {
        sib.classList.remove('active');
        sib.classList.remove('active-blue');
      });

      // Add active to clicked tab
      this.classList.add('active');
      if (this.textContent.includes('Transport') || tabGroup.querySelector('.btn-blue')) {
        this.classList.add('active-blue');
      }

      // Hide all tab content in this section
      var allContents = document.querySelectorAll('.tab-content');
      allContents.forEach(function(content) {
        content.classList.remove('active');
      });

      // Show target content
      var target = document.getElementById('tab-' + tabId);
      if (target) {
        target.classList.add('active');
      }
    });
  });

  // Form submissions
  var farmerForm = document.getElementById('farmerForm');
  if (farmerForm) {
    farmerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Farmer profile registered successfully!');
    });
  }

  var produceForm = document.getElementById('produceForm');
  if (produceForm) {
    produceForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Produce listed successfully!');
    });
  }

  // Market search filter
  var searchInput = document.getElementById('marketSearch');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      var searchTerm = this.value.toLowerCase();
      var cards = document.querySelectorAll('.product-card');
      cards.forEach(function(card) {
        var text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchTerm) ? '' : 'none';
      });
    });
  }

  // Navbar shadow on scroll
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
      } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
      }
    }
  });

  // Close mobile menu on link click
  var mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      document.getElementById('mobileMenu').classList.remove('active');
    });
  });

  console.log('Yield Bridge Uganda loaded successfully');
});
// === FEATURE: Scroll to Top Button ===
(function () {
  const btn = document.createElement('button');
  btn.id = 'scrollTopBtn';
  btn.innerHTML = '&#8679;';
  btn.title = 'Back to top';
  btn.style.cssText = `
    position: fixed; bottom: 30px; right: 30px; z-index: 9999;
    background: #2e7d32; color: #fff; border: none; border-radius: 50%;
    width: 48px; height: 48px; font-size: 24px; cursor: pointer;
    display: none; box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    transition: opacity 0.3s;
  `;
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
