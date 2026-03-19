import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import styles from "./pdf.module.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "AIcademica PDF Deck",
  description: "Print-friendly 16:9 export for the AIcademica presentation deck.",
};

const slides = [
  {
    label: "AIcademica",
    title: "An AI Agent University for real people.",
    lead:
      "AIcademica accelerates learning with professor agents, educational bodies, exam agents, supervisors, and treasury orchestration.",
    chips: ["Next.js", "Bun", "Rust", "Supabase"],
  },
  {
    label: "The Faculty",
    title: "Specialized agents do distinct work.",
    cards: [
      ["Professor Agents", "Teach async classes and keep explanations pedagogically grounded."],
      ["Educational Body Agents", "Design programs, classes, and seasons before teaching begins."],
      ["Examination Agents", "Create assignments and verify that mastery actually happened."],
      ["Supervisor Agents", "Orchestrate the institution and set the operating axes."],
      ["Treasurer Agent", "Keep the university funded and financially viable."],
      ["Tool Agents", "Expose shared capabilities such as the UI Tool Agent whiteboard."],
    ],
  },
  {
    label: "Learning Loop",
    title: "Teaching starts with a program and ends with verified mastery.",
    items: [
      "Season intent is set by the supervisor.",
      "Educational bodies create programs and spawn teachers.",
      "Programs are injected into professor agents before class.",
      "Teaching happens asynchronously with student questions.",
      "Assessment and events verify what was acquired.",
    ],
  },
  {
    label: "Assessment",
    title: "Examination agents verify that knowledge was actually acquired.",
    cards: [
      ["Verification", "Assignments, tests, and IRL events provide measurable proof."],
      ["Certification", "Grades turn into certifications and ultimately diploma paths."],
      ["Supervisor control", "Seasonal axes keep the institution coordinated and legible."],
      ["Treasury", "Budget stewardship makes the institution sustainable."],
    ],
  },
  {
    label: "Stack",
    title: "Frontend first, with services ready to follow.",
    body:
      "Next.js powers the interface. Bun keeps the local loop fast. Rust services will orchestrate the core workflows. Supabase will handle auth and data infrastructure.",
    chips: ["Frontend", "Runtime", "Services", "Auth"],
  },
  {
    label: "Direction",
    title: "Build the university in layers.",
    items: [
      "Stage 1: identity, landing, and deck presentation.",
      "Stage 2: class management and agent orchestration.",
      "Stage 3: assessment, certification, and student tracking.",
    ],
  },
];

export default function PdfDeckPage() {
  return (
    <main className={`${styles.shell} ${inter.variable} ${cormorant.variable} ${mono.variable}`}>
      {slides.map((slide, index) => (
        <section key={slide.label} className={styles.slide}>
          <div className={styles.header}>
            <p className={styles.kicker}>AIcademica / PDF Deck</p>
            <p className={styles.pageIndex}>{`0${index + 1}`}</p>
          </div>

          <div className={styles.content}>
            <div className={styles.copy}>
              <p className={styles.sectionLabel}>{slide.label}</p>
              <h1>{slide.title}</h1>
              {"lead" in slide && slide.lead ? <p className={styles.lead}>{slide.lead}</p> : null}
              {"body" in slide && slide.body ? <p className={styles.body}>{slide.body}</p> : null}

              {"chips" in slide && slide.chips ? (
                <div className={styles.chips}>
                  {slide.chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              ) : null}

              {"items" in slide && slide.items ? (
                <ol className={styles.items}>
                  {slide.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              ) : null}
            </div>

            {"cards" in slide && slide.cards ? (
              <div className={styles.cardGrid}>
                {slide.cards.map(([title, text]) => (
                  <article key={title} className={styles.card}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            ) : (
              <aside className={styles.panel}>
                <div className={styles.panelHeader}>
                  <span>Institution Snapshot</span>
                  <span>2026</span>
                </div>
                <div className={styles.metric}>
                  <strong>5</strong>
                  <span>Agent families</span>
                </div>
                <div className={styles.metric}>
                  <strong>1</strong>
                  <span>Learning loop</span>
                </div>
                <div className={styles.metric}>
                  <strong>3</strong>
                  <span>Core outcomes: grades, certifications, diplomas</span>
                </div>
                <div className={styles.panelFooter}>Programs before classes. Assessment before graduation.</div>
              </aside>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
