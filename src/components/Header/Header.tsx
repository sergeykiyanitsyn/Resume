import "./Header.css";
export default function Header() {
  return (
    <header className="header wrap">
      <a className="brand" href="#home" aria-label="Сергей Кияницын — в начало">
        <span className="brand-symbol">
          sk<span>.</span>
        </span>
        <span className="brand-note">quality engineering</span>
      </a>
      <nav aria-label="Основная навигация">
        <a href="#experience">Опыт</a>
        <a href="#cases">Кейсы</a>
        <a className="nav-contact" href="#contact">
          На связи <span>↗</span>
        </a>
      </nav>
    </header>
  );
}
