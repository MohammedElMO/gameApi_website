
import { useState } from "react";
import logo from "../assets/framer.webp"
import { FaRegMoon,FaMoon } from "react-icons/fa"
const NavBar = () => {
    const [darkmode, setdarkmode] = useState<boolean>(false) 
    
    const setMode = darkmode ? "dark:" : ""
    return (
        <nav className={"flex w-full font-pop " + setMode + "bg-red-800"}>
            <img src={logo} alt="logo image of game website" />
            <ul className="list-none flex justify-around p-3 transition-all text-white bg-[#433D48]">
                <li className="">
                    {darkmode ?
                    <FaMoon className="cursor-pointer" onClick={() => setdarkmode(!darkmode)} /> :
                    <FaRegMoon className="cursor-pointer" onClick={() => setdarkmode(!darkmode)}/>}
                </li>
                <li className={"gameList " + setMode + "bg-slate-100"}>Games</li>
                <li className={"gameList " + setMode + "bg-slate-100"}>Trends</li>
                <li className={"gameList " + setMode + "bg-slate-100"}>Shop</li>
                <li className={"gameList " + setMode + "bg-slate-100"}>ContactHelp</li>
            </ul>
        </nav>

        );
};

export default NavBar;