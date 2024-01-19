import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import AffirmationListResults from "./AffirmationListResults";
import Modal from "./Modal";
import stockAffirmationsArray from "../db/stockAffirmations";
import {
  postAffirmationsData,
  getCurrentGroupAffirmations,
} from "../utils/PullPostGetSet";
import Group from "../utils/groupClass"; // Group class

const AffirmationParams = () => {
  const navigate = useNavigate();

  // variable holding the localStorage data
  const [affirmationsData, setAffirmationsData] = useState(
    localStorage.getItem("affirmationsUnique")
      ? JSON.parse(localStorage.getItem("affirmationsUnique"))
      : stockAffirmationsArray
  );
  // console.log(affirmationsData);

  const [currentGroup, setCurrentGroup] = useState(
    affirmationsData[0].currentGroup
  );

  const [affirmationsList, setAffirmationList] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const addNewGroupMessaging = "+ Create new group";

  //Remove this out from useEffect
  const runGetCurrentGroupAffirmations = async () => {
    const data = await getCurrentGroupAffirmations(
      affirmationsData,
      currentGroup
    );
    setAffirmationList(data);
  };

  const handleAddAffirmationClick = () => {
    navigate("/add", {
      state: {
        // affirmationsList: affirmationsList,
        currentGroup: currentGroup,
        affirmationsData: affirmationsData,
      },
    }); // Pass optional second argument
    console.log("click");
  };

  useEffect(() => {
    runGetCurrentGroupAffirmations();
  }, [currentGroup]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    postAffirmationsData(affirmationsData);
  }, [currentGroup]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCreateNewGroup = () => {
    // const data = await getCurrentGroupAffirmations(
    //   affirmationsData,
    //   currentGroup
    // );
    // const affirmationsData = data.affirmationsData;
    // const currentGroup = data.currentGroup;
    console.log(affirmationsData);
    // console.log(currentGroup);
    const newGroupName = document.getElementById("name").value;
    if (!newGroupName) {
      alert(
        "You have not entered any text. Please name your group to continue creating it."
      );
    } else {
      // create new Group class that follows structure of object
      const id = affirmationsData[0].groups.length + 1;
      console.log(id);
      // create/run it
      const newGroup = new Group(newGroupName, id);
      console.log(newGroup);
      // deconstruct new object into three vars
      // add reconstructed object to affirmationsData
      // add new group
      affirmationsData[0].groups.push({
        id: newGroup.id,
        group: newGroup.group,
        affirmations: newGroup.affirmations,
      });
      postAffirmationsData(affirmationsData);
      setShowModal(false);
      navigate("/current");
    }
  };

  // PSUEDO CODE
  //

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
                  // console.log("add new clicked");
                } else {
                  setCurrentGroup(tempTarget);
                }
              }}
            >
              {affirmationsData[0].groups.map((groups) => (
                <option
                  id={groups.group}
                  key={groups.group}
                  value={groups.group}
                >
                  {groups.group}
                </option>
              ))}
              <option>{addNewGroupMessaging}</option>
            </select>
          </label>
        </form>
        <ul className="list-group cards">
          <AffirmationListResults
            currentGroup={currentGroup}
            affirmationsData={affirmationsData}
            affirmationsList={affirmationsList}
          />
        </ul>
        <p>End of list</p>
        <div>
          <Button
            onClick={handleAddAffirmationClick}
            // onClick={() => setShowModal(true)}
            className="position-absolute top-100 start-50 translate-middle"
          >
            Add Affirmation
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
    </>
  );
};

export default AffirmationParams;
