import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [Length, setLength] = useState(8);
  const [password, setPassword] = useState('');
  const [NumbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  function passwordGenerator() {
    let str = 'ABCDEFGHIJKLMNOPQSTUVWXYZ';
    let pass = '';
    if (NumbersAllowed) str += '1234567890';
    if (charAllowed) str += '@#$%&<>!';
    let char;
    for (let i = 1; i <= Length; i++) {
      char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }

  useEffect(() => {
    passwordGenerator();
  }, [Length, NumbersAllowed, charAllowed]);

  function CopyPassword() {
    window.navigator.clipboard.writeText(password);
    alert('Password copied to clipboard');
  }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-auto">
        <h1 className="text-2xl font-bold text-center mb-6 text-orange-500">Password Generator</h1>
        <div className="flex items-center bg-gray-200 p-4 rounded-lg mb-4">
          <input
            type="text"
            className="bg-black  h-12 rounded-lg text-xl px-3 focus:outline-none w-[380px]"
            readOnly
            value={password}
          />
          <button
            className="ml-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            onClick={CopyPassword}
          >
            Copy
          </button>
        </div>
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="length" className="mr-4 font-medium text-gray-700">
            Length: {Length}
          </label>
          <input
            id="length"
            type="range"
            min={8}
            max={80}
            value={Length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="numbers" className="font-medium text-gray-700">
            Include Numbers
          </label>
          <input
            id="numbers"
            type="checkbox"
            checked={NumbersAllowed}
            onChange={() => setNumbersAllowed(!NumbersAllowed)}
            className="form-checkbox h-5 w-5 text-orange-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="characters" className="font-medium text-gray-700">
            Include Characters
          </label>
          <input
            id="characters"
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed(!charAllowed)}
            className="form-checkbox h-5 w-5 text-orange-500"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
