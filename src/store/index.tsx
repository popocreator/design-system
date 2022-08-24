import { atom } from 'recoil';

export interface Index {
  id: string;
  title: string;
  top: number;
}

export const contentsState = atom<Index[]>({
  key: 'contentsState',
  default: []
});

export const linkState = atom({
  key: 'linkState',
  default: {
    navigations: [
      { name: 'Brand', to: '/ds/brand' },
      { name: 'Foundations', to: '/ds/foundations' },
      { name: 'Content', to: '/ds/content' },
      { name: 'Components', to: '/ds/components' },
      { name: 'Patterns', to: '/ds/patterns' },
      { name: 'Resources', to: '/ds/resources' }
    ],
    brand: [],
    foundations: [],
    content: [],
    components: [
      {
        name: 'Avatar',
        description:
          'A horizontal navigation component for Atlassian products.',
        to: '/ds/components/avatar',
        children: []
      },
      {
        name: 'Avatar group',
        description:
          'A horizontal navigation component for Atlassian products.',
        to: '/ds/components/avatar-group',
        children: []
      },
      {
        name: 'Badge',
        description:
          'A horizontal navigation component for Atlassian products.',
        to: '/ds/components/badge',
        children: []
      },
      {
        name: 'Button',
        description: 'This is ...',
        to: '/ds/components/button',
        children: []
      }
    ],
    patterns: [],
    resources: []
  }
});
