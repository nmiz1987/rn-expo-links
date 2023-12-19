import { EnumUserRoles } from '@/store/application/interfaces';

export interface SignUpResponseProps {
  message: string;
  accessToken: string;
  refreshToken: string;
  status: number;
  userRole: EnumUserRoles;
}
export interface SingUpErrorResponseProps {
  message: string;
  status: number;
}

export interface SingInResponseProps {
  accessToken: string;
  refreshToken: string;
  status: number;
  userRole: EnumUserRoles;
}
export interface SingInWithTokenResponseProps {
  message: string;
  accessToken: string;
  refreshToken: string;
  status: number;
  email: string;
  userRole: EnumUserRoles;
}

export interface SingInWithTokenErrorResponseProps {
  message: string;
  status: number;
}
export interface SingInErrorResponseProps {
  message: string;
  status: number;
}

export interface SingOutResponseProps {
  message: string;
  status: number;
}

export interface RefreshTokenResponseProps {
  message: string;
  accessToken: string;
  status: number;
  userRole: EnumUserRoles;
}

export interface RefreshTokenErrorResponseProps {
  message: string;
  status: number;
}
