import ButtonGradient from "./assets/svg/BottonGradient";
import Header from "./components/Header";

interface Iprops {}
const App = ({}: Iprops) => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
