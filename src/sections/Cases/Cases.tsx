import "./Cases.css";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import CaseCard from "../../components/CaseCard/CaseCard";
import { cases } from "../../data/cases";

export default function Cases() {
  return (
    <section
      className="section cases-section wrap"
      id="cases"
      aria-labelledby="cases-title"
    >
      <SectionHeading
        id="cases-title"
        number="02"
        label="Из практики · Вайт Код"
        intro="Три примера того, как я работаю."
      >
        Проверять.
        <br /> Разбираться. <em>Упрощать.</em>
      </SectionHeading>
      <div className="cases">
        {cases.map((item) => (
          <CaseCard key={item.id} item={item} />
        ))}
      </div>
      <p className="cases-footnote">
        * Оценка времени подготовки документации для типовой фичи.
      </p>
    </section>
  );
}
