import { router } from 'expo-router';
import { useState } from 'react';
import { EnumSignInForm, formProp } from '../interface';
import { signIn } from '@/api/links/links.api';
import applicationStore from '@/store/application/application-store';

export default function useSignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>();
  const [formInfo, setFormInfo] = useState<formProp>({
    email: '',
    password: '',
    isPasswordVisible: false,
    emailErrorText: '',
    passwordErrorText: '',
    isError: false,
  });

  function handleSignInForm(field: EnumSignInForm, value: string) {
    if (field === EnumSignInForm.Email) {
      setFormInfo({ ...formInfo, email: value });
    }
    if (field === EnumSignInForm.Password) {
      setFormInfo({ ...formInfo, password: value });
    }
  }

  function registerHandler() {
    setFormInfo({ ...formInfo, email: '', password: '' });
    router.push('/sign-up');
  }

  function handlePasswordVisibility() {
    setFormInfo({ ...formInfo, isPasswordVisible: !formInfo.isPasswordVisible });
  }

  function resetFormHandler() {
    setFormInfo({
      email: '',
      password: '',
      isPasswordVisible: false,
      emailErrorText: '',
      passwordErrorText: '',
      isError: false,
    });
  }

  async function onPressHandler() {
    if (formInfo.email.length === 0 && formInfo.password.length === 0) {
      setFormInfo({
        ...formInfo,
        emailErrorText: 'Email is required',
        passwordErrorText: 'Password is required',
        isError: true,
      });
    } else if (formInfo.email.length !== 0 && formInfo.password.length === 0) {
      setFormInfo({ ...formInfo, emailErrorText: '', passwordErrorText: 'Password is required', isError: true });
    } else if (formInfo.email.length === 0 && formInfo.password.length !== 0) {
      setFormInfo({ ...formInfo, emailErrorText: 'Email is required', passwordErrorText: '', isError: true });
    } else if (formInfo.email.length > 0 || formInfo.password.length > 0) {
      setFormInfo({ ...formInfo, isError: false, emailErrorText: '', passwordErrorText: '' });

      setIsLoading(true);
      const res = await signIn(formInfo.email, formInfo.password);
      setIsLoading(false);

      if ('accessToken' in res) {
        setErrorMsg('');
        setFormInfo({ ...formInfo, password: '', isError: false, emailErrorText: '', passwordErrorText: '' });
        if (applicationStore.isRememberMe) {
          applicationStore.setEmail(formInfo.email);
          applicationStore.storeTokensInStorageHandler(res.accessToken, res.refreshToken);
        }
        router.replace('/');
      } else {
        setErrorMsg(res.message);
      }
    }
  }

  return {
    isLoading,
    formInfo,
    errorMsg,
    handleSignInForm,
    handlePasswordVisibility,
    onPressHandler,
    resetFormHandler,
    registerHandler,
  };
}
