export interface linksProps {
  [key: string]: InfoProps;
}

interface InfoProps {
  drawerLabel: string;
  title: string;
  onlyToSignUser: boolean;
}
