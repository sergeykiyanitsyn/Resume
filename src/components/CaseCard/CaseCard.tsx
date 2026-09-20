import "./CaseCard.css";
import type { CaseStudy } from "../../data/cases";

export default function CaseCard({ item }: { item: CaseStudy }) {
  return (
    <details className="case" data-reveal>
      <summary>
        <span className="case-number">{item.label}</span>
        <span className="case-metric">{item.metric}</span>
        <span className="case-unit">{item.unit}</span>
        <span className="case-title">{item.title}</span>
        <span className="case-preview">
          {item.preview}
          {item.note && <span className="case-note">{item.note}</span>}
        </span>
        <span className="case-toggle">
          Подробнее <span aria-hidden="true">+</span>
        </span>
      </summary>
      <div className="case-body">
        {item.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </details>
  );
}
