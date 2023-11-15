import { useEffect, useState } from "react";
import linksStore from "@/store/links/links-store";
import { linkProps } from "@/src/components/link/interfaces";

export default function useMain() {
  const [links, setLinks] = useState<linkProps[]>(linksStore.links);
  const [chosenCategory, setChosenCategory] = useState<string>("");
  const [searchTerms, setSearchTerms] = useState<string>("");

  // let filteredLinks = links.filter(link => link.category === category);
  // filteredLinks = filteredLinks.filter((link: linkProps) => link.name.toLowerCase().includes(searchTerms.toLowerCase()));

  useEffect(() => {
    if (searchTerms.length === 0) {
      setLinks(linksStore.links);
    } else {
      setLinks(links.filter((link: linkProps) => link.name.toLowerCase().includes(searchTerms.toLowerCase())));
    }
  }, [searchTerms, chosenCategory]);

  function categoryHandler(category: string) {
    if (category === chosenCategory) {
      setChosenCategory("");
    } else {
      setChosenCategory(category);
    }
  }

  function searchTermsHandler(value: string) {
    setSearchTerms(value);
  }

  return {
    links,
    searchTermsHandler,
    categoryHandler,
  };
}
