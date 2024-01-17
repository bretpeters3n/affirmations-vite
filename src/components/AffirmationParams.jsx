import { useEffect, useState } from "react";
import Pet from "../Pet";
// import defaultAffirmations from "../db/stockAffirmations";
import DefineGetSetAffirmationsArray from "./DefineGetSetAffirmationsArray";
import stockAffirmationsArray from "../db/stockAffirmations";

const AffirmationParams = () => {
  // variable holding the localStorage data
  const [affirmationsData, setAffirmationsData] = useState(
    DefineGetSetAffirmationsArray()
  );

  const [currentGroup, setCurrentGroup] = useState(
    affirmationsData[0].currentGroup
  );

  let affirmationGroups = affirmationsData[0].groups;
  // console.log("affirmationGroups is:");
  // console.log(affirmationGroups);

  const [affirmationsList, setAffirmationList] = useState([]);

  // const [availableGroups, setAvailableGroups] = useState();

  useEffect(() => {
    getAffirmations();
  }, [currentGroup]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setAffirmations();
  }, [currentGroup]);

  //   async function requestAffirmations() {
  //     const res = await fetch(
  //       `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //     );
  //     const json = await res.json();
  //     setPets(json.pets);
  //     console.log("json.pets is: " + JSON.stringify(json.pets));
  //   }

  // const iterate = (obj) => {
  //   Object.keys(obj).forEach((key) => {
  //     console.log(`key: ${key}, value: ${obj[key]}`);

  //     if (typeof obj[key] === "object" && obj[key] !== null) {
  //       iterate(obj[key]);
  //     }
  //   });
  // };

  function getAffirmations() {
    // console.log("affirmationsData is:");
    // console.log(affirmationsData);
    const newAffirmationsData = affirmationsData;
    newAffirmationsData[0].currentGroup = currentGroup;
    console.log("newAffirmationsData is:");
    console.log(newAffirmationsData);
    // setAffirmationsData(DefineGetSetAffirmationsArray(newAffirmationsData));

    // console.log("defaultAffirmations is:");
    // console.log(defaultAffirmations);

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
    console.log("setAffirmations");
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
        <button
          onClick={() => {
            console.log("click");
            console.log("affirmationsData is:");
            console.log(affirmationsData);
          }}
        >
          Update localStorage
        </button>
      </form>
      {affirmationsList.map((affirmation) => (
        <div affirmation={affirmation}>{affirmation.affirmation}</div>
      ))}
    </div>
  );
};

export default AffirmationParams;
