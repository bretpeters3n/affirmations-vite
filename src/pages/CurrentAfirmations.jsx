import { motion } from "framer-motion";
import AffirmationParams from "../components/AffirmationParams";

const CurrentAffirmations = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <section className="traditional__layout">
          <h1 className="pb-3">Saved Affirmations</h1>
          <AffirmationParams />
        </section>
      </motion.div>
    </>
  );
};
export default CurrentAffirmations;
