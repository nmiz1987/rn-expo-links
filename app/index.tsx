import { ErrorBoundaryProps } from 'expo-router';
import Box from '@/src/controllers/box/box';
import TextFactory from '@/src/factories/text-factory/text-factory';
import MainPage from '@/src/screens/main/main';

export function ErrorBoundary(props: ErrorBoundaryProps) {
  return (
    <Box style={{ flex: 1, backgroundColor: 'red' }}>
      <TextFactory>{props.error.message}</TextFactory>
      <TextFactory onPress={props.retry}>Try Again?</TextFactory>
    </Box>
  );
}

export default function Page() {
  return <MainPage />;
}
