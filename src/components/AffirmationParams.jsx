import { useEffect, useState } from "react";
import Pet from "../Pet";
// import useBreedList from "./hooks/useBreedList";
// import AFFIRMATIONS from "./db/affirmations";
import defaultAffirmations from "../db/defaultAffirmations";

const AffirmationParams = () => {
  const [location, setLocation] = useState("");
  const [group, setGroup] = useState("Default Affirmations");
  //   const [breed, setBreed] = useState("");
  //   const [breeds] = useBreedList(affirmation);
  const [affirmationsList, setAffirmationList] = useState([]);

  useEffect(() => {
    requestAffirmations();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //   async function requestAffirmations() {
  //     const res = await fetch(
  //       `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //     );
  //     const json = await res.json();
  //     setPets(json.pets);
  //     console.log("json.pets is: " + JSON.stringify(json.pets));
  //   }

  const iterate = (obj) => {
    Object.keys(obj).forEach((key) => {
      console.log(`key: ${key}, value: ${obj[key]}`);

      if (typeof obj[key] === "object" && obj[key] !== null) {
        iterate(obj[key]);
      }
    });
  };

  function requestAffirmations() {
    const res = defaultAffirmations;
    console.log(
      "JSON.stringify(fetchResultExample) is: " +
        JSON.stringify(defaultAffirmations)
    );
    let currentGroup = "Default Affirmations";
    console.log("currentGroup is: " + JSON.stringify(currentGroup));

    let affirmationList = defaultAffirmations[0].affirmations;
    // let affirmationList = JSON.stringify(defaultAffirmations);
    console.log("res is:");
    console.log(JSON.stringify(res));
    console.log("affirmationList is:");
    console.log(JSON.stringify(affirmationList));
    console.log("affirmationList[0] is:");
    console.log(affirmationList[0]);
    console.log("defaultAffirmations is:");
    console.log(defaultAffirmations);
    // console.log(iterate(affirmationList));
    // setAffirmationList(affirmationList);

    const index = affirmationList.findIndex((object) => {
      // return object.id === "b";
      return object.id === "Default Affirmations";
    });

    console.log(index);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="group">
          Group
          <select
            id="group"
            value={group}
            onChange={(e) => {
              setGroup(e.target.value);
              //   updateBreed("");
            }}
          >
            <option />
            {/* Figure out how to map this array */}
            {defaultAffirmations.map((groups) => (
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
      {/* {affirmationList.map((group) => (
        <Pet
          affirmation={group.affirmation}
          key={group.id}
        />
      ))} */}
    </div>
  );
};

export default AffirmationParams;
