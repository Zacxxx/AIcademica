import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import styles from "./deck.module.css";

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
  title: "AIcademica Deck",
  description:
    "A 16:9 presentation deck for AIcademica, optimized for browser viewing and PDF export.",
};

const roles = [
  {
    title: "Professor Agents",
    text: "Teach async classes and keep explanations pedagogically grounded.",
  },
  {
    title: "Educational Body Agents",
    text: "Design programs, classes, and seasons before teaching begins.",
  },
  {
    title: "Examination Agents",
    text: "Create assignments and verify that mastery actually happened.",
  },
  {
    title: "Supervisor Agents",
    text: "Orchestrate the institution and set the operating axes.",
  },
  {
    title: "Treasurer Agent",
    text: "Keep the university funded and financially viable.",
  },
  {
    title: "Tool Agents",
    text: "Expose shared capabilities such as the UI Tool Agent whiteboard.",
  },
];

const loop = [
  "Season intent is set by the supervisor.",
  "Educational bodies create programs and spawn teachers.",
  "Programs are injected into professor agents before class.",
  "Teaching happens asynchronously with student questions.",
  "Assessment and events verify what was acquired.",
];

const stack = ["Next.js", "Bun", "Rust", "Supabase"];

const roadmap = [
  "Stage 1: identity, landing, and deck presentation.",
  "Stage 2: class management and agent orchestration.",
  "Stage 3: assessment, certification, and student tracking.",
];

export default function DeckPage() {
  return (
    <main className={`${styles.shell} ${inter.variable} ${cormorant.variable} ${mono.variable}`}>
      <header className={styles.topbar}>
        <div>
          <p className={styles.kicker}>AIcademica / Presentation Deck</p>
          <h1>AI Agent University for real people</h1>
        </div>

        <div className={styles.topbarActions}>
          <Link href="/" className={styles.textLink}>
            Home
          </Link>
          <a href="/deck/pdf" className={styles.button}>
            PDF
          </a>
        </div>
      </header>

      <div className={styles.stage}>
        <section className={`${styles.slide} ${styles.cover}`}>
          <div className={styles.orb} />
          <div className={styles.coverCopy}>
            <p className={styles.sectionLabel}>AIcademica</p>
            <h2>An AI Agent University for real people.</h2>
            <p className={styles.lead}>
              The university is organized like a real institution: programs are
              designed first, professors teach in async, examinations verify
              mastery, and supervision keeps the whole system aligned.
            </p>

            <div className={styles.pills}>
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <aside className={styles.coverPanel}>
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
            <div className={styles.panelFooter}>
              Programs before classes. Assessment before graduation.
            </div>
          </aside>
        </section>

        <section className={`${styles.slide} ${styles.gridSlide}`} id="roles">
          <div className={styles.slideHeading}>
            <p className={styles.sectionLabel}>The Faculty</p>
            <h3>Specialized agents do distinct work.</h3>
          </div>

          <div className={styles.cardGrid}>
            {roles.map((role, index) => (
              <article key={role.title} className={styles.card} style={{ animationDelay: `${index * 80}ms` }}>
                <div className={styles.cardIndex}>0{index + 1}</div>
                <h4>{role.title}</h4>
                <p>{role.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.slide} ${styles.splitSlide}`} id="loop">
          <div className={styles.slideHeading}>
            <p className={styles.sectionLabel}>Learning Loop</p>
            <h3>Teaching starts with a program and ends with verified mastery.</h3>
          </div>

          <div className={styles.timelineWrap}>
            <ol className={styles.timeline}>
              {loop.map((step, index) => (
                <li key={step} className={styles.timelineItem}>
                  <span>{`0${index + 1}`}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>

            <div className={styles.sideNote}>
              <p className={styles.noteLabel}>Pedagogical rule</p>
              <p>
                The teacher agent receives a pre-built program, then uses that
                structure to explain, respond, and guide students toward
                mastery.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.slide} ${styles.splitSlide}`} id="assessment">
          <div className={styles.slideHeading}>
            <p className={styles.sectionLabel}>Assessment</p>
            <h3>Examination agents verify that knowledge was actually acquired.</h3>
          </div>

          <div className={styles.assessmentGrid}>
            <div className={styles.assessmentCard}>
              <h4>Verification</h4>
              <p>Assignments, tests, and IRL events provide measurable proof.</p>
            </div>
            <div className={styles.assessmentCard}>
              <h4>Certification</h4>
              <p>Grades turn into certifications and ultimately diploma paths.</p>
            </div>
            <div className={styles.assessmentCard}>
              <h4>Supervisor control</h4>
              <p>Seasonal axes keep the institution coordinated and legible.</p>
            </div>
            <div className={styles.assessmentCard}>
              <h4>Treasury</h4>
              <p>Budget stewardship makes the institution sustainable.</p>
            </div>
          </div>
        </section>

        <section className={`${styles.slide} ${styles.stackSlide}`} id="stack">
          <div className={styles.slideHeading}>
            <p className={styles.sectionLabel}>Stack</p>
            <h3>Frontend first, with services ready to follow.</h3>
          </div>

          <div className={styles.stackLayout}>
            <div className={styles.stackCard}>
              {stack.map((item) => (
                <div key={item} className={styles.stackItem}>
                  {item}
                </div>
              ))}
            </div>

            <div className={styles.stackNarrative}>
              <p>
                Next.js powers the interface. Bun keeps the local loop fast.
                Rust services will orchestrate the core workflows. Supabase will
                handle auth and data infrastructure.
              </p>
              <p>
                The result is a system that can grow from presentation shell to
                actual university operations without changing the model.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.slide} ${styles.closeSlide}`} id="roadmap">
          <div className={styles.slideHeading}>
            <p className={styles.sectionLabel}>Direction</p>
            <h3>Build the university in layers.</h3>
          </div>

          <div className={styles.roadmap}>
            {roadmap.map((item) => (
              <div key={item} className={styles.roadmapItem}>
                {item}
              </div>
            ))}
          </div>

          <div className={styles.closingLine}>
            AIcademica is not just an assistant. It is an operating model for
            learning.
          </div>
        </section>
      </div>
    </main>
  );
}
