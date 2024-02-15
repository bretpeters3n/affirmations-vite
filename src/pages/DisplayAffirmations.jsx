import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useNavigate } from "react-router-dom";
import {
  requestAndSaveAffirmationsData,
  requestGroupAffirmations,
} from "../utils/PullPostGetSet";
import MyButton from "../components/MyButton";

const DisplayAffirmations = () => {
  const navigate = useNavigate();

  const affirmationsData = requestAndSaveAffirmationsData();
  const currentGroup = affirmationsData[0].currentGroup;
  const affirmations = requestGroupAffirmations(affirmationsData, currentGroup);

  const handleAddAffirmationClick = () => {
    // console.log("add");
    navigate("/add", {
      state: {
        currentGroup: currentGroup,
        affirmationsData: affirmationsData,
      },
    }); // Pass optional second argument
  };

  return (
    <>
      <section className="home-slideshow">
        <Splide
          options={{
            pagination: false,
            pauseOnHover: false,
            arrows: false,
            type: "fade",
            rewind: true,
            autoplay: true,
            speed: 500,
            width: "100vw",
            height: "100vh",
            interval: 4000,
          }}
          aria-label="My Affirmation Quotes"
        >
          {affirmations.length == 0 ? (
            //
            <SplideSlide
              className="d-flex justify-content-center w-100"
              style={{ width: "100vw!important" }}
            >
              <p>
                No affirmations present
                <br />
                in <i>{currentGroup}</i> group
              </p>
              <div className="pt-0 pb-0 mt-0 mb-0">
                <MyButton
                  text="Add Affirmation"
                  run={() => handleAddAffirmationClick()}
                />
              </div>
            </SplideSlide>
          ) : (
            affirmations.map((affirmation) => (
              <SplideSlide
                id={affirmation.id}
                key={affirmation.id}
                value={affirmation.affirmation}
                data-splide-interval={
                  affirmation.affirmation.length > 60 ? "8000" : "4000"
                }
              >
                <p>{affirmation.affirmation}</p>
              </SplideSlide>
            ))
          )}
          <div className="splide__progress">
            <div className="splide__progress__bar"></div>
          </div>

          {/* <button className="splide__toggle">
            <span className="splide__toggle__play">Play</span>
            <span className="splide__toggle__pause">Pause</span>
          </button>
          <button type="button" className="testButton">
            Load
          </button> */}
        </Splide>
      </section>
    </>
  );
};
export default DisplayAffirmations;
