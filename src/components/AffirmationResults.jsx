import Affirmation from "./Affirmation";

const AffirmationResults = ({
  currentGroup,
  affirmationsData,
  affirmations,
}) => {
  return (
    <>
      <div>
        <p>List of {currentGroup} affirmations</p>
      </div>
      {!affirmations.length ? (
        <h1>No Affirmations present</h1>
      ) : (
        affirmations.map((affirmation) => (
          <Affirmation
            affirmation={affirmation.affirmation}
            id={affirmation.id}
            key={affirmation.uid}
            currentGroup={currentGroup}
            affirmationsData={affirmationsData}
          ></Affirmation>
        ))
      )}
    </>
  );
};

export default AffirmationResults;
