import { linksProps } from './interfaces';

const links: linksProps = {
  index: {
    drawerLabel: 'All My Links',
    title: 'All My Links',
    onlyToSignUser: false,
  },
  'author-favorites': {
    drawerLabel: 'Author Favorites',
    title: 'Author Favorites',
    onlyToSignUser: false,
  },
  'sing-in': {
    drawerLabel: 'Sing In',
    title: 'Sing In',
    onlyToSignUser: false,
  },
  'sing-up': {
    drawerLabel: 'Sing Up',
    title: 'Sing Up',
    onlyToSignUser: false,
  },
  'user-favorites': {
    drawerLabel: 'Your Favorites',
    title: 'Your Favorites',
    onlyToSignUser: true,
  },
};

export default links;
