import { observer } from 'mobx-react';
import useSignIn from './hooks/useSignIn';
import { EnumSignInForm } from './interface';
import Style from './sign-in.style';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import Spacer from '@/src/controllers/spacer/spacer';
import TextInput from '@/src/controllers/text-input/text-input';
import ButtonFactory from '@/src/factories/button-factory/button-factory';
import TextFactory from '@/src/factories/text-factory/text-factory';

function Page() {
  const { signInForm, handleSignInForm, handleFocus, handlePasswordVisibility, onPressHandler, resetFormHandler } = useSignIn();
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
          placeholder=""
          value={signInForm.email}
          isError={signInForm.isError}
          caption={signInForm.emailErrorText}
          onChangeText={(value: string) => handleSignInForm(EnumSignInForm.Email, value)}
          onPressIn={() => handleFocus(EnumSignInForm.Email, true)}
          onEndEditing={() => handleFocus(EnumSignInForm.Email, false)}
        />
        <Spacer size={16} />
        <TextInput
          secureTextEntry={!signInForm.isPasswordVisible}
          label="Password"
          placeholder="I won't tell anyone..."
          isError={signInForm.isError}
          iconImage={signInForm.isPasswordVisible ? openEye : closeEye}
          iconHandler={handlePasswordVisibility}
          value={signInForm.password}
          caption={signInForm.passwordErrorText}
          onChangeText={(value: string) => handleSignInForm(EnumSignInForm.Password, value)}
          onPressIn={() => handleFocus(EnumSignInForm.Password, true)}
          onEndEditing={() => handleFocus(EnumSignInForm.Password, false)}
        />
        <Spacer size={32} />

        <Box style={Style.row}>
          <ButtonFactory type="secondary" label="Reset form" onPress={resetFormHandler} />
          <ButtonFactory label="Log in!" onPress={onPressHandler} />
        </Box>
      </Box>
    </Screen>
  );
}

export default observer(Page);
