import stockAffirmationsArray from "../db/stockAffirmations";

export const postAffirmationsData = (affirmationsData) => {
  localStorage.setItem("affirmationsUnique", JSON.stringify(affirmationsData));
};

export const requestAffirmationsDataIfPresent = () => {
  // define data
  let affirmationsData = null;
  // get data
  function readData() {
    affirmationsData = localStorage.getItem("affirmationsUnique")
      ? JSON.parse(localStorage.getItem("affirmationsUnique"))
      : null;
  }
  // save data to localStorage
  readData();
  // send data
  return affirmationsData;
};

export const requestAndSaveAffirmationsData = () => {
  // define data
  let affirmationsData = [];
  // get data
  function readDataThenSave() {
    affirmationsData = localStorage.getItem("affirmationsUnique")
      ? JSON.parse(localStorage.getItem("affirmationsUnique"))
      : stockAffirmationsArray;
    localStorage.setItem(
      "affirmationsUnique",
      JSON.stringify(affirmationsData)
    );
  }
  // save data to localStorage
  readDataThenSave();
  // send data
  return affirmationsData;
};

// export const requestLocalStorageAffirmationsData = () => {
//   // define data
//   let affirmationsData = [];
//   // get data
//   affirmationsData = JSON.parse(localStorage.getItem("affirmationsUnique"));
//   // send data
//   return affirmationsData;
// };

export const requestGroupAffirmations = (affirmationsData, currentGroup) => {
  affirmationsData[0].currentGroup = currentGroup;

  // define var for key of affirmation group we are attempting to display
  let groupKey;
  // assign the wanted key to the var
  Object.entries(affirmationsData[0].groups).forEach((entry) => {
    const [key, value] = entry;
    if (value.group === currentGroup) {
      groupKey = key;
    }
  });

  return affirmationsData[0].groups[groupKey].affirmations;
};

export const requestCurrentGroupKey = (affirmationsData, currentGroup) => {
  // define var for key of affirmation group we are attempting to display
  let groupKey;
  // assign the wanted key to the var
  Object.entries(affirmationsData[0].groups).forEach((entry) => {
    const [key, value] = entry;
    if (value.group === currentGroup) {
      groupKey = key;
    }
  });

  return groupKey;
};

export const requestCurrentAffirmationKey = (affirmations, id) => {
  // define var for key of affirmation group we are attempting to display
  let affirmationKey;
  // assign the wanted key to the var
  Object.entries(affirmations).forEach((entry) => {
    const [key, value] = entry;
    if (value.id === id) {
      affirmationKey = key;
    }
  });

  return affirmationKey;
};

export const requestCurrentGroupNames = (affirmationsData) => {
  // use affirmationsData to return the array of group names
  let currentGroupNames = [];
  affirmationsData[0].groups.forEach((entry) => {
    // const [key, value] = entry;
    currentGroupNames.push(entry.group);
  });
  console.log(currentGroupNames);
  return currentGroupNames;
};
