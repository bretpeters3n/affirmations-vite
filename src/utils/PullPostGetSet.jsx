export const postAffirmationsData = (affirmationsData) => {
  localStorage.setItem("affirmationsUnique", JSON.stringify(affirmationsData));
};

export const getCurrentGroupAffirmations = (affirmationsData, currentGroup) => {
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

export const getCurrentGroupKey = (affirmationsData, currentGroup) => {
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

export const getCurrentAffirmationKey = (affirmations, id) => {
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
