import { useRef, useState } from "react";
import "../styles/detail.css"; // pastikan CSS kamu tersambung
import CountdownTimer from "../components/CountdownTimer";

function Detail() {
  const contentRef = useRef(null);
  const audioRef = useRef(null);

  const handleClick = () => {
    handleScrollClick();
    handlePlayMusic();
  };

  const handleScrollClick = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [hasPlayed, setHasPlayed] = useState(false);

  const handlePlayMusic = () => {
    if (audioRef.current && !hasPlayed) {
      audioRef.current.play();
      setHasPlayed(true);
    }
  };
  return (
    <>
      {/* Audio autoplay */}
      <audio ref={audioRef} src="/music.mp3" preload="auto" />
      <div className="detail-carousel position-relative">
        {/* Static Caption Atas */}
        <div className="caption-top text-center">
          <h3>Wedding Invitation</h3>
        </div>

        {/* Carousel */}
        <div
          id="mainCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
          data-bs-wrap="true"
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
            className="btn btn-light px-4 shadow rounded-pill"
          >
            Scroll To Begin
          </button>
        </div>
      </div>

      <div className="content-1" ref={contentRef}>
        <div className="container">
          <p className="text-center fw-bold">
            <small>
              Bapak-Ibu yang terhormat,
              <br /> Keluarga & Sahabat
            </small>
          </p>

          <div className="welcome-container">
            <h4 className="welcome text-center noto-serif">
              Welcome to Dahlan & Dyah Wedding Website
            </h4>

            <p className="text-center subtitle">
              "Kami dengan penuh cinta mengundang Anda untuk menjadi bagian dari
              momen istimewa dalam hidup kami."
            </p>

            <div className="text-start">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <td colSpan={2} className="table-dark">
                      Akad Nikah:
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hari, Tanggal</td>
                    <td>: Kamis, 12 Juni 2025</td>
                  </tr>
                  <tr>
                    <td>Jam</td>
                    <td>: 08:00</td>
                  </tr>
                  <tr>
                    <td>Tempat</td>
                    <td>
                      : JL WR SUPRATMAN Dsn. cumpleng 04/08 Ds. PULOREJO
                      KEC.TEMBELANG JOMBANG
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="table table-striped">
                <thead>
                  <tr>
                    <td colSpan={2} className="table-dark">
                      Resepsi:
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hari, Tanggal</td>
                    <td>: Kamis, 12 Juni 2025</td>
                  </tr>
                  <tr>
                    <td>Jam</td>
                    <td>: Rilex</td>
                  </tr>
                  <tr>
                    <td>Tempat</td>
                    <td>
                      : JL WR SUPRATMAN Dsn. cumpleng 04/08 Ds. PULOREJO
                      KEC.TEMBELANG JOMBANG
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="table table-striped">
                <thead>
                  <tr>
                    <td colSpan={2} className="table-dark">
                      Kado/Hadian dapat dikirim ke:
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Bank</th>
                    <th>No. Rekening</th>
                  </tr>
                  <tr>
                    <td>Mandiri</td>
                    <td>1420016337528</td>
                  </tr>
                  <tr>
                    <td>BRI</td>
                    <td>625001015639534</td>
                  </tr>
                  <tr>
                    <td>Dana</td>
                    <td>085645531451</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-center">Atas Nama: Dyah Ayu Dwi Febriyani</p>
            </div>
          </div>
        </div>

        <CountdownTimer targetDate="2025-06-12T08:00:00" />
      </div>
    </>
  );
}

export default Detail;
