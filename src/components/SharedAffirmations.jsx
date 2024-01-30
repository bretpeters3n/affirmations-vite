// import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import AffirmationParams from "./AffirmationParams";

const SharedAffirmations = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const SHARED_AFFIRMATIONS = queryParameters.get("query");

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
        {/* <AffirmationParams /> */}
        <div>{SHARED_AFFIRMATIONS}</div>
      </section>
    </>
  );
};
export default SharedAffirmations;
