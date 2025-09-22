

function LoginPage() {

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Login</h2>
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
      <button className="w-full bg-blue-500 text-white p-2 rounded mt-2">
        Submit
      </button>
    </div>
  );
}

export default LoginPage;