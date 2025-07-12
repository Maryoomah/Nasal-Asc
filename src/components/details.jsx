import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
const dateDeets = [
  { date: "November 1, 2024", deet: "Registration commences" },
  { date: "July 31, 2025", deet: "End of regular registration" },
  { date: "October 18-20, 2026", deet: "Expected Arrival" },
];
const feeData = [
  { fee: "150", event: "Early Bird", timeline: "23rd Nov - 30th Nov 2025" },
  { fee: "150", event: "Side Event", timeline: "23rd Nov - 30th Nov 2025" },
  { fee: "150", event: "Main Event", timeline: "23rd Nov - 30th Nov 2025" },
  {
    fee: "Additional 30",
    event: "Late Payment",
    timeline: "Beyond Dec. 30, 2025",
  },
];
const tourFormat = [
  { sub: "Games", format: "28 rounds for main event; 4 rounds for Early Bird" },
  { sub: "Divisions", format: "Two divisions.Qualified players can play up" },
  { sub: "Pairing System", format: "Australian Swiss and Lagged Swiss" },
  { sub: "Lexicon", format: "Collins Scrabble Words (CSW2023)" },
  { sub: "Challenge", format: "5-point penalty per word challenge" },
  { sub: "Software", format: "Tournament Scrabble Helper (TSH)" },
  { sub: "Ratings", format: "Ratings from WESPA" },
  { sub: "Rating Cut-offs", format: "WESPA-1500" },
];
const sponsors = [
  { id: 1, name: "Sponsor 1", logo: "src/wespa.jpeg" },
  { id: 2, name: "Sponsor 2", logo: "src/wespa.jpeg" },
  { id: 3, name: "Sponsor 3", logo: "src/wespa.jpeg" },
  { id: 4, name: "Sponsor 4", logo: "src/wespa.jpeg" },
  { id: 5, name: "Sponsor 5", logo: "src/wespa.jpeg" },
  { id: 6, name: "Sponsor 6", logo: "src/wespa.jpeg" },
];

export default function Details() {
  return (
    <>
      <section
        id="dates"
        className="mt-14 py-14 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row gap-6 bg-blue-900  text-white"
      >
        <div className="md: w-1/2">
          <h2 className="text-3xl font-bold mb-6">Important Dates</h2>
          <div className="space-y-6">
            {dateDeets.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-300 pl-4 ml-2">
                <div className="text-xl font-semibold">{item.date} </div>
                <div className="text-sm text-blue-100 mt-1">{item.deet} </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2" id="schedules">
          <h2 className="text-3xl font-bold mb-6">Tournament Schedule</h2>
          <table className="overflow-x-auto min-w-full table-auto border border-gray-300 rounded-md shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-3 border-b font-semibold text-gray-700">
                  Event
                </th>
                <th className="text-left px-4 py-3 border-b font-semibold text-gray-700">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">Opening Event</td>
                <td className="px-4 py-2 border-b">October 21, 2026</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Last Chance Qualifiers</td>
                <td className="px-4 py-2 border-b">October 21, 2026</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Main Event</td>
                <td className="px-4 py-2 border-b">October 22–25, 2026</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Closing Event</td>
                <td className="px-4 py-2 border-b">October 25, 2026</td>
              </tr>
            </tbody>
          </table>

          <a href="">
            <button className="items-center mt-5 bg-blue-700 rounded-lg p-4 text-yellow-400 font-bold text-lg">
              Full schedule <FontAwesomeIcon icon={faDownload} />{" "}
            </button>
          </a>
        </div>
      </section>

      <section
        id="registration"
        className=" mt-10 bg-white py-10 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row gap-6"
      >
        <div className="md:w-1/2 ">
          <h1 className="text-2xl font-bold mb-6 text-blue-900">
            Registration and Fees
          </h1>
          <p className="mb-4">
            Online registration opens on <span>November 1, 2025.</span>
          </p>

          <p className="mb-2 font-medium">The registration fee covers</p>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Tournament entry fee</li>
            <li>Tea breaks and lunch</li>
            <li>Customized souvenirs</li>
            <li>Raffle ticket for free registration </li>
          </ul>
          <div className="text-justify">
            <h1 className="text-xl font-bold mb-3 text-blue-900">
              Payment Options
            </h1>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>
                Make an online payment to NASAL - <br />
                <span className="italic">
                  We recommend that you notify the Local Organising Committee <br /> so
                  that we can mark you as paid.
                </span>
              </li>
              <li>
                Transfer the funds via wire transfer -
                <span className="italic">
                  Contact the <a href="mailto:asc-nasal@gmaiil.com" 
                  className="font-bold text-blue-800 hover:text-blue-600">Committee</a> <br />  for instructions and
                  recipient information.
                </span>
              </li>
            </ul>
          </div>
          <a href="#contact">
            <button className="bg-blue-900  rounded-lg p-4 text-yellow-400 font-bold text-lg">
              Register <FontAwesomeIcon icon={faArrowRightToBracket} />
            </button>
          </a>
        </div>

        <div className="md:w-1/2">
          {/* table div */}
          <div className="bg-blue-900 p-5 flex justify-center">
            <table className="  border border-black rounded overflow-hidden shadow-md ">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className=" px-4 py-3">Fee ($)</th>
                  <th className=" px-4 py-3">Event</th>
                  <th className=" px-4 py-3">Timeline</th>
                </tr>
              </thead>
              <tbody className="bg-white text-gray-800 ">
                {feeData.map((row, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-4 py-2">{row.fee}</td>
                    <td className="px-4 py-2">{row.event}</td>
                    <td className="px-4 py-2">{row.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* refund */}
          <div className="text-justify">
            <h1 id="refund" className="text-xl font-bold my-3 text-blue-900">
              Refund Policy
            </h1>
            <p className="space-x-2">
              Any overpayments will be refunded in cash (USD). This will be
              credited back to a bank account or handed over in cash at the
              venue of the championships.
            </p>
            <p className="space-x-2">
              To cancel your registration after you have registered, please
              email the organizing committee at
              cancellations@liberiascrabble.com
            </p>
          </div>
          <div
            className="space-x-2 bg-blue-700 p-3 text-white font-semibold
          rounded-md my-3 "
          >
            <p className="space-x-2  font-bold">
              65% refund will be made if is done 2 months before the event.
            </p>
            <p>All requests for cancellation are subject to a fee of $25.</p>
          </div>
        </div>
      </section>
      <section id="format" className="px-6 py-6 md:px-16 bg-gray-400">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
          Tournament Format
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {tourFormat.map((item, index) => (
            <div
              key={index}
              className="border-b-4 border-blue-900 p-4 ml-2 text-center "
            >
              <div className="text-xl font-semibold text-blue-900">
                {item.sub}{" "}
              </div>
              <div className="text-lg text-white mt-1">{item.format} </div>
            </div>
          ))}
        </div>
      </section>
      <section
        id="accommodation"
        className=" px-6 md:px-16 py-14 bg-gray-100"
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Accommodation Section */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
              Accommodation
            </h1>
            <p className="text-gray-700 mb-4">
              Players can book accommodation with any of our partner hotels:
            </p>

            <ul className="grid gap-4 max-w-md ">
              <li>
                <a
                  href="https://www.instagram.com/colonyhotelliberia/"
                  className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300 border border-gray-200 hover:bg-blue-950 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colony Hotel
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/alalagune.page/"
                  className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300 border border-gray-200 hover:bg-blue-950 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A'La Lagune
                </a>
              </li>
              <li>
                <a
                  href="https://www.booking.com/hotel/lr/scarlett-apartments.en-gb.html"
                  className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300 border border-gray-200 hover:bg-blue-950 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Scarlett Apartments
                </a>
              </li>
              <li>
                <a
                  href="https://www.booking.com/hotel/lr/scarlett-apartments.en-gb.html"
                  className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300 border border-gray-200 hover:bg-blue-950 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kings Hotel
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/marylandguesthouseliberia/"
                  className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300 border border-gray-200 hover:bg-blue-950 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MaryLand Guest House
                </a>
              </li>
            </ul>
          </div>

          {/* Visa and Travel Section */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">
              Visa and Travel
            </h1>
            <p className="text-gray-700">
              Information about visa application, airport pickup, and local
              transportation will be made available shortly. Please check back
              soon for updates.
            </p>
          </div>
        </div>
      </section>
      <section id="sponsorship" className="mt-14 px-6 md:px-16">
        <h1 className="text-3xl font-bold mb-14 text-center text-blue-900">
          Meet Our Sponsors
        </h1>
        {/* sponsors divs */}
        <div className="w-full overflow-hidden">
          <div className="scroll-slide gap-6">
            {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
              <img
                key={index}
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-32 h-32 border-2 border-blue-900 rounded-full mx-3 flex-shrink-0"
              />
            ))}
          </div>
        </div>{" "}
      </section>
      <section id="info"></section>
    </>
  );
}
