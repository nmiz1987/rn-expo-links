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

  function handleFocus(field: EnumLoginForm, value: boolean) {
    if (field === EnumLoginForm.Email) {
      setLoginForm({ ...loginForm, isEmailFocus: value });
    }
    if (field === EnumLoginForm.Password) {
      setLoginForm({ ...loginForm, isPasswordFocus: value });
    }
  }

  function handlePasswordVisibility() {
    setLoginForm({ ...loginForm, isPasswordVisible: !loginForm.isPasswordVisible });
  }

  function resetFormHandler() {
    setLoginForm({
      email: '',
      password: '',
      isEmailFocus: false,
      isPasswordFocus: false,
      isPasswordVisible: false,
      emailErrorText: '',
      passwordErrorText: '',
      isError: false,
    });
  }

  function onPressHandler() {
    if (loginForm.email.length === 0 && loginForm.password.length === 0) {
      setLoginForm({
        ...loginForm,
        emailErrorText: 'Email is required',
        passwordErrorText: 'Password is required',
        isError: true,
      });
    } else if (loginForm.password.length === 0 && loginForm.email.length !== 0) {
      setLoginForm({ ...loginForm, emailErrorText: '', passwordErrorText: 'Password is required', isError: true });
    } else if (loginForm.email.length === 0 && loginForm.password.length !== 0) {
      setLoginForm({ ...loginForm, emailErrorText: 'Email is required', passwordErrorText: '', isError: true });
    } else if (loginForm.email !== '' || loginForm.password !== '') {
      setLoginForm({ ...loginForm, isError: false, emailErrorText: '', passwordErrorText: '' });
      console.log('connect to the server');
    }
  }

  return { loginForm, handleLoginForm, handleFocus, handlePasswordVisibility, onPressHandler, resetFormHandler };
}
