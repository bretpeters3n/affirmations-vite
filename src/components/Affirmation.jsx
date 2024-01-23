import { AiFillEdit } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { requestCurrentGroupKey } from "../utils/PullPostGetSet";

const Affirmation = ({ affirmation, id, currentGroup, affirmationsData }) => {
  const navigate = useNavigate();

  const handleEditAffirmationClick = (e) => {
    let editEl = e.target.closest("li");
    let editId = editEl.getAttribute("id");
    navigate("/edit", {
      state: {
        affirmationId: editId,
        currentGroup: currentGroup,
        affirmationsData: affirmationsData,
      },
    }); // Pass optional second argument
  };

  let groupKey = requestCurrentGroupKey(affirmationsData, currentGroup);

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
          <a href={`/edit/${groupKey}/${id}`} className="theme-switcher edit">
            <AiFillEdit size={20} className="reactIcons" />
          </a>
          {/* <Button
            onClick={(e) => {
              handleEditAffirmationClick(e);
            }}
            className="theme-switcher edit"
          >
            <AiFillEdit size={20} className="reactIcons" />
          </Button> */}
        </div>
      </div>
    </li>
  );
};

export default Affirmation;
