import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {
  postAffirmationsData,
  getCurrentGroupKey,
} from "../utils/PullPostGetSet";

const EditAffirmation = () => {
  const navigate = useNavigate();

  const location = useLocation();

  let affirmationsData = location.state.affirmationsData;
  let currentGroup = location.state.currentGroup;
  let groupKey = getCurrentGroupKey(affirmationsData, currentGroup);

  let affirmationId = location.state.affirmation_id;
  let affirmationTextToEdit =
    affirmationsData[0].groups[groupKey].affirmations[affirmationId]
      .affirmation;

  const handleConfirmDeleteAffirmationClick = () => {
    console.log("handleConfirmDeleteAffirmationClick clicked");
    let updatedAffirmationList =
      affirmationsData[0].groups[groupKey].affirmations;
    updatedAffirmationList = updatedAffirmationList
      .slice(0, affirmationId)
      .concat(updatedAffirmationList.slice(affirmationId + 1));
    affirmationsData[0].groups[groupKey].affirmations = updatedAffirmationList;
    postAffirmationsData(affirmationsData);
    navigate("/current");
  };

  function handleConfirmEditAffirmationClick() {
    let groupKey = getCurrentGroupKey(affirmationsData, currentGroup);
    let updatedAffirmation = document.getElementById("affirmationText").value;
    affirmationsData[0].groups[groupKey].affirmations[
      affirmationId
    ].affirmation = updatedAffirmation;
    console.log(affirmationsData[0]);
    postAffirmationsData(affirmationsData);
    navigate("/current");
  }

  function handleCancelEditAffirmationClick(e) {
    // this one is done until you add MODAL or TOAST
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
