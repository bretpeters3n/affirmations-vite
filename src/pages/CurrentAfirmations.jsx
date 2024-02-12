import AffirmationParams from "../components/AffirmationParams";

const CurrentAffirmations = () => {
  return (
    <>
      <section className="traditional__layout">
        <h1 className="pb-3">Saved Affirmations</h1>
        {/* <div>
          <p className="mb-0">Select or add a group:</p>
        </div> */}
        <AffirmationParams />
      </section>
    </>
  );
};
export default CurrentAffirmations;
