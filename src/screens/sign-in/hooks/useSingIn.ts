import { router } from 'expo-router';
import { useState } from 'react';
import { EnumSignInForm, formProp } from '../interface';
import { signIn } from '@/api/links/links.api';
import applicationStore from '@/store/application/application-store';

export default function useSignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>();
  const [signInForm, setSignInForm] = useState<formProp>({
    email: '',
    password: '',
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
    } else if (field === EnumSignInForm.Password) {
      setSignInForm({ ...signInForm, password: value });
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
      let timer = setTimeout(() => {
        setIsLoading(false);
      }, 10000);

      try {
        const res = await signIn(signInForm.email, signInForm.password);
        setIsLoading(false);
        clearTimeout(timer);

        if ('accessToken' in res) {
          setErrorMsg('');
          setSignInForm({ ...signInForm, password: '', isError: false, emailErrorText: '', passwordErrorText: '' });
          if (applicationStore.isRememberMe) {
            applicationStore.setEmail(signInForm.email);
            applicationStore.setUserRole(res.userRole);
            applicationStore.storeTokensInStorageHandler(res.accessToken, res.refreshToken);
          }
          applicationStore.setAccessTokensHandler(res.accessToken);
          router.replace('/');
        } else {
          setErrorMsg(res.message);
          setTimeout(() => {
            setErrorMsg(''); // reset error message
          }, 5000);
        }
      } catch (error) {
        console.error('error in useSignIn', error);
      }
    }
  }

  return {
    isLoading,
    signInForm,
    errorMsg,
    handleSignInForm,
    handlePasswordVisibility,
    onPressHandler,
    resetFormHandler,
    registerHandler,
    handleRememberMe,
  };
}
