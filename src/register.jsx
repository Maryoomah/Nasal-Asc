import React, { useState } from "react";

const PLAYER_FEE = 150;

const africanCountries = [
  "Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi",
  "Cabo Verde","Cameroon","Central African Republic","Chad","Comoros",
  "Congo","DR Congo","Djibouti","Egypt","Equatorial Guinea","Eritrea",
  "Eswatini","Ethiopia","Gabon","Gambia","Ghana","Guinea",
  "Guinea-Bissau","Ivory Coast","Kenya","Lesotho","Liberia","Libya",
  "Madagascar","Malawi","Mali","Mauritania","Mauritius","Morocco",
  "Mozambique","Namibia","Niger","Nigeria","Rwanda","Sao Tome & Principe",
  "Senegal","Seychelles","Sierra Leone","Somalia","South Africa",
  "South Sudan","Sudan","Tanzania","Togo","Tunisia","Uganda","Zambia","Zimbabwe"
];

export default function GameRegistration() {

  const [representative, setRepresentative] = useState({
    fullName: "",
    country: "",
    phone: "",
    email: "",
  });

  const [players, setPlayers] = useState([]);

  const handleRepChange = (e) => {
    const { name, value } = e.target;
    setRepresentative((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addPlayer = () => {
    setPlayers([...players, { name: "", rating: "" }]);
  };

  const removePlayer = (index) => {
    setPlayers(players.filter((_, i) => i !== index));
  };

  const handlePlayerChange = (index, field, value) => {
    const updated = [...players];
    updated[index][field] = value;
    setPlayers(updated);
  };

  const totalAmount = players.length * PLAYER_FEE;

  const validPlayers = players.filter(
    (p) => p.name.trim() !== "" && p.rating !== ""
  );

  const isSubmitDisabled = validPlayers.length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      representative,
      players: validPlayers,
      totalAmount,
    };

    console.log(formData);
    alert("Registration submitted! Check console.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1f3a] via-[#0f2a50] to-[#071226] flex items-center justify-center p-6">
      
      <div className="w-full max-w-2xl bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-[#0b1f3a] mb-8">
          Game Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Representative */}
          <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-4 text-gray-700">
              Representative Details
            </h3>

            <input
              name="fullName"
              placeholder="Full Name"
              value={representative.fullName}
              onChange={handleRepChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <select
              name="country"
              value={representative.country}
              onChange={handleRepChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Country</option>
              {africanCountries.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </select>

            <input
              name="phone"
              placeholder="Phone Number"
              value={representative.phone}
              onChange={handleRepChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={representative.email}
              onChange={handleRepChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Players */}
          <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-4 text-gray-700">
              Participants
            </h3>

            {players.map((player, index) => (
              <div key={index} className="flex gap-2 mb-3">
                
                <input
                  type="text"
                  placeholder={`Player ${index + 1} Name`}
                  value={player.name}
                  onChange={(e) =>
                    handlePlayerChange(index, "name", e.target.value)
                  }
                  className="flex-1 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <input
                  type="number"
                  placeholder="Rating"
                  value={player.rating}
                  onChange={(e) =>
                    handlePlayerChange(index, "rating", e.target.value)
                  }
                  className="w-28 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <button
                  type="button"
                  onClick={() => removePlayer(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 rounded-lg transition"
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addPlayer}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition shadow"
            >
              + Add Player
            </button>
          </div>

          {/* Amount */}
          <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-3 text-gray-700">
              Total Amount Payable
            </h3>
            <input
              value={`$${totalAmount}`}
              readOnly
              className="w-full border p-3 rounded-lg bg-gray-200 font-semibold text-center text-lg"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className={`w-full py-3 rounded-xl font-semibold text-white transition shadow-md
              ${isSubmitDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
              }`}
          >
            Submit Registration
          </button>

          {isSubmitDisabled && (
            <p className="text-sm text-red-500 text-center">
              Add at least one player with name and rating to continue.
            </p>
          )}

        </form>
      </div>
    </div>
  );
}