import { useState, useEffect } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
//  import {
//    requestGroupAffirmations,
//    postAffirmationsData,
// } from "../utils/PullPostGetSet";
import testAffirmations from "../db/testAffirmations";
// import stockAffirmationsArray from "../db/stockAffirmations";

const DisplayAffirmations = () => {
  // const [affirmations, setAffirmations] = useState(testAffirmations);
  // console.log(affirmations);

  const affirmations = testAffirmations;
  console.log("affirmations is:");
  console.log(affirmations);

  // const [affirmationsData, setAffirmationsData] = useState(
  //   localStorage.getItem("affirmationsUnique")
  //     ? JSON.parse(localStorage.getItem("affirmationsUnique"))
  //     : stockAffirmationsArray
  // );

  // const [currentGroup, setCurrentGroup] = useState(
  //   affirmationsData[0].currentGroup
  // );

  // const runRequestGroupAffirmations = () => {
  //   console.log("runRequestGroupAffirmations triggered");
  //   const data = requestGroupAffirmations(affirmationsData, currentGroup);
  //   setAffirmations(data);
  // };

  // const runPostAffirmationsData = () => {
  //   console.log("runPostAffirmationsData triggered");
  //   postAffirmationsData(affirmationsData);
  // };

  // useEffect(() => {
  //   runRequestGroupAffirmations();
  //   console.log("useEffect triggered");
  //   runPostAffirmationsData();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* <section className="home-slideshow w-80 position-absolute top-50 start-50 translate-middle"> */}
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
          {/* {affirmations.map((affirmation, index) => { */}
          {affirmations.map((affirmation) => (
            // console.log(`${affirmation}${id}${index}`);
            <SplideSlide
              // id={index}
              key={affirmation.id}
              value={affirmation.affirmation}
              data-splide-interval="4000"
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
