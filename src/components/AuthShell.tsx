"use client";

import Link from "next/link";
import { Button } from "./Button";

type AuthShellProps = {
  mode: "sign-in" | "create-account" | "forgot-password" | "reset-password" | "check-email";
};

export function AuthShell({ mode }: AuthShellProps) {
  return (
    <main className="auth-screen">
      <aside className="auth-visual">
        <div className="auth-brand">
          <span className="auth-logo-text">ABC Company</span>
          <span className="auth-workspace-tag">HIRING, WITHOUT THE BUSYWORK</span>
        </div>
        <div className="auth-visual-footer">
          <p className="auth-hero-text">
            Design assessments, review candidates, and move confidently from screening to hire.
          </p>
          <p className="auth-subtext">
            Structured assessments &nbsp;•&nbsp; Fair evaluation &nbsp;•&nbsp; Faster decisions
          </p>
        </div>
      </aside>

      <section className={`auth-panel auth-${mode}`}>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          {mode === "sign-in" && (
            <>
              <h1>Welcome back</h1>
              <p className="auth-subtitle">Sign in to continue to your hiring workspace.</p>

              <label>
                <span>WORK EMAIL</span>
                <input type="email" placeholder="name@company.com" defaultValue="name@company.com" />
              </label>

              <label>
                <div className="auth-label-row">
                  <span>PASSWORD</span>
                  <Link href="/auth/forgot-password" className="auth-forgot-link">
                    Forgot your password?
                  </Link>
                </div>
                <input type="password" placeholder="Enter your password" />
              </label>

              <Button type="submit">Sign in</Button>

              <p className="auth-footer-text">
                Don&apos;t have an account? <Link href="/auth/create-account">Create an account</Link>
              </p>
            </>
          )}

          {mode === "create-account" && (
            <>
              <h1>Create your account</h1>
              <p className="auth-subtitle">Set up your workspace to start hiring candidates.</p>

              <label>
                <span>FULL NAME</span>
                <input type="text" placeholder="Your name" />
              </label>

              <label>
                <span>WORK EMAIL</span>
                <input type="email" placeholder="name@company.com" />
              </label>

              <label>
                <span>PASSWORD</span>
                <input type="password" placeholder="Choose a password" />
              </label>
              <p className="auth-helper-text">Must be at least 8 characters with one number</p>

              <Button type="submit">Create account</Button>

              <p className="auth-footer-text">
                Already have an account? <Link href="/auth/sign-in">Sign in</Link>
              </p>
            </>
          )}

          {mode === "forgot-password" && (
            <>
              <h1>Forgot your password?</h1>
              <p className="auth-subtitle">
                Enter your work email and we&apos;ll send you a link to reset it.
              </p>

              <label>
                <span>WORK EMAIL</span>
                <input type="email" placeholder="name@company.com" />
              </label>

              <Button type="submit">Send reset link</Button>

              <p className="auth-footer-text">
                <Link href="/auth/sign-in">Back to sign in</Link>
              </p>
            </>
          )}

          {mode === "reset-password" && (
            <>
              <h1>Set a new password</h1>
              <p className="auth-subtitle">
                Create a password that hasn&apos;t been used for this workspace before.
              </p>

              <label>
                <span>NEW PASSWORD</span>
                <input type="password" placeholder="Enter enter password" />
              </label>

              <label>
                <span>CONFIRM NEW PASSWORD</span>
                <input type="password" placeholder="Retype your new password" />
              </label>
              <p className="auth-helper-text">Must be at least 8 characters with one number</p>

              <Button type="submit">Update password</Button>

              <p className="auth-footer-text">
                <Link href="/auth/sign-in">Back to sign in</Link>
              </p>
            </>
          )}

          {mode === "check-email" && (
            <div className="auth-check-email-content">
              <div className="auth-email-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h1>Check your email</h1>
              <p className="auth-subtitle">
                We sent a password reset link to name@company.com. The link expires in 24 hours.
              </p>

              <Button type="submit">Resend email</Button>

              <p className="auth-footer-text">
                <Link href="/auth/sign-in">Back to sign in</Link>
              </p>
            </div>
          )}
        </form>
      </section>
    </main>
  );
}
