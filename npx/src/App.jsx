import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(page === "login" ? "Login Successful!" : "Account Created!");
  };

  return (
    <div className="page">

      {/* HEADER */}
      <header className="header">
        <div className="brand">
          <div className="brand-logo">◒</div>
          <span>MyApp</span>
        </div>

        <div className="tagline">
          Better Ideas <b>•</b> Brighter Future
        </div>
      </header>

      {/* HOME */}
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
            onClick={() => setPage("login")}
          >
            Login <span>→</span>
          </button>

          <button
            className="signup-btn"
            onClick={() => setPage("signup")}
          >
            Create Account
          </button>

        </div>
      )}

      {/* LOGIN */}
      {page === "login" && (
        <div className="form-card">

          <button
            className="back"
            onClick={() => setPage("home")}
          >
            ← Back
          </button>

          <div className="form-logo">🔐</div>

          <h1>Welcome Back</h1>

          <p className="subtitle">
            Login to your account to continue
          </p>

          <form onSubmit={handleSubmit}>

            <label>Email Address</label>

            <div className="input-box">
              <span>✉</span>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <label>Password</label>

            <div className="input-box">
              <span>🔒</span>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />

              <button
                type="button"
                className="eye"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>

            <div className="options">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#">Forgot Password?</a>
            </div>

            <button className="login-btn" type="submit">
              Login <span>→</span>
            </button>

          </form>

          <div className="or">
            <span></span>
            OR
            <span></span>
          </div>

          <button className="google-btn">
            <b>G</b> Continue with Google
          </button>

          <p className="switch">
            Don't have an account?
            <button onClick={() => setPage("signup")}>
              Sign Up
            </button>
          </p>

        </div>
      )}

      {/* SIGN UP */}
      {page === "signup" && (
        <div className="form-card">

          <button
            className="back"
            onClick={() => setPage("home")}
          >
            ← Back
          </button>

          <div className="form-logo">👤</div>

          <h1>Create Account</h1>

          <p className="subtitle">
            Create your account to get started
          </p>

          <form onSubmit={handleSubmit}>

            <label>Full Name</label>

            <div className="input-box">
              <span>👤</span>

              <input
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <label>Email Address</label>

            <div className="input-box">
              <span>✉</span>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <label>Password</label>

            <div className="input-box">
              <span>🔒</span>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                required
              />

              <button
                type="button"
                className="eye"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>

            <button className="login-btn" type="submit">
              Create Account <span>→</span>
            </button>

          </form>

          <p className="switch">
            Already have an account?
            <button onClick={() => setPage("login")}>
              Login
            </button>
          </p>

        </div>
      )}

    </div>
  );
}

export default App;