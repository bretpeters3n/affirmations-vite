import stockAffirmationsArray from "../db/stockAffirmations";

const fetchAffirmationsData = () => {
  const apiRes = localStorage.getItem("affirmationsUnique")
    ? JSON.parse(localStorage.getItem("affirmationsUnique"))
    : stockAffirmationsArray;

  return apiRes;
};

export default fetchAffirmationsData;
