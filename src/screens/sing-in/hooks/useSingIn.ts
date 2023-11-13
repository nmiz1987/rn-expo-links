import { router } from 'expo-router';
import { useState } from 'react';
import { EnumSingInForm, formProp } from '../interface';
import { singIn } from '@/api/links/links.api';
import { useToken } from '@/store/token/token';

export default function useSingIn() {
  const [singInForm, setSingInForm] = useState<formProp>({
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

  function handleSingInForm(field: EnumSingInForm, value: string) {
    if (field === EnumSingInForm.Email) {
      setSingInForm({ ...singInForm, email: value });
    }
    if (field === EnumSingInForm.Password) {
      setSingInForm({ ...singInForm, password: value });
    }
  }

  function handleFocus(field: EnumSingInForm, value: boolean) {
    if (field === EnumSingInForm.Email) {
      setSingInForm({ ...singInForm, isEmailFocus: value });
    }
    if (field === EnumSingInForm.Password) {
      setSingInForm({ ...singInForm, isPasswordFocus: value });
    }
  }

  function handlePasswordVisibility() {
    setSingInForm({ ...singInForm, isPasswordVisible: !singInForm.isPasswordVisible });
  }

  function resetFormHandler() {
    setSingInForm({
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
    if (singInForm.email.length === 0 && singInForm.password.length === 0) {
      setSingInForm({
        ...singInForm,
        emailErrorText: 'Email is required',
        passwordErrorText: 'Password is required',
        isError: true,
      });
    } else if (singInForm.email.length !== 0 && singInForm.password.length === 0) {
      setSingInForm({ ...singInForm, emailErrorText: '', passwordErrorText: 'Password is required', isError: true });
    } else if (singInForm.email.length === 0 && singInForm.password.length !== 0) {
      setSingInForm({ ...singInForm, emailErrorText: 'Email is required', passwordErrorText: '', isError: true });
    } else if (singInForm.email.length > 0 || singInForm.password.length > 0) {
      setSingInForm({ ...singInForm, isError: false, emailErrorText: '', passwordErrorText: '' });
      const res = await singIn(singInForm.email, singInForm.password);
      if (res.accessToken) {
        setToken(res.accessToken);
        router.replace('/');
      }
    }
  }

  return { singInForm, handleSingInForm, handleFocus, handlePasswordVisibility, onPressHandler, resetFormHandler };
}
