export interface SignUpResponseProps {
  message: string;
  accessToken: string;
  refreshToken: string;
  status: number;
}
export interface SingUpErrorResponseProps {
  message: string;
  status: number;
}

export interface SingInResponseProps {
  accessToken: string;
  refreshToken: string;
  status: number;
}
export interface SingInWithTokenResponseProps {
  message: string;
  accessToken: string;
  refreshToken: string;
  status: number;
  email: string;
}

export interface SingInWithTokenErrorResponseProps {
  message: string;
  status: number;
}
export interface SingInErrorResponseProps {
  message: string;
  status: number;
}

export interface LogOutResponseProps {
  message: string;
  status: number;
}

export interface RefreshTokenResponseProps {
  message: string;
  accessToken: string;
  status: number;
}

export interface RefreshTokenErrorResponseProps {
  message: string;
  status: number;
}
