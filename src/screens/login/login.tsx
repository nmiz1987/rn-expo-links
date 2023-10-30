import { observer } from 'mobx-react';
import useLogin from './hooks/useLogin';
import { EnumLoginForm } from './interface';
import Style from './login.style';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import Spacer from '@/src/controllers/spacer/spacer';
import TextInput from '@/src/controllers/text-input/text-input';
import TextFactory from '@/src/factories/text-factory/text-factory';

function Page() {
  const { loginForm, handleLoginForm, handleFocus, handlePasswordVisibility } = useLogin();
  const openEye = require('@/assets/svg/openEye.svg');
  const closeEye = require('@/assets/svg/closeEye.svg');

  return (
    <Screen>
      <TextFactory style={Style.title} type="h2">
        Log in
      </TextFactory>
      <Spacer size={32} />
      <Box>
        <TextInput
          keyboardType="email-address"
          label="Email"
          placeholder="Email"
          value={loginForm.email}
          onChangeText={(value: string) => handleLoginForm(EnumLoginForm.Email, value)}
          caption={loginForm.emailErrorText}
          onPressIn={() => handleFocus(EnumLoginForm.Email, true)}
          onEndEditing={() => handleFocus(EnumLoginForm.Email, false)}
        />
        <Spacer size={16} />
        <TextInput
          secureTextEntry={!loginForm.isPasswordVisible}
          label="Password"
          placeholder="Password"
          iconImage={!loginForm.isPasswordVisible ? openEye : closeEye}
          iconHandler={handlePasswordVisibility}
          value={loginForm.password}
          onChangeText={(value: string) => handleLoginForm(EnumLoginForm.Password, value)}
          caption={loginForm.passwordErrorText}
          onPressIn={() => handleFocus(EnumLoginForm.Password, true)}
          onEndEditing={() => handleFocus(EnumLoginForm.Password, false)}
        />
      </Box>
    </Screen>
  );
}

export default observer(Page);
