import { useEffect, useState } from "react";
import Pet from "../Pet";
import defaultAffirmations from "../db/defaultAffirmations";

const AffirmationParams = () => {
  const [currentGroup, setCurrentGroup] = useState(
    defaultAffirmations[0].currentGroup
    // "Default Affirmations"
  );

  const [affirmationsList, setAffirmationList] = useState([]);

  let affirmationGroups = defaultAffirmations[0].groups;
  console.log("affirmationGroups is:");
  console.log(affirmationGroups);

  useEffect(() => {
    requestAffirmations();
  }, [currentGroup]); // eslint-disable-line react-hooks/exhaustive-deps

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

  function requestAffirmations() {
    // affirmationsArray[0].currentGroup = currentGroup;
    // console.log(affirmationsArray);

    // const res = defaultAffirmations;

    console.log("defaultAffirmations is:");
    console.log(defaultAffirmations);

    // define var for key of affirmation group we are attempting to display
    let groupKey;
    // assign the wanted key to the var
    Object.entries(affirmationGroups).forEach((entry) => {
      const [key, value] = entry;
      // if (value.group === currentGroup) {
      //   groupKey = key;
      // }
      if (value.group === "Default Affirmations") {
        groupKey = key;
      }
    });

    // assign var with array of affirmations we are attempting to display
    setAffirmationList(affirmationGroups[groupKey].affirmations);
    console.log("affirmationsList is:");
    console.log(affirmationsList);

    // let affirmationList = JSON.stringify(defaultAffirmations);
    // console.log("res is:");
    // console.log(JSON.stringify(res));
    // console.log("affirmationList is:");
    // console.log(JSON.stringify(affirmationList));
    // console.log("affirmationList[0] is:");
    // console.log(affirmationList[0]);
    // console.log("defaultAffirmations is:");
    // console.log(defaultAffirmations);
    // console.log(iterate(affirmationList));
    // setAffirmationList(affirmationList);

    // const index = affirmationList.findIndex((object) => {
    //   // return object.id === "b";
    //   return object.id === "Default Affirmations";
    // });

    // console.log(index);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="group">
          Group
          <select
            id="currentGroup"
            value={currentGroup}
            onChange={(e) => {
              setCurrentGroup("Default Affirmations");
              console.log("e.target.value is:");
              console.log(e.target.value);
              //   updateBreed("");
            }}
          >
            <option />
            {/* Figure out how to map this array */}
            {console.log("affirmationGroups[0] is: ")}
            {console.log(affirmationGroups[0])}
            {affirmationGroups.map((groups) => (
              <option key={groups} value={groups}>
                {groups.group}
              </option>
            ))}
            {/* {fetchResultExample.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))} */}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {/* {affirmationGroups[0].map((group) => (
        <option key={group} value={group}>
          {group}
        </option>
      ))} */}
      {console.log("affirmationsList is: ")}
      {console.log(affirmationsList)}
      {affirmationsList.map((affirmation) => (
        <div affirmation={affirmation} key={affirmation}>
          {affirmation.affirmation}
        </div>
      ))}
    </div>
  );
};

export default AffirmationParams;
