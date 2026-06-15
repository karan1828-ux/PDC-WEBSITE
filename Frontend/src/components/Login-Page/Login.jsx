import { useState } from "react";
import "./Login.css";

// --- Inline SVGs (replacing lucide-react) ---

const UserIcon = (props) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const LockIcon = (props) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const KeyIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </svg>
);

const MailIcon = (props) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const AtSignIcon = (props) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
  </svg>
);

const ShieldCheckIcon = (props) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 11 11 13 15 9" />
  </svg>
);

const EyeIcon = (props) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = (props) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const SettingsIcon = (props) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const LightbulbIcon = (props) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="10" y1="22" x2="14" y2="22" />
  </svg>
);

const CloseIcon = (props) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const PDCLogo = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="28,8 12,40 44,40" fill="none" stroke="#b0b8c8" strokeWidth="2" />
    <polygon points="28,14 18,36 38,36" fill="none" stroke="#9aa0ac" strokeWidth="1.2" />
    <circle cx="28" cy="7" r="1.5" fill="#c5a059" />
    <circle cx="34" cy="5" r="1" fill="#c5a059" />
    <circle cx="31" cy="3" r="0.8" fill="#c5a059" />
    <line x1="32" y1="4" x2="34" y2="6" stroke="#c5a059" strokeWidth="0.6" />
    <line x1="28" y1="5.5" x2="31" y2="3.5" stroke="#c5a059" strokeWidth="0.6" />
  </svg>
);

// --- Component Helpers ---

const InputField = ({ icon: Icon, type = "text", placeholder, value, onChange, rightIcon, onRightIconClick }) => (
  <div className="input-field">
    <span className="input-field__icon">
      <Icon />
    </span>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-field__input"
    />
    {rightIcon && (
      <button
        type="button"
        onClick={onRightIconClick}
        className="input-field__toggle"
      >
        {rightIcon}
      </button>
    )}
  </div>
);

const Toast = ({ message, type }) => {
  if (!message) return null;
  return (
    <div className={`toast toast--${type}`}>
      {message}
    </div>
  );
};

// --- Panels ---

const LoginPanel = ({ onSwitch }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [remember, setRemember] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setToast({ message: "⚠ Please fill in all fields.", type: "error" });
    } else {
      setToast({ message: "✓ Welcome back! Logging you in…", type: "success" });
    }
  };

  return (
    <>
      <h1 className="auth-panel__title">Member Login</h1>
      <p className="auth-panel__subtitle">
        Continue your journey of self-discovery and growth.
      </p>

      <form onSubmit={handleSubmit}>
        <InputField
          icon={UserIcon}
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          icon={LockIcon}
          type={showPwd ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          rightIcon={showPwd ? <EyeIcon /> : <EyeOffIcon />}
          onRightIconClick={() => setShowPwd(!showPwd)}
        />

        <div className="auth-panel__actions">
          <label className="auth-panel__remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="auth-panel__checkbox"
            />
            Remember Me
          </label>
          <button type="button" className="auth-panel__forgot">
            Forgot Password?
          </button>
        </div>

        <button type="submit" className="auth-panel__submit-btn">
          <KeyIcon />
          Log In
        </button>
      </form>

      <Toast message={toast?.message} type={toast?.type} />

      <p className="auth-panel__switch-prompt">
        New to PDC?{" "}
        <button onClick={onSwitch} className="auth-panel__switch-btn">
          Register
        </button>{" "}
        and join our community.
      </p>
    </>
  );
};

// --- Comment: Register Page Panel for account creation ---
const RegisterPanel = ({ onSwitch }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !username || !password || !confirm) {
      setToast({ message: "⚠ Please fill in all fields.", type: "error" });
    } else if (password !== confirm) {
      setToast({ message: "⚠ Passwords do not match.", type: "error" });
    } else {
      setToast({ message: "✓ Account created! Welcome to PDC.", type: "success" });
    }
  };

  return (
    <>
      <h1 className="auth-panel__title">Create Account</h1>
      <p className="auth-panel__subtitle">
        Begin your journey of self-discovery and growth.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="auth-panel__row">
          <InputField
            icon={UserIcon}
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputField
            icon={UserIcon}
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <InputField
          icon={MailIcon}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          icon={AtSignIcon}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <p className="auth-panel__section-title">Secure your account</p>

        <InputField
          icon={LockIcon}
          type={showPwd ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          rightIcon={showPwd ? <EyeIcon /> : <EyeOffIcon />}
          onRightIconClick={() => setShowPwd(!showPwd)}
        />

        <InputField
          icon={ShieldCheckIcon}
          type={showConfirm ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          rightIcon={showConfirm ? <EyeIcon /> : <EyeOffIcon />}
          onRightIconClick={() => setShowConfirm(!showConfirm)}
        />

        <button type="submit" className="auth-panel__submit-btn">
          <UserIcon />
          Create Account
        </button>
      </form>

      <Toast message={toast?.message} type={toast?.type} />

      <p className="auth-panel__switch-prompt">
        Already a member?{" "}
        <button onClick={onSwitch} className="auth-panel__switch-btn">
          Log In
        </button>{" "}
        to your account.
      </p>
    </>
  );
};

// --- Main Container ---

export default function PDCAuth({ onClose }) {
  const [view, setView] = useState("login");

  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Top-left decorative lines */}
        <div className="auth-card__deco-top-left">
          <div className="auth-card__line-long" />
          <div className="auth-card__line-short" />
          <span className="auth-card__deco-char">+</span>
        </div>

        {/* Top-right decorative icons */}
        <div className="auth-card__deco-top-right">
          <span className="auth-card__deco-icon">
            <SettingsIcon />
          </span>
          <span className="auth-card__deco-icon">
            <LightbulbIcon />
          </span>
          {onClose && (
            <button
              type="button"
              className="auth-card__deco-icon"
              onClick={onClose}
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          )}
        </div>

        {/* Bottom-right decorative lines */}
        <div className="auth-card__deco-bottom-right">
          <span className="auth-card__deco-char">+</span>
          <div className="auth-card__line-short" />
          <div className="auth-card__line-long" />
        </div>

        {/* Logo */}
        <div className="auth-card__logo-container">
          <PDCLogo />
          <span className="auth-card__logo-title">PDC</span>
        </div>

        {/* Panels */}
        {view === "login" ? (
          <LoginPanel onSwitch={() => setView("register")} />
        ) : (
          <RegisterPanel onSwitch={() => setView("login")} />
        )}
      </div>
    </div>
  );
}