import logo from "../assets/framer.webp"
import { FaRegMoon, FaMoon } from "react-icons/fa"
import useColorToggler from "../components/hooks/useColorToggler"
import { darkMode } from "../components/thems/them"
import { Searchgame } from "./Searchgame"
type Props  = {
    darkmode: boolean;
    setDarkmode:React.Dispatch<React.SetStateAction<boolean>>
}
const NavBar = ({darkmode,setDarkmode}:Props) => {
    return (
        <nav className="flex w-full font-pop p-2 bg-[#433D48]">
            <img src={logo} alt="logo image of game website" />
            <Searchgame/>
            <ul className="list-none w-full flex  items-center gap-5 p-3 transition-all text-white ">
                 <li className="ml-auto font-semibold flex gap-3 items-center w-fit">
                    dark Mode
                    {darkmode ?
                    <FaMoon className="cursor-pointer scale-125" onClick={() => setDarkmode(!darkmode)} /> :
                    <FaRegMoon className="cursor-pointer scale-125" onClick={() => setDarkmode(!darkmode)}/>}
                </li>
            </ul>
        </nav>

        );
};

export default NavBar;