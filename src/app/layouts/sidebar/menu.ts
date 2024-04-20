import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.MENU.TEXT',
    isTitle: true
  },
  {
    id: 2,
    label: 'MENUITEMS.DASHBOARD.TEXT',
    icon: 'ri-dashboard-2-line',
    link: '/',
  },
  {
    id: 3,
    label: 'MENUITEMS.FACADE.TEXT',
    icon: 'ri-file-list-3-line',
    isCollapsed: true,
    subItems: [
      {
        id: 4,
        label: 'MENUITEMS.PROJECTS.TEXT',
        isCollapsed: true,
        link: '/facade/projects',
        parentId: 3
      },
      {
        id: 5,
        label: 'MENUITEMS.PROJECT_DETAILS.TEXT',
        link: '/facade/details',
        parentId: 3
      },
      {
        id: 6,
        label: 'MENUITEMS.SUMMARY.TEXT',
        link: '/facade/summary',
        parentId: 3
      }
    ]
  },
  {
    id: 7,
    label: 'MENUITEMS.FIRE.TEXT',
    icon: 'ri-layout-line',
    isCollapsed: true,
    subItems: [
      {
        id: 8,
        label: 'MENUITEMS.PROJECTS.TEXT',
        isCollapsed: true,
        link: '/fire/projects',
        parentId: 7
      },
      {
        id: 9,
        label: 'MENUITEMS.PROJECT_DETAILS.TEXT',
        link: '/fire/details',
        parentId: 7
      },
      {
        id: 10,
        label: 'MENUITEMS.SUMMARY.TEXT',
        link: '/fire/summary',
        parentId: 7
      }
    ]
  },
  {
    id: 11,
    label: 'MENUITEMS.GLASS.TEXT',
    icon: 'ri-account-circle-line',
    isCollapsed: true,
    subItems: [
      {
        id: 12,
        label: 'MENUITEMS.PROJECTS.TEXT',
        isCollapsed: true,
        link: '/glass/projects',
        parentId: 11
      },
      {
        id: 13,
        label: 'MENUITEMS.PROJECT_DETAILS.TEXT',
        link: '/glass/details',
        parentId: 11
      },
      {
        id: 14,
        label: 'MENUITEMS.SUMMARY.TEXT',
        link: '/glass/summary',
        parentId: 11
      }
    ]
  },
  {
    id: 15,
    label: 'MENUITEMS.HARDWARE.TEXT',
    icon: 'ri-article-line',
    isCollapsed: true,
    subItems: [
      {
        id: 16,
        label: 'MENUITEMS.PROJECTS.TEXT',
        isCollapsed: true,
        parentId: 15
      },
      {
        id: 17,
        label: 'MENUITEMS.PROJECT_DETAILS.TEXT',
        link: '/chat',
        parentId: 15
      },
      {
        id: 18,
        label: 'MENUITEMS.SUMMARY.TEXT',
        parentId: 15
      }
    ]
  },
  {
    id: 15,
    label: 'MENUITEMS.USERS.TEXT',
    icon: 'ri-article-line',
    link: '/users'
  }
];
