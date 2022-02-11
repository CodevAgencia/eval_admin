import React from 'react';

const ResultsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/results/:id',
      component: React.lazy(() => import('./Results')),
    },
  ],
};

export default ResultsConfig;
