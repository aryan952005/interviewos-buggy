import Link from "next/link";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

export default function WelcomePage() {
  return (
    <main className="screen welcome-screen">
      <Header title="Senior Frontend Engineer assessment" />

      <section className="welcome-content">
        <article className="welcome-card">
          <span className="tag">Candidate assessment</span>
          <h2>Senior Frontend Engineer Assessment</h2>
          <p className="lead">
            Welcome to the technical evaluation. Complete a coding challenge and several open-ended
            questions. Read each prompt carefully before submitting your final answers.
          </p>

          <dl className="metrics">
            <div>
              <dt>PARTS</dt>
              <dd>3 sections</dd>
            </div>
            <div>
              <dt>CODE</dt>
              <dd>1 challenge</dd>
            </div>
            <div>
              <dt>WRITING</dt>
              <dd>2 questions</dd>
            </div>
          </dl>

          <div className="card-footer">
            <p>Once you start, the timer cannot be paused. Make sure you have a stable connection.</p>
            <Link href="/questions">
              <Button>Start assessment</Button>
            </Link>
          </div>
        </article>

        <aside className="sidebar-note">
          <div>
            <p className="eyebrow">TIMEBOX</p>
            <strong>90 mins</strong>
            <p>Finish the coding section first, then proceed to the written responses.</p>
          </div>

          <div>
            <h3>Before you begin</h3>
            <ul>
              <li>External documentation is permitted</li>
              <li>Do not refresh or navigate away from the tab</li>
              <li>Your progress is saved automatically</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
