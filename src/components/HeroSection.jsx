import '../styles/HeroSection.css';
import { Link } from 'react-scroll';

function HeroSection() {
  return (
    <section className="hero" id="hero">
      <h1>Transforming Ideas into Digital Reality</h1>
      <p>At Skillgineers, we design and develop high-performing websites and mobile applications that drive results and empower brands.</p>
      <div className="cta-buttons">
        <Link to="contact" smooth={true} duration={500}>
          <button>Get a Free Consultation</button>
        </Link>
        <Link to="portfolio" smooth={true} duration={500}>
          <button>View Our Work</button>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;