import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/details" element={<WeatherDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
