import Affirmation from "./Affirmation";

const AffGroupListResults = ({
  currentGroup,
  affirmationsData,
  affirmations,
}) => {
  return (
    <>
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
              <p className="mb-2">
                <i>No affirmations present</i>
                <br />
                <small className="text-muted">add an affirmation above ^</small>
              </p>
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
            {affirmations.length ? (
              <div className="pt-3">
                <p>
                  <i>End of list</i>
                </p>
              </div>
            ) : null}
          </div>
          <fieldset
            aria-hidden="true"
            className="MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline aff-wrap-gradient"
          >
            <legend className="css-14lo706">
              <span>Group: {currentGroup}</span>
            </legend>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default AffGroupListResults;
