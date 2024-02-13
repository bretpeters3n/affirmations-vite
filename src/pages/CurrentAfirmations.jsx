import AffirmationParams from "../components/AffirmationParams";

const CurrentAffirmations = () => {
  return (
    <>
      <section className="traditional__layout">
        <h1 className="pb-3">Saved Affirmations</h1>
        <AffirmationParams />
      </section>
    </>
  );
};
export default CurrentAffirmations;
