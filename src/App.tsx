import GamesGrid from "./components/gameUI/GamesGrid";
import NavBar from "./components/NavBar";
import useColorToggler from "./components/hooks/useColorToggler";
import { darkMode } from "./components/thems/them";
import "./index.css"
import GenresDropList from "./components/GenresDropList";


const App = () => {
  const { darkmode:dark,setDarkmode  } = useColorToggler()    

  return (
    <>
      <div className={darkMode("h-screen grid grid-areas-layout grid-rows-layout bg-slate-500", dark ,'bg-red-500')}>
        <section className=" grid-in-nav ">
          <NavBar darkmode={dark} setDarkmode={setDarkmode} />
        </section>
        <section className=" bg-[#999] grid-in-main max-md:col-start-nav ">
        <GamesGrid/>
          </section>
        <section className="bg-[#575656] grid-in-aside x-sm:max-md:hidden">
        <GenresDropList />  
        </section>
      </div>
    </>
  );
};

export default App;