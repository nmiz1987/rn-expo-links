import { router } from 'expo-router';
import { useState } from 'react';
import { EnumSignInForm, formProp } from '../interface';
import { signIn } from '@/api/links/links.api';
import applicationStore from '@/store/application/application-store';

export default function useSignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [signInForm, setSignInForm] = useState<formProp>({
    email: '',
    password: '',
    isEmailFocus: false,
    isPasswordFocus: false,
    isPasswordVisible: false,
    emailErrorText: '',
    passwordErrorText: '',
    isError: false,
  });

  function handleRememberMe() {
    applicationStore.setRememberMe(!applicationStore.isRememberMe);
  }

  function handleSignInForm(field: EnumSignInForm, value: string) {
    if (field === EnumSignInForm.Email) {
      setSignInForm({ ...signInForm, email: value });
    }
    if (field === EnumSignInForm.Password) {
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

  function registerHandler() {
    setSignInForm({ ...signInForm, email: '', password: '' });
    router.push('/sign-up');
  }

  function handlePasswordVisibility() {
    setSignInForm({ ...signInForm, isPasswordVisible: !signInForm.isPasswordVisible });
  }

  function resetFormHandler() {
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
      setIsLoading(true);
      applicationStore.setEmail(signInForm.email);
      const res = await signIn(signInForm.email, signInForm.password);
      setIsLoading(false);

      if (res.accessToken) {
        await applicationStore.setTokenHandler(res.accessToken);
        router.replace('/');
      }
    }
  }

  return {
    isLoading,
    signInForm,
    handleSignInForm,
    handleFocus,
    handlePasswordVisibility,
    onPressHandler,
    resetFormHandler,
    registerHandler,
    handleRememberMe,
  };
}
