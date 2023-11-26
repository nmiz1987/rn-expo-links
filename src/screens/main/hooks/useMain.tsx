import { useState } from 'react';
import { linkProps } from '@/src/components/link/interfaces';
import linksStore from '@/store/links/links-store';

export default function useMain() {
  const [links, setLinks] = useState<linkProps[]>(linksStore.links);
  const [searchTerms, setSearchTerms] = useState<string>('');
  const [chosenCategory, setChosenCategory] = useState<string>('');
  const filteredLinks = links.filter((link: linkProps) => link.name.toLowerCase().includes(searchTerms.toLowerCase()));

  function filterLinksByCategory(category: string) {
    if (category === chosenCategory) {
      setLinks(linksStore.links); // all links
      setChosenCategory('');
    } else {
      setChosenCategory(category);
      const filteredLinks = linksStore.links.filter(link => link.category === category);
      setLinks(filteredLinks);
    }
  }

  function searchTermsHandler(value: string) {
    setSearchTerms(value);
  }

  return {
    chosenCategory,
    searchTerms,
    filterLinksByCategory,
    filteredLinks,
    searchTermsHandler,
  };
}
