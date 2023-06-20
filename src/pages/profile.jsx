import PageWrapper from "../components/pageWrapper";
import ProfilePicture1 from "../assets/images/ProfilePicture1.png";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div style={styles.contenitore}>
      <div>
        <Link to="/">
          <p style={styles.inline}>&lt; </p>
        </Link>
        <h4 style={styles.inline}> Modifica profilo</h4>
      </div>
      <img src={ProfilePicture1} alt="Avatar" />
      <div>
        <form>
          <label htmlFor="name">Nome:</label>
          <br />
          <input type="text" value="Paolo" />
          <br />
          <label htmlFor="mail">Mail:</label>
          <br />
          <input type="text" value="MarioRossi@gmail.com" />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" value="ciaoSonoPaolo" />
          <br />
          <label htmlFor="indirizzo">Indirizzo:</label>
          <br />
          <input type="text" value="Via Monza 13" />
          <br />
          <label htmlFor="profiloAnimale">Profilo animale:</label>
          <br />
          <input type="text" value="Profili" />
          <br />
          <button type="submit">Salva cambiamenti</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  contenitore: {
    // borderColor: "black",
    // borderWidth: 1,
    // borderStyle: "solid",
    // width: "50%",
    // margin: 0,
    // maxWidth: "80%",
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
    backgroundColor: "#D9D9D9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: 500,
    margin: "0 auto",
    paddingBottom: 30,
  },
  inline: {
    display: "inline-block",
  },
};
