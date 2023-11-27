import { router } from 'expo-router';
import { useState } from 'react';
import { EnumSignUpForm, formProp } from '../interface';
import { signUp } from '@/api/links/links.api';
import { useToken } from '@/store/token/token';

export default function useSignUp() {
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

  const { setToken } = useToken();

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
      const res = await signUp(signUpForm.email, signUpForm.password);
      if (res.token) {
        setToken(res.token);
        router.replace('/');
      }
    }
  }

  return { signUpForm, handleSignUpForm, handleFocus, handlePasswordVisibility, onPressHandler, resetFormHandler };
}
