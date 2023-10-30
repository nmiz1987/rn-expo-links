import { FlatList } from 'react-native';
import Style from './login.style';
import { linkProps } from '@/src/components/link/interfaces';
import Link from '@/src/components/link/link';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import TextFactory from '@/src/factories/text-factory/text-factory';
import linksStore from '@/store/links/links-store';
import { observer } from 'mobx-react';
import Spacer from '@/src/controllers/spacer/spacer';
import InputFactory from '@/src/factories/input-factory/input-factory';
import TextInput from '@/src/controllers/text-input/text-input';
import { useState } from 'react';

interface formProp {
  email: string;
  password: string;
  isEmailFocus: boolean;
  isPasswordFocus: boolean;
  isError: boolean;
}

export enum EnumLoginForm {
  Email = 'email',
  Password = 'password',
}

function Page() {


  const [infoForm, setInfoForm] = useState<formProp>({
    email: '',
    password: '',
    isEmailFocus: false,
    isPasswordFocus: false,
    isError: false,
  })


  function handleInfoForm(field: EnumLoginForm, value: string) {
    if (field === EnumLoginForm.Email) {
      setInfoForm({ ...infoForm, email: value });
    }
    if (field === EnumLoginForm.Password) {
      setInfoForm({ ...infoForm, password: value });
    }
  };

  const handleFocus = (field: EnumLoginForm, value: boolean) => {
    if (field === EnumLoginForm.Email) {
      setInfoForm({ ...infoForm, isEmailFocus: value });
    }
    if (field === EnumLoginForm.Password) {
      setInfoForm({ ...infoForm, isPasswordFocus: value });
    }
  };


  return (
    <Screen >
      <TextFactory style={Style.title} type='h2'>Log in</TextFactory>
      <Spacer size={32} />
      <InputFactory
        label="Email"
        placeholder={"Email"}
        value={infoForm.email}
        // accessoryLeft={() => (infoForm.isEmailFocus ? <FocusName /> : infoForm.isError ? <ErrorName /> : <Name />)}
        onChangeText={(value: string) => handleInfoForm(EnumLoginForm.Email, value)}
        isError={infoForm.email.length === 0}
        caption={infoForm.email.length === 0 ? "Email is required" : ''}
        onPressIn={() => handleFocus(EnumLoginForm.Email, true)}
        onEndEditing={() => handleFocus(EnumLoginForm.Email, false)}
      />

    </Screen >
  );
}

export default observer(Page);