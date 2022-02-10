import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'enterprising-component',
        title: 'Enterprising',
        translate: 'Emprendedores',
        type: 'item',
        icon: 'poll',
        url: '/enterprising',
      },
      {
        id: 'login-component',
        title: 'Login',
        translate: 'login',
        type: 'item',
        icon: 'person_outline',
        url: '/login',
      },
    ],
  },
];

export default navigationConfig;
