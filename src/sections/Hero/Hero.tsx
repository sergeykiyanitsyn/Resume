import ResumeLink from "../../components/ResumeLink/ResumeLink";
import { profile } from "../../data/profile";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy" data-reveal="group">
        <p className="eyebrow">
          <span className="dot" /> {profile.name} / QA Engineer
        </p>
        <h1 id="hero-title">
          В деталях —<br /> <em>качество.</em>
        </h1>
        <p className="hero-intro">
          Проверяю, как работает продукт.
          <br /> И что происходит за интерфейсом.
        </p>
        <p className="hero-description">
          Fullstack QA с фокусом на Python-автоматизацию.
          <br className="desktop-break" /> Web, Android, API и взаимодействие
          сервисов.
        </p>
        <div className="hero-actions">
          <a className="button" href="#experience">
            Мой опыт <span aria-hidden="true">↓</span>
          </a>
          <ResumeLink />
        </div>
      </div>
      <div className="hero-visual">
        <figure className="portrait">
          <img
            src={profile.portraitUrl}
            alt="Сергей Кияницын на городской террасе"
            width="500"
            height="374"
            fetchPriority="high"
          />
          <figcaption>
            <span>{profile.name}</span>
            <span>{profile.city}</span>
          </figcaption>
        </figure>
      </div>
      <div className="hero-bottom">
        <span>Python · Pytest · Selenium · Appium</span>
        <a href="#experience">Листайте дальше ↓</a>
      </div>
    </section>
  );
}
