// src/components/CountdownTimer.jsx
import { useEffect, useState } from "react";
import "../styles/countdown-timer.css";

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      className="countdown-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url("/images/bg-timer.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        textAlign: "center",
        padding: "60px 20px",
      }}
    >
      <h2 className="coming-title">Waktu menuju hari-H</h2>

      <div className="time-box-wrapper">
        {["days", "hours", "minutes", "seconds"].map((unit, i) => (
          <div key={i} className="time-box">
            <div className="number">{timeLeft[unit]}</div>
            <div className="label">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountdownTimer;
