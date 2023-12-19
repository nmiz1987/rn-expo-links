import { observer } from 'mobx-react';
import useSignIn from './hooks/useForm';
import { EnumSignInForm } from './interface';
import Styles from './link-form.style';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import Spacer from '@/src/controllers/spacer/spacer';
import TextInput from '@/src/controllers/text-input/text-input';
import ButtonFactory from '@/src/factories/button-factory/button-factory';
import TextFactory from '@/src/factories/text-factory/text-factory';

function Page() {
  const { isLoading, formInfo, errorMsg, handleSignInForm, handlePasswordVisibility, onPressHandler, resetFormHandler, registerHandler } =
    useSignIn();
  const openEyeSVG = require('@/assets/svg/openEye.svg');
  const closeEyeSVG = require('@/assets/svg/closeEye.svg');
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
          value={formInfo.email}
          isError={formInfo.isError}
          caption={formInfo.emailErrorText}
          onChangeText={(value: string) => handleSignInForm(EnumSignInForm.Email, value)}
        />
        <Spacer size={16} />
        <TextInput
          secureTextEntry={!formInfo.isPasswordVisible}
          label="Password"
          autoCapitalize="none"
          placeholder="I won't tell anyone..."
          isError={formInfo.isError}
          leftIconImage={passwordSVG}
          rightIconImage={formInfo.isPasswordVisible ? openEyeSVG : closeEyeSVG}
          rightIconHandler={handlePasswordVisibility}
          value={formInfo.password}
          caption={formInfo.passwordErrorText}
          onChangeText={(value: string) => handleSignInForm(EnumSignInForm.Password, value)}
          onSubmitEditing={onPressHandler}
        />
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
