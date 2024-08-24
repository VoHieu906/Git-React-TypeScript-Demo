import "./HeaderPage.css";
import logoLight from "/img/logo-black.png";
import logoDark from "/img/logo-white.png";
import si_light from "/img/search-w.png";
import si_dark from "/img/search-b.png";
import toggle_light from "/img/night.png";
import toggle_dark from "/img/day.png";
import PropTypes from "prop-types";

function HeaderPage({ theme, setTheme }) {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="header">
      <img
        src={theme === "light" ? logoLight : logoDark}
        alt=""
        className="logo"
      />
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img
          src={theme === "light" ? si_light : si_dark}
          className="search-icon"
          alt=""
        />
      </div>
      <img
        onClick={toggle_mode}
        src={theme === "light" ? toggle_light : toggle_dark}
        alt=""
        className="toggle-icon"
      />
    </div>
  );
}
HeaderPage.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};
export default HeaderPage;
