import { Platform } from "../hooks/useRequestedGame";
import {
  BsPlaystation,
  BsNintendoSwitch,
  BsAndroid2,
  BsXbox,
  BsApple,
} from "react-icons/bs";
import { SiLinux } from "react-icons/si";
import { AiFillWindows } from "react-icons/ai";
import { IoPhonePortrait } from "react-icons/io5";
import { FaWindows } from "react-icons/fa";
import React from "react";

type Props = {
  platforms: Platform[];
};
const GameIcons = ({ platforms }: Props) => {
  const tabIconGame = [
    {
      name: "pc",
      id: 1,
      icon: <FaWindows className="scale-125 text-gray-100" />,
    },
    {
      name: "playstation",
      id: 2,
      icon: <BsPlaystation className="scale-125 text-gray-100" />,
    },
    {
      name: "xbox",
      id: 3,
      icon: <BsXbox className="scale-125 text-gray-100" />,
    },
    {
      name: "nintendo",
      id: 4,
      icon: <BsNintendoSwitch className="scale-125 text-gray-100" />,
    },
    {
      name: "linux",
      id: 5,
      icon: <SiLinux className="scale-125 text-gray-100" />,
    },
    {
      name: "mac",
      id: 6,
      icon: <BsApple className="scale-125 text-gray-100" />,
    },
    {
      name: "android",
      id: 7,
      icon: <BsAndroid2 className="scale-125 text-gray-100" />,
    },
    {
      name: "ios",
      id: 8,
      icon: <IoPhonePortrait className="scale-125 text-gray-100" />,
    },
  ];

  return (
    <div className="flex gap-3 px-2 py-3 flex-wrap">
      {platforms.map((platform) => (
        <React.Fragment key={platform.id}>
          {tabIconGame.map(({ icon, name, id }) => {
            return platform.slug === name ? <span key={id}>{icon}</span> : null;
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default GameIcons;
