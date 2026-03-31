import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import CountdownTimer from "./countdown";
import Details from "./details";
import Footer from "./footer";

export default function HomePage() {
  return ( <main>
<div className="bg-gradient-to-b from-blue-950 via-black to-black min-h-screen text-white">
  
  {/* HEADER */}
  <header className="flex justify-between items-center py-5 px-6 md:px-12">
    <img
      src="/Nasal-Asc/logo.jpg"
      alt="Nasal-Logo"
      className="w-24 md:w-28"
    />

    <div className="flex gap-5 text-lg">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="hover:text-yellow-400 transition" icon={faInstagram} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="hover:text-yellow-400 transition" icon={faFacebook} />
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="hover:text-yellow-400 transition" icon={faXTwitter} />
      </a>
    </div>
  </header>

  {/* HERO */}
  <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-12">
    
    {/* TEXT */}
    <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Africa Scrabble Championship
      </h1>

      <p className="text-3xl md:text-4xl font-bold text-yellow-400 mt-2">
        Liberia 2026
      </p>

      <p className="text-lg text-gray-300 mt-4">
        A gathering of Africa's finest word warriors
      </p>

      {/* Countdown Card */}
      <div className="mt-8 bg-blue-900/40 backdrop-blur-lg border border-blue-800 p-6 rounded-xl shadow-xl max-w-md mx-auto md:mx-0">
        <p className="text-lg font-semibold mb-4 text-white">
          Tournament Countdown
        </p>

        <CountdownTimer targetDate="October 21, 2026 00:00:00" />
      </div>

      {/* CTA */}
      <button className="mt-8 bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300">
        Register Now
      </button>
    </div>

    {/* IMAGE */}
    <div className="md:w-1/2 flex justify-center relative">
      <div className="absolute inset-0 bg-blue-900/20 blur-2xl rounded-full"></div>
      
      <img
        src="/Nasal-Asc/hero img.jpg"
        alt="Scrabble Game"
        className="relative w-full max-w-md md:max-w-lg rounded-xl shadow-2xl object-cover"
      />
    </div>
  </section>
</div>

      {/* details */}
      <section>
        <Details />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
