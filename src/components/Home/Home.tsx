import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <input type="search" name="city" placeholder="Enter city name" />
      <p>or</p>
      <button>Get Device Location</button>
    </div>
  );
};

export default Home;
