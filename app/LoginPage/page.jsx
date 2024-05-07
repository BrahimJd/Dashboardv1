const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        action=""
        className="flex flex-col items-center justify-center h-screen"
      >
        <h1 className="text-4xl font-semibold text-gray-700 mb-6">Login</h1>
        <div className="flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-2 border border-gray-300 rounded-md w-80"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-gray-300 rounded-md w-80"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md w-80">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
