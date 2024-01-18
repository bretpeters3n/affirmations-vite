import AffirmationParams from "./AffirmationParams";

const CurrentAffirmations = () => {
  return (
    <>
      <section className="traditional__layout">
        <h1 className="pb-2">Current Affirmations</h1>
        {/* <h1 className="pb-3">Current Affirmations</h1> */}
        <AffirmationParams />
      </section>
    </>
  );
};
export default CurrentAffirmations;
