import { useState } from "react";

function SignUpPage({ setShowSignUp }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log("Sign-Up Details:", { username, email, password });
    alert("Signed Up Successfully!");
    setShowSignUp(false); // close popup after signup
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray bg-opacity-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80 space-y-4 relative">
        <button
          onClick={() => setShowSignUp(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          ✖
        </button>
        <h2 className="text-xl font-bold text-center">Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleSignUp}
          className="w-full bg-green-500 text-white p-2 rounded mt-2"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUpPage;
