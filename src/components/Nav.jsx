import { useState } from "react";

 const Nav = () => {
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
    button: `
      ml-4
      w-[30%]
      hover:underline
      hover:underline-offset-8
      text-start
    `,
    counter : `
      w-[30%]
      text-center
    `,
    price: `
      mr-4
      w-[30%]
      text-end 
      
    `
  }

  const [page, setPage] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(100);

  return (
    <div className={Styles.container}>
      <button className={Styles.button}>Regresar</button>
      <p className={Styles.counter}>{page}/10</p>
      {currentPrice != 0 && 
        <p className={Styles.price}>${currentPrice}</p>
      }
    </div>
  )
}

export default Nav;

