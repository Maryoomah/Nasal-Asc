// InfoSection.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faClipboardList,
  faUserPlus,
  faBullseye,
  faMoneyBillWave,
  faHotel,
  faPlane,
  faHandshake,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

const infoItems = [
  {
    title: "Important Dates",
    summary: "Deadlines for registration, arrival, and the tournament kickoff.",
    icon: faCalendarDays, 
    link: "#dates",
  },
  {
    title: "Schedules",
    summary: "Daily fixtures and official events at a glance.",
    icon: faClipboardList,
    link: "#schedules",
  },
  {
    title: "Registration",
    summary: "How to sign up, payment options, and deadlines.",
    icon: faUserPlus,
    link: "#registration",
  },
  {
    title: "Tournament Format",
    summary: "Gameplay rules and competition format explained.",
    icon: faBullseye,
    link: "#format",
  },
  {
    title: "Refund Policy",
    summary: "Conditions for cancellation and getting your money back.",
    icon:  faMoneyBillWave,
    link: "#refund",
  },
  {
    title: "Accommodation",
    summary: "Official hotels and special deals for players.",
    icon: faHotel,
    link: "#accommodation",
  },
  {
    title: "Travel Information",
    summary: "How to reach the venue, visa, airport help.",
    icon: faPlane,
    link: "#travel",
  },
  {
    title: "Sponsorship",
    summary: "Partner with us and showcase your brand.",
    icon: faHandshake,
    link: "#sponsorship",
  },
  {
    title: "Other Info",
    summary: "FAQs, local tips, and extra guidance.",
    icon: faInfoCircle,
    link: "#info",
  },
];

export default function InfoSection() {
  return (
    <section className="py-16 bg-white" id="info-section">
      <div className="max-w-6xl mx-auto px-4">
      

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className="block bg-gray-50 rounded-lg p-6 shadow hover:shadow-md hover:bg-blue-50 transition"
            >
              <FontAwesomeIcon icon={item.icon} className="text-blue-900 text-3xl mb-3" />

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
