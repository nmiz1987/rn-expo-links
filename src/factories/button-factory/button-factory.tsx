import ButtonFactoryProps from './interfaces';
import PrimaryButton from './primary-button/primary-button';
import SecondaryButton from './secondary-button/secondary-button';
import Button from '@mygenes/components/controllers/button/button';
import ButtonSwitch from './button-switch/button-switch';

const ButtonFactory = (props: ButtonFactoryProps) => {
  switch (props.type) {
    case 'primary':
      return <PrimaryButton {...props} />;
    case 'secondary':
      return <SecondaryButton {...props} />;
    case 'switch':
      return <ButtonSwitch {...props} />;

    default:
      return <Button {...props} />;
  }
};

export default ButtonFactory;
