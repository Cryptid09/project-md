const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sign-In:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-light dark:bg-secondary-dark">
      <form
        onSubmit={handleSubmit}
        className="bg-primary-light dark:bg-primary-dark p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-6 text-center">
          Sign In
        </h2>
        <div className="mb-4">
          <label
            className="block text-text-light dark:text-text-dark mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-text-light dark:text-text-dark mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
