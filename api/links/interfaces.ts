export interface SignUpResponseRequest {
  message: string;
  token: string;
}
export interface SingUpErrorMessage {
  message: string;
}

export interface SingInResponseRequest {
  accessToken: string;
}

export interface SingInErrorMessage {
  message: string;
}

export interface LogOutResponseRequest {
  message: string;
  status: number;
}
