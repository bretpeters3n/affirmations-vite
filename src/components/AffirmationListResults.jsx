import { AiFillEdit } from "react-icons/ai";
import Button from "react-bootstrap/Button";
// import { useNavigate } from "react-router-dom";

const AffirmationListResults = ({ affirmationsList }) => {
  // const navigate = useNavigate();

  const handleEditAffirmationClick = (event) => {
    let editEl = event.target.closest("li");
    let editId = editEl.getAttribute("id");
    console.log("editId is:");
    console.log(editId);
    // navigate("/edit", {
    //   state: {
    //     affirmation_id: editId,
    //     currentGroupAffirmations: currentGroupAffirmations,
    //   },
    // }); // Pass optional second argument
  };

  return (
    <>
      {!affirmationsList.length ? (
        <h1>No Affirmations present</h1>
      ) : (
        affirmationsList.map((affirmations) => (
          <li
            style={{ listStyleType: "none" }}
            id={affirmations.id}
            key={affirmations.id}
            className="list-group-flush splide__slide__EDIT"
          >
            <div className="card">
              <div className="card-body d-flex flex-row">
                <p className="theme-switcher text-center">
                  {affirmations.affirmation}
                </p>
                <Button
                  onClick={(e) => {
                    handleEditAffirmationClick(e);
                    // console.log("click");
                  }}
                  className="theme-switcher edit"
                >
                  <AiFillEdit size={20} className="reactIcons" />
                </Button>
              </div>
            </div>
          </li>
        ))
      )}
    </>
  );
};

export default AffirmationListResults;
