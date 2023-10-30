export interface formProp {
  email: string;
  password: string;
  isEmailFocus: boolean;
  isPasswordFocus: boolean;
  isPasswordVisible: boolean;
  emailErrorText: string;
  passwordErrorText: string;
  isError: boolean;
}

export enum EnumLoginForm {
  Email = 'email',
  Password = 'password',
}
