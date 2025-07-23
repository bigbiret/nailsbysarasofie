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
      // Analytics tracking can be added here
      console.log('Booking modal opened');
    });
  });
}); 