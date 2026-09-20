import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Backend URL
  const API_URL = "http://localhost:5050/users";

  // Login / Signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (page === "login") {
        const response = await axios.post(`${API_URL}/login`, {
          username: email, // Backend username expect kar raha hai
          password: password,
        });

        alert(response.data.message || "Login Successful!");
        console.log("Login Response:", response.data);
      } else if (page === "signup") {
        const response = await axios.post(`${API_URL}/createusers`, {
          username: email, // Backend username expect kar raha hai
          password: password,
        });

        alert(response.data.message || "Account Created Successfully!");
        console.log("Signup Response:", response.data);

        setEmail("");
        setPassword("");
        setPage("login");
      }
    } catch (error) {
      console.log("Backend Error:", error);

      if (error.response) {
        alert(error.response.data.message || "Server error occurred");
      } else if (error.request) {
        alert("Backend server se connection nahi ho raha.");
      } else {
        alert("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  const goHome = () => {
    setPage("home");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <div className="brand-logo">◒</div>
          <span>MyApp</span>
        </div>
        <div className="tagline">
          Better Ideas <b>•</b> Brighter Future
        </div>
      </header>

      {page === "home" && (
        <div className="welcome-card">
          <div className="main-logo">
            <span>◆</span>
          </div>
          <h1>Welcome</h1>
          <p>
            Create an account or login to continue
            <br />
            to your account.
          </p>

          <button
            className="login-btn"
            onClick={() => {
              setPage("login");
              setEmail("");
              setPassword("");
            }}
          >
            Login <span>→</span>
          </button>

          <button
            className="signup-btn"
            onClick={() => {
              setPage("signup");
              setEmail("");
              setPassword("");
            }}
          >
            Create Account
          </button>
        </div>
      )}

      {page === "login" && (
        <div className="form-card">
          <button className="back" onClick={goHome}>
            ← Back
          </button>

          <div className="form-logo">🔐</div>
          <h1>Welcome Back</h1>
          <p className="subtitle">Login to your account to continue</p>

          <form onSubmit={handleSubmit}>
            <label>Username / Email</label>
            <div className="input-box">
              <span>✉</span>
              <input
                type="text"
                placeholder="Enter your   email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <label>Password</label>
            <div className="input-box">
              <span>🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>

            <div className="options">
              <label className="remember">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
              {!loading && <span>→</span>}
            </button>
          </form>

          <div className="or">
            <span></span>OR<span></span>
          </div>

          <button className="google-btn" type="button">
            <b>G</b> Continue with Google
          </button>

          <p className="switch">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => {
                setPage("signup");
                setEmail("");
                setPassword("");
              }}
            >
              Sign Up
            </button>
          </p>
        </div>
      )}

      {page === "signup" && (
        <div className="form-card">
          <button className="back" onClick={goHome}>
            ← Back
          </button>

          <div className="form-logo">👤</div>
          <h1>Create Account</h1>
          <p className="subtitle">Create your account to get started</p>

          <form onSubmit={handleSubmit}>
            <label>Username / Email</label>
            <div className="input-box">
              <span>👤</span>
              <input
                type="text"
                placeholder="Enter your username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <label>Password</label>
            <div className="input-box">
              <span>🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
              {!loading && <span>→</span>}
            </button>
          </form>

          <p className="switch">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => {
                setPage("login");
                setEmail("");
                setPassword("");
              }}
            >
              Login
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;