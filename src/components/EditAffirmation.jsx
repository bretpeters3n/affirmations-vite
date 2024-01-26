import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "./Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  postAffirmationsData,
  requestCurrentGroupKey,
  requestCurrentAffirmationKey,
  requestAndSaveAffirmationsData,
} from "../utils/PullPostGetSet";

const EditAffirmation = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const [affirmationsData, setAffirmationsData] = useState(
    requestAndSaveAffirmationsData()
  );

  const [currentGroup, setCurrentGroup] = useState(
    affirmationsData[0].currentGroup
  );

  let groupKey = requestCurrentGroupKey(affirmationsData, currentGroup);

  let id = location.state.affirmationId;

  let affirmationTextToEdit =
    affirmationsData[0].groups[groupKey].affirmations[id].affirmation;

  const handleConfirmDeleteAffirmationClick = () => {
    let affirmationListCopy = affirmationsData[0].groups[groupKey].affirmations;
    let updatedAffirmationList = affirmationListCopy
      .slice(0, Number(id))
      .concat(affirmationListCopy.slice(Number(id) + 1));
    affirmationsData[0].groups[groupKey].affirmations = updatedAffirmationList;
    toast.success(`Affirmation '${affirmationTextToEdit}' deleted!`, {
      position: "bottom-center",
    });
    postAffirmationsData(affirmationsData);
    navigate("/current");
  };

  function handleConfirmEditAffirmationClick() {
    const updatedAffirmation = document.getElementById("affirmationText").value;
    if (!updatedAffirmation) {
      // alert("Affirmation text is empty");
      setShowModal(true);
    } else if (updatedAffirmation == affirmationTextToEdit) {
      toast.info(`No changes were made 🧐 Try again?`, {
        position: "bottom-center",
      });
      navigate("/current");
    } else {
      affirmationsData[0].groups[groupKey].affirmations[id].affirmation =
        updatedAffirmation;
      postAffirmationsData(affirmationsData);
      toast.success(`Update to '${updatedAffirmation}', success!`, {
        position: "bottom-center",
      });
      navigate("/current");
    }
  }

  function handleCancelEditAffirmationClick() {
    // this one is done until you add MODAL or TOAST
    navigate("/current");
  }

  return (
    <>
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
            onClick={() => setShowModal2(true)}
          >
            Delete Affirmation
          </button>
          {/* <DialogDelete /> */}
        </div>
      </section>
      {
        showModal ? (
          <Modal>
            <div className="modal-container">
              {/* <div className="modal-container"> */}
              <h2>Affirmation text is empty</h2>
              <p>Please add you affirmation text and try again</p>
              <div className="buttons">
                <button onClick={() => setShowModal(false)}>Ok</button>
              </div>
            </div>
          </Modal>
        ) : null // you have to remove this semi-colon, my auto-formatter adds it back if I delete it
      }
      {
        showModal2 ? (
          <Modal>
            <div className="modal-container">
              {/* <div className="modal-container"> */}
              <h2>Delete this affirmation</h2>
              <p>Are you sure?</p>
              <div className="buttons">
                <button onClick={() => setShowModal2(false)}>Cancel</button>
                <button
                  onClick={() => {
                    handleConfirmDeleteAffirmationClick();
                    setShowModal2(false);
                  }}
                >
                  Yes
                </button>
              </div>
            </div>
          </Modal>
        ) : null // you have to remove this semi-colon, my auto-formatter adds it back if I delete it
      }
    </>
  );
};
export default EditAffirmation;
