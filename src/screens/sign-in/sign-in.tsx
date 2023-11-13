import { observer } from 'mobx-react';
import useSignIn from './hooks/useSingIn';
import { EnumSignInForm } from './interface';
import Style from './sign-in.style';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import Spacer from '@/src/controllers/spacer/spacer';
import TextInput from '@/src/controllers/text-input/text-input';
import ButtonFactory from '@/src/factories/button-factory/button-factory';
import TextFactory from '@/src/factories/text-factory/text-factory';
import { Link } from 'expo-router';

function Page() {
  const { signInForm, handleSignInForm, handleFocus, handlePasswordVisibility, onPressHandler, resetFormHandler } = useSignIn();
  const openEye = require('@/assets/svg/openEye.svg');
  const closeEye = require('@/assets/svg/closeEye.svg');

  return (
    <Screen>
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
        <Spacer size={40} />
        <Box style={Style.textContainer}>
          <TextFactory type="h5" style={Style.text}>
            Don't have an account?
          </TextFactory>
          <Link href="/sign-up">
            <TextFactory type="h5" style={Style.link}>
              Click here to register
            </TextFactory>
          </Link>
        </Box>
      </Box>
    </Screen>
  );
}

export default observer(Page);
