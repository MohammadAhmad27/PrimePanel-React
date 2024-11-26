import "./navbar.scss";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <span>PrimePanel</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search-logo" />
        <img src="/app.svg" alt="app-logo" />
        <img src="/expand.svg" alt="expand-logo" />
        <div className="notification">
          <img src="/notifications.svg" alt="notifications-logo" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/Ahmad.jpeg" alt="profile" />
          <span>Ahmad</span>
        </div>
        <img src="/settings.svg" alt="settings-logo" />
      </div>
    </div>
  );
}
