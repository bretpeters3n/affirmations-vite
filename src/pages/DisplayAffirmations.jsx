import { useState, useEffect } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import {
  postAffirmationsData,
  requestAndSaveAffirmationsData,
  requestGroupAffirmations,
} from "../utils/PullPostGetSet";
import testAffirmations from "../db/testAffirmations";
// import stockAffirmationsArray from "../db/stockAffirmations";

const DisplayAffirmations = () => {
  const affirmationsData = requestAndSaveAffirmationsData();
  const currentGroup = affirmationsData[0].currentGroup;
  const affirmations = requestGroupAffirmations(affirmationsData, currentGroup);

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
          {affirmations.map((affirmation) => (
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
          ))}
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
