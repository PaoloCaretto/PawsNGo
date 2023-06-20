import PawsLogo from "../assets/images/PawsLogo.png";
import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Registration = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={styles.signIn}>
      <form onSubmit={signUp}>
        <h1> Sign Up </h1>
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
        <button type="submit"> Create an account </button>
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
