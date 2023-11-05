import { useState } from 'react';
import { EnumLoginForm, formProp } from '../interface';
import { login } from '@/api/links/links.api';
import { router } from 'expo-router';
import { useToken } from '@/store/token/token';

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

  const { setToken } = useToken();

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

  async function onPressHandler() {
    if (loginForm.email.length === 0 && loginForm.password.length === 0) {
      setLoginForm({
        ...loginForm,
        emailErrorText: 'Email is required',
        passwordErrorText: 'Password is required',
        isError: true,
      });
    } else if (loginForm.email.length !== 0 && loginForm.password.length === 0) {
      setLoginForm({ ...loginForm, emailErrorText: '', passwordErrorText: 'Password is required', isError: true });
    } else if (loginForm.email.length === 0 && loginForm.password.length !== 0) {
      setLoginForm({ ...loginForm, emailErrorText: 'Email is required', passwordErrorText: '', isError: true });
    } else if (loginForm.email.length > 0 || loginForm.password.length > 0) {
      setLoginForm({ ...loginForm, isError: false, emailErrorText: '', passwordErrorText: '' });
      const res = await login(loginForm.email, loginForm.password);
      if (res.accessToken) {
        setToken(res.accessToken);
        router.replace('/');
      }
    }
  }

  return { loginForm, handleLoginForm, handleFocus, handlePasswordVisibility, onPressHandler, resetFormHandler };
}
