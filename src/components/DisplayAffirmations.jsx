import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { requestGroupAffirmations } from "../utils/PullPostGetSet";

const DisplayAffirmations = () => {
  // variable holding the localStorage data
  const [affirmationsData] = useState(
    localStorage.getItem("affirmationsUnique")
      ? JSON.parse(localStorage.getItem("affirmationsUnique"))
      : stockAffirmationsArray
  );
  console.log("affirmationsData is:");
  console.log(affirmationsData);

  const [currentGroup] = useState(affirmationsData[0].currentGroup);
  console.log("currentGroup is:");
  console.log(currentGroup);

  const [affirmations, setAffirmations] = useState([]);

  const runRequestGroupAffirmations = async () => {
    setAffirmations([]);
    // setStatus("loading");
    const data = await requestGroupAffirmations(affirmationsData, currentGroup);
    setAffirmations(data);
    // setStatus("loaded");
  };

  useEffect(() => {
    setAffirmations(runRequestGroupAffirmations());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log("affirmations is:");
  console.log(affirmations);

  return (
    <>
      <section className="home-slideshow w-80 position-absolute top-50 start-50 translate-middle">
        <Splide
          options={{
            autoplay: true,
            pauseOnHover: true,
            pagination: false,
            arrows: false,
            type: "fade",
            rewind: true,
            speed: 500,
            width: "100vw",
            // interval: 4000,
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
          <div class="splide__progress">
            <div class="splide__progress__bar"></div>
          </div>
        </Splide>
      </section>
    </>
  );
};
export default DisplayAffirmations;
