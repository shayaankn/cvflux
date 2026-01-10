import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy login — no validation needed
    navigate("/board");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-100 px-2">
      <div className="w-full max-w-md bg-stone-50 border border-stone-300 rounded-md">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-stone-800 mb-1">
            Welcome back
          </h1>
          <p className="text-stone-600 text-sm mb-6">
            Log in to your job application tracker
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-stone-800 font-medium">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm text-stone-800 border border-stone-200 hover:border-stone-300 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200 rounded-md w-full px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block text-sm text-stone-800 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="password123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-sm text-stone-800 border border-stone-200 hover:border-stone-300 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200 rounded-md w-full px-3 py-2 mt-1"
              />
            </div>

            <button
              type="submit"
              className="text-sm bg-stone-950 hover:bg-stone-900 text-stone-50 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-stone-200 w-full px-4 py-2"
            >
              Log in
            </button>
          </form>

          <div className="text-sm text-stone-800 bg-stone-100 border border-stone-200 rounded-md p-4 mt-6">
            <div className="flex items-center gap-3">
              <i className="bi bi-info-circle-fill text-lg"></i>

              <p>
                This is a demo login page.{" "}
                <span className="font-medium">
                  Any email and password will work
                </span>{" "}
                — no real account needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
