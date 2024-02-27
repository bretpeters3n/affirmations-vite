import { useNavigate } from "react-router-dom";
import "dotenv";
import SouthIcon from "@mui/icons-material/South";
import MyButton from "./MyButton";
import AffGroupListResults from "./AffGroupListResults";

const AffirmationResults = ({
  currentGroup,
  affirmationsData,
  affirmations,
}) => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.BASE_URL;
  const handleAddAffirmationClick = () => {
    // console.log("add");
    navigate(`${BASE_URL}add`, {
      state: {
        currentGroup: currentGroup,
        affirmationsData: affirmationsData,
      },
    }); // Pass optional second argument
  };

  return (
    <>
      <div className="pt-4 pb-0">
        <MyButton
          text="Add Affirmation"
          run={() => handleAddAffirmationClick()}
        />
      </div>
      <div className="pt-0 pb-2">
        <SouthIcon style={{ color: "rgb(150, 150, 150)" }} />
      </div>
      <AffGroupListResults
        affirmationsData={affirmationsData}
        currentGroup={currentGroup}
        affirmations={affirmations}
      />
    </>
  );
};

export default AffirmationResults;
