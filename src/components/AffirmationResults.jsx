import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import Affirmation from "./Affirmation";

const AffirmationResults = ({
  currentGroup,
  affirmationsData,
  affirmations,
}) => {
  const navigate = useNavigate();

  const handleAddAffirmationClick = () => {
    // console.log("add");
    navigate("/add", {
      state: {
        currentGroup: currentGroup,
        affirmationsData: affirmationsData,
      },
    }); // Pass optional second argument
  };

  return (
    <>
      <div>
        <MyButton
          text="Add Affirmation"
          run={() => handleAddAffirmationClick()}
        />
        {/* <p>List of {currentGroup} affirmations</p> */}
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
