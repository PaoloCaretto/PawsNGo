import {Link} from "react-router-dom"

const Navigation = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/registration">Registration</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/sitter">Sitters</Link></li>
      </ul>
    </div>
  )
}
export default Navigation;

      
     
      
      