import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import NavbarComponent from "../Components/header";
import Footer from "../Components/footer";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((p) => !p);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((p) => !p);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setSubmitting(true);
      // TODO: call signup API here
      console.log("Form submitted:", { name, email, password });
      // Reset
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError("Failed to create account. Try again.", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <NavbarComponent />
      <div className="mx-auto max-w-md">
        <div className="flex flex-col items-center justify-center min-h-screen text-white px-8 py-12">
          <div className="self-start">
            <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
            <p className="text-blue-600">
              Please enter your credentials to create an account.
            </p>
          </div>

          <form
            className="w-full max-w-md mt-8 "
            onSubmit={handleSubmit}
            noValidate
          >
            {error && (
              <div className="mb-4 text-sm text-red-500 bg-red-100/20 px-3 py-2 rounded">
                {error}
              </div>
            )}

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-white focus:outline-none focus:ring-blue-500"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-white focus:outline-none focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-white focus:outline-none focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-9 text-gray-500"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
              </button>
            </div>

            <div className="relative mt-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-white"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-white focus:outline-none focus:ring-blue-500"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-9 text-gray-500"
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
              >
                {showConfirmPassword ? <IoMdEye /> : <IoMdEyeOff />}
              </button>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-6 mb-4 px-4 py-2 bg-blue-600 disabled:opacity-60 hover:bg-blue-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              {submitting ? "Creating account..." : "Sign Up"}
            </button>
          </form>

          <div className="flex flex-col gap-4 w-full max-w-md">
            <div className="flex items-center justify-center gap-2">
              <div className="border border-white w-full" />
              <p className="text-sm">OR</p>
              <div className="border border-white w-full" />
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-blue-600 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              onClick={() => console.log("Google signup clicked")}
            >
              <FcGoogle />
              Continue with Google
            </button>

            <p className="text-sm">
              Do you have an account?
              <Link
                to="/sign-in"
                className="text-blue-500 ml-2 hover:underline"
              >
                Sign In.
              </Link>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SignUp;
