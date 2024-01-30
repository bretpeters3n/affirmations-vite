import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import SharedAffirmationResults from "./SharedAffirmationResults";
import AffirmationParams from "./AffirmationParams";

const SharedAffirmations = (props) => {
  const queryParameters = new URLSearchParams(window.location.search);
  const [sharedAffirmations, setSharedAffirmations] = useState(
    queryParameters.get("query")
    // [
    //   {
    //     id: "fkuT6N",
    //     // uid: "fkuT6N",
    //     group: "Default Affirmations",
    //     affirmations: [
    //       {
    //         id: "rAhggX",
    //         affirmation: "Struggling%20is%20part%20of%20learning",
    //       },
    //       {
    //         id: "o1eWp2",
    //         affirmation:
    //           "Everything%20has%20cracks%20-%20that’s%20how%20the%20light%20gets%20in",
    //       },
    //     ],
    //   },
    // ]
  );
  // console.log(sharedAffirmations);

  return (
    <>
      <section className="traditional__layout">
        <h1 className="pb-2">Incoming Affirmations</h1>
        <div className="d-flex flex-column justify-content-center">
          <p className="mb-3" style={{ width: "385px", margin: "0 auto" }}>
            Someone has sent you a list of affirmations titled Best Affirmations
            Ever.
          </p>
          <Button
            onClick={() => {
              console.log("click");
            }}
            className="mt-4 position-relative start-50 translate-middle w-50"
          >
            Accept & view
          </Button>
          {/* <p className="mb-0">List of "Best Affirmations Ever" group:</p> */}
        </div>
        <SharedAffirmationResults
          // currentGroup={currentGroup}
          // affirmationsData={affirmationsData}
          sharedAffirmations={sharedAffirmations}
        />
        {<div>{sharedAffirmations}</div>}
      </section>
    </>
  );
};
export default SharedAffirmations;
