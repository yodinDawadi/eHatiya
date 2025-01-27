import React, { useState } from "react";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <form className="space-y-4">
          {isSignUp && (
            <>
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
            </>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your Password"
              className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>
          {isSignUp && (
            <>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 text-yellow-500 bg-gray-700 rounded focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
                <label htmlFor="terms" className="ml-2 text-sm">
                  I accept the{" "}
                  <a
                    href="#"
                    className="text-yellow-500 hover:underline"
                  >
                    terms and conditions
                  </a>.
                </label>
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            className="text-yellow-500 font-medium hover:underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
