import { useEffect, useState } from "react";
import AffirmationListResults from "./AffirmationListResults";
import stockAffirmationsArray from "../db/stockAffirmations";
import {
  postAffirmationsData,
  getCurrentGroupAffirmations,
} from "../utils/PullPostGetSet";

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

  //Remove this out from useEffect
  const runGetCurrentGroupAffirmations = async () => {
    const data = await getCurrentGroupAffirmations(
      affirmationsData,
      currentGroup
    );
    setAffirmationList(data);
  };

  useEffect(() => {
    runGetCurrentGroupAffirmations();
  }, [currentGroup]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    postAffirmationsData(affirmationsData);
  }, [currentGroup]); // eslint-disable-line react-hooks/exhaustive-deps

  // PSUEDO CODE
  // figure out what actions need to happen on each page. Separate those actions into functions. Store in one file. Access as needed.

  return (
    <>
      <div className="search-params">
        <form
          className="card"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="group">
            Select affirmation group:
            <select
              id={currentGroup}
              key={currentGroup}
              value={currentGroup}
              onChange={(e) => {
                let tempTarget = e.target.value;
                setCurrentGroup(tempTarget);
              }}
            >
              {affirmationsData[0].groups.map((groups) => (
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
          <AffirmationListResults
            currentGroup={currentGroup}
            affirmationsData={affirmationsData}
            affirmationsList={affirmationsList}
          />
        </ul>
        <p>End of list</p>
      </div>
    </>
  );
};

export default AffirmationParams;
