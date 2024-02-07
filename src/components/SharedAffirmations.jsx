import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
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

const uid = new ShortUniqueId();

const SharedAffirmations = (props) => {
  const navigate = useNavigate();

  const queryParameters = new URLSearchParams(window.location.search);

  let affirmationsData = null;
  const existingAffirmationsData = requestAffirmationsDataIfPresent();
  if (existingAffirmationsData) {
    affirmationsData = existingAffirmationsData;
  }

  const [sharedAffirmations, setSharedAffirmations] = useState(
    queryParameters.get("query")
  );

  const [currentGroup, setCurrentGroup] = useState(
    JSON.parse(sharedAffirmations)[0].group
  );
  const [currentGroupNames, setCurrentGroupNames] = useState(
    requestCurrentGroupNames(affirmationsData)
  );

  const handleAcceptAffirmationsClick = () => {
    // set currentGroupNames
    affirmationsData = requestAffirmationsDataIfPresent();
    // setCurrentGroupNames(requestCurrentGroupNames(affirmationsData));
    console.log("affirmationsData is:");
    console.log(affirmationsData);
    console.log("currentGroupNames is:");
    console.log(currentGroupNames);
    console.log("currentGroup is:");
    console.log(currentGroup);
    if (currentGroupNames.includes(currentGroup)) {
      alert(
        "You already have a group with this name. Please rename your group anything else to continue creating it."
      );
    }
    if (!affirmationsData) {
      // affirmationsData = requestAndSaveAffirmationsData();
      console.log("no affirmationsData");
    }
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
    </>
  );
};
export default SharedAffirmations;
