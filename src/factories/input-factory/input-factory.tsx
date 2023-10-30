import React, { forwardRef } from 'react';

import InputFactoryProps from './interfaces';
import TextInput from '@/src/controllers/text-input/text-input';

const InputFactory = forwardRef(({ type, label, isError, shownDisable, disabled, ...props }: InputFactoryProps, ref: any) => {
  switch (type) {
    case 'text':
      return <TextInput ref={ref} label={label} isError={isError} shownDisable={shownDisable} disabled={disabled} {...props} />;
    default:
      return <TextInput ref={ref} label={label} isError={isError} shownDisable={shownDisable} disabled={disabled} {...props} />;
  }
});

export default InputFactory;
