import Link from "next/link";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

export default function ChallengePage() {
  return (
    <main className="screen challenge-screen">
      <Header showNav />

      <section className="challenge-main">
        <p className="eyebrow">ASSESSMENT</p>
        <h1>Bracket combinations</h1>
        <p>Generate all combinations of well-formed parentheses given n pairs.</p>

        <div className="challenge-layout">
          <article className="brief-card">
            <div className="brief-top">
              <span className="tag">Medium</span>
              <strong>100 pts</strong>
            </div>
            <h2>Assignment</h2>
            <p>
              Given n pairs of parentheses, write a function to generate all combinations of
              well-formed parentheses. Ensure your implementation handles edge cases and runs
              within acceptable time complexity limits.
            </p>
            <dl className="facts">
              <div>
                <dt>DURATION</dt>
                <dd>30 mins</dd>
              </div>
              <div>
                <dt>DIFFICULTY</dt>
                <dd>Medium</dd>
              </div>
            </dl>
          </article>

          <aside className="practice-card">
            <h2>Topics &amp; Concepts</h2>
            <p>This challenge assesses algorithmic recursion and state validation patterns.</p>
            <ul>
              <li>Depth-first search (DFS)</li>
              <li>Stack pattern</li>
              <li>Input validation</li>
            </ul>
          </aside>
        </div>
      </section>

      <footer className="workspace-footer">
        <p>Autosave is enabled continuously.</p>
        <span>30 minutes remaining</span>
        <Link href="/workspace">
          <Button>Start challenge</Button>
        </Link>
      </footer>
    </main>
  );
}
