import { Link } from "react-router-dom";
import PawsLogo from "../assets/images/PawsLogo.png";
import AuthDetails from "../components/AuthDetails";

export const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <Link to="/">
        <img
          src={PawsLogo}
          className="App-logo"
          alt="logo"
          style={styles.logo}
        />
      </Link>
      <AuthDetails />
      <div>
        <Link to="/login">
          <button style={styles.signIn}>Sign In</button>
        </Link>
        <Link to="/registration">
          <button style={styles.signUp}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    padding: 0,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  signIn: {
    borderRadius: 20,
    backgroundColor: "black",
    color: "white",
    borderColor: "white",
    marginRight: 20,
    width: 100,
    height: 40,
    cursor: "pointer",
  },
  signUp: {
    borderRadius: 20,
    backgroundColor: "white",
    color: "black",
    borderColor: "black",
    width: 100,
    height: 40,
    cursor: "pointer",
    marginRight: 5,
  },

  logo: {
    width: 230,
    height: 75,
  },
};
