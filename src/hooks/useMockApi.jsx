import { useState } from "react";

const useMockApi = () => {
  const url = import.meta.env.VITE_BASE_URL;

  
  const postAnswers = (answers) => {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(answers)
    })
  }

  return { postAnswers };
}

export default useMockApi;

