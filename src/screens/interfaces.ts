import { EnumUserRoles } from '@/store/application/application-store.interfaces';

export interface linksProps {
  [key: string]: InfoProps;
}

interface InfoProps {
  drawerLabel: string;
  title: string;
  authMinLevel: EnumUserRoles;
}
