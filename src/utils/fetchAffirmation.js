import stockAffirmationsArray from "../db/stockAffirmations";

const fetchAffirmation = ({ queryKey, id }) => {
  //   const affirmationsData = localStorage.getItem("affirmationsUnique")
  //     ? JSON.parse(localStorage.getItem("affirmationsUnique"))
  //     : stockAffirmationsArray;

  const groupKey = queryKey[1];
  //   const affirmationKey = id[1];

  const apiRes = localStorage.getItem("affirmationsUnique")
    ? JSON.parse(localStorage.getItem("affirmationsUnique"))
    : stockAffirmationsArray;

  console.log("apiRes is:");
  console.log(apiRes);

  const affirmation = apiRes[0].groups[groupKey].affirmations[0].affirmation;

  console.log("affirmation is:");
  console.log(affirmation);

  if (!apiRes) {
    throw new Error(`edit/${id} fetch is not ok`);
  }

  //   return apiRes.json();
  return affirmation;
};

export default fetchAffirmation;
