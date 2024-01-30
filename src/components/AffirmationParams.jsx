import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AffirmationResults from "./AffirmationResults";
import Modal from "./Modal";
import {
  postAffirmationsData,
  requestGroupAffirmations,
  requestAndSaveAffirmationsData,
  requestCurrentGroupKey,
} from "../utils/PullPostGetSet";
import Group from "../utils/groupClass"; // Group class
import ShortUniqueId from "short-unique-id";

const uid = new ShortUniqueId();

const AffirmationParams = () => {
  const navigate = useNavigate();

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
  const [showModal2, setShowModal2] = useState(false);
  const [showModalShare, setShowModalShare] = useState(false);

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
  };

  const handleDeleteGroupClick = () => {
    let updatedGroupList = affirmationsData[0].groups;
    const groupKey = requestCurrentGroupKey(affirmationsData, currentGroup);
    updatedGroupList = updatedGroupList
      .slice(0, Number(groupKey))
      .concat(updatedGroupList.slice(Number(groupKey) + 1));
    affirmationsData[0].groups = updatedGroupList;
    toast.success(`Group '${currentGroup}' deleted!`, {
      position: "bottom-center",
    });
    setCurrentGroup(affirmationsData[0].groups[0].group);
    postAffirmationsData(affirmationsData);
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
      toast.success(`Group '${newGroupName}' added!`, {
        position: "bottom-center",
      });
    }
  };

  const handleShareAffirmationsClick = () => {
    const groupKey = requestCurrentGroupKey(affirmationsData, currentGroup);
    const PAGE_PATH = `/shared?query=`;
    let affParams = affirmationsData[0].groups[groupKey];
    console.log("currentGroup is:");
    console.log(currentGroup);
    console.log("affParams is:");
    console.log(affParams);
    // const affParamString = JSON.stringify(affParams);
    const affParamArray = [affParams].flat();
    const affParamArrayString = JSON.stringify(affParamArray);
    console.log(affParamArrayString);
    const urlFormatted = `${PAGE_PATH}${affParamArrayString}`;
    console.log("urlFormatted is:");
    console.log(urlFormatted);
    navigate({
      pathname: urlFormatted,
      state: affirmations,
    });
  };

  return (
    <>
      <div className="search-params">
        <form
          // className="card"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="group">
            {/* Select affirmation group: */}
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
            onClick={() => handleAddAffirmationClick()}
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
          <Button
            onClick={() => setShowModal2(true)}
            className="position-relative start-50 translate-middle"
          >
            Delete Group
          </Button>
          <Button
            onClick={() => setShowModalShare(true)}
            className="position-relative start-50 translate-middle"
          >
            Share Group
          </Button>
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
      {
        showModal2 ? (
          <Modal>
            <div className="modal-container">
              {/* <div className="modal-container"> */}
              <h2>Delete this group?</h2>
              <p>{currentGroup}</p>
              <div className="buttons">
                <button onClick={() => setShowModal2(false)}>Cancel</button>
                <button
                  onClick={() => {
                    handleDeleteGroupClick();
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
      {
        showModalShare ? (
          <Modal>
            <div className="modal-container">
              <h2>Share this group?</h2>
              <p>{currentGroup}</p>
              <div className="buttons">
                <button onClick={() => setShowModalShare(false)}>Cancel</button>
                <button
                  onClick={() => {
                    handleShareAffirmationsClick();
                    setShowModalShare(false);
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

export default AffirmationParams;
