import { AiFillEdit } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Affirmation = ({ affirmation, id, currentGroup, affirmationsData }) => {
  const navigate = useNavigate();

  const handleEditAffirmationClick = (event) => {
    let editEl = event.target.closest("li");
    let editId = editEl.getAttribute("id");
    navigate("/edit", {
      state: {
        affirmationId: editId,
        // affirmations: affirmations,
        currentGroup: currentGroup,
        affirmationsData: affirmationsData,
      },
    }); // Pass optional second argument
  };

  return (
    <li
      style={{ listStyleType: "none" }}
      id={id}
      key={id}
      className="list-group-flush splide__slide__EDIT"
    >
      <div className="card">
        <div className="card-body d-flex flex-row">
          <p className="theme-switcher text-center">{affirmation}</p>
          <Button
            onClick={(e) => {
              handleEditAffirmationClick(e);
            }}
            className="theme-switcher edit"
          >
            <AiFillEdit size={20} className="reactIcons" />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default Affirmation;
