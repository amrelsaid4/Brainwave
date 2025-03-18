import React from "react"; 
import ButtonGradient from "./assets/svg/BottonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";

interface Iprops {}
const App: React.FC<Iprops> = ({}) => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;