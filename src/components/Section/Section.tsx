import React from "react";
import style from "./Section.module.css";

interface SectionP{
  children: React.ReactNode
}

export default function Section({ children }: SectionP) {
  return <section className={style.section}>{children}</section>;
}
