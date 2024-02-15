import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import { useNavigate } from "react-router-dom";

const Affirmation = ({ affirmation, id, currentGroup, affirmationsData }) => {
  const navigate = useNavigate();

  const handleEditAffirmationClick = (e) => {
    let editEl = e.target.closest("li");
    let editId = editEl.getAttribute("id");
    navigate("/edit", {
      state: {
        affirmationId: editId,
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
          <button
            onClick={(e) => {
              handleEditAffirmationClick(e);
            }}
            className="theme-switcher edit"
          >
            <BorderColorSharpIcon fontSize="small" style={{ color: "white" }} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Affirmation;
