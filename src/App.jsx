import { useState } from "react";
import { PriceContext } from "./context/priceContext";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Question from "./components/Question";
import Footer from "./components/Footer";
import Report from "./components/Report";
import useMockApi from "./hooks/useMockApi";

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
    infoContainer: `
      w-full
      h-screen
    `
  };

  const { postAnswers } = useMockApi();

  const sendAnswers = () => {
    const obj = [questionsSelected];
    postAnswers(obj)
  }

  const startQuestions = () => {
    setStarted(true);
  };
  return (
    <div className={Styles.app}>
      <PriceContext.Provider value={price}>
        <div className={Styles.infoContainer}>
          {(!started && page < 11) ? (
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
          {page == 11 && <Report onClick={() => sendAnswers()}/>}
        </div>
        <Footer />
      </PriceContext.Provider>
    </div>
  );
};

export default App;
