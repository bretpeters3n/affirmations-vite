import stockAffirmationsArray from "../db/stockAffirmations";

const DefineGetSetAffirmationsArray = () => {
  //   let affirmationsArray = props.affirmationsArray;
  //   let affirmationsArray = stockAffirmationsArray;
  //   console.log("affirmationsArray is:");
  //   console.log(affirmationsArray);
  //tests
  //   if (!affirmationsArray) {
  //     affirmationsArray = stockAffirmationsArray;
  // console.log("affirmationsArray is:");
  // console.log(affirmationsArray);

  // define data
  //   let updateAffirmationsData = props.newAffirmationsData;
  //   console.log(updateAffirmationsData);
  // get data
  //   async function readData() {
  let affirmationsArray = localStorage.getItem("affirmationsUnique")
    ? JSON.parse(localStorage.getItem("affirmationsUnique"))
    : stockAffirmationsArray;

  // set data
  //   readData();
  return affirmationsArray;
};

export default DefineGetSetAffirmationsArray;
