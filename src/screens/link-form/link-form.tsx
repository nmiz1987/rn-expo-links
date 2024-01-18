import { observer } from 'mobx-react';
import useForm from './hooks/useForm';
import { EnumForm } from './interface';
import Styles from './link-form.style';
import Box from '@/src/controllers/box/box';
import Screen from '@/src/controllers/screen/screen';
import Spacer from '@/src/components/spacer/spacer';
import TextInput from '@/src/components/text-input/text-input';
import ButtonFactory from '@/src/factories/button-factory/button-factory';
import TextFactory from '@/src/factories/text-factory/text-factory';
import CheckBox from '@/src/factories/check-box-factory/square-check-box/square-check-box';
import AutoComplete from '@/src/components/auto-complete/auto-complete';
import linksStore from '@/store/links/links-store';

function Page() {
  const { isLoading, formInfo, errorMsg, getData, handleForm, onPressHandler, resetFormHandler } = useForm();

  return (
    <Screen>
      <Spacer size={8} />
      <Box scroll>
        <TextInput
          label="URL"
          keyboardType="url"
          value={formInfo.link}
          isError={formInfo.isErrorLink}
          caption={formInfo.isErrorLink ? 'Please enter a URL' : ''}
          onChangeText={(value: string) => handleForm(EnumForm.Link, value)}
        />
        <Spacer size={16} />
        <Box style={Styles.auto} onPress={getData}>
          <TextFactory type="h4" style={Styles.text}>
            Click here to try to automate get some al the data
          </TextFactory>
        </Box>
        <Spacer size={16} />
        <TextInput
          label="Name"
          value={formInfo.name}
          isError={formInfo.isErrorName}
          caption={formInfo.isErrorName ? 'Please enter a name' : ''}
          onChangeText={(value: string) => handleForm(EnumForm.Name, value)}
        />
        <Spacer size={16} />
        <TextInput
          label="Description"
          multiline
          value={formInfo.description}
          isError={formInfo.isErrorDescription}
          caption={formInfo.isErrorDescription ? 'Please enter a description' : ''}
          onChangeText={(value: string) => handleForm(EnumForm.Description, value)}
        />
        <Spacer size={16} />
        <TextInput
          label="Favicon"
          value={formInfo.imgSrc}
          isError={formInfo.isErrorImgSrc}
          caption={formInfo.isErrorImgSrc ? 'Please enter a description' : ''}
          onChangeText={(value: string) => handleForm(EnumForm.ImgSrc, value)}
        />
        <Spacer size={16} />
        <AutoComplete
          categories={linksStore.categories}
          label="Category"
          value={formInfo.category}
          isError={formInfo.isErrorCategory}
          caption={formInfo.isErrorCategory ? 'Please enter a category' : ''}
          onChangeText={(value: string) => handleForm(EnumForm.Category, value)}
          onSelect={(value: string) => handleForm(EnumForm.Category, value)}
          placeholder={'Choose from list or type a new one'}
        />
        <Spacer size={16} />
        <TextInput
          label="Tag"
          placeholder={`separate by comma ","`}
          value={formInfo.tags}
          isError={formInfo.isErrorTags}
          caption={formInfo.isErrorTags ? 'Please enter some tags...' : ''}
          onChangeText={(value: string) => handleForm(EnumForm.Tags, value)}
        />

        <Spacer size={16} />
        <Box onPress={() => handleForm(EnumForm.IsRecommended)}>
          <CheckBox label="Is recommended?" status={formInfo.isRecommended} />
        </Box>
        <Spacer size={32} />
        {errorMsg && (
          <>
            <TextFactory type="h4" style={Styles.errorMsg}>
              {errorMsg}
            </TextFactory>
            <Spacer size={16} />
          </>
        )}

        <Box style={Styles.row}>
          <ButtonFactory type="secondary" label="Reset form" onPress={resetFormHandler} />
          <ButtonFactory label="Add new link" isLoading={isLoading} onPress={onPressHandler} />
        </Box>
        <Spacer size={40} />
      </Box>
    </Screen>
  );
}

export default observer(Page);
