import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AffirmationResults from "./AffirmationResults";
import Modal from "./Modal";
import {
  postAffirmationsData,
  requestGroupAffirmations,
  requestAndSaveAffirmationsData,
} from "../utils/PullPostGetSet";
import Group from "../utils/groupClass"; // Group class
import ShortUniqueId from "short-unique-id";

const uid = new ShortUniqueId();

const AffirmationParams = () => {
  const navigate = useNavigate();

  const notify = () => {
    // toast("Default Notification !");

    toast.success("Group added!", {
      position: "bottom-center",
    });

    // toast.error("Error Notification !", {
    //   position: "top-left",
    // });

    // toast.warn("Warning Notification !", {
    //   position: "bottom-left",
    // });

    // toast.info("Info Notification !", {
    //   position: "bottom-center",
    // });

    // toast("Custom Style Notification with css class!", {
    //   position: "bottom-right",
    //   className: "foo-bar",
    // });
  };

  const [affirmationsData, setAffirmationsData] = useState(
    requestAndSaveAffirmationsData()
  );

  const [currentGroup, setCurrentGroup] = useState(
    affirmationsData[0].currentGroup
  );
  const [affirmations, setAffirmations] = useState(
    requestGroupAffirmations(affirmationsData, currentGroup)
  );

  const [showModal, setShowModal] = useState(false);

  const addNewGroupMessaging = "+ Create new group";

  const runRequestGroupAffirmations = async () => {
    const data = await requestGroupAffirmations(affirmationsData, currentGroup);
    setAffirmations(data);
    affirmationsData[0].currentGroup = currentGroup;
    postAffirmationsData(affirmationsData);
  };

  const handleAddAffirmationClick = () => {
    navigate("/add", {
      state: {
        currentGroup: currentGroup,
        affirmationsData: affirmationsData,
      },
    }); // Pass optional second argument
    console.log("click");
  };

  useEffect(() => {
    runRequestGroupAffirmations();
  }, [currentGroup]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCreateNewGroup = () => {
    const newGroupName = document.getElementById("name").value;
    if (!newGroupName) {
      alert(
        "You have not entered any text. Please name your group to continue creating it."
      );
    } else {
      const id = affirmationsData[0].groups.length + 1;
      const newGroup = new Group(newGroupName, id);
      affirmationsData[0].groups.push({
        id: uid.rnd(),
        group: newGroup.group,
        affirmations: newGroup.affirmations,
      });
      postAffirmationsData(affirmationsData);
      setShowModal(false);
      setCurrentGroup(newGroupName);
      toast.success("Group added!", {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <div className="search-params">
        <form
          className="card"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="group">
            Select affirmation group:
            <select
              id={currentGroup}
              key={currentGroup}
              value={currentGroup}
              onChange={(e) => {
                let tempTarget = e.target.value;
                if (tempTarget == addNewGroupMessaging) {
                  setShowModal(true);
                } else {
                  setCurrentGroup(tempTarget);
                }
              }}
            >
              {affirmationsData[0].groups.map((groups) => (
                <option key={groups.id} value={groups.group}>
                  {groups.group}
                </option>
              ))}
              <option>{addNewGroupMessaging}</option>
            </select>
          </label>
        </form>
        <ul className="list-group cards">
          <AffirmationResults
            currentGroup={currentGroup}
            affirmationsData={affirmationsData}
            affirmations={affirmations}
          />
        </ul>
        <p>End of list</p>
        <div>
          <Button
            onClick={handleAddAffirmationClick}
            className="position-relative start-50 translate-middle"
          >
            Add Affirmation
          </Button>
          <Button
            onClick={() => {
              toast.info("Notify pressed!", {
                position: "bottom-center",
              });
            }}
            className="position-relative start-50 translate-middle"
          >
            Notify!
          </Button>
          <ToastContainer />
        </div>
      </div>
      {
        showModal ? (
          <Modal>
            <div className="modal-container">
              <h2>Creating new group?</h2>
              <div className="buttons">
                <form>
                  <label htmlFor="name">Enter your new group name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength="1"
                    maxLength="100"
                    size="20"
                  />
                </form>
                <button onClick={() => setShowModal(false)}>Cancel</button>
                <button
                  onClick={() => {
                    handleCreateNewGroup();
                  }}
                >
                  Create group
                </button>
              </div>
            </div>
          </Modal>
        ) : null // you have to remove this semi-colon, my auto-formatter adds it back if I delete it
      }
    </>
  );
};

export default AffirmationParams;
