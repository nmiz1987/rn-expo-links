import { useState } from 'react';
import { Tstatus } from './useCheckBoxState.interfaces';

function useCheckBoxState(status: boolean) {
  const [isChecked, setIsChecked] = useState<Tstatus>(status ?? false);

  const handlePress = () => {
    setIsChecked(cur => !cur);
  };

  return {
    isChecked,
    handlePress,
  };
}

export default useCheckBoxState;
