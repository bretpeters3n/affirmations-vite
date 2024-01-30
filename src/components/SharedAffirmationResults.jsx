import Affirmation from "./Affirmation";

const SharedAffirmationResults = ({
  currentGroup,
  // affirmationsData,
  sharedAffirmations,
}) => {
  sharedAffirmations = [sharedAffirmations];
  console.log(sharedAffirmations);

  return (
    <>
      <div>
        <p>List of {currentGroup} affirmations</p>
      </div>
      {!sharedAffirmations.length ? (
        <h1>No Affirmations present</h1>
      ) : (
        sharedAffirmations.map(({ affirmation, id }, index) => (
          <Affirmation
            affirmation={affirmation}
            id={index}
            key={id}
            // currentGroup={currentGroup}
            // affirmationsData={affirmationsData}
          ></Affirmation>
        ))
      )}
    </>
  );
};

export default SharedAffirmationResults;
