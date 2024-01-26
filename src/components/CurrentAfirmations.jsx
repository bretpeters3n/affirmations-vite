import AffirmationParams from "./AffirmationParams";

const CurrentAffirmations = () => {
  return (
    <>
      <section className="traditional__layout">
        <h1 className="pb-2">Current Affirmations</h1>
        <div>
          <p className="mb-0">Select your affirmation group:</p>
        </div>
        <AffirmationParams />
      </section>
    </>
  );
};
export default CurrentAffirmations;
