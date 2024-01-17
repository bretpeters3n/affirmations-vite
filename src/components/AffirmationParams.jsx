import { useEffect, useState } from "react";
import Pet from "../Pet";
import DefineGetSetAffirmationsArray from "./DefineGetSetAffirmationsArray";

const AffirmationParams = () => {
  // variable holding the localStorage data
  const [affirmationsData, setAffirmationsData] = useState(
    DefineGetSetAffirmationsArray()
  );

  const [currentGroup, setCurrentGroup] = useState(
    affirmationsData[0].currentGroup
  );

  let affirmationGroups = affirmationsData[0].groups;

  const [affirmationsList, setAffirmationList] = useState([]);

  // const [availableGroups, setAvailableGroups] = useState();

  useEffect(() => {
    getAffirmations();
  }, [currentGroup]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setAffirmations();
  }, [currentGroup]);

  function getAffirmations() {
    // const newAffirmationsData = affirmationsData;
    affirmationsData[0].currentGroup = currentGroup;

    // define var for key of affirmation group we are attempting to display
    let groupKey;
    // assign the wanted key to the var
    Object.entries(affirmationGroups).forEach((entry) => {
      const [key, value] = entry;
      if (value.group === currentGroup) {
        groupKey = key;
      }
    });

    setAffirmationList(affirmationGroups[groupKey].affirmations);
  }

  function setAffirmations() {
    localStorage.setItem(
      "affirmationsUnique",
      JSON.stringify(affirmationsData)
    );
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="group">
          Group
          <select
            id={currentGroup}
            value={currentGroup}
            onChange={(e) => {
              let tempTarget = e.target.value;
              setCurrentGroup(tempTarget);
            }}
          >
            {/* <option /> */}
            {affirmationGroups.map((groups) => (
              <option id={groups.group} value={groups.group}>
                {groups.group}
              </option>
            ))}
          </select>
        </label>
      </form>
      {affirmationsList.map((affirmation) => (
        <div affirmation={affirmation}>{affirmation.affirmation}</div>
      ))}
    </div>
  );
};

export default AffirmationParams;
