import { useState } from "react";
import AffirmationShared from "./AffirmationShared";

const SharedAffirmationResults = ({
  // currentGroup,
  // affirmationsData,
  sharedAffirmations,
}) => {
  const [affirmations, setAffirmations] = useState(
    JSON.parse(sharedAffirmations)[0].affirmations
  );

  const [currentGroup, setCurrentGroup] = useState(
    JSON.parse(sharedAffirmations)[0].group
  );

  // console.log(JSON.parse(sharedAffirmations)[0].group);

  return (
    <>
      <div className="pt-3">
        <p>
          List of <i>{currentGroup}</i> affirmations
        </p>
      </div>
      <div className="d-grid gap-2 p-3 pt-1">
        {!affirmations.length ? (
          <h1>No Affirmations present</h1>
        ) : (
          affirmations.map(({ affirmation, id }, index) => (
            <AffirmationShared
              affirmation={affirmation}
              id={index}
              key={id}
              // currentGroup={currentGroup}
              // affirmationsData={affirmationsData}
            ></AffirmationShared>
          ))
        )}
      </div>
    </>
  );
};

export default SharedAffirmationResults;
