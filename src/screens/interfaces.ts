import { EnumUserRoles } from '@/store/application/interfaces';

export interface linksProps {
  [key: string]: InfoProps;
}

interface InfoProps {
  drawerLabel: string;
  title: string;
  authMinLevel: EnumUserRoles;
}
