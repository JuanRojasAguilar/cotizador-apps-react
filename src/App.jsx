import { useState } from "react";
import { PriceContext } from "./context/priceContext";
import Nav from "./components/Nav";
import Landing from "./components/Landing";

const App = () => {
  const [started, setStarted] = useState(false);
  const [price, setPrice] = useState(0);
  const Styles = {
    app: `
      bg-[#3d3935]
      w-screen
      min-h-screen
      text-white
      z-0
    `
  }

  const startQuestions = () => {
    setStarted(true);
  }
  return (
    <>
      {!started ? <Landing onClick={startQuestions} /> :
        <div className={Styles.app}>
          <PriceContext.Provider value={price}>
            <Nav />
            <h1 className="pt-12">Hola mundo</h1>
            <button onClick={() => setPrice(price + 100)}>precioCambia</button>
          </PriceContext.Provider>
        </div>
      }
    </>
  )
}

export default App
