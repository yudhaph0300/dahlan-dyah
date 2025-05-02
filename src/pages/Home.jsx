import "../styles/home.css";
import CountdownTimer from "../components/CountdownTimer";
import { useRef, useState } from "react";
function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    handlePlayMusic();
  };

  const contentRef = useRef(null);
  const audioRef = useRef(null);

  const handleClick = () => {
    handleScrollClick();
  };

  const handleScrollClick = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePlayMusic = () => {
    if (audioRef.current && !hasPlayed) {
      audioRef.current.play();
      setHasPlayed(true);
    }
  };
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Nomor rekening berhasil disalin!");
      })
      .catch(() => {
        alert("Gagal menyalin nomor rekening.");
      });
  };

  return (
    <>
      <div className={`home-carousel ${isOpened ? "slide-up" : ""}`}>
        <div
          id="mainCarousel1"
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
                    <button
                      onClick={handleOpen}
                      className="btn btn-dark shadow rounded-pill px-5"
                    >
                      Buka Undangan
                    </button>
                    <audio ref={audioRef} src="/music.mp3" preload="auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpened && (
        <div className="other-content">
          <>
            {/* Audio autoplay */}

            <div className="detail-carousel position-relative">
              {/* Static Caption Atas */}
              <div className="caption-top text-center">
                <h3>Wedding Invitation</h3>
              </div>

              {/* Carousel */}
              <div
                id="mainCarousel2"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/images/carousel/1.jpg"
                      className="d-block w-100 img-car"
                      alt="Slide 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/images/carousel/2.jpg"
                      className="d-block w-100 img-car"
                      alt="Slide 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/images/carousel/3.jpg"
                      className="d-block w-100 img-car"
                      alt="Slide 3"
                    />
                  </div>
                </div>
              </div>

              {/* Static Caption Bawah */}
              <div className="caption-bottom text-center">
                <button
                  onClick={handleClick}
                  className="btn btn-dark px-4 shadow rounded-pill"
                >
                  Scroll To Begin
                </button>
              </div>
            </div>

            <div className="content-1" ref={contentRef}>
              <div className="quote text-center px-3 py-5">
                "Dengan izin-Nya kami bertemu, dengan kasih-Nya cinta tumbuh,
                dan dengan restu-Nya kami melangkah menuju hidup baru sebagai
                sepasang suami istri."
              </div>

              <CountdownTimer targetDate="2025-06-12T08:00:00" />

              <div className="the-bridge px-3 py-5">
                <h4 className="noto-serif text-center">The Bridge</h4>

                <div className="d-flex justify-content-center mt-5">
                  <div className="circle-photo">
                    <img src="/images/wanita.png" alt="Foto Profil" />
                  </div>
                </div>

                <div className="text-center mt-3">
                  <h4 className="noto-serif">DYAH AYU DWI FEBRIYANI</h4>
                  <p>Putri dari Bpk. Sujina & Ibu Wiwik</p>
                </div>

                <div className="d-flex justify-content-center mt-5">
                  <div className="circle-photo">
                    <img src="/images/pria.png" alt="Foto Profil" />
                  </div>
                </div>

                <div className="text-center mt-3">
                  <h4 className="noto-serif">MUHAMAD DAHLAN</h4>
                  <p>Putri dari Bpk. Kastawi & Ibu Sakimah</p>
                </div>
              </div>

              <div
                className="event-time px-3 py-5"
                style={{ backgroundColor: "#f7f7f7" }}
              >
                <div className="text-center my-4">
                  <h4 className="noto-serif">Akad Nikah</h4>
                  <p className="p-0 m-0 mt-3">Kamis, 12 Juni 2025</p>
                  <small className="p-0 m-0">08:00 WIB - Selesai</small>

                  <p className="mt-2 fst-italic">
                    Jl. WR Supratman Dsn. cumpleng 04/08 Ds. Pulorejo
                    Kec.Tembelang Jombang
                  </p>

                  <a
                    href="https://www.google.com/maps/place/7%C2%B028'10.9%22S+112%C2%B015'34.4%22E/@-7.4696822,112.2569887,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.4696822!4d112.2595636?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="btn btn-outline-dark px-4 rounded-pill"
                    rel="noopener noreferrer"
                  >
                    Lihat Lokasi
                  </a>
                </div>
                <hr />
                <div className="text-center my-4">
                  <h4 className="noto-serif">Resepsi</h4>
                  <p className="p-0 m-0 mt-3">Kamis, 12 Juni 2025</p>
                  <small className="p-0 m-0">Rilex</small>

                  <p className="mt-2 fst-italic">
                    Jl. WR Supratman Dsn. cumpleng 04/08 Ds. Pulorejo
                    Kec.Tembelang Jombang
                  </p>

                  <a
                    href="https://www.google.com/maps/place/7%C2%B028'10.9%22S+112%C2%B015'34.4%22E/@-7.4696822,112.2569887,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.4696822!4d112.2595636?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="btn btn-outline-dark px-4 rounded-pill"
                    rel="noopener noreferrer"
                  >
                    Lihat Lokasi
                  </a>
                </div>
              </div>

              <div className="gallery ">
                <h4
                  className="noto-serif text-center py-3 mb-0"
                  style={{ backgroundColor: "#222", color: "white" }}
                >
                  Gallery
                </h4>
                <div
                  id="carouselExampleAutoplaying"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="3000"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/images/carousel/2.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item ">
                      <img
                        src="/images/carousel/1.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>

                    <div className="carousel-item ">
                      <img
                        src="/images/carousel/3.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                </div>
              </div>

              <div className="wedding-gift px-3 py-5">
                <div className="text-center">
                  <h4 className="noto-serif text-center py-3 mb-0">
                    Wedding Gift
                  </h4>

                  <p>
                    "Apabila jarak, waktu, atau keadaan membuat
                    Bapak/Ibu/Saudara/i berhalangan hadir, dengan penuh hormat
                    kami membuka kesempatan untuk tetap berbagi kebahagiaan
                    melalui tanda kasih di bawah ini."
                  </p>

                  <div className="norek">
                    <div className="mandiri">
                      <h5>Bank Mandiri</h5>
                      <p className="fw-bold mb-2">1420016337528</p>
                      <button
                        className="btn btn-dark rounded-pill px-5"
                        onClick={() => copyToClipboard("1420016337528")}
                      >
                        Salin
                      </button>
                      <h6 className="mt-3">A/n Dyah Ayu Dwi Febriyani</h6>
                    </div>
                    <hr />
                    <div className="mandiri">
                      <h5>Bank BRI</h5>
                      <p className="fw-bold mb-2">625001015639534</p>
                      <button
                        className="btn btn-dark rounded-pill px-5"
                        onClick={() => copyToClipboard("625001015639534")}
                      >
                        Salin
                      </button>
                      <h6 className="mt-3">A/n Dyah Ayu Dwi Febriyani</h6>
                    </div>
                    <hr />
                    <div className="mandiri">
                      <h5>Dana</h5>
                      <p className="fw-bold mb-2">085645531451</p>
                      <button
                        className="btn btn-dark rounded-pill px-5"
                        onClick={() => copyToClipboard("085645531451")}
                      >
                        Salin
                      </button>
                      <h6 className="mt-3">A/n Dyah Ayu Dwi Febriyani</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="footer text-center px-3 py-5"
                style={{ backgroundColor: "#222", color: "white" }}
              >
                Dengan segala kerendahan hati, kami mengundang kehadiran
                Bapak/Ibu/Saudara/i untuk turut berbagi kebahagiaan dan
                memberikan restu pada hari istimewa kami.
              </div>
            </div>
          </>
        </div>
      )}
    </>
  );
}

export default Home;
