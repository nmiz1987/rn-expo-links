import { router } from 'expo-router';
import { useState } from 'react';
import { EnumSignUpForm, formProp } from '../interface';
import { signUp } from '@/api/links/links.api';
import applicationStore from '@/store/application/application-store';

export default function useSignUp() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>();
  const [signUpForm, setSignUpForm] = useState<formProp>({
    email: '',
    password: '',
    isEmailFocus: false,
    isPasswordFocus: false,
    isPasswordVisible: false,
    emailErrorText: '',
    passwordErrorText: '',
    isError: false,
  });

  function handleSignUpForm(field: EnumSignUpForm, value: string) {
    if (field === EnumSignUpForm.Email) {
      setSignUpForm({ ...signUpForm, email: value });
    }
    if (field === EnumSignUpForm.Password) {
      setSignUpForm({ ...signUpForm, password: value });
    }
  }

  function handleFocus(field: EnumSignUpForm, value: boolean) {
    if (field === EnumSignUpForm.Email) {
      setSignUpForm({ ...signUpForm, isEmailFocus: value });
    }
    if (field === EnumSignUpForm.Password) {
      setSignUpForm({ ...signUpForm, isPasswordFocus: value });
    }
  }

  function handlePasswordVisibility() {
    setSignUpForm({ ...signUpForm, isPasswordVisible: !signUpForm.isPasswordVisible });
  }

  function resetFormHandler() {
    setSignUpForm({
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
    if (signUpForm.email.length === 0 && signUpForm.password.length === 0) {
      setSignUpForm({
        ...signUpForm,
        emailErrorText: 'Email is required',
        passwordErrorText: 'Password is required',
        isError: true,
      });
    } else if (signUpForm.email.length !== 0 && signUpForm.password.length === 0) {
      setSignUpForm({ ...signUpForm, emailErrorText: '', passwordErrorText: 'Password is required', isError: true });
    } else if (signUpForm.email.length === 0 && signUpForm.password.length !== 0) {
      setSignUpForm({ ...signUpForm, emailErrorText: 'Email is required', passwordErrorText: '', isError: true });
    } else if (signUpForm.email.length > 0 || signUpForm.password.length > 0) {
      setSignUpForm({ ...signUpForm, isError: false, emailErrorText: '', passwordErrorText: '' });
      setIsLoading(true);

      applicationStore.setEmail(signUpForm.email);
      const res = await signUp(signUpForm.email, signUpForm.password);
      setIsLoading(false);

      if ('token' in res) {
        setErrorMsg('');
        applicationStore.setTokenHandler(res.token);
        setSignUpForm({ ...signUpForm, password: '', isError: false, emailErrorText: '', passwordErrorText: '' });
        router.replace('/');
      } else {
        setErrorMsg(res.message);
      }
    }
  }

  return { isLoading, signUpForm, errorMsg, handleSignUpForm, handleFocus, handlePasswordVisibility, onPressHandler, resetFormHandler };
}
