import { linksProps } from './interfaces';
import { EnumUserRoles } from '@/store/application/interfaces';

const links: linksProps = {
  index: {
    drawerLabel: 'All My Links',
    title: 'All My Links',
    authMinLevel: EnumUserRoles.Guest,
  },
  'author-favorites': {
    drawerLabel: 'Author Favorites',
    title: 'Author Favorites',
    authMinLevel: EnumUserRoles.Guest,
  },
  'sign-in': {
    drawerLabel: 'Sign In',
    title: 'Sign In',
    authMinLevel: EnumUserRoles.Guest,
  },
  'sign-up': {
    drawerLabel: 'Sign Up',
    title: 'Sign Up',
    authMinLevel: EnumUserRoles.Guest,
  },
  'user-favorites': {
    drawerLabel: 'Your Favorites',
    title: 'Your Favorites',
    authMinLevel: EnumUserRoles.User,
  },
  'link-form': {
    drawerLabel: 'Add new link',
    title: 'Add new link',
    authMinLevel: EnumUserRoles.Admin,
  },
};

export default links;
