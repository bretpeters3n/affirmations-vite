import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import MyButton from "./MyButton";
import Affirmation from "./Affirmation";

const AffirmationResults = ({
  currentGroup,
  affirmationsData,
  affirmations,
}) => {
  const navigate = useNavigate();

  // const [currentGroup, setCurrentGroup] = useState(
  //   affirmationsData[0].currentGroup
  // );

  const handleAddAffirmationClick = () => {
    // console.log("add");
    navigate("/add", {
      state: {
        currentGroup: currentGroup,
        affirmationsData: affirmationsData,
      },
    }); // Pass optional second argument
  };

  // const [currentGroupTitle, setCurrentGroupTitle] = useState(
  //   "Group: " + currentGroup
  // );

  return (
    <>
      <div className="pt-4 pb-4">
        {/* <p className="pt-3 mb-0">
          <strong>{currentGroup}</strong>
        </p> */}
        <MyButton
          text="Add Affirmation"
          run={() => handleAddAffirmationClick()}
        />
      </div>
      <div
        className="MuiFormControl-root MuiTextField-root css-1u3bzj6-MuiFormControl-root-MuiTextField-root"
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <label
          className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiFormLabel-filled MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeMedium MuiInputLabel-outlined css-1jy569b-MuiFormLabel-root-MuiInputLabel-root"
          data-shrink="true"
          htmlFor="outlined-select-currency"
          id="outlined-select-currency-label"
          // style={{ color: "#303030" }}
        >
          Group: <i style={{ color: "#303030" }}>{currentGroup}</i>
        </label>
        <div
          className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-multiline css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root"
          style={{ borderRadius: "5px" }}
        >
          <div className="d-grid gap-2 p-3 pt-4">
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
            <div className="pt-3">
              <p>
                <i>End of list</i>
              </p>
            </div>
          </div>
          <fieldset
            aria-hidden="true"
            className="MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline aff-wrap-gradient"
          >
            <legend className="css-14lo706">
              <span>Group: Default Affirmations</span>
            </legend>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default AffirmationResults;
