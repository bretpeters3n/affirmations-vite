import AffirmationParams from "./AffirmationParams";

const CurrentAffirmations = () => {
  return (
    <>
      <section className="traditional__layout">
        <h1 className="pb-2">Saved Affirmations</h1>
        <div>
          <p className="mb-0">Currently selected group:</p>
        </div>
        <AffirmationParams />
      </section>
    </>
  );
};
export default CurrentAffirmations;
