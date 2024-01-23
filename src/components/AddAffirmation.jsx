import {
  BrowserRouter,
  useNavigate,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {
  postAffirmationsData,
  requestCurrentGroupKey,
} from "../utils/PullPostGetSet";
import Affirmation from "../utils/affirmationClass"; // Affirmation class
import ShortUniqueId from "short-unique-id";

const AddAffirmation = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const uid = new ShortUniqueId();

  let affirmationsData = location.state.affirmationsData;
  let currentGroup = location.state.currentGroup;
  let groupKey = requestCurrentGroupKey(affirmationsData, currentGroup);
  console.log(groupKey);

  const handleAddAffirmationClick = () => {
    const affirmation = document.getElementById("affirmationText").value;
    if (!affirmation) {
      alert("Affirmation text is empty. Please add you affirmation.");
    } else {
      const id = uid.rnd();
      const newAffirmation = new Affirmation(affirmation, id);

      // add new affirmation
      affirmationsData[0].groups[groupKey].affirmations.push({
        id: newAffirmation.id,
        // uid: newAffirmation.uid,
        affirmation: newAffirmation.affirmation,
      });

      postAffirmationsData(affirmationsData);
      navigate("/current");
    }
  };

  const handleCancelAddAffirmationClick = () => {
    navigate("/current");
  };

  return (
    <>
      <section className="traditional__layout addAffirmation">
        <h1 className="font-bold pb-2">Add Affirmation</h1>
        <div className="pb-2">
          <p>Enter your affirmation below</p>
        </div>
        <form className="align-items-center pb-3">
          <textarea
            className=""
            id="affirmationText"
            placeholder="Type/paste your affirmation here"
          ></textarea>
        </form>
        <div className="flex">
          <Button onClick={handleCancelAddAffirmationClick}>Cancel</Button>
          <button
            className="theme-switcher btn btn-outline-primary"
            onClick={handleAddAffirmationClick}
          >
            Add affirmation
          </button>
        </div>
      </section>
    </>
  );
};
export default AddAffirmation;
