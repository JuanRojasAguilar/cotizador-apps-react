import "boxicons";
import { useContext } from "react";
import { PriceContext } from "../context/priceContext";

// eslint-disable-next-line react/prop-types
const Report = ({ onClick }) => {
    const price = useContext(priceContext);

    const Styles = {
      container: `
        z-10
        text-white
        flex
        flex-col
        items-center
        justify-center
      `,
      textContainer: `
        flex 
        flex-col
        items-center
        gap-4
      `,
      title: `
        text-[50px]
        text-center
      `,
      socialButton: `
        py-[0.5rem]
        px-3
        flex
        align-center
        rounded
      `,
      button: `
        bg-gradient-to-l from-[#7a56f4] to-[#14e2cd]
        pt-[1em]
        pr-[3em]
        pb-[1em]
        pl-[3em]
        text-[24px]
        self-center
        rounded
        hover:animate-pulse
      `,
    };
  
    return (
      <div className={Styles.container}>
        <button>Volver a empezar</button>
        <div className={Styles.textContainer}>
          <p>¡Bien! ¡Hemos terminado!</p>
          <h5>¡Compartenos si te ha gustado!</h5>
          <div className='flex gap-12'>
            <button className={Styles.socialButton + `bg-sky-500`}>
              <box-icon type='logo' name='facebook' color='white'></box-icon>
              Share
            </button>
            <button className={Styles.socialButton + `bg-sky-300`}>
              <box-icon name='linkedin' type='logo' color='white'></box-icon>
              Share
            </button>
            <button className={Styles.socialbutton + `bg-black`}>
                <box-icon type='logo' name='twitter' color='white'></box-icon>
                Tweet
            </button>
            <button>
                <img src="" alt="x share" />
                Tweet
            </button>
        </div>
          <h3 className={Styles.title}>
            Tu app costaria:
          </h3>
          <h2 className="text-[16px] text-[#14e2cd]">{price}</h2>
          <button className={Styles.button} onClick={onClick}>
            Crea tu proyecto
          </button>
        </div>
      </div>
    );
  };
  
  export default Report;
