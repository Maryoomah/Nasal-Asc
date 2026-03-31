import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const dateDeets = [
  { date: "November 1, 2025", deet: "Registration commences" },
  { date: "September 21, 2026", deet: "Registration Closes" },
  { date: "October 18-20, 2026", deet: "Expected Arrival" },
  { date: "October 24, 2026", deet: "PANASA AGM" },
];

const feeData = [
  { fee: "150", event: "Main Event", timeline: "Early Registration" },
  {
    fee: "Additional 30",
    event: "Late Payment",
    timeline: "After Deadline",
  },
];

const tourFormat = [
  { sub: "Games", format: "32 rounds for main event" },
  { sub: "Divisions", format: "Two divisions. Qualified players can play up" },
  { sub: "Pairing System", format: "Swiss / Exagony / KOTH" },
  { sub: "Lexicon", format: "Collins Scrabble Words (CSW2024)" },
  { sub: "Challenge", format: "5-point penalty per word challenge" },
  { sub: "Software", format: "Tournament Scrabble Helper (TSH)" },
  { sub: "Ratings", format: "PANASA and WESPA ratings apply" },
];

const sponsors = [
  { id: 1, name: "Sponsor 1", logo: "/Nasal-Asc/Wespa.jpeg" },
  { id: 2, name: "Sponsor 2", logo: "/Nasal-Asc/Wespa.jpeg" },
  { id: 3, name: "Sponsor 3", logo: "/Nasal-Asc/Wespa.jpeg" },
  { id: 4, name: "Sponsor 4", logo: "/Nasal-Asc/Wespa.jpeg" },
];

export default function Details() {
  return (
    <>
      {/* IMPORTANT DATES + SCHEDULE */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-blue-950 to-blue-900 text-white flex flex-col md:flex-row gap-10">
        {/* Dates Timeline */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-8">Important Dates</h2>

          <div className="relative border-l-2 border-blue-300 pl-6 space-y-6">
            {dateDeets.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[24px] top-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></div>

                <p className="font-semibold text-lg">{item.date}</p>
                <p className="text-blue-200 text-sm">{item.deet}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Table */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-8">Tournament Schedule</h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Event</th>
                  <th className="px-4 py-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  ["Arrival of Players", "October 18–21, 2026"],
                  ["Opening Ceremony", "October 21, 2026"],
                  ["Main Event", "October 22–25, 2026"],
                  ["Closing Ceremony", "October 25, 2026"],
                ].map(([event, date], i) => (
                  <tr key={i} className="hover:bg-gray-100 transition">
                    <td className="px-4 py-3">{event}</td>
                    <td className="px-4 py-3">{date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition flex items-center gap-2">
            Full Schedule <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>
      </section>

      {/* REGISTRATION */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-white flex flex-col md:flex-row gap-10">
        {/* Left */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Registration & Fees
          </h2>

          <p className="mb-4">
            Online registration opens on <strong>November 1, 2025</strong>.
          </p>

          <ul className="list-disc ml-5 space-y-2 mb-6">
            <li>Tournament entry fee</li>
            <li>Tea breaks and lunch</li>
            <li>Customized souvenirs</li>
            <li>Raffle ticket</li>
          </ul>

          <Link to="/registration">
            <button className="bg-blue-900 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition flex items-center gap-2">
              Register <FontAwesomeIcon icon={faArrowRightToBracket} />
            </button>
          </Link>
        </div>

        {/* Right */}
        <div className="md:w-1/2 space-y-6">
          {/* Fee Card */}
          <div className="bg-white shadow-xl rounded-xl p-6">
            <table className="w-full">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-2">Fee ($)</th>
                  <th className="px-4 py-2">Event</th>
                  <th className="px-4 py-2">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {feeData.map((row, i) => (
                  <tr key={i} className="border-t hover:bg-gray-100">
                    <td className="px-4 py-2">{row.fee}</td>
                    <td className="px-4 py-2">{row.event}</td>
                    <td className="px-4 py-2">{row.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Refund */}
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Refund Policy
            </h3>
            <p className="text-gray-700 mb-2">
              Overpayments will be refunded in USD or bank transfer.
            </p>

            <div className="bg-blue-900 text-white p-4 rounded-lg">
              <p className="font-bold">
                65% refund if canceled 2 months before event.
              </p>
              <p>$25 cancellation fee applies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMAT */}
      <section className="py-16 px-6 md:px-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Tournament Format
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {tourFormat.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <h3 className="font-semibold text-blue-900 text-lg">
                {item.sub}
              </h3>
              <p className="text-gray-600 mt-2">{item.format}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACCOMMODATION */}
      <section className="py-16 px-6 md:px-16 bg-white flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Accommodation
          </h2>

          <div className="space-y-4">
            {[
              "Colony Hotel",
              "A'La Lagune",
              "Scarlett Apartments",
              "Kings Hotel",
              "MaryLand Guest House",
            ].map((hotel, i) => (
              <div
                key={i}
                className="p-4 bg-white border rounded-xl shadow hover:bg-blue-950 hover:text-white transition"
              >
                {hotel}
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Visa & Travel
          </h2>
          <p className="text-gray-700">
            Visa, airport pickup, and transport info coming soon.
          </p>
        </div>
      </section>

      <section id="sponsorship" className="mt-14 px-6 md:px-16">
        {" "}
        <h1 className="text-3xl font-bold mb-14 text-center text-blue-900">
          {" "}
          Meet Our Sponsors{" "}
        </h1>{" "}
        {/* sponsors divs */}{" "}
        <div className="w-full overflow-hidden">
          {" "}
          <div className="scroll-slide gap-6">
            {" "}
            {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
              <img
                key={index}
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-32 h-32 border-2 border-blue-900 rounded-full mx-3 flex-shrink-0"
              />
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </>
  );
}
