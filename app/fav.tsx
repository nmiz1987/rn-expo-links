import Screen from '@/src/controllers/screen/screen';
import TextFactory from '@/src/factories/text-factory/text-factory';

export default function Page() {
  return (
    <Screen>
      <TextFactory>Demo</TextFactory>
    </Screen>
  );
}
