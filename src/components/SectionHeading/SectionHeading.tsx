import type { ReactNode } from "react";

type Props = {
  id: string;
  number: string;
  label: string;
  children: ReactNode;
  intro?: ReactNode;
};
export default function SectionHeading({
  id,
  number,
  label,
  children,
  intro,
}: Props) {
  return (
    <div className="section-heading" data-reveal>
      <p className="eyebrow">
        <span className="accent">{number} /</span> {label}
      </p>
      <h2 id={id}>{children}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}
