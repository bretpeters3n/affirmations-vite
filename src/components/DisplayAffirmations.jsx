import { useState, useEffect } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { requestGroupAffirmations } from "../utils/PullPostGetSet";
import testAffirmations from "../db/testAffirmations";
import stockAffirmationsArray from "../db/stockAffirmations";

const DisplayAffirmations = () => {
  // variable holding the localStorage data
  const [affirmationsData, setAffirmationsData] = useState(
    localStorage.getItem("affirmationsUnique")
      ? JSON.parse(localStorage.getItem("affirmationsUnique"))
      : stockAffirmationsArray
  );

  const [currentGroup, setCurrentGroup] = useState(
    affirmationsData[0].currentGroup
  );

  const [affirmations, setAffirmations] = useState(
    requestGroupAffirmations(affirmationsData, currentGroup)
  );

  // const [status, setStatus] = useState("unloaded");

  //Remove this out from useEffect
  // const runRequestGroupAffirmations = async () => {
  //   setStatus("loading");
  //   const data = await requestGroupAffirmations(affirmationsData, currentGroup);
  //   setAffirmations(data);
  //   setStatus("loaded");
  // };

  // useEffect(() => {
  //   runRequestGroupAffirmations();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* <section className="home-slideshow w-80 position-absolute top-50 start-50 translate-middle"> */}
      <section className="home-slideshow">
        <Splide
          options={{
            pagination: false,
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
          {affirmations.map(({ affirmation, id, uid }, index) => {
            return (
              <SplideSlide
                index={index}
                id={id}
                key={uid}
                data-splide-interval="4000"
              >
                <p>{affirmation}</p>
              </SplideSlide>
            );
          })}
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
