import { createRoot } from "react-dom/client";
import AffirmationParams from "./components/AffirmationParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <AffirmationParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
