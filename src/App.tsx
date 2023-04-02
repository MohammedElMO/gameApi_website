import NavBar from "./components/NavBar";
import "./index.css"


const App = () => {
  return (
    <>
      <div className="h-full grid grid-areas-layout  grid-rows-layout ">
        <section className=" grid-in-nav ">
          <NavBar/>
          </section>
          <section className=" bg-cyan-500 grid-in-main x-sm:max-md:col-start-nav ">Main</section>
            <section className=" bg-green-500 grid-in-aside x-sm:max-md:hidden">Aside</section>
      </div>
    </>
  );
};

export default App;