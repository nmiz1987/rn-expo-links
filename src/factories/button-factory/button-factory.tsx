import ButtonFactoryProps from './interfaces';
import PrimaryButton from './primary-button/primary-button';
import SecondaryButton from './secondary-button/secondary-button';

const ButtonFactory = (props: ButtonFactoryProps) => {
  switch (props.type) {
    case 'primary':
      return <PrimaryButton {...props} />;
    case 'secondary':
      return <SecondaryButton {...props} />;
    default:
      return <PrimaryButton {...props} />;
  }
};

export default ButtonFactory;
