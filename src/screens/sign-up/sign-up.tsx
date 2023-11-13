import { observer } from 'mobx-react';
import useSignUp from './hooks/useSingUp';
import { EnumSignUpForm } from './interface';
import Style from './sign-up.style';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import Spacer from '@/src/controllers/spacer/spacer';
import TextInput from '@/src/controllers/text-input/text-input';
import ButtonFactory from '@/src/factories/button-factory/button-factory';
import TextFactory from '@/src/factories/text-factory/text-factory';
import { Link } from 'expo-router';

function Page() {
  const { signUpForm, handleSignUpForm, handleFocus, handlePasswordVisibility, onPressHandler, resetFormHandler } = useSignUp();
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
          value={signUpForm.email}
          isError={signUpForm.isError}
          caption={signUpForm.emailErrorText}
          onChangeText={(value: string) => handleSignUpForm(EnumSignUpForm.Email, value)}
          onPressIn={() => handleFocus(EnumSignUpForm.Email, true)}
          onEndEditing={() => handleFocus(EnumSignUpForm.Email, false)}
        />
        <Spacer size={16} />
        <TextInput
          secureTextEntry={!signUpForm.isPasswordVisible}
          label="Password"
          placeholder="I won't tell anyone..."
          isError={signUpForm.isError}
          iconImage={signUpForm.isPasswordVisible ? openEye : closeEye}
          iconHandler={handlePasswordVisibility}
          value={signUpForm.password}
          caption={signUpForm.passwordErrorText}
          onChangeText={(value: string) => handleSignUpForm(EnumSignUpForm.Password, value)}
          onPressIn={() => handleFocus(EnumSignUpForm.Password, true)}
          onEndEditing={() => handleFocus(EnumSignUpForm.Password, false)}
        />
        <Spacer size={32} />

        <Box style={Style.row}>
          <ButtonFactory type="secondary" label="Reset form" onPress={resetFormHandler} />
          <ButtonFactory label="Sign up!" onPress={onPressHandler} />
        </Box>
        <Spacer size={40} />
        <Box style={Style.textContainer}>
          <TextFactory type="h5" style={Style.text}>
            Already have an account?
          </TextFactory>
          <Link href="/sign-in">
            <TextFactory type="h5" style={Style.link}>
              Click here to sing in
            </TextFactory>
          </Link>
        </Box>
      </Box>
    </Screen>
  );
}

export default observer(Page);
