import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import useConfirm from "./UseConfirm";

const EditAffirmation = () => {
  const navigate = useNavigate();

  // get array
  // let affirmationsArray = DefineGetSetAffirmationsArray();

  // const currentGroup = affirmationsArray[0].currentGroup;
  // console.log("currentGroup is: " + currentGroup);

  // grab ID from previous page. ID of array element we want to edit
  const location = useLocation();
  let affirmationIDToEdit = location.state.affirmation_id;
  let affirmationsList = location.state.affirmationsList;
  console.log("affirmationIDToEdit: ");
  console.log(affirmationIDToEdit);
  console.log("affirmationsList: ");
  console.log(affirmationsList);
  let affirmationTextToEdit = affirmationsList[affirmationIDToEdit].affirmation;

  // // grab affirmation User wishes to edit
  // let currentGroupAffirmations = affirmationsArray[0].groups[1].affirmations;

  const handleConfirmDeleteAffirmationClick = () => {
    console.log("clicked");
    console.log("handleConfirmDeleteAffirmationClick clicked");
    navigate("/current");
  };

  function handleConfirmEditAffirmationClick(e) {
    // e.preventDefault();
    console.log("handleConfirmEditAffirmationClick clicked");
    navigate("/current");
  }

  function handleCancelEditAffirmationClick(e) {
    console.log("handleCancelEditAffirmationClick clicked");
    navigate("/current");
  }

  return (
    <>
      {/* <section className="addAffirmation pt-4 pb-4"> */}
      <section className="traditional__layout addAffirmation">
        <h1 className="pb-2">Edit Affirmation</h1>
        <div className="pb-2">
          <p>Edit your affirmation below</p>
        </div>
        <form className="align-items-center pb-3">
          <textarea
            className=""
            id="affirmationText"
            defaultValue={affirmationTextToEdit}
          ></textarea>
        </form>
        <div className="flex">
          <Button onClick={handleCancelEditAffirmationClick}>Cancel</Button>
          {/* <DialogCancel /> */}
          <button
            className="theme-switcher btn btn-outline-primary"
            onClick={handleConfirmEditAffirmationClick}
          >
            Update Affirmation
          </button>
          {/* <DialogEdit /> */}
          <button
            className="theme-switcher btn btn-danger"
            onClick={handleConfirmDeleteAffirmationClick}
          >
            Delete Affirmation
          </button>
          {/* <DialogDelete /> */}
        </div>
      </section>
    </>
  );
};
export default EditAffirmation;
