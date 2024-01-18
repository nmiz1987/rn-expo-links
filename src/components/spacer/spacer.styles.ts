import { StyleSheet } from 'react-native';

export const createStyle = (size: number, isVertical: boolean) => {
  return StyleSheet.create({
    container: {
      ...(isVertical ? { marginTop: size, width: '100%' } : { height: '100%', marginStart: size }),

      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
