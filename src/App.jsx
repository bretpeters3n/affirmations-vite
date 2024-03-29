import { useState, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "dotenv";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DisplayAffirmations from "./pages/DisplayAffirmations";
import CurrentAffirmations from "./pages/CurrentAfirmations";
import EditAffirmation from "./pages/EditAffirmation";
import AddAffirmation from "./pages/AddAffirmation";
import AboutAffirmations from "./pages/AboutAffirmations";
import SharedAffirmations from "./pages/SharedAffirmations";
// import darkModeIcon from "./assets/dark-mode-icon_dark.svg";
// import lightModeIcon from "./assets/dark-mode-icon_light.svg";
import "./css/splide-core.min.css";
import "./css/App.css";
import "./css/Nav.css";
// import { loadEnv } from "vite";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  // const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  const BASE_URL = import.meta.env.BASE_URL;
  // console.log(BASE_URL);

  const Page404 = ({ location }) => (
    <div>
      <h2>
        No match found for <code>{location.pathname}</code>
      </h2>
    </div>
  );

  const handleHamClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  // const env = loadEnv(mode, process.cwd());
  // console.log(env.VITE_BASE_URL);

  return (
    <>
      <BrowserRouter>
        <nav className="theme-switcher btm-gradient">
          <div id="appName" className="theme-switcher">
            Affirmations
          </div>
          <button
            id="hamburger"
            className={isActive ? "opened" : ""}
            onClick={handleHamClick}
            aria-label="Main Menu"
          >
            <svg width="40" height="40" viewBox="0 0 100 100">
              {/* NEW */}
              <path
                className="theme-switcher line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="theme-switcher line line2" d="M 20,50 H 80" />
              <path
                className="theme-switcher line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
          <ul id="menu" className={isActive ? "opened" : ""}>
            <li>
              <Link
                to={`${BASE_URL}`}
                onClick={handleHamClick}
                className="theme-switcher"
              >
                <PlayArrowOutlinedIcon fontSize="large" />
              </Link>
            </li>
            <li>
              <Link
                to={`${BASE_URL}current`}
                onClick={handleHamClick}
                className="theme-switcher"
              >
                <SettingsOutlinedIcon fontSize="large" />
              </Link>
            </li>
            <li>
              <Link to={`${BASE_URL}about`} onClick={handleHamClick}>
                <InfoOutlinedIcon fontSize="large" />
              </Link>
            </li>
            {/* <li className="lastMenuItemExtend"></li> */}
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path={`${BASE_URL}`} element={<DisplayAffirmations />} />
            <Route
              path={`${BASE_URL}current`}
              element={<CurrentAffirmations />}
            />
            <Route path={`${BASE_URL}add`} element={<AddAffirmation />} />
            <Route path={`${BASE_URL}edit`} element={<EditAffirmation />} />
            <Route
              path={`${BASE_URL}shared`}
              element={<SharedAffirmations />}
            />
            <Route path={`${BASE_URL}about`} element={<AboutAffirmations />} />
            {/* <Route path="*" element={<p>Path not resolved</p>} /> */}
            <Route path={`${BASE_URL}*`} element={<DisplayAffirmations />} />
            {/* <Route component={Page404} /> */}
          </Routes>
        </main>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
