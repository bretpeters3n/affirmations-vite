import { useNavigate } from "react-router-dom";

const AffirmationShared = ({
  affirmation,
  id,
  currentGroup,
  affirmationsData,
}) => {
  const navigate = useNavigate();

  return (
    <li
      style={{ listStyleType: "none" }}
      id={id}
      key={id}
      className="list-group-flush splide__slide__EDIT"
    >
      <div className="card">
        <div className="card-body d-flex flex-row">
          <p
            className="theme-switcher text-center"
            style={{ paddingRight: "unset" }}
          >
            {affirmation}
          </p>
        </div>
      </div>
    </li>
  );
};

export default AffirmationShared;
