import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import CountdownTimer from "./countdown";

export default function HomePage() {
    return (
    <div className="bg-blue-950">
    <header className="flex justify-between items-center pt-5 px-5"> 
        <img src="src/logo.jpg" alt="Nasal-Logo" className="w-28 mb-4 " />
     <div class="flex gap-4" >
              <p className="text-white font-semibold hover:undeline">Call us :+231-34567</p>

      <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className=" text-white hover:text-blue-400"
                  />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className=" text-white hover:text-blue-400"
                  />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className=" text-white hover:text-blue-400"
                  />
                </a> </div>
    </header>
  {/* hero section */}
<section className="bg-black text-center py-20 px-6 flex flex-col md:flex-row md:items-center justify-center gap-10 md:gap-6 text-white md:px-16">
  {/* Text content */}
  <div className="md:w-1/2">
    <h1 className="text-4xl font-bold mb-4">Africa Scrabble Championship</h1>
    <p className="text-4xl font-bold text-yellow-500 mb-2">Liberia 2026</p>
    <p className="text-lg mb-6">A gathering of Africa's finest word warriors</p>
   
    <div className="mt-10 bg-blue-950 text-yellow-400 py-4 px-6 rounded-lg shadow-lg max-w-md mx-auto">
      <p className="text-xl font-bold mb-2">Time Left:</p>
      <CountdownTimer />
    </div>
     <button className="mt-8 bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
      Get Ready
    </button>
  </div>

  {/* Image */}
  <div className="md:w-1/2 w-full flex justify-center mr-10">
    <img
      src="src/scrabble.jpeg"
      alt="Scrabble Game"
      className="w-full max-w-md md:max-w-full h-auto rounded-xl object-cover shadow-lg"
    />
  </div>
</section>



    </div>
        
    )
}