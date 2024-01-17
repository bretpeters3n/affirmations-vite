import { AiFillEdit } from "react-icons/ai";

const AffirmationListResults = ({ affirmationsList }) => {
  return (
    <>
      {!affirmationsList.length ? (
        <h1>No Affirmations present</h1>
      ) : (
        affirmationsList.map((affirmations) => (
          <li
            id={affirmations.affirmation}
            key={affirmations.affirmation}
            className="splide__slide__EDIT"
          >
            <div className="currentCard">
              <div className="card grid">
                <p className="theme-switcher card-body">
                  {affirmations.affirmation}
                </p>
                <button
                  onClick={(e) => {
                    // handleEditAffirmationClick(e);
                    console.log("click");
                  }}
                  className="theme-switcher edit"
                >
                  <AiFillEdit size={20} className="reactIcons" />
                </button>
              </div>
            </div>
          </li>
        ))
      )}
    </>
  );
};

export default AffirmationListResults;
