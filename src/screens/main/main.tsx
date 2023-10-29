import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { getAllLinks } from '@/api/links/links.api';
import { linkProps } from '@/src/components/link/interfaces';
import Link from '@/src/components/link/link';
import Screen from '@/src/controllers/screen/screen';

export default function Page() {
  const [links, setLinks] = useState<linkProps[]>([]);

  useEffect(() => {
    async function getLinks() {
      const res = await getAllLinks();
      setLinks(res);
    }
    getLinks();
  }, []);

  return (
    <Screen noScroll>
      <FlatList data={links} renderItem={({ item }) => <Link link={item} />} keyExtractor={item => item._id} />
    </Screen>
  );
}
