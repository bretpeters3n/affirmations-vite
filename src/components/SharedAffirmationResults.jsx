import { useEffect, useState } from "react";
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
      <div>
        <p>List of {currentGroup} affirmations</p>
      </div>
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
    </>
  );
};

export default SharedAffirmationResults;
