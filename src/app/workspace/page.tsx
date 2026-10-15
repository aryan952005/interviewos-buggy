"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

const codeLines = [
  "function generateParenthesis(n: number): string[] {",
  "  const result: string[] = [];",
  "",
  "  function backtrack(current: string, open: number, close: number) {",
  "    if (current.length === n * 2) {",
  "      result.push(current);",
  "      return;",
  "    }",
  "    if (open < n) backtrack(current + '(', open + 1, close);",
  "    if (close < open) backtrack(current + ')', open, close + 1);",
  "  }",
  "",
  "  backtrack('', 0, 0);",
  "  return result;",
  "}",
];

export default function WorkspacePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="screen workspace-screen">
      <Header title="Bracket combinations" />

      <section className="workspace-grid">
        <aside className="problem-panel">
          <span className="tag">Medium</span>
          <h2>Problem description</h2>
          <p>
            Given n pairs of parentheses, write a function to generate all combinations of
            well-formed parentheses.
          </p>

          <div className="example-box">
            <p className="example-title">Example 1</p>
            <pre>{`Input: n = 3\nOutput: ["((()))","(()())","(())()","()(())","()()()"]`}</pre>
            <p className="example-title">Example 2</p>
            <pre>{`Input: n = 1\nOutput: ["()"]`}</pre>
          </div>

          <div className="checklist">
            <p className="checklist-title">Constraints &amp; Requirements</p>
            <ul>
              <li>1 &le; n &le; 8</li>
              <li>All generated parentheses must be well-formed</li>
              <li>Results can be returned in any valid order</li>
            </ul>
          </div>
        </aside>

        <section className="editor-panel">
          <div className="editor-toolbar">
            <span className="editor-lang">TypeScript</span>
            <span className="editor-saved-status">Saved</span>
          </div>
          <pre className="code-block">
            {codeLines.map((line, index) => (
              <span key={index}>
                <b>{index + 1}</b>
                <code>{line || " "}</code>
              </span>
            ))}
          </pre>
          <div className="editor-actions">
            <span>Cmd + Enter to run</span>
            <Button>Run code</Button>
          </div>
        </section>

        <aside className="output-panel">
          <h2>Test output</h2>
          <label>
            <span>INPUT (n)</span>
            <input defaultValue="3" />
          </label>
          <div className="output-log">
            <div className="test-case-row test-pass">
              <span className="test-badge pass">PASS</span>
              <span>Test 1 (n = 3) &rarr; 5 combinations</span>
            </div>
            <div className="test-case-row test-pass">
              <span className="test-badge pass">PASS</span>
              <span>Test 2 (n = 1) &rarr; 1 combination</span>
            </div>
          </div>
          <div className="result-strip">
            <div>
              <strong>STATUS</strong>
              <span>2/2 tests passing</span>
            </div>
            <span className="alert-icon check-icon">✓</span>
          </div>
        </aside>
      </section>

      <footer className="workspace-footer">
        <Link href="/challenge">Back to challenge</Link>
        <span>28:45 remaining</span>
        <Button onClick={() => setShowModal(true)}>Submit solution</Button>
      </footer>

      {showModal && (
        <>
          <div className="modal-backdrop" onClick={() => setShowModal(false)} />
          <section
            className="warning-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <header>
              <h2 id="modal-title">Integrity warning</h2>
              <span className="warning-count-chip">Warning 1 of 3</span>
            </header>
            <p>
              Full-screen focus is required during the assessment. Navigating away or switching
              windows has been recorded by the test proctor.
            </p>
            <div className="modal-actions">
              <Button variant="primary" onClick={() => setShowModal(false)}>
                Return to assessment
              </Button>
              <Button variant="ghost" onClick={() => setShowModal(false)}>
                Exit assessment
              </Button>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
