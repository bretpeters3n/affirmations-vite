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

  // What possibilities exist on the ShareAffirmations page:
  //   - Receiving affs as new USER
  //       - Accept ⇒ Create localStorage save with Received affs and Default Affs
  //       - set currentGroup to Received affs group
  //       - send user to DisplayAffs page with new affs playing
  //   - Receiving affs as current USER
  //       - Accept ⇒ Create localStorage save with added Received affs
  //       - set currentGroup to Received affs group
  //       - send user to DisplayAffs page with new affs playing
  //   - Receiving affs as YOURSELF USER (likely a mistake, but code for)
  //       - Probs alert that you already have it? This brings up issues of same named groups and same ID groups. Regenerate ID upon Receiving affs?

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
