import { router } from 'expo-router';
import { useState } from 'react';
import { EnumForm, formProp } from '../interface';
import { signIn } from '@/api/links/links.api';
import applicationStore from '@/store/application/application-store';

export default function useForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>();

  const [formInfo, setFormInfo] = useState<formProp>({
    tags: '',
    category: '',
    name: '',
    description: '',
    link: '',
    isRecommended: false,
    imgSrc: '',
    isError: false,
  });

  function handleForm(field: EnumForm, value?: string) {
    if (field === EnumForm.Tags) {
      setFormInfo({ ...formInfo, tags: value as string });
    } else if (field === EnumForm.Category) {
      setFormInfo({ ...formInfo, category: value as string });
    } else if (field === EnumForm.Name) {
      setFormInfo({ ...formInfo, name: value as string });
    } else if (field === EnumForm.Description) {
      setFormInfo({ ...formInfo, description: value as string });
    } else if (field === EnumForm.Link) {
      setFormInfo({ ...formInfo, link: value as string });
    } else if (field === EnumForm.IsRecommended) {
      setFormInfo({ ...formInfo, isRecommended: !formInfo.isRecommended });
    } else if (field === EnumForm.ImgSrc) {
      setFormInfo({ ...formInfo, imgSrc: value as string });
    }
  }

  function resetFormHandler() {
    setFormInfo({
      tags: '',
      category: '',
      name: '',
      description: '',
      link: '',
      isRecommended: false,
      imgSrc: '',
      isError: false,
    });
  }

  async function onPressHandler() {
    // if (formInfo.email.length === 0 && formInfo.password.length === 0) {
    //   setFormInfo({
    //     ...formInfo,
    //     emailErrorText: 'Email is required',
    //     passwordErrorText: 'Password is required',
    //     isError: true,
    //   });
    // } else if (formInfo.email.length !== 0 && formInfo.password.length === 0) {
    //   setFormInfo({ ...formInfo, emailErrorText: '', passwordErrorText: 'Password is required', isError: true });
    // } else if (formInfo.email.length === 0 && formInfo.password.length !== 0) {
    //   setFormInfo({ ...formInfo, emailErrorText: 'Email is required', passwordErrorText: '', isError: true });
    // } else if (formInfo.email.length > 0 || formInfo.password.length > 0) {
    //   setFormInfo({ ...formInfo, isError: false, emailErrorText: '', passwordErrorText: '' });
    //   setIsLoading(true);
    //   const res = await signIn(formInfo.email, formInfo.password);
    //   setIsLoading(false);
    //   if ('accessToken' in res) {
    //     setErrorMsg('');
    //     setFormInfo({ ...formInfo, password: '', isError: false, emailErrorText: '', passwordErrorText: '' });
    //     if (applicationStore.isRememberMe) {
    //       applicationStore.setEmail(formInfo.email);
    //       applicationStore.storeTokensInStorageHandler(res.accessToken, res.refreshToken);
    //     }
    //     router.replace('/');
    //   } else {
    //     setErrorMsg(res.message);
    //   }
    // }
  }

  return {
    isLoading,
    formInfo,
    errorMsg,
    handleForm,
    onPressHandler,
    resetFormHandler,
  };
}
