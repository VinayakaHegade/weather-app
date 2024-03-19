import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation();
  const showBackIcon = location.pathname !== "/";

  return (
    <header className={styles.header}>
      {showBackIcon && (
        <NavLink to="/">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="var(--secondary-blue)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
        </NavLink>
      )}
      <h1>Weather App</h1>
    </header>
  );
};

export default Header;
