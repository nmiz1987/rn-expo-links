import { observer } from 'mobx-react';
import useSignIn from './hooks/useSingIn';
import { EnumSignInForm } from './interface';
import Styles from './sign-in.style';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import Spacer from '@/src/components/spacer/spacer';
import TextInput from '@/src/components/text-input/text-input';
import ButtonFactory from '@/src/factories/button-factory/button-factory';
import TextFactory from '@/src/factories/text-factory/text-factory';
import CheckBox from '@/src/factories/check-box-factory/square-check-box/square-check-box';
import applicationStore from '@/store/application/application-store';

function Page() {
  const {
    isLoading,
    signInForm,
    errorMsg,
    handleSignInForm,
    handlePasswordVisibility,
    onPressHandler,
    resetFormHandler,
    registerHandler,
    handleRememberMe,
  } = useSignIn();
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
          value={signInForm.email}
          isError={signInForm.isError}
          caption={signInForm.emailErrorText}
          onChangeText={(value: string) => handleSignInForm(EnumSignInForm.Email, value)}
        />
        <Spacer size={16} />
        <TextInput
          secureTextEntry={!signInForm.isPasswordVisible}
          label="Password"
          autoCapitalize="none"
          placeholder="I won't tell anyone..."
          isError={signInForm.isError}
          leftIconImage={passwordSVG}
          rightIconImage={signInForm.isPasswordVisible ? openEyeSVG : closeEyeSVG}
          rightIconHandler={handlePasswordVisibility}
          value={signInForm.password}
          caption={signInForm.passwordErrorText}
          onChangeText={(value: string) => handleSignInForm(EnumSignInForm.Password, value)}
          onSubmitEditing={onPressHandler}
        />
        <Spacer size={32} />
        <Box onPress={handleRememberMe}>
          <CheckBox label="Remember me" status={applicationStore.isRememberMe} />
        </Box>
        <Spacer size={32} />

        <Box style={Styles.row}>
          <ButtonFactory type="secondary" label="Reset form" onPress={resetFormHandler} />
          <ButtonFactory label="Log in!" isLoading={isLoading} onPress={onPressHandler} />
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
            Don't have an account?
          </TextFactory>
          <Box onPress={registerHandler}>
            <TextFactory type="h5" style={Styles.link}>
              Click here to register
            </TextFactory>
          </Box>
        </Box>
      </Box>
    </Screen>
  );
}

export default observer(Page);
