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
      <div className="pb-0">
        <p className="pt-3 mb-0">
          <strong>{currentGroup}</strong>
        </p>
        <MyButton
          text="Add Affirmation"
          run={() => handleAddAffirmationClick()}
        />
      </div>
      {!affirmations.length ? (
        <h3>No Affirmations present</h3>
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
