import stockAffirmationsArray from "../db/stockAffirmations";

const DefineGetSetAffirmationsArray = () => {
  let affirmationsArray = localStorage.getItem("affirmationsUnique")
    ? JSON.parse(localStorage.getItem("affirmationsUnique"))
    : stockAffirmationsArray;

  return affirmationsArray;
};

export default DefineGetSetAffirmationsArray;
