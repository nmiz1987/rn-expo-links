import { useState } from 'react';
import { EnumLoginForm, formProp } from '../interface';

export default function useLogin() {
  const [loginForm, setLoginForm] = useState<formProp>({
    email: '',
    password: '',
    isEmailFocus: false,
    isPasswordFocus: false,
    isPasswordVisible: false,
    emailErrorText: '',
    passwordErrorText: '',
    isError: false,
  });

  function handleLoginForm(field: EnumLoginForm, value: string) {
    if (field === EnumLoginForm.Email) {
      setLoginForm({ ...loginForm, email: value });
    }
    if (field === EnumLoginForm.Password) {
      setLoginForm({ ...loginForm, password: value });
    }
  }

  const handleFocus = (field: EnumLoginForm, value: boolean) => {
    if (field === EnumLoginForm.Email) {
      setLoginForm({ ...loginForm, isEmailFocus: value });
    }
    if (field === EnumLoginForm.Password) {
      setLoginForm({ ...loginForm, isPasswordFocus: value });
    }
  };

  function handlePasswordVisibility() {
    setLoginForm({ ...loginForm, isPasswordVisible: !loginForm.isPasswordVisible });
  }

  return { loginForm, handleLoginForm, handleFocus, handlePasswordVisibility };
}
