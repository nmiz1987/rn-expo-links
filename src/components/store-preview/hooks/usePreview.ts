import { useState } from "react";

export default function usePreview() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return {
    isOpen,
    toggleOpen,
  };
}
