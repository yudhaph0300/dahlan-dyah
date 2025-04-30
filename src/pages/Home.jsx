// src/pages/Home.jsx
import { Link } from "react-router-dom";
import "../styles/home.css";
function Home() {
  return (
    <div className="home-carousel">
      <div
        id="mainCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        data-bs-wrap="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/main-photo.jpg"
              className="d-block w-100 img-car"
              alt="Slide 1"
            />
            <div className="carousel-caption-custom">
              <div className="typography-wrapper text-center">
                <h1 className="wedding-names">Dahlan & Dyah</h1>
                <p className="wedding-date">- KAMIS, 12 Juni 2025 -</p>
                <p className="wedding-tagline">
                  "Dengan cinta yang tulus, kami mengundang Anda untuk menjadi
                  bagian dari hari bahagia kami"
                </p>
                <div className="btn-container">
                  <Link
                    to="/detail"
                    className="btn btn-dark shadow rounded-pill px-5"
                  >
                    Buka Sampul
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
