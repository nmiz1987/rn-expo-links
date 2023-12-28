import { useState } from 'react';
import { EnumForm, formProp } from '../interface';
import * as cheerio from 'cheerio';
import { router } from 'expo-router';
import { newLink } from '@/api/links/links.api';
import applicationStore from '@/store/application/application-store';
import linksStore from '@/store/links/links-store';

export default function useForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>();

  const [formInfo, setFormInfo] = useState<formProp>({
    tags: '',
    isErrorTags: false,
    category: '',
    isErrorCategory: false,
    name: '',
    isErrorName: false,
    description: '',
    isErrorDescription: false,
    link: '',
    isErrorLink: false,
    isRecommended: false,
    imgSrc: '',
    isErrorImgSrc: false,
  });

  function handleForm(field: EnumForm, value?: string) {
    if (field === EnumForm.Tags) {
      setFormInfo({ ...formInfo, tags: value as string, isErrorTags: false });
    } else if (field === EnumForm.Category) {
      setFormInfo({ ...formInfo, category: value as string, isErrorCategory: false });
    } else if (field === EnumForm.Name) {
      setFormInfo({ ...formInfo, name: value as string, isErrorName: false });
    } else if (field === EnumForm.Description) {
      setFormInfo({ ...formInfo, description: value as string, isErrorDescription: false });
    } else if (field === EnumForm.Link) {
      setFormInfo({ ...formInfo, link: value as string, isErrorLink: false });
    } else if (field === EnumForm.IsRecommended) {
      setFormInfo({ ...formInfo, isRecommended: !formInfo.isRecommended });
    } else if (field === EnumForm.ImgSrc) {
      setFormInfo({ ...formInfo, imgSrc: value as string, isErrorImgSrc: false });
    }
  }

  function resetFormHandler() {
    setFormInfo({
      tags: '',
      isErrorTags: false,
      category: '',
      isErrorCategory: false,
      name: '',
      isErrorName: false,
      description: '',
      isErrorDescription: false,
      link: '',
      isErrorLink: false,
      isRecommended: false,
      imgSrc: '',
      isErrorImgSrc: false,
    });
  }

  async function getData() {
    try {
      const site = fetch(formInfo.link);
      if (!site) return;
      const $ = cheerio.load(await site.then(res => res.text()));
      let tmp = { ...formInfo };

      // get the title of the page
      tmp.description = $('title').text() || '';
      // get all the favicons, the rel can containe text before the "icon" part
      tmp.imgSrc = $('link[rel*="icon"]').attr('href') || '';
      // get all the h1 tags
      tmp.name = $('h1').text();
      setFormInfo(tmp);
    } catch (err) {
      console.log(err);
    }
  }

  async function onPressHandler() {
    if (
      formInfo.category.length === 0 ||
      formInfo.name.length === 0 ||
      formInfo.description.length === 0 ||
      formInfo.link.length === 0 ||
      formInfo.imgSrc.length === 0 ||
      formInfo.tags.length === 0
    ) {
      let tmpFormInfo = { ...formInfo };
      if (formInfo.category.length === 0) {
        tmpFormInfo = { ...tmpFormInfo, isErrorCategory: true };
      }
      if (formInfo.name.length === 0) {
        tmpFormInfo = { ...tmpFormInfo, isErrorName: true };
      }
      if (formInfo.description.length === 0) {
        tmpFormInfo = { ...tmpFormInfo, isErrorDescription: true };
      }
      if (formInfo.link.length === 0) {
        tmpFormInfo = { ...tmpFormInfo, isErrorLink: true };
      }
      if (formInfo.imgSrc.length === 0) {
        tmpFormInfo = { ...tmpFormInfo, isErrorImgSrc: true };
      }
      if (formInfo.tags.length === 0) {
        tmpFormInfo = { ...tmpFormInfo, isErrorTags: true };
      }

      setFormInfo(tmpFormInfo);
      return;
    } else {
      setIsLoading(true);
      let timer = setTimeout(() => {
        setIsLoading(false);
      }, 10000);

      try {
        const res = await newLink(
          {
            category: formInfo.category,
            name: formInfo.name,
            description: formInfo.description,
            link: formInfo.link,
            recommended: formInfo.isRecommended,
            tags: formInfo.tags.split(','),
            imgSrc: formInfo.imgSrc,
          },
          applicationStore.accessToken,
        );
        setIsLoading(false);
        clearTimeout(timer);

        if ('name' in res) {
          setErrorMsg('');
          resetFormHandler();
          linksStore.addNewLink(res);
          router.replace('/');
        } else {
          setErrorMsg(res.message);
          setTimeout(() => {
            setErrorMsg(''); // reset error message
          }, 5000);
        }
      } catch (error) {
        console.error('error in link-form', error);
      }
    }
  }

  return {
    isLoading,
    formInfo,
    errorMsg,
    getData,
    handleForm,
    onPressHandler,
    resetFormHandler,
  };
}
