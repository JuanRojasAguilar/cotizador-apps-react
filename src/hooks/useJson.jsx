import jsonData from "../hooks/questions.json";

const getJson = () => {
    return jsonData;
}

const getSingleQuestion = (id) => {
    return getJson()[id];
}

export { getJson, getSingleQuestion };
