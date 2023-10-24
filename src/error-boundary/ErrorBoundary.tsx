import Box from '@/src/controllers/box/box';
import TextFactory from '@/src/factories/text-factory/text-factory';
import {ErrorBoundaryProps} from 'expo-router';

export default function ErrorBoundary(props: ErrorBoundaryProps) {
  return (
    <Box style={{flex: 1, backgroundColor: 'red'}}>
      <TextFactory>{props.error.message}</TextFactory>
      <TextFactory onPress={props.retry}>Try Again?</TextFactory>
    </Box>
  );
}
