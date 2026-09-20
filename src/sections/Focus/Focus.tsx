import "./Focus.css";
import ResumeLink from "../../components/ResumeLink/ResumeLink";

export default function Focus() {
  return (
    <section
      data-reveal
      className="section focus-section wrap"
      aria-labelledby="focus-title"
    >
      <div>
        <p className="eyebrow">
          <span className="accent">03 /</span> Профессиональный фокус
        </p>
        <h2 id="focus-title">
          Качество —<br /> командная <em>работа.</em>
        </h2>
      </div>
      <div className="focus-copy">
        <p>
          Мне интересно влиять на качество продукта, архитектуру автотестов и
          процессы команды.
        </p>
        <p className="muted">
          Провожу Code Review, менторил около 10 коллег и замещал QA Lead на
          время его отсутствия. Развиваю навыки в Playwright + TypeScript и
          backend-автоматизации.
        </p>
        <ResumeLink>Весь опыт и стек — в резюме</ResumeLink>
      </div>
    </section>
  );
}
