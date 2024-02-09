import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "./Modal";
import MyButton from "./MyButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SharedAffirmationResults from "./SharedAffirmationResults";
import {
  requestAffirmationsDataIfPresent,
  requestAndSaveAffirmationsData,
  postAffirmationsData,
  requestCurrentGroupNames,
} from "../utils/PullPostGetSet";
import Group from "../utils/groupClass";
import AffirmationParams from "./AffirmationParams";
import ShortUniqueId from "short-unique-id";
import stockAffirmationsArray from "../db/stockAffirmations";

const uid = new ShortUniqueId();

const SharedAffirmations = (props) => {
  const navigate = useNavigate();

  const [showImportedGroupModal, setShowImportedGroupModal] = useState(false);
  const [showRenameGroupModal, setShowRenameGroupModal] = useState(false);

  const queryParameters = new URLSearchParams(window.location.search);

  const [affirmationsData, setAffirmationsData] = useState(
    requestAndSaveAffirmationsData()
  );

  const sharedAffirmations = queryParameters.get("query");

  const currentGroup = JSON.parse(sharedAffirmations)[0].group;

  const [currentGroupNames, setCurrentGroupNames] = useState(
    requestCurrentGroupNames(affirmationsData)
  );

  const handleAcceptAffirmationsClick = () => {
    if (currentGroupNames.includes(currentGroup)) {
      setShowRenameGroupModal(true);
    } else {
      setShowImportedGroupModal(true);
    }
    // setCurrentGroupNames(requestCurrentGroupNames(affirmationsData));
    // console.log(currentGroupNames);
    // console.log(currentGroup);
    // wrapUpAcceptAffirmationsClick();
    // save to localStorage
    // send user to view new group affirmations

    // const id = affirmationsData[0].groups.length;
    // affirmationsData[0].groups.push(JSON.parse(sharedAffirmations)[0]);
    // affirmationsData[0].currentGroup = currentGroup;
    // affirmationsData[0].groups[id].id = uid.rnd();
    // postAffirmationsData(affirmationsData);
    // navigate("/affirmations-vite/");
    // toast.success(`Group '${currentGroup}' added!`, {
    //   position: "bottom-center",
    // });
  };

  const handleCreateNewGroup = () => {
    const newGroupName = document.getElementById("name").value;
    if (currentGroupNames.includes(newGroupName)) {
      alert(
        "You already have a group with this name. Please name your group anything else to continue creating it."
      );
    } else if (!newGroupName) {
      alert(
        "You have not entered any text. Please name your group to continue creating it."
      );
    } else {
      const id = affirmationsData[0].groups.length;
      affirmationsData[0].groups.push(JSON.parse(sharedAffirmations)[0]);
      affirmationsData[0].currentGroup = currentGroup;
      affirmationsData[0].groups[id].id = uid.rnd();
      postAffirmationsData(affirmationsData);
      navigate("/affirmations-vite/");
      toast.success(`Group '${currentGroup}' added!`, {
        position: "bottom-center",
      });
    }
  };

  // console.log("affirmationsData is:");
  // console.log(affirmationsData);
  // console.log("currentGroupNames is:");
  // console.log(currentGroupNames);

  /*
  What possibilities exist on the ShareAffirmations page:

    - Arrive at Share page
      - grab sharedAffirmations from query
        - assign needed variables for page
        - problem assigning needed variables
          - use error handling to show error message (include button for new user to start)
      - check for existing localStorage 'affirmationsUnique' key value pair
        - if (affirmationsUnique) { EXISTING USER }
        - else { NEW USER }

    - Receiving affs as YOURSELF USER (likely a mistake, but code for)
      - Probs alert that you already have it? This brings up issues of same named groups and same ID groups. Regenerate ID upon Receiving affs?
  
      */

  return (
    <>
      <section className="traditional__layout">
        <h1 className="pb-2">Incoming Affirmations</h1>
        <div className="d-flex flex-column justify-content-center">
          <p className="mb-3" style={{ width: "385px", margin: "0 auto" }}>
            Someone has sent you a list of affirmations titled {currentGroup}.
          </p>
          <div className="flex">
            <MyButton
              text="Accept & view"
              run={() => handleAcceptAffirmationsClick()}
            />
          </div>
          {/* <Button
            onClick={() => {
              handleAcceptAffirmationsClick();
            }}
            className="mt-4 position-relative start-50 translate-middle w-50"
          >
            Accept affirmations
          </Button> */}
          {/* <p className="mb-0">List of "Best Affirmations Ever" group:</p> */}
        </div>
        <SharedAffirmationResults
          // currentGroup={currentGroup}
          // affirmationsData={affirmationsData}
          sharedAffirmations={sharedAffirmations}
        />
        {/* {<div>{sharedAffirmations}</div>} */}
      </section>
      {
        showRenameGroupModal ? (
          <Modal>
            <div className="modal-container">
              <h2>Rename new group</h2>
              <p>
                You already have a group named <i>{currentGroup}</i>.
              </p>
              <div className="buttons">
                <form>
                  <label htmlFor="name" className="w-100 pb-2">
                    Rename your group to continue:
                  </label>
                  <input
                    autoFocus
                    className="mb-2"
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength="1"
                    maxLength="100"
                    size="20"
                    placeholder="Name your group here"
                  />
                </form>
                <MyButton
                  text="Cancel"
                  run={() => setShowRenameGroupModal(false)}
                />
                <MyButton
                  text="Rename"
                  run={() => {
                    handleCreateNewGroup();
                    setShowRenameGroupModal(false);
                  }}
                />
              </div>
            </div>
          </Modal>
        ) : null // you have to remove this semi-colon, my auto-formatter adds it back if I delete it
      }
      {
        showImportedGroupModal ? (
          <Modal>
            <div className="modal-container">
              <h2>Import this group?</h2>
              <p>{currentGroup}</p>
              <div className="buttons">
                <MyButton
                  text="Abort!"
                  run={() => setShowImportedGroupModal(false)}
                />
                <MyButton
                  text="Confirm"
                  run={() => {
                    handleCreateNewGroup();
                    setShowImportedGroupModal(false);
                  }}
                />
              </div>
            </div>
          </Modal>
        ) : null // you have to remove this semi-colon, my auto-formatter adds it back if I delete it
      }
    </>
  );
};
export default SharedAffirmations;
