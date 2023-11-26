export interface FilterBarProps {
  chosenCategory: string;
  searchTerms: string;
  rightIconImage: any;
  searchTermsHandler: (searchTerms: string) => void;
  filterLinksByCategory: (category: string) => void;
}
