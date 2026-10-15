"use client";

import Link from "next/link";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

const modalOptions = [
  "Trap focus within the modal while open",
  "Disable keyboard navigation completely",
  "Use color alone to convey error states",
  "Hide form labels until hovered",
];

const booleanOptions = ["True", "False"];

export default function QuestionsPage() {
  return (
    <main className="screen questions-screen">
      <Header title="Senior Frontend Engineer assessment" />
      <section className="questions-layout">
        <article className="question-stack">
          <section className="question-card coding-task">
            <div>
              <p className="eyebrow">CODING TASK</p>
              <h2>Bracket combinations</h2>
              <p className="task-meta">30 mins · TypeScript</p>
            </div>
            <Link href="/challenge">
              <Button>Start challenge</Button>
            </Link>
          </section>

          <section className="question-card response-card">
            <div className="question-title">
              <span className="tag">1</span>
              <h2>Explain your approach to component-driven development and managing UI state.</h2>
            </div>
            <textarea
              placeholder="Describe your architecture decisions, state management strategies, and how you ensure reusable, maintainable components..."
              defaultValue=""
            />
          </section>

          <section className="question-card mcq-card">
            <div className="question-title">
              <span className="tag">2</span>
              <h2>Which behavior is essential for an accessible modal dialog?</h2>
            </div>
            <div className="mcq-options">
              {modalOptions.map((option, index) => (
                <label key={option} className="mcq-option">
                  <input type="radio" name="modal-accessible" defaultChecked={index === 0} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </section>

          <section className="question-card mcq-card">
            <div className="question-title">
              <span className="tag">3</span>
              <h2>
                Universal design means designing products to be usable by everyone, without need
                for adaptation.
              </h2>
            </div>
            <div className="mcq-options mcq-options-inline">
              {booleanOptions.map((option, index) => (
                <label key={option} className="mcq-option">
                  <input type="radio" name="universal-design" defaultChecked={index === 0} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </section>
        </article>

        <aside className="progress-rail">
          <p className="eyebrow">TIME REMAINING</p>
          <strong className="timer-display">01:28:45</strong>
          <h2>Progress</h2>
          <dl className="progress-list">
            <div>
              <dt>Coding challenge</dt>
              <dd className="status-chip status-pending">Not started</dd>
            </div>
            <div>
              <dt>Written responses</dt>
              <dd className="status-chip status-progress">0/2 answered</dd>
            </div>
            <div>
              <dt>Review &amp; submit</dt>
              <dd className="status-chip status-pending">Pending</dd>
            </div>
          </dl>
          <Button variant="primary" className="submit-btn">
            Submit assessment
          </Button>
        </aside>
      </section>
    </main>
  );
}
