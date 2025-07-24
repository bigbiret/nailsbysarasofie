// Simple analytics tracking for booking buttons
// No external dependencies required

document.addEventListener('DOMContentLoaded', function() {
  console.log('✅ Modal script loaded successfully');
  
  // Track booking button clicks for analytics
  const bookingButtons = document.querySelectorAll('[data-modal-open="booking-modal"]');
  
  bookingButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Google Analytics event tracking (kun hvis aktivert via samtykke)
      if (typeof window.gtag !== 'undefined' && window.gtag) {
        window.gtag('event', 'booking_modal_open', {
          'event_category': 'booking',
          'event_label': 'modal_open'
        });
        console.log('📊 Analytics: Booking modal opened');
      }
    });
  });

  // Track external booking links (Fresha)
  const externalBookingLinks = document.querySelectorAll('a[href*="fresha.com"]');
  
  externalBookingLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Google Analytics event tracking (kun hvis aktivert via samtykke)
      if (typeof window.gtag !== 'undefined' && window.gtag) {
        window.gtag('event', 'booking_click', {
          'event_category': 'booking',
          'event_label': 'fresha_external',
          'value': 1
        });
        console.log('📊 Analytics: External booking link clicked');
      }
    });
  });
}); 