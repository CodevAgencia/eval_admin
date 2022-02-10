import React from 'react';

const ResultsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/results',
      component: React.lazy(() => import('./Results')),
    },
  ],
};

export default ResultsConfig;
