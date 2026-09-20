import { profile } from "../../data/profile";
import type { ReactNode } from "react";

export default function ResumeLink({
  children = "Резюме PDF",
  download = false,
}: {
  children?: ReactNode;
  download?: boolean;
}) {
  return (
    <a
      className="quiet-link"
      href={profile.resumeUrl}
      download={download || undefined}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener"}
    >
      {children} <span aria-hidden="true">{download ? "↓" : "↗"}</span>
    </a>
  );
}
