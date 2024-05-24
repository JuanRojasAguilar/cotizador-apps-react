const Landing = ({ onClick }) => {
  const Styles = {
    container: `
      w-screen
      h-screen
      bg-[#030a29]
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
      <img src="https://www.cuantocuestamiapp.co/img/app/intro.png" alt="cellphone illustration" width="400"/>
      <div className={Styles.textContainer}>
        <h1 className={Styles.title}>
          Cuanto cuesta desarrollar mi{' '}
          <span className="text-[#14e2cd]">app</span>?
        </h1>
        <p className="text-[16px]">
          Calcula de forma rapida el costo para crear tu app, contestando estas
          sencillas preguntas.
        </p>
        <button className={Styles.button} onClick={onClick}>
          EMPEZAR
        </button>
      </div>
    </div>
  );
};

export default Landing;
