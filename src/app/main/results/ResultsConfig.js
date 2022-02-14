import React from 'react';
import { authRoles } from '../../auth';

const ResultsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.admin,
  routes: [
    {
      path: '/results/:id',
      component: React.lazy(() => import('./Results')),
    },
  ],
};

export default ResultsConfig;
