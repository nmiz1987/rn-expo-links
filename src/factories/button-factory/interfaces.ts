
import PrimaryButtonProps from './primary-button/interfaces';
import SecondaryButtonProps from './secondary-button/interfaces';

type ButtonFactoryProps =
  | (PrimaryButtonProps & {
    type: 'primary';
    label: string;
  })
  | (SecondaryButtonProps & {
    type: 'secondary';
    label: string;
  })
  | (PrimaryButtonProps & {
    type: 'default';
    label: string;
  })


export default ButtonFactoryProps;

