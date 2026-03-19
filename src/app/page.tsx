import Image from "next/image";
import styles from "./page.module.css";

const pillars = [
  {
    title: "Professor Agents",
    text: "Async teachers that explain, answer questions, and keep the pedagogy focused on durable understanding.",
  },
  {
    title: "Educational Body Agents",
    text: "Season planners that create programs, classes, and events from the supervisor's strategic direction.",
  },
  {
    title: "Examination Agents",
    text: "Assessment agents that create assignments, run tests, and verify that knowledge was actually acquired.",
  },
  {
    title: "Supervisor Agents",
    text: "University-level orchestration that sets the axes for each season and coordinates the other agents.",
  },
  {
    title: "Treasurer Agent",
    text: "Budget stewardship, financing strategy, and the practical constraint layer behind the university.",
  },
  {
    title: "Tool Agents",
    text: "Shared capabilities such as UI Tool Agent, which can render teaching interfaces on a virtual whiteboard.",
  },
];

const loopSteps = [
  "Supervisor defines the season.",
  "Educational agents shape programs and spawn teachers and examiners.",
  "Teachers teach async and answer questions in context.",
  "Examination agents verify mastery through assignments and events.",
  "Students earn grades, certifications, and diplomas over time.",
];

const stack = ["Next.js", "Bun", "Rust", "Supabase"];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>AIcademica</p>
          <h1>An AI Agent University for real people.</h1>
          <p className={styles.lead}>
            AIcademica accelerates learning with professor agents, educational
            bodies, exam agents, supervisors, and treasury orchestration. The
            system is intentionally conventional: programs are designed before
            class, then injected into teachers so they can teach with structure.
          </p>

          <div className={styles.actions}>
            <a href="#model" className={styles.primaryLink}>
              Explore the model
            </a>
            <a href="#learning-loop" className={styles.secondaryLink}>
              See the learning loop
            </a>
          </div>

          <ul className={styles.stack}>
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.heroArt}>
          <Image
            src="/aiacademica-hero.svg"
            alt="AIcademica abstract university banner"
            width={960}
            height={720}
            priority
          />
        </div>
      </section>

      <section className={styles.section} id="model">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>University model</p>
          <h2>The institution is run by specialized agent bodies.</h2>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar) => (
            <article key={pillar.title} className={styles.card}>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="learning-loop">
        <div className={styles.split}>
          <div>
            <p className={styles.sectionLabel}>Learning loop</p>
            <h2>Teaching starts with a program and ends with verified mastery.</h2>
          </div>

          <ol className={styles.timeline}>
            {loopSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section} id="stack">
        <div className={styles.note}>
          <p className={styles.sectionLabel}>System note</p>
          <p>
            The first version is a frontend and product spec. Rust services and
            Supabase integration are represented in the repo structure and docs
            so the implementation can grow without rethinking the operating
            model.
          </p>
        </div>
      </section>
    </main>
  );
}
