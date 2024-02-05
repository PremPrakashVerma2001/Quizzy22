import { Link } from "react-router-dom";
import "./Header.css";
import logo from '../../img/quiz-logo.jpg'

const Header = () => {
  return (
    <>
    <div className="header">
      <Link to="/" className="title">
        <span>QuizZy 22</span>
      </Link>
      <img src={logo} alt="LOGO" />
    </div>
    <hr className="divider" />
    </>
     
  );
};

export default Header;
