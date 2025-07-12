import { useState, useEffect } from "react";

export default function CountdownTimer () {
    const targetDate = new Date("October 21,2026 00:00:00").getTime();
    const calculateTimeLeft = () => {
        const present = new Date().getTime();
        const difference = targetDate - present;

        if (difference <= 0) {
            return null;
        }
        return {
            days: Math.floor(difference/ (1000*60*60*24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),

        };
    };

      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // Update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);

      if (!updatedTime) {
        clearInterval(timer); // Stop the countdown when time is up
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  // Display if countdown is finished
  if (!timeLeft) {
    return <p>Countdown finished!</p>;
  }
  return (
    <div className=" flex flex-row justify-center items-center gap-4 text-yellow-400 text-2xl font-semibold mt-10">
        <p className="font-semibold ">
          {timeLeft.days} <span className="text-white text-base ml-1 italic">d</span> 
        </p>  <p className="font-semibold ">
          {timeLeft.hours} <span className="text-white text-base ml-1 italic">h</span>  
        </p>  <p className="font-semibold ">
           {timeLeft.minutes} <span className="text-white text-base ml-1 italic">m</span> 
       
        </p>  <p className="font-semibold ">
          {timeLeft.seconds} <span className="text-white text-base ml-1 italic">s</span>  
        </p>
    </div>
  )
}