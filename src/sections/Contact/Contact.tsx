import "./Contact.css";
import ResumeLink from "../../components/ResumeLink/ResumeLink";
import { profile } from "../../data/profile";

export default function Contact() {
  return (
    <section
      className="contact-section wrap"
      id="contact"
      aria-labelledby="contact-title"
    >
      <p className="eyebrow" data-reveal>
        <span className="accent">04 /</span> Контакт
      </p>
      <div className="contact-grid">
        <div data-reveal="group">
          <h2 id="contact-title">
            Свяжитесь
            <br /> <em>со мной.</em>
          </h2>
          <p className="section-intro">
            Ищу роль Fullstack QA
            <br /> с сильным фокусом на автоматизацию.
          </p>
        </div>
        <div className="contact-links" data-reveal="group">
          <a
            className="telegram-link"
            href={profile.telegram}
            target="_blank"
            rel="noopener"
          >
            <span>
              <small>{profile.telegramHandle}</small>
              Написать в Telegram
            </span>
            <span className="telegram-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <a className="email-link" href={`mailto:${profile.email}`}>
            {profile.email} <span>↗</span>
          </a>
          <ResumeLink download>Скачать резюме</ResumeLink>
        </div>
      </div>
    </section>
  );
}
