import React from 'react';
import CircularCheckBox from './circular-checkbox/circular-checkbox';
import CheckBoxFactoryProps from './interfaces';
import CheckBox from '@/components/controllers/check-box/check-box';

const CheckBoxFactory = ({type, ...props}: CheckBoxFactoryProps) => {
  switch (type) {
    case 'circular':
      return <CircularCheckBox {...props} />;

    default:
      return <CheckBox {...props} />;
  }
};

export default CheckBoxFactory;
