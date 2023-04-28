import logo from "../assets/framer.webp"
import { FaRegMoon, FaMoon } from "react-icons/fa"
// import useColorToggler from "../components/hooks/useColorToggler"
import { darkMode } from "../components/thems/them"
import { Searchgame } from "./Searchgame"
type Props  = {
    darkmode: boolean;
    setDarkmode: React.Dispatch<React.SetStateAction<boolean>>
    onSearchGame:(gameTitle:string) => void
}
const NavBar = ({darkmode,setDarkmode,onSearchGame}:Props) => {
    
    return (
        <nav className={darkMode("flex w-full font-pop p-2   bg-[rgba(0,0,0,.9)] ",darkmode,"bg-[rgba(255,255,255,.9)] ")}>
            <img src={logo} alt="logo image of game website" />
            <Searchgame onSearchGame={onSearchGame} />
            <ul className="list-none w-full flex  items-center gap-5 p-3 transition-all text-white ">
                 <li className={darkMode("ml-auto font-semibold flex gap-3 items-center w-fit",darkmode,"text-[#1b1b20]")}>
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