import { experience, type ExperienceEntry } from "../../data/experience";
import "./Experience.css";

function TimelineEntry({ entry }: { entry: ExperienceEntry }) {
  const isCurrent = !entry.endDate;

  return (
    <li
      className={`experience-timeline__item${isCurrent ? " experience-timeline__item--current" : ""}`}
    >
      <span className="experience-timeline__marker" aria-hidden="true" />
      <article
        className="experience-entry"
        aria-labelledby={`${entry.id}-title`}
        data-reveal="group"
      >
        <div className="experience-entry__meta">
          <p className="experience-entry__period">
            <time dateTime={entry.startDate}>
              {entry.period.split(" — ")[0]}
            </time>
            {" — "}
            {entry.endDate ? (
              <time dateTime={entry.endDate}>
                {entry.period.split(" — ")[1]}
              </time>
            ) : (
              "сейчас"
            )}
          </p>
          {isCurrent && (
            <span className="experience-entry__current">Сейчас здесь</span>
          )}
          <h3 id={`${entry.id}-title`}>{entry.company}</h3>
          <p className="experience-entry__role">{entry.role}</p>
          {entry.focus && (
            <p className="experience-entry__focus">{entry.focus}</p>
          )}
        </div>
        <div className="experience-entry__content">
          <p className="experience-entry__product">{entry.product}</p>
          <ul className="experience-entry__highlights">
            {entry.highlights.map((highlight) => (
              <li key={highlight.title}>
                <strong>{highlight.title}</strong> {highlight.description}
              </li>
            ))}
          </ul>
          <ul
            className="experience-entry__technologies"
            aria-label="Основные технологии"
          >
            {entry.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </article>
    </li>
  );
}

export default function Experience() {
  return (
    <section
      className="section wrap experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-heading" data-reveal="group">
        <p className="eyebrow">
          <span className="accent">01 /</span> Опыт
        </p>
        <h2 id="experience-title">
          Продукты разные.
          <br /> Внимание к деталям — <em>то же.</em>
        </h2>
        <p className="section-intro">
          От расследований в рекламной платформе
          <br /> до автоматизации кроссплатформенных продуктов.
        </p>
      </div>
      <ol
        className="experience-timeline"
        aria-label="Опыт работы, начиная с текущего места"
      >
        {experience.map((entry) => (
          <TimelineEntry key={entry.id} entry={entry} />
        ))}
      </ol>
    </section>
  );
}
