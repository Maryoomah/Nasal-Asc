import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="mt-10 bg-blue-950 text-white px-6 md:px-16 pt-10 pb-6">
   

      {/* Main */}
      <div className="grid md:grid-cols-4 gap-8 text-sm">
        {/* Column 1: About */}
        <div>
          <h3 className="font-bold text-lg mb-2">About</h3>
          <ul className="space-y-1">
            <li>African Srabble Championship</li>
            <li>Host Country: Liberia</li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#schedule" className="hover:underline">
                Schedule
              </a>
            </li>
            <li>
              <a href="#dates" className="hover:underline">
                Important Dates
              </a>
            </li>

            <li>
              <a href="#registration" className="hover:underline">
                Registration
              </a>
            </li>
            <li>
              <a href="#accommodation" className="hover:underline">
                Travel & Visa Info
              </a>
            </li>
            <li>
              <a href="#sponsorship" className="hover:underline">
                Sponsors
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <ul className="space-y-1">
            <li>Email: asc-nasal@gmail.com</li>
            <li>Phone: +231 123 4567</li>
            <li>Location: Monrovia, Liberia</li>
          </ul>
        </div>

        {/* Newsletter + Social */}
        <div>
          <h3 className="font-bold text-lg mb-2">Stay in Touch</h3>
          <p className="mb-2">Subscribe to get updates and announcements:</p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded text-black text-sm"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded hover:bg-yellow-300"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons with Font Awesome */}
          <div className="flex gap-4 mt-4 text-xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:text-yellow-400"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="hover:text-yellow-400"
              />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="hover:text-yellow-400"
              />
            </a>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="border-t border-gray-400 mt-10 pt-4 text-center text-xs text-gray-300">
        <p>
        &copy; {new Date().getFullYear()} The National Scrabble Association of Liberia. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
