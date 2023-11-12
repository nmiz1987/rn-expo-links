import { observer } from 'mobx-react';
import useLogin from './hooks/useLogin';
import { EnumSingUpForm } from './interface';
import Style from './sing-up.style';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import Spacer from '@/src/controllers/spacer/spacer';
import TextInput from '@/src/controllers/text-input/text-input';
import ButtonFactory from '@/src/factories/button-factory/button-factory';
import TextFactory from '@/src/factories/text-factory/text-factory';

function Page() {
  const { singUpForm, handleSingUpForm, handleFocus, handlePasswordVisibility, onPressHandler, resetFormHandler } = useLogin();
  const openEye = require('@/assets/svg/openEye.svg');
  const closeEye = require('@/assets/svg/closeEye.svg');

  return (
    <Screen>
      <TextFactory style={Style.title} type="h2">
        Sing up
      </TextFactory>
      <Spacer size={32} />
      <Box>
        <TextInput
          keyboardType="email-address"
          label="Email"
          placeholder=""
          value={singUpForm.email}
          isError={singUpForm.isError}
          caption={singUpForm.emailErrorText}
          onChangeText={(value: string) => handleSingUpForm(EnumSingUpForm.Email, value)}
          onPressIn={() => handleFocus(EnumSingUpForm.Email, true)}
          onEndEditing={() => handleFocus(EnumSingUpForm.Email, false)}
        />
        <Spacer size={16} />
        <TextInput
          secureTextEntry={!singUpForm.isPasswordVisible}
          label="Password"
          placeholder="I won't tell anyone..."
          isError={singUpForm.isError}
          iconImage={singUpForm.isPasswordVisible ? openEye : closeEye}
          iconHandler={handlePasswordVisibility}
          value={singUpForm.password}
          caption={singUpForm.passwordErrorText}
          onChangeText={(value: string) => handleSingUpForm(EnumSingUpForm.Password, value)}
          onPressIn={() => handleFocus(EnumSingUpForm.Password, true)}
          onEndEditing={() => handleFocus(EnumSingUpForm.Password, false)}
        />
        <Spacer size={32} />

        <Box style={Style.row}>
          <ButtonFactory type="secondary" label="Reset form" onPress={resetFormHandler} />
          <ButtonFactory label="Sing up!" onPress={onPressHandler} />
        </Box>
      </Box>
    </Screen>
  );
}

export default observer(Page);
