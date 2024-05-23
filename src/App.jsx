import { useState } from "react";
import { PriceContext } from "./context/priceContext";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Question from "./components/Question";

const App = () => {
  const [started, setStarted] = useState(false);
  const [price, setPrice] = useState(0);
  const [page, setPage] = useState(1);
  const [multiplier, setMultiplier] = useState(0);
  const [priceSelected, setPriceSelected] = useState([]);

  const Styles = {
    app: `
      bg-[#3d3935]
      w-screen
      min-h-screen
      text-white
      z-0
    `,
  };

  const startQuestions = () => {
    setStarted(true);
  };
  return (
    <>
      {(!started && page < 11) ? (
        <Landing onClick={startQuestions} />
      ) : (
        <div className={Styles.app}>
          <PriceContext.Provider value={price}>
            <Nav
              multiplier={multiplier}
              page={page}
              setPage={setPage}
              priceSelected={priceSelected}
              setPrice={setPrice}
              setPriceSelected={setPriceSelected}
            />
            <Question
              multiplier={multiplier}
              setMultiplier={setMultiplier}
              price={price}
              setPrice={setPrice}
              page={page}
              setPage={setPage}
              priceSelected={priceSelected}
              setPriceSelected={setPriceSelected}
            />
          </PriceContext.Provider>
        </div>
      )}
      {(!started && page >= 11)
        ? <p>Reporte</p>
        : <></>
      }
    </>
  );
};

export default App;
