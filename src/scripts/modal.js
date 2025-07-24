import MicroModal from 'micromodal';

// Initialize MicroModal
MicroModal.init({
  openTrigger: 'data-modal-open',
  closeTrigger: 'data-modal-close',
  disableScroll: true,
  disableFocus: false,
  awaitOpenAnimation: false,
  awaitCloseAnimation: false,
  debugMode: false
});

// Add event listeners for booking buttons
document.addEventListener('DOMContentLoaded', function() {
  // Track booking button clicks for analytics
  const bookingButtons = document.querySelectorAll('[data-modal-open="booking-modal"]');
  
  bookingButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Google Analytics event tracking (kun hvis aktivert via Klaro)
      if (typeof window.gtag !== 'undefined' && window.gtag) {
        window.gtag('event', 'booking_modal_open', {
          'event_category': 'booking',
          'event_label': 'modal_open'
        });
      }
      console.log('Booking modal opened');
    });
  });

  // Track external booking links (Fresha)
  const externalBookingLinks = document.querySelectorAll('a[href*="fresha.com"]');
  
  externalBookingLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Google Analytics event tracking (kun hvis aktivert via Klaro)
      if (typeof window.gtag !== 'undefined' && window.gtag) {
        window.gtag('event', 'booking_click', {
          'event_category': 'booking',
          'event_label': 'fresha_external',
          'value': 1
        });
      }
      console.log('External booking link clicked');
    });
  });
}); 