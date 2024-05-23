import { getSingleQuestion } from "../hooks/useJson";

const Question = ({
  multiplier,
  setMultiplier,
  setPrice,
  page,
  setPage,
  priceSelected,
  setPriceSelected
}) => {
  let data;
  if (page != 11) {
    data = getSingleQuestion(page - 1);
  } else {
    data = {};
  }
  const Styles = {
    container: `
      h-screen
      w-screen
      pt-12
      flex 
      flex-col
      items-center
      justify-center
    `,
    title: `
      text-[32px]
    `,
    buttonContainer: `
      mt-20
      flex 
      flex-wrap
      w-[80%]
      justify-around
      gap-y-4
    `,
    button: `
      flex
      items-center
      gap-4
      w-80
      h-28
      text-[16px]
      px-[16px]
      py-[8px]
      rounded
      ease-out duration-300
      hover:bg-white/10
      hover:-translate-y-[10px]
    `,
    image: `
      w-28
    `,
  };

  const handleClick = (newPrice) => {
    let calc = 0;
    let newPriceSelected = [...priceSelected, newPrice];

    if (page == 1) {
      setMultiplier(newPrice);
    } else if (page == 2) {
      setPriceSelected(newPriceSelected)
      calc = newPriceSelected[0]; 
    } else {
      setPriceSelected(newPriceSelected);
      calc = priceSelected.reduce((a, b) => a + b);
    }
    setPrice(calc * multiplier);
    setPage(page + 1);
  };

  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>{data.question}</h1>
      <div className={Styles.buttonContainer}>
        {data.options?.map((option) => {
          return (
            <button
              className={Styles.button}
              key={option.text}
              onClick={() => handleClick(option.cost)}
            >
              <img src={option.image} className={Styles.image} />
              {option.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
