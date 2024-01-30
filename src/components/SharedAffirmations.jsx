import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import SharedAffirmationResults from "./SharedAffirmationResults";
import AffirmationParams from "./AffirmationParams";

const SharedAffirmations = (props) => {
  const queryParameters = new URLSearchParams(window.location.search);
  const [sharedAffirmations, setSharedAffirmations] = useState(
    queryParameters.get("query")
  );

  const [currentGroup, setCurrentGroup] = useState(
    JSON.parse(sharedAffirmations)[0].group
  );

  const handleAcceptAffirmationsClick = () => {
    console.log("accept");
  };

  return (
    <>
      <section className="traditional__layout">
        <h1 className="pb-2">Incoming Affirmations</h1>
        <div className="d-flex flex-column justify-content-center">
          <p className="mb-3" style={{ width: "385px", margin: "0 auto" }}>
            Someone has sent you a list of affirmations titled {currentGroup}.
          </p>
          <Button
            onClick={() => {
              handleAcceptAffirmationsClick();
            }}
            className="mt-4 position-relative start-50 translate-middle w-50"
          >
            Accept affirmations
          </Button>
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
