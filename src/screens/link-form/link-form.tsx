import { observer } from 'mobx-react';
import useForm from './hooks/useForm';
import { EnumForm } from './interface';
import Styles from './link-form.style';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import Spacer from '@/src/controllers/spacer/spacer';
import TextInput from '@/src/controllers/text-input/text-input';
import ButtonFactory from '@/src/factories/button-factory/button-factory';
import TextFactory from '@/src/factories/text-factory/text-factory';
import CheckBox from '@/src/components/check-box/check-box';

function Page() {
  const { isLoading, formInfo, errorMsg, handleForm, onPressHandler, resetFormHandler } = useForm();

  return (
    <Screen>
      <Spacer size={32} />
      <Box scroll>
        <TextInput
          label="URL"
          value={formInfo.link}
          isError={formInfo.isError}
          caption={formInfo.isError ? 'Please enter a URL' : ''}
          onChangeText={(value: string) => handleForm(EnumForm.Link, value)}
        />
        <Spacer size={16} />
        <TextInput
          label="Name"
          value={formInfo.name}
          isError={formInfo.isError}
          caption={formInfo.isError ? 'Please enter a name' : ''}
          onChangeText={(value: string) => handleForm(EnumForm.Name, value)}
        />
        <Spacer size={16} />
        <TextInput
          label="Description"
          multiline
          value={formInfo.description}
          isError={formInfo.isError}
          caption={formInfo.isError ? 'Please enter a description' : ''}
          onChangeText={(value: string) => handleForm(EnumForm.Description, value)}
        />
        <Spacer size={16} />
        <TextInput
          label="Tag"
          placeholder={`separate by comma ","`}
          value={formInfo.tags}
          isError={formInfo.isError}
          caption={formInfo.isError ? 'Please enter some tags...' : ''}
          onChangeText={(value: string) => handleForm(EnumForm.Tags, value)}
        />
        <Spacer size={16} />
        <TextInput
          label="Category"
          value={formInfo.category}
          isError={formInfo.isError}
          caption={formInfo.isError ? 'Please enter a category' : ''}
          onChangeText={(value: string) => handleForm(EnumForm.Category, value)}
        />

        <Spacer size={16} />
        <Box onPress={() => handleForm(EnumForm.IsRecommended)}>
          <CheckBox label="Is recommended?" status={formInfo.isRecommended} />
        </Box>
        <Spacer size={32} />

        <Box style={Styles.row}>
          <ButtonFactory type="secondary" label="Reset form" onPress={resetFormHandler} />
          <ButtonFactory label="Add new link" isLoading={isLoading} onPress={onPressHandler} />
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
      </Box>
    </Screen>
  );
}

export default observer(Page);
