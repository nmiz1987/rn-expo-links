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
  'sign-in': {
    drawerLabel: 'Sign In',
    title: 'Sign In',
    onlyToSignUser: false,
  },
  'sign-up': {
    drawerLabel: 'Sign Up',
    title: 'Sign Up',
    onlyToSignUser: false,
  },
  'user-favorites': {
    drawerLabel: 'Your Favorites',
    title: 'Your Favorites',
    onlyToSignUser: true,
  },
};

export default links;
