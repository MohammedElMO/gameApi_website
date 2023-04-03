import {  PlatForm } from './hooks/useRequestedGame';
import { BsPlaystation,BsNintendoSwitch,BsAndroid2, BsXbox, BsApple } from "react-icons/bs"
import { SiLinux } from "react-icons/si"
import { AiFillWindows } from "react-icons/ai"
import { IoPhonePortrait} from "react-icons/io5"
import { FaWindows } from 'react-icons/fa';

type Props = {
    platforms: PlatForm[]
};
const GameIcons = ({ platforms }: Props) => {

      const tabIconGame =  [
             { name:"pc",icon:< FaWindows className="scale-110 text-gray-100" />},
             { name:"playstation",icon:< BsPlaystation  className="scale-110 text-gray-100"/>},
             {name:"xbox",icon:<BsXbox className="scale-110 text-gray-100"/>},
             { name:"nintendo", icon:<BsNintendoSwitch className="scale-110 text-gray-100" /> },
             { name:"linux",icon:<SiLinux className="scale-110 text-gray-100"/> },
             { name:"mac", icon:<BsApple className="scale-110 text-gray-100"/> },
             { name:"android", icon:<BsAndroid2 className="scale-110 text-gray-100"/> },
             { name:"ios", icon:<IoPhonePortrait className="scale-110 text-gray-100"/> },
        ]
           

    return (
        <div className="flex gap-3 px-2 py-3 flex-wrap">
            {platforms.map(platform => 
                <>
                    {tabIconGame.map(({ icon, name }) => {
                return platform.slug === name ? <span >{ icon}</span> : ""
            })}
                </>
            )}
        </div>
            
    );
};

export default GameIcons