export default {
  ci: {
    collect: {
      buildCommand: 'npm install && npm run build',
      startServerCommand: 'npm run preview',
      startServerReadyPattern: 'Local',
      url: ['http://localhost:1600'],
      numberOfRuns: 3,
    },
    // assert: {
    //   preset: 'lighthouse:no-pwa',
    //   assertions: {
    //     'categories:performance': ['warn', { minScore: 0.8 }],
    //     'categories:accessibility': ['error', { minScore: 0.8 }],
    //     'categories:best-practices': ['warn', { minScore: 0.8 }],
    //     'categories:seo': ['error', { minScore: 0.8 }],
    //   },
    // },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
