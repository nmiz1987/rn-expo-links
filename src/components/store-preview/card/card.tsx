import Box from "@/src/controllers/box/box";
import TextFactory from "@/src/factories/text-factory/text-factory";
import Style from "./card.styles";
import { Image } from "expo-image";
import { CardProps } from "./card.interfaces";
import useCard from "./hooks/useCard";

function Card({ title, info }: CardProps) {
  const { isOpen, toggleOpen, getInfo } = useCard();

  return (
    <Box scroll style={Style.container}>
      <Box style={Style.titleRow} onPress={toggleOpen}>
        <TextFactory type="h5" style={Style.title}>
          Key: {title}
        </TextFactory>
        <Box style={Style.arrowContainer}>
          <Image style={[Style.arrow, isOpen && Style.rotate]} source={require("./asset/direction-up.svg")} contentFit="contain" />
        </Box>
      </Box>
      <Box style={[Style.bar, !isOpen && { display: "none" }]} />
      <Box style={[Style.infoContainer, !isOpen && { display: "none" }]}>{getInfo(info)}</Box>
    </Box>
  );
}

export default Card;
