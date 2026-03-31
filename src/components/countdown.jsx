import { useState, useEffect } from "react";

export default function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = new Date(targetDate).getTime() - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);

      if (!updated) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const format = (num) => String(num).padStart(2, "0");

  if (!timeLeft) {
    return (
      <p className="text-center text-green-400 font-semibold">
        🎉 Tournament has started!
      </p>
    );
  }

  const TimeBox = ({ value, label }) => (
    <div className="bg-black/40 backdrop-blur-md px-4 py-3 rounded-lg text-center shadow-md">
      <p className="text-2xl md:text-3xl font-bold text-yellow-400">
        {format(value)}
      </p>
      <span className="text-xs uppercase text-gray-300 tracking-wide">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center gap-3 md:gap-5">
      <TimeBox value={timeLeft.days} label="Days" />
      <TimeBox value={timeLeft.hours} label="Hours" />
      <TimeBox value={timeLeft.minutes} label="Minutes" />
      <TimeBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}