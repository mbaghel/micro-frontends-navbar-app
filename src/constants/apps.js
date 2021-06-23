/**
 * Config for the All Apps menu.
 */
import appDocumentationIcon from '../assets/images/learn.svg';
import appTaasIcon from '../assets/images/integrations.svg';
import appTaasAdminIcon from '../assets/images/taas-admin.png';
import myteamsIcon from '../assets/images/my-teams.svg';
import myteamsGreenIcon from '../assets/images/my-teams-green.svg';
import createTeamIcon from '../assets/images/create-team.svg';
import createTeamGreenIcon from '../assets/images/create-team-green.svg';

/**
 * Micro-app categories
 */
export const APP_CATEGORIES = [
  {
    category: 'Manage',
    apps: [
      {
        title: 'TaaS',
        icon: appTaasIcon,
        path: '/taas',
        menu: [
          {
            title: 'My Teams',
            path: '/taas/myteams',
            icon: myteamsIcon,
            activeIcon: myteamsGreenIcon,
            isExact: false,
          },
          {
            title: 'Create New Team',
            path: '/taas/createnewteam',
            icon: createTeamIcon,
            activeIcon: createTeamGreenIcon,
            isExact: false,
          },
        ],
      },
      {
        title: 'TaaS Admin',
        icon: appTaasAdminIcon,
        path: '/taas-admin',
        menu: [],
      },
      {
        title: 'Documentation',
        icon: appDocumentationIcon,
        path: '/model',
        menu: [],
      },
      {
        title: 'Community Admin',
        icon: myteamsIcon,
        path: '/community-admin',
        menu: [],
      },
    ],
  },
];
