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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae id
            qui in eos nulla pariatur! Et labore non accusantium libero debitis
            adipisci veniam illo, beatae obcaecati autem earum, voluptatem
            natus?
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
