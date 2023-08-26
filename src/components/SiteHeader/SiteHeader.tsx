import "./SiteHeader.scss";

export default function SiteHeader() {
  return (
    <header className="header">
      <a href="#">
        <img
          className="header__logo"
          src="/assets/images/logo.svg"
          alt="logo"
        />
      </a>
    </header>
  );
}

