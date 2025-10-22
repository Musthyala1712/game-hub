import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons/lib";

interface PlatformIconListProps {
  platform: Platform[];
}
export const PlatformIconList = (props: PlatformIconListProps) => {
  const { platform } = props;

  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
  };
  return (
    <HStack margin={1}>
      {platform.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500"></Icon>
      ))}
    </HStack>
  );
};
