import PrimaryButtonProps from './primary-button/interfaces';
import SecondaryButtonProps from './secondary-button/interfaces';

type ButtonFactoryProps =
  | (PrimaryButtonProps & {
      type?: 'primary';
      label: string;
      isLoading?: boolean;
    })
  | (SecondaryButtonProps & {
      type?: 'secondary';
      label: string;
    })
  | (PrimaryButtonProps & {
      type?: 'default';
      label: string;
      isLoading?: boolean;
    });

export default ButtonFactoryProps;
