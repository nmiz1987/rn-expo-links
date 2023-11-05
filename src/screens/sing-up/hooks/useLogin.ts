import { useState } from 'react';
import { EnumSingUpForm, formProp } from '../interface';
import { singUp } from '@/api/links/links.api';
import { router } from 'expo-router';
import { useToken } from '@/store/token/token';

export default function useLogin() {
  const [singUpForm, setSingUpForm] = useState<formProp>({
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

  function handleSingUpForm(field: EnumSingUpForm, value: string) {
    if (field === EnumSingUpForm.Email) {
      setSingUpForm({ ...singUpForm, email: value });
    }
    if (field === EnumSingUpForm.Password) {
      setSingUpForm({ ...singUpForm, password: value });
    }
  }

  function handleFocus(field: EnumSingUpForm, value: boolean) {
    if (field === EnumSingUpForm.Email) {
      setSingUpForm({ ...singUpForm, isEmailFocus: value });
    }
    if (field === EnumSingUpForm.Password) {
      setSingUpForm({ ...singUpForm, isPasswordFocus: value });
    }
  }

  function handlePasswordVisibility() {
    setSingUpForm({ ...singUpForm, isPasswordVisible: !singUpForm.isPasswordVisible });
  }

  function resetFormHandler() {
    setSingUpForm({
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
    if (singUpForm.email.length === 0 && singUpForm.password.length === 0) {
      setSingUpForm({
        ...singUpForm,
        emailErrorText: 'Email is required',
        passwordErrorText: 'Password is required',
        isError: true,
      });
    } else if (singUpForm.email.length !== 0 && singUpForm.password.length === 0) {
      setSingUpForm({ ...singUpForm, emailErrorText: '', passwordErrorText: 'Password is required', isError: true });
    } else if (singUpForm.email.length === 0 && singUpForm.password.length !== 0) {
      setSingUpForm({ ...singUpForm, emailErrorText: 'Email is required', passwordErrorText: '', isError: true });
    } else if (singUpForm.email.length > 0 || singUpForm.password.length > 0) {
      setSingUpForm({ ...singUpForm, isError: false, emailErrorText: '', passwordErrorText: '' });
      const res = await singUp(singUpForm.email, singUpForm.password);
      if (res.token) {
        setToken(res.token);
        router.replace('/');
      }
    }
  }

  return { singUpForm, handleSingUpForm, handleFocus, handlePasswordVisibility, onPressHandler, resetFormHandler };
}
