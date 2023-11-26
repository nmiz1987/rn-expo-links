import { router } from 'expo-router';
import { useState } from 'react';
import { EnumSignInForm, formProp } from '../interface';
import { signIn } from '@/api/links/links.api';
import { useToken } from '@/store/token/token';
import userStore from '@/store/user/user-store';

export default function useSignIn() {
  const [signInForm, setSignInForm] = useState<formProp>({
    email: userStore.email,
    password: userStore.password,
    isEmailFocus: false,
    isPasswordFocus: false,
    isPasswordVisible: false,
    emailErrorText: '',
    passwordErrorText: '',
    isError: false,
  });

  const { setToken } = useToken();

  function handleSignInForm(field: EnumSignInForm, value: string) {
    if (field === EnumSignInForm.Email) {
      userStore.setEmail(value);
      setSignInForm({ ...signInForm, email: value });
    }
    if (field === EnumSignInForm.Password) {
      userStore.setPassword(value);
      setSignInForm({ ...signInForm, password: value });
    }
  }

  function handleFocus(field: EnumSignInForm, value: boolean) {
    if (field === EnumSignInForm.Email) {
      setSignInForm({ ...signInForm, isEmailFocus: value });
    }
    if (field === EnumSignInForm.Password) {
      setSignInForm({ ...signInForm, isPasswordFocus: value });
    }
  }

  function handlePasswordVisibility() {
    setSignInForm({ ...signInForm, isPasswordVisible: !signInForm.isPasswordVisible });
  }

  function resetFormHandler() {
    userStore.setEmail('');
    userStore.setPassword('');
    setSignInForm({
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
    if (signInForm.email.length === 0 && signInForm.password.length === 0) {
      setSignInForm({
        ...signInForm,
        emailErrorText: 'Email is required',
        passwordErrorText: 'Password is required',
        isError: true,
      });
    } else if (signInForm.email.length !== 0 && signInForm.password.length === 0) {
      setSignInForm({ ...signInForm, emailErrorText: '', passwordErrorText: 'Password is required', isError: true });
    } else if (signInForm.email.length === 0 && signInForm.password.length !== 0) {
      setSignInForm({ ...signInForm, emailErrorText: 'Email is required', passwordErrorText: '', isError: true });
    } else if (signInForm.email.length > 0 || signInForm.password.length > 0) {
      setSignInForm({ ...signInForm, isError: false, emailErrorText: '', passwordErrorText: '' });
      const res = await signIn(signInForm.email, signInForm.password);
      if (res.accessToken) {
        setToken(res.accessToken);
        router.replace('/');
      }
    }
  }

  return { signInForm, handleSignInForm, handleFocus, handlePasswordVisibility, onPressHandler, resetFormHandler };
}
