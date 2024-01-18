import CircularCheckBox from './circular-checkbox/circular-checkbox';
import CheckBoxFactoryProps from './check-box-factory.interfaces';
import SquareCheckBox from './square-check-box/square-check-box';

const CheckBoxFactory = ({ type, ...props }: CheckBoxFactoryProps) => {
  switch (type) {
    case 'circular':
      return <CircularCheckBox {...props} />;
    default:
      return <SquareCheckBox {...props} />;
  }
};

export default CheckBoxFactory;
