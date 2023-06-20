import PawsLogo from "../assets/images/PawsLogo.png";
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        <Link to="/">Home</Link>;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={styles.signIn}>
      <form onSubmit={signIn}>
        <h1> Log In </h1>
        <input
          type="email"
          placeholder="Inserisci la e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Inserisci la password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit"> Log In </button>
      </form>
    </div>
  );
};

const styles = {
  signIn: {
    display: "grid",
    placeItems: "center",
  },
};

export default Login;
