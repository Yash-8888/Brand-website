function LoginPage({ setShowLogin }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray bg-opacity-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80 space-y-4 relative">
        <button
          onClick={() => setShowLogin(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          ✖
        </button>
        <h2 className="text-xl font-bold text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={() => setShowLogin(false)}
          className="w-full bg-blue-500 text-white p-2 rounded mt-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
