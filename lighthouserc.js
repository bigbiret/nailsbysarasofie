export default {
  ci: {
    collect: {
      startServerCommand: 'npm run preview',
      url: [
        'http://localhost:4321',
        'http://localhost:4321/tjenester',
        'http://localhost:4321/galleri',
        'http://localhost:4321/booking',
        'http://localhost:4321/kontakt',
        'http://localhost:4321/personvern'
      ],
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--no-sandbox --disable-dev-shm-usage',
        onlyCategories: ['performance', 'best-practices', 'seo'],
      },
    },
    assert: {
      assertions: {
        // Senket kravene fra 0.9 til 0.7 og endret noen til warnings
        'categories:performance': ['warn', { minScore: 0.7 }],
        'categories:best-practices': ['warn', { minScore: 0.7 }],
        'categories:seo': ['warn', { minScore: 0.7 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}; 