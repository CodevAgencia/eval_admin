import React from 'react';

const EnterprisingConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/enterprising',
      component: React.lazy(() => import('./Enterprising')),
    },
  ],
};

export default EnterprisingConfig;
