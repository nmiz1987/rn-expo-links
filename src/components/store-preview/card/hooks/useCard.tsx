import { useState } from "react";
import Box from "@/src/controllers/box/box";
import TextFactory from "@/src/factories/text-factory/text-factory";
import Styles from "../card.styles";

export default function useCard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function getInfo(info: any) {
    let result: any;

    if (Array.isArray(info)) {
      if (info.length === 0) {
        result = <TextFactory>No Data</TextFactory>;
      } else {
        result = info.map((item, index) => (
          <Box key={JSON.stringify(item, null, 2)} style={Styles.row}>
            <Box style={Styles.circleLabel}>
              <TextFactory style={Styles.circleText}>{index + 1}</TextFactory>
            </Box>
            <TextFactory style={Styles.paragraph}>{JSON.stringify(item, null, 2)}</TextFactory>
          </Box>
        ));
      }
    } else if (typeof info === "object") {
      result = JSON.stringify(info, null, 2);
    } else {
      result = <TextFactory>null</TextFactory>;
    }
    return result;
  }

  return {
    isOpen,
    toggleOpen,
    getInfo,
  };
}
