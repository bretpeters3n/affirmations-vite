import { useEffect, useState } from "react";
import AffirmationListResults from "./AffirmationListResults";
import stockAffirmationsArray from "../db/stockAffirmations";

const AffirmationParams = () => {
  // variable holding the localStorage data
  const [affirmationsData, setAffirmationsData] = useState(
    localStorage.getItem("affirmationsUnique")
      ? JSON.parse(localStorage.getItem("affirmationsUnique"))
      : stockAffirmationsArray
  );

  const [currentGroup, setCurrentGroup] = useState(
    affirmationsData[0].currentGroup
  );

  const [affirmationsList, setAffirmationList] = useState([]);

  useEffect(() => {
    getCurrentGroupAffirmations();
  }, [currentGroup]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setAffirmations();
  }, [currentGroup]); // eslint-disable-line react-hooks/exhaustive-deps

  let affirmationGroups = affirmationsData[0].groups;
  function getCurrentGroupAffirmations() {
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
    <>
      <div className="d-flex flex-column search-params">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="group">
            Group
            <select
              id={currentGroup}
              key={currentGroup}
              value={currentGroup}
              onChange={(e) => {
                let tempTarget = e.target.value;
                setCurrentGroup(tempTarget);
              }}
            >
              {affirmationGroups.map((groups) => (
                <option
                  id={groups.group}
                  key={groups.group}
                  value={groups.group}
                >
                  {groups.group}
                </option>
              ))}
            </select>
          </label>
        </form>
        <ul className="list-group cards">
          <AffirmationListResults affirmationsList={affirmationsList} />
        </ul>
      </div>
    </>
  );
};

export default AffirmationParams;
