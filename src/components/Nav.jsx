import { useContext } from "react";
import { PriceContext } from "../context/priceContext";

const Nav = ({ page, setPage, setPriceSelected, priceSelected }) => {
  const Styles = {
    container: `
      flex 
      w-screen
      h-12
      fixed
      top-0 
      left-0
      justify-between
      items-center
      text-2xl
    `,
    backField: `
      w-1/3
    `,
    button: `
      ml-4
      hover:underline
      hover:underline-offset-8
      text-start
    `,
    pageField: `
      w-1/3
      flex 
      justify-center
    `,
    counter: `
      text-center
    `,
    priceField: `
      flex 
      w-1/3
      text-end
      justify-end
    `,
    price: `
      mr-4
      text-end 
    `,
  };

  const price = useContext(PriceContext);
  const handleBack = () => {
    setPriceSelected(priceSelected.filter(a => indexOf(a) != indexOf(-1)))
    setPage(page - 1);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.backField}>
        {page > 1 && (
          <button className={Styles.button} onClick={() => handleBack()}>
            Regresar
          </button>
        )}
      </div>
      <div className={Styles.pageField}>
        <p className={Styles.counter}>{page}/10</p>
      </div>
      <div className={Styles.priceField}>
        {price > 0 && <p className={Styles.price}>${price}</p>}
      </div>
    </div>
  );
};

export default Nav;
