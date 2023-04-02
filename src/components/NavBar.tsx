
import logo from "../assets/framer.webp"

 const NavBar = () => {
    return (
        <nav className="flex w-full font-pop">
            <img src={logo} alt="logo image of game website" />
            <ul className="list-none flex justify-around p-3 transition-all text-white bg-[#433D48]">
                <li className="p-2 hover:bg-[#d7d7d71c] rounded   cursor-pointer">Games</li>
                <li className="p-2 hover:bg-[#d7d7d71c] rounded cursor-pointer">Trends</li>
                <li className="p-2 hover:bg-[#d7d7d71c] rounded cursor-pointer">Shop</li>
                <li className="p-2 hover:bg-[#d7d7d71c] rounded cursor-pointer">ContactHelp</li>
            </ul>
        </nav>

        );
};

export default NavBar;