import {
    FaWindows,
    FaLinux,
    FaAndroid,
    FaPlaystation,
    FaApple,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack } from "@chakra-ui/react";
import { Platform } from "@/hooks/usePlatform";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        linux: FaLinux,
        android: FaAndroid,
        playstation: FaPlaystation,
        mac: FaApple,
        web: BsGlobe,
        nintendo: SiNintendo,
    };

    return (
        <>
            <HStack marginY={2} gap={4}>
                {platforms.map((platform) => {
                    const IconComponent = iconMap[platform.slug];

                    return IconComponent ? (
                        <IconComponent
                            key={platform.id}
                            color="gray.800"
                            fontSize="18px"
                        />
                    ) : null;
                })}
            </HStack>
        </>
    );
};

export default PlatformIconList;
