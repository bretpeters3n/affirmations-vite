import { useState } from "react";
import {
  BrowserRouter,
  useNavigate,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
// import Button from "react-bootstrap/Button";
import MyButton from "./MyButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./Modal";
import {
  postAffirmationsData,
  requestCurrentGroupKey,
} from "../utils/PullPostGetSet";
import Affirmation from "../utils/affirmationClass"; // Affirmation class
import ShortUniqueId from "short-unique-id";

const AddAffirmation = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const uid = new ShortUniqueId();

  const [showModal, setShowModal] = useState(false);

  let affirmationsData = location.state.affirmationsData;
  let currentGroup = location.state.currentGroup;
  let groupKey = requestCurrentGroupKey(affirmationsData, currentGroup);

  const handleAddAffirmationClick = () => {
    const affirmation = document.getElementById("affirmationText").value;
    if (!affirmation) {
      // alert("Affirmation text is empty. Please add you affirmation.");
      setShowModal(true);
    } else {
      const id = uid.rnd();
      const newAffirmation = new Affirmation(affirmation, id);

      // add new affirmation
      affirmationsData[0].groups[groupKey].affirmations.unshift({
        id: newAffirmation.id,
        // uid: newAffirmation.uid,
        affirmation: newAffirmation.affirmation,
      });

      postAffirmationsData(affirmationsData);
      toast.success(`Affirmation '${newAffirmation.affirmation}' added!`, {
        position: "bottom-center",
      });
      navigate("/current");
    }
  };

  const handleCancelAddAffirmationClick = () => {
    navigate("/current");
  };

  return (
    <>
      <section className="traditional__layout addAffirmation">
        <h1 className="font-bold pb-2">Add Affirmation</h1>
        <div className="pb-2">
          <p>Enter your affirmation below</p>
        </div>
        <form className="align-items-center pb-3">
          <textarea
            className=""
            id="affirmationText"
            placeholder="Type/paste your affirmation here"
          ></textarea>
        </form>
        <div className="flex">
          <MyButton
            text="Cancel"
            run={() => handleCancelAddAffirmationClick()}
          />
          {/* <Button onClick={handleCancelAddAffirmationClick}>Cancel</Button> */}
          <MyButton
            text="Add Affirmation"
            run={() => handleAddAffirmationClick()}
          />
          {/* <button
            className="theme-switcher btn btn-outline-primary"
            onClick={handleAddAffirmationClick}
          >
            Add affirmation
          </button> */}
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
    </>
  );
};
export default AddAffirmation;
