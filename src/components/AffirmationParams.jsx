import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ShortUniqueId from "short-unique-id";
import { motion, easeInOut } from "framer-motion";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Form from "react-bootstrap/Form";
import MyButton from "./MyButton";
import AffirmationResults from "./AffirmationResults";
import Modal from "./Modal";
import {
  postAffirmationsData,
  requestGroupAffirmations,
  requestAndSaveAffirmationsData,
  requestCurrentGroupKey,
  requestCurrentGroupNames,
} from "../utils/PullPostGetSet";
import Group from "../utils/groupClass"; // Group class

const uid = new ShortUniqueId();

const AffirmationParams = () => {
  const navigate = useNavigate();

  const [affirmationsData, setAffirmationsData] = useState(
    requestAndSaveAffirmationsData()
  );

  const [currentGroup, setCurrentGroup] = useState(
    affirmationsData[0].currentGroup
  );
  const [currentGroupNames, setCurrentGroupNames] = useState(
    requestCurrentGroupNames(affirmationsData)
  );
  const [affirmations, setAffirmations] = useState(
    requestGroupAffirmations(affirmationsData, currentGroup)
  );

  const [showNewGroupModal, setShowNewGroupModal] = useState(false);
  const [showDeleteGroupModal, setShowDeleteGroupModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const [urlFormatted, setUrlFormatted] = useState("");

  const addNewGroupMessaging = "+ Create new group";

  const runRequestGroupAffirmations = () => {
    const data = requestGroupAffirmations(affirmationsData, currentGroup);
    setAffirmations(data);
    affirmationsData[0].currentGroup = currentGroup;
    postAffirmationsData(affirmationsData);
  };

  const runRequestCurrentGroupNames = () => {
    setCurrentGroupNames(requestCurrentGroupNames(affirmationsData));
    // console.log(currentGroupNames);
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
    navigate("/current");
    console.log("this is after the 'navigate' that is being skipped");
  };

  useEffect(() => {
    runRequestGroupAffirmations();
    runRequestCurrentGroupNames();
  }, [currentGroup]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCreateNewGroup = () => {
    const newGroupName = document.getElementById("name").value;
    // console.log(newGroupName);
    if (currentGroupNames.includes(newGroupName)) {
      alert(
        "You already have a group with this name. Please name your group anything else to continue creating it."
      );
    } else if (!newGroupName) {
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
      setShowNewGroupModal(false);
      setCurrentGroup(newGroupName);
      toast.success(`Group '${newGroupName}' added!`, {
        position: "bottom-center",
      });
    }
  };

  const handleShareAffirmationsClick = () => {
    const groupKey = requestCurrentGroupKey(affirmationsData, currentGroup);
    const PAGE_PATH = `/affirmations-vite/shared?query=`;
    let affParams = affirmationsData[0].groups[groupKey];
    const affParamArray = [affParams].flat();
    const affParamArrayString = JSON.stringify(affParamArray);
    setUrlFormatted(`${BASE_URL}${PAGE_PATH}${affParamArrayString}`);
    setShowShareModal(true);
  };

  return (
    <>
      <div className="search-params">
        <TextField
          style={{
            width: "100%",
            maxWidth: "500px",
            textAlign: "left",
          }}
          select
          id="outlined-select-currency"
          label="Please select or create new group"
          value={currentGroup}
          onChange={(e) => {
            let tempTarget = e.target.value;
            // console.log(tempTarget);
            if (tempTarget == addNewGroupMessaging) {
              setShowNewGroupModal(true);
            } else {
              setCurrentGroup(tempTarget);
            }
          }}
        >
          {affirmationsData[0].groups.map((groups) => (
            <MenuItem
              id={groups.id}
              key={groups.id}
              style={{ fontFamily: "Poppins" }}
              value={groups.group}
            >
              {groups.group}
            </MenuItem>
          ))}
          <MenuItem
            style={{ fontFamily: "Poppins" }}
            value={addNewGroupMessaging}
          >
            {addNewGroupMessaging}
          </MenuItem>
        </TextField>
        <ul className="list-group cards pb-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.125 }}
          >
            <AffirmationResults
              currentGroup={currentGroup}
              affirmationsData={affirmationsData}
              affirmations={affirmations}
            />
          </motion.div>
        </ul>
        <div
          className="d-flex justify-content-between pt-2 pb-2"
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <div style={{ visibility: "hidden" }}>
            <MyButton
              // text="."
              aria-label="layout spacer"
              // run={() => runRequestCurrentGroupNames()}
            />
          </div>
          {!affirmations.length == 0 ? (
            <MyButton
              text="Share Group"
              aria-label="share group"
              run={() => handleShareAffirmationsClick()}
            />
          ) : (
            <div style={{ visibility: "hidden" }}>
              <MyButton
                text="Share Group"
                aria-label="share group"
                run={() => handleShareAffirmationsClick()}
              />
            </div>
          )}
          <IconButton
            disableRipple
            disableFocusRipple
            size="small"
            aria-label="delete"
            className="btnGroupDelete"
            onClick={() => setShowDeleteGroupModal(true)}
          >
            <DeleteIcon fontSize="medium" />
          </IconButton>
        </div>
      </div>
      {
        showNewGroupModal ? (
          <Modal>
            <div className="modal-container">
              <h2>Creating new group?</h2>
              <div className="buttons">
                <form>
                  {/* <label htmlFor="name" className="w-100 pb-2">
                    Enter your new group name:
                  </label> */}
                  <TextField
                    required
                    autoFocus
                    className="w-100 mb-2 mt-1"
                    type="text"
                    id="name"
                    label="Group name"
                    variant="outlined"
                    name="name"
                    minLength="1"
                    maxLength="100"
                    size="20"
                  />
                </form>
                <div className="d-flex justify-content-center">
                  <MyButton
                    text="Cancel"
                    run={() => setShowNewGroupModal(false)}
                  />
                  <MyButton
                    text="Create Group"
                    run={() => handleCreateNewGroup()}
                  />
                </div>
              </div>
            </div>
          </Modal>
        ) : null // you have to remove this semi-colon, my auto-formatter adds it back if I delete it
      }
      {
        showDeleteGroupModal ? (
          <Modal>
            <div className="modal-container">
              <h2>Delete this group?</h2>
              <p>{currentGroup}</p>
              <div className="buttons">
                <MyButton
                  text="Abort!"
                  run={() => setShowDeleteGroupModal(false)}
                />
                <MyButton text="Confirm" run={() => handleDeleteGroupClick()} />
              </div>
            </div>
          </Modal>
        ) : null // you have to remove this semi-colon, my auto-formatter adds it back if I delete it
      }
      {
        showShareModal ? (
          <Modal>
            <div className="modal-container">
              <h2>Share this group?</h2>
              <p>{currentGroup}</p>
              {/* <form
                onSubmit={preventDefault()}
                style={{ display: "flex", flexDirection: "column" }}
              > */}
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "8px",
                }}
              >
                {/* Essay: */}
                <textarea
                  style={{ height: "200px", fontSize: "10px" }}
                  type="text"
                  readOnly
                  value={urlFormatted}
                  // onChange={console.log("change")}
                />
              </label>
              {/* <input type="submit" value="Submit" /> */}
              <div className="buttons">
                <MyButton text="Close" run={() => setShowShareModal(false)} />
                {/* <button onClick={() => setShowShareModal(false)}>Close</button> */}
                <MyButton
                  text="Copy to clipboard"
                  run={() => {
                    navigator.clipboard.writeText(urlFormatted);
                    toast.success(
                      `Sharable '${currentGroup}' URL copied to clipboard!`,
                      {
                        position: "bottom-center",
                      }
                    );
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

export default AffirmationParams;
