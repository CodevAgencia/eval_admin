import React from 'react';
import { authRoles } from '../../auth';

const EnterprisingConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.admin,
  routes: [
    {
      path: '/enterprising',
      component: React.lazy(() => import('./Enterprising')),
    },
  ],
};

export default EnterprisingConfig;
