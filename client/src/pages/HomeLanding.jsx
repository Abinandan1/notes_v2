import heroImg from "../assets/notes-list.svg";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const HomeLanding = () => {
  return (
    <div className="container">
      <nav>
        <Logo />
      </nav>
      <section className="hero">
        <div className="hero-description">
          <h1 className="hero-title">notes app</h1>
          <p className="text">
            Notes is a good helper to manage your schedules and notes. It gives
            you a quick and simple notepad editing experience when you write
            notes, memo, email, message, shopping list and to do list. It makes
            to take a note easier than any other notepad and memo apps.Capture
            notes, share them with others, and access them from your computer,
            phone or tablet.
          </p>
          <div className="btn-container">
            <Link to="/register" className="btn">
              register
            </Link>
            <Link to="/login" className="btn">
              login
            </Link>
          </div>
        </div>
        <img className="hero-img" src={heroImg} alt="" />
      </section>
    </div>
  );
};
export default HomeLanding;
