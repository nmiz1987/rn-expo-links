import { observer } from 'mobx-react';
import useSingIn from './hooks/useSingIn';
import { EnumSingInForm } from './interface';
import Style from './sing-in.style';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import Spacer from '@/src/controllers/spacer/spacer';
import TextInput from '@/src/controllers/text-input/text-input';
import ButtonFactory from '@/src/factories/button-factory/button-factory';
import TextFactory from '@/src/factories/text-factory/text-factory';

function Page() {
  const { singInForm, handleSingInForm, handleFocus, handlePasswordVisibility, onPressHandler, resetFormHandler } = useSingIn();
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
          value={singInForm.email}
          isError={singInForm.isError}
          caption={singInForm.emailErrorText}
          onChangeText={(value: string) => handleSingInForm(EnumSingInForm.Email, value)}
          onPressIn={() => handleFocus(EnumSingInForm.Email, true)}
          onEndEditing={() => handleFocus(EnumSingInForm.Email, false)}
        />
        <Spacer size={16} />
        <TextInput
          secureTextEntry={!singInForm.isPasswordVisible}
          label="Password"
          placeholder="I won't tell anyone..."
          isError={singInForm.isError}
          iconImage={singInForm.isPasswordVisible ? openEye : closeEye}
          iconHandler={handlePasswordVisibility}
          value={singInForm.password}
          caption={singInForm.passwordErrorText}
          onChangeText={(value: string) => handleSingInForm(EnumSingInForm.Password, value)}
          onPressIn={() => handleFocus(EnumSingInForm.Password, true)}
          onEndEditing={() => handleFocus(EnumSingInForm.Password, false)}
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
