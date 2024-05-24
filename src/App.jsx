import { useState } from "react";
import { PriceContext } from "./context/priceContext";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Question from "./components/Question";
import Footer from "./components/Footer";

const App = () => {
  const [started, setStarted] = useState(false);
  const [price, setPrice] = useState(0);
  const [page, setPage] = useState(1);
  const [multiplier, setMultiplier] = useState(0);
  const [priceSelected, setPriceSelected] = useState([]);
  const [questionsSelected, setQuestionsSelected] = useState([]);

  const Styles = {
    app: `
      bg-[#030a29]
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
    <div className={Styles.app}>
      <PriceContext.Provider value={price}>
        {(!started) ? (
          <Landing onClick={startQuestions} />
        ) : (
          <>
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
              questionsSelected={questionsSelected}
              setQuestionsSelected={setQuestionsSelected}
            />
          </>
        )}
        {(page == 11) && <p>Reporte</p>}
        <Footer />
      </PriceContext.Provider>
    </div>
  );
};

export default App;
