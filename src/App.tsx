import GamesGrid from "./components/GamesGrid";
import NavBar from "./components/NavBar";
import useColorToggler from "./components/hooks/useColorToggler";
import { darkMode } from "./components/thems/them";
import "./index.css"


const App = () => {
  const { darkmode:dark,setDarkmode  } = useColorToggler()    

  return (
    <>
      <div className={darkMode("h-screen grid grid-areas-layout grid-rows-layout bg-slate-500", dark ,'bg-red-500')}>
        <section className=" grid-in-nav ">
          <NavBar darkmode={dark} setDarkmode={setDarkmode} />
          </section>
        <section className=" bg-cyan-500 grid-in-main max-md:col-start-nav ">
        <GamesGrid/>
          </section>
            <section className="bg-green-500 grid-in-aside x-sm:max-md:hidden">Aside</section>
      </div>
    </>
  );
};

export default App;