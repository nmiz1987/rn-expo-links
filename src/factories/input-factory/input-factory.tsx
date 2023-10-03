import {forwardRef} from 'react';

import TextInput from '@/components/controllers/text-input/text-input';
import React from 'react';
import InputFactoryProps from './interfaces';

const InputFactory = forwardRef(({type, label, isError, shownDisable, disabled, ...props}: InputFactoryProps, ref: any) => {
  switch (type) {
    case 'text':
      return <TextInput ref={ref} label={label} isError={isError} shownDisable={shownDisable} disabled={disabled} {...props} />;
    default:
      break;
  }
});

export default InputFactory;
