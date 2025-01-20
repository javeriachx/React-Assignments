// src/App.jsx
import { useState } from "react";
import "./index.css"; // Tailwind CSS
import "./App.css"; // Custom styles

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full card">
       
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Password Generator</h1>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="length">Password Length:</label>
          <input
            type="number"
            id="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
            min="4"
            max="20"
          />
        </div>
        <button
          onClick={generatePassword}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Generate Password
        </button>
        {password && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">Generated Password:</h2>
            <p className="bg-gray-100 border border-gray-300 rounded-lg p-2 text-center text-gray-700">{password}</p>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default App;