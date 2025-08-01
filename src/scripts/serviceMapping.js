// Service mapping for booking URLs og analytics
export const serviceMapping = {
  'gelenegler-nytt': {
    name: 'Gelenegler, nytt sett',
    price: '400 kr',
    url: 'https://www.fresha.com/nb/book-now/nails-by-sara-sofie-aoar71eq/services?lid=2696667&eid=4757759&share=true&pId=2609801',
    category: 'gelenegler',
    analytics: {
      event_category: 'Booking',
      event_action: 'Click',
      event_label: 'gelenegler_nytt_sett'
    }
  },
  'gelenegler-paafyll': {
    name: 'Gelenegler, påfyll',
    price: '300 kr',
    url: 'https://www.fresha.com/nb/book-now/nails-by-sara-sofie-aoar71eq/services?lid=2696667&eid=4757759&share=true&pId=2609801',
    category: 'gelenegler',
    analytics: {
      event_category: 'Booking',
      event_action: 'Click',
      event_label: 'gelenegler_paafyll'
    }
  },
  'gellakk-nytt': {
    name: 'Gellakk, nytt sett',
    price: '200 kr', 
    url: 'https://www.fresha.com/nb/book-now/nails-by-sara-sofie-aoar71eq/services?lid=2696667&eid=4757759&share=true&pId=2609801',
    category: 'gellakk',
    analytics: {
      event_category: 'Booking',
      event_action: 'Click',
      event_label: 'gellakk_nytt_sett'
    }
  },
  'fjerning-gelenegler': {
    name: 'Fjerning av gelenegler',
    price: '200 kr',
    url: 'https://www.fresha.com/nb/book-now/nails-by-sara-sofie-aoar71eq/services?lid=2696667&eid=4757759&share=true&pId=2609801',
    category: 'fjerning',
    analytics: {
      event_category: 'Booking',
      event_action: 'Click',
      event_label: 'fjerning_gelenegler'
    }
  },
  'fjerning-gellakk': {
    name: 'Fjerning av gellakk',
    price: '100 kr',
    url: 'https://www.fresha.com/nb/book-now/nails-by-sara-sofie-aoar71eq/services?lid=2696667&eid=4757759&share=true&pId=2609801',
    category: 'fjerning',
    analytics: {
      event_category: 'Booking',
      event_action: 'Click',
      event_label: 'fjerning_gellakk'
    }
  },
  'neglebaandolje': {
    name: 'Neglebåndolje',
    price: '80 kr',
    url: 'https://www.fresha.com/nb/book-now/nails-by-sara-sofie-aoar71eq/services?lid=2696667&eid=4757759&share=true&pId=2609801',
    category: 'pleie',
    analytics: {
      event_category: 'Booking',
      event_action: 'Click',
      event_label: 'neglebaandolje'
    }
  },
  'hero-cta': {
    name: 'Generell booking fra hovedside',
    url: 'https://www.fresha.com/nb/book-now/nails-by-sara-sofie-aoar71eq/services?lid=2696667&eid=4757759&share=true&pId=2609801',
    category: 'general',
    analytics: {
      event_category: 'Booking',
      event_action: 'Click',
      event_label: 'hero_cta'
    }
  },
  'header-cta': {
    name: 'Booking fra header',
    url: 'https://www.fresha.com/nb/book-now/nails-by-sara-sofie-aoar71eq/services?lid=2696667&eid=4757759&share=true&pId=2609801',
    category: 'navigation',
    analytics: {
      event_category: 'Booking',
      event_action: 'Click',
      event_label: 'header_cta'
    }
  },
  'footer-cta': {
    name: 'Booking fra footer',
    url: 'https://www.fresha.com/nb/book-now/nails-by-sara-sofie-aoar71eq/services?lid=2696667&eid=4757759&share=true&pId=2609801',
    category: 'navigation',
    analytics: {
      event_category: 'Booking',
      event_action: 'Click',
      event_label: 'footer_cta'
    }
  },
  'contact-cta': {
    name: 'Booking fra kontaktside',
    url: 'https://www.fresha.com/nb/book-now/nails-by-sara-sofie-aoar71eq/services?lid=2696667&eid=4757759&share=true&pId=2609801',
    category: 'contact',
    analytics: {
      event_category: 'Booking',
      event_action: 'Click',
      event_label: 'contact_cta'
    }
  },
  'tjenester-cta': {
    name: 'Booking fra tjenesteside',
    url: 'https://www.fresha.com/nb/book-now/nails-by-sara-sofie-aoar71eq/services?lid=2696667&eid=4757759&share=true&pId=2609801',
    category: 'services',
    analytics: {
      event_category: 'Booking',
      event_action: 'Click',
      event_label: 'tjenester_cta'
    }
  }
};

// Analytics tracking function
export function trackBookingEvent(serviceId) {
  const service = serviceMapping[serviceId];
  if (service && window.gtag) {
    try {
      window.gtag('event', service.analytics.event_action, {
        event_category: service.analytics.event_category,
        event_label: service.analytics.event_label,
        custom_parameter_1: service.name,
        custom_parameter_2: service.category
      });
              // Analytics event tracked
      } catch (error) {
        // Analytics tracking failed
    }
  }
}

// Get service URL by ID
export function getServiceUrl(serviceId) {
  const service = serviceMapping[serviceId];
  return service ? service.url : 'https://www.fresha.com/nb/book-now/nails-by-sara-sofie-aoar71eq/services?lid=2696667&eid=4757759&share=true&pId=2609801';
}

// Get service details by ID
export function getServiceDetails(serviceId) {
  return serviceMapping[serviceId] || {
    name: 'Booking',
    url: 'https://www.fresha.com/nb/book-now/nails-by-sara-sofie-aoar71eq/services?lid=2696667&eid=4757759&share=true&pId=2609801',
    category: 'general'
  };
} 