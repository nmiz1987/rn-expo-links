export interface formProp {
  email: string;
  password: string;
  isPasswordVisible: boolean;
  emailErrorText: string;
  passwordErrorText: string;
  isError: boolean;
}

export enum EnumSignInForm {
  Email = 'email',
  Password = 'password',
}
