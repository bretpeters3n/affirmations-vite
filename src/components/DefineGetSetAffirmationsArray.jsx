import stockAffirmationsArray from "../db/stockAffirmations";

const DefineGetSetAffirmationsArray = (props) => {
  //   let affirmationsArray = props.affirmationsArray;
  let affirmationsArray = stockAffirmationsArray;
  console.log("affirmationsArray is:");
  console.log(affirmationsArray);
  //tests
  if (!affirmationsArray) {
    affirmationsArray = stockAffirmationsArray;
    // console.log("affirmationsArray is:");
    // console.log(affirmationsArray);
  }
  // define data
  //   let updateAffirmationsData = props.newAffirmationsData;
  //   console.log(updateAffirmationsData);
  // get data
  async function readData() {
    affirmationsArray = localStorage.getItem("affirmationsUnique")
      ? JSON.parse(localStorage.getItem("affirmationsUnique"))
      : affirmationsArray;
  }
  // set data
  readData().then(() => {
    localStorage.setItem(
      "affirmationsUnique",
      JSON.stringify(affirmationsArray)
    );
  });
  return affirmationsArray;
};

export default DefineGetSetAffirmationsArray;
