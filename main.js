/* ========================================
   Tania Rae — Main JS
   NO Intersection Observer. NO hidden content.
   Only: hamburger menu, smooth scroll, form handler.
   ======================================== */

(function () {
  'use strict';

  // --- Hamburger Menu Toggle ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // --- Smooth Scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Contact Form Handler ---
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var formData = new FormData(form);
      var name = formData.get('name');

      // Replace form with success message
      form.innerHTML = '<div class="contact__form--success"><p>Thanks, ' +
        name.replace(/[<>&"']/g, '') +
        '! I\'ll be in touch soon. ☕</p></div>';
    });
  }
})();
