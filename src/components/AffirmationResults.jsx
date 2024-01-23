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
        affirmations.map(({ affirmation, id }, index) => (
          <Affirmation
            affirmation={affirmation}
            id={index}
            key={id}
            currentGroup={currentGroup}
            affirmationsData={affirmationsData}
          ></Affirmation>
        ))
      )}
    </>
  );
};

export default AffirmationResults;
