import { Link } from 'expo-router';
import { observer } from 'mobx-react';
import useSignUp from './hooks/useSingUp';
import { EnumSignUpForm } from './interface';
import Styles from './sign-up.style';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import Spacer from '@/src/components/spacer/spacer';
import TextInput from '@/src/components/text-input/text-input';
import ButtonFactory from '@/src/factories/button-factory/button-factory';
import TextFactory from '@/src/factories/text-factory/text-factory';

function Page() {
  const { isLoading, signUpForm, errorMsg, handleSignUpForm, handleFocus, handlePasswordVisibility, onPressHandler, resetFormHandler } = useSignUp();
  const openEyeSVG = require('@/assets/svg/open-eye.svg');
  const closeEyeSVG = require('@/assets/svg/close-eye.svg');
  const emailSVG = require('@/assets/svg/email.svg');
  const passwordSVG = require('@/assets/svg/password.svg');

  return (
    <Screen>
      <Spacer size={32} />
      <Box>
        <TextInput
          keyboardType="email-address"
          label="Email"
          autoCapitalize="none"
          placeholder="What's your email?"
          leftIconImage={emailSVG}
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
          autoCapitalize="none"
          placeholder="I won't tell anyone..."
          isError={signUpForm.isError}
          leftIconImage={passwordSVG}
          rightIconImage={signUpForm.isPasswordVisible ? openEyeSVG : closeEyeSVG}
          rightIconHandler={handlePasswordVisibility}
          value={signUpForm.password}
          caption={signUpForm.passwordErrorText}
          onChangeText={(value: string) => handleSignUpForm(EnumSignUpForm.Password, value)}
          onPressIn={() => handleFocus(EnumSignUpForm.Password, true)}
          onEndEditing={() => handleFocus(EnumSignUpForm.Password, false)}
          onSubmitEditing={onPressHandler}
        />
        <Spacer size={32} />

        <Box style={Styles.row}>
          <ButtonFactory type="secondary" label="Reset form" onPress={resetFormHandler} />
          <ButtonFactory isLoading={isLoading} label="Sign up!" onPress={onPressHandler} />
        </Box>
        <Spacer size={40} />
        {errorMsg && (
          <>
            <TextFactory type="h4" style={Styles.errorMsg}>
              {errorMsg}
            </TextFactory>
            <Spacer size={16} />
          </>
        )}
        <Box style={Styles.textContainer}>
          <TextFactory type="h5" style={Styles.text}>
            Already have an account?
          </TextFactory>
          <Link href="/sign-in">
            <TextFactory type="h5" style={Styles.link}>
              Click here to sing in
            </TextFactory>
          </Link>
        </Box>
      </Box>
    </Screen>
  );
}

export default observer(Page);
