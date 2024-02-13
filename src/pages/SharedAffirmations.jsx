import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import MyButton from "../components/MyButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SharedAffirmationResults from "../components/SharedAffirmationResults";
import AffGroupListResults from "../components/AffGroupListResults";
import AffirmationResults from "../components/AffirmationResults";
import {
  requestAndSaveAffirmationsData,
  postAffirmationsData,
  requestCurrentGroupNames,
} from "../utils/PullPostGetSet";
import ShortUniqueId from "short-unique-id";

const uid = new ShortUniqueId();

const SharedAffirmations = (props) => {
  const navigate = useNavigate();

  const [showImportedGroupModal, setShowImportedGroupModal] = useState(false);
  const [showRenameGroupModal, setShowRenameGroupModal] = useState(false);

  const queryParameters = new URLSearchParams(window.location.search);

  const [affirmationsData, setAffirmationsData] = useState(
    requestAndSaveAffirmationsData()
  );

  const [sharedAffirmations, setSharedAffirmations] = useState(
    queryParameters.get("query")
  );

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
  };

  const handleAboutThisSiteClick = () => {
    navigate("/affirmations-vite/about");
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
      let sharedAffirmationsOBJ = JSON.parse(sharedAffirmations);
      sharedAffirmationsOBJ[0].group = newGroupName;
      affirmationsData[0].groups.push(sharedAffirmationsOBJ[0]);
      affirmationsData[0].groups[id].id = uid.rnd();
      postAffirmationsData(affirmationsData);
      navigate("/affirmations-vite/");
      toast.success(`Group '${newGroupName}' added. Enjoy!`, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <section className="traditional__layout">
        <h1 className="pb-2">Incoming Affirmations</h1>
        <div className="d-flex flex-column justify-content-center">
          <p className="mb-3" style={{ width: "385px", margin: "0 auto" }}>
            Someone has sent you a list of affirmations titled{" "}
            <i>{currentGroup}</i>.
          </p>
          <div className="flex">
            <MyButton
              text="Accept & view"
              run={() => handleAcceptAffirmationsClick()}
            />
          </div>
        </div>
        <SharedAffirmationResults sharedAffirmations={sharedAffirmations} />
        <div className="flex">
          <MyButton
            text="About this site"
            run={() => handleAboutThisSiteClick()}
          />
        </div>
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
