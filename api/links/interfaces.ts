export interface SignUpResponseProps {
  message: string;
  accessToken: string;
  refreshToken: string;
}
export interface SingUpErrorResponseProps {
  message: string;
}

export interface SingInResponseProps {
  accessToken: string;
  refreshToken: string;
}
export interface SingInWithTokenResponseProps {
  message: string;
  accessToken: string;
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
