# InterviewOS Figma Matching Exercise — Implementation & Tracking Plan

**Target:** Make every route in the Next.js fixture app visually and behaviorally match the Figma design frames.
**Submission Deadline:** ~1 Hour

---

## Progress Overview

| Phase | Section / Route | Scope | Status | Verified |
|---|---|---|---|---|
| **Phase 1** | **Global Design Tokens & Layout** | Tokens (`:root`), font, button shapes, header top stripe, global base styles | ✅ Completed | [x] |
| **Phase 2** | **Authentication Screens** (5 routes) | `/auth/sign-in`<br>`/auth/create-account`<br>`/auth/forgot-password`<br>`/auth/reset-password`<br>`/auth/check-email` | ✅ Completed | [x] |
| **Phase 3** | **Background Check Dashboard** | `/background-check` (Talent operations & candidate verification) | ⏳ Pending | [ ] |
| **Phase 4** | **Candidate Assessment Welcome** | `/welcome` (Overview card, metadata stats, rules sidebar) | ⏳ Pending | [ ] |
| **Phase 5** | **Candidate Question List** | `/questions` (Coding card, written response, MCQs, progress rail) | ⏳ Pending | [ ] |
| **Phase 6** | **Candidate Challenge Overview** | `/challenge` (Challenge brief, facts, topic tags, footer) | ⏳ Pending | [ ] |
| **Phase 7** | **Candidate Coding Workspace & Modal** | `/workspace` (3-column layout, editor, output console, warning modal) | ⏳ Pending | [ ] |
| **Phase 8** | **Index & Final Polish** | `/` (Directory), responsive check, clean build verification | ⏳ Pending | [ ] |

---

## Detailed Task Checklist

### Phase 1: Global Design System & Shared Components
- [x] **Design Tokens (`src/app/styles.css`)**:
  - Replace cool blue palette with Figma warm editorial palette:
    - Background: `#F8F7F4` (warm ivory)
    - Primary button/accent: `#A2422C` (terracotta / rust)
    - Dark surfaces / panels: `#16281F` (deep forest green)
    - Soft tint / cards: `#FAF9F6` & `#FFFFFF`
    - Warm borders: `#E5E0D8`
    - Text ink: `#1C2024`
    - Muted ink: `#667085`
  - Radii adjustments:
    - Buttons: `6px` (replace `999px` pill)
    - Cards: `8px` – `12px` (replace heavy `26px`)
    - Inputs: `6px`
- [x] **Shared Header (`src/components/Header.tsx` & CSS)**:
  - Add top multicolor accent bar (forest green + terracotta stripe)
  - Align brand name "ABC Company" font weight and spacing
  - Update avatar shape and warm beige background
- [x] **Button Component (`src/components/Button.tsx`)**:
  - Crisp padding, font weight, hover states

---

### Phase 2: Authentication Flows (`/auth/*`)
- [x] **Shared Auth Shell (`src/components/AuthShell.tsx`)**:
  - Left panel: Deep forest green with subtle warm gradient, branding text, and accurate copy ("Design assessments, review candidates, and move candidates to hire in one place")
  - Right panel: Centered, clean input layout on warm background
- [x] **`/auth/sign-in`**:
  - Title: "Welcome back"
  - Subtitle: "Sign in to continue to your hiring workspace."
  - Fields: "WORK EMAIL", "PASSWORD"
  - Link: "Forgot your password?"
  - Button: "Sign in"
  - Footer: "Don't have an account? Create an account"
- [x] **`/auth/create-account`**:
  - Title: "Create your account"
  - Fields: "FULL NAME", "WORK EMAIL", "PASSWORD"
  - Password guidance: "Must be at least 8 characters with one number"
  - Button: "Create account"
  - Footer: "Already have an account? Sign in"
- [x] **`/auth/forgot-password`**:
  - Title: "Forgot your password?"
  - Subtitle: "Enter your work email and we'll send you a link to reset it."
  - Field: "WORK EMAIL"
  - Button: "Send reset link"
  - Footer: "Back to sign in"
- [x] **`/auth/reset-password`**:
  - Title: "Set a new password"
  - Fields: "NEW PASSWORD", "CONFIRM NEW PASSWORD"
  - Button: "Update password"
  - Footer: "Back to sign in"
- [x] **`/auth/check-email`**:
  - Mail icon asset
  - Title: "Check your email"
  - Subtitle with expiration notice
  - Resend and return links


---

### Phase 3: Background Check Dashboard (`/background-check`)
- [ ] **Sidebar Navigation**:
  - Dark forest green sidebar
  - Section "HIRING WORKSPACE": Dashboard, All Assessments, Background checks (active), Results, Question Bank
  - Profile chip at bottom: "Maya Chen", "Talent Lead", avatar "MC"
- [ ] **Header**:
  - "ABC Company | Talent operations" with avatar "DA"
- [ ] **Main Content**:
  - Heading: "Anjali Mehta"
  - Subtitle: "Background check · Selected from Senior Frontend Engineer assessment · Started 12 Aug"
  - Status card: "CHECK STATUS", "In progress" dropdown, "Send reminder" button
  - Candidate documents: "RELIEVING LETTER" ("Uploaded · 12 Aug 2026"), "PAYSLIPS" ("2 of 3 months uploaded"), "Upload docs" button
  - Employer verification table:
    - Columns: Employer, Status, Requested, Outcome, Reminder, Action
    - Exact 3 rows with status badges ("Awaiting reply", "Verified") and action links

---

### Phase 4: Candidate Assessment Welcome (`/welcome`)
- [ ] **Header**:
  - "ABC Company | Senior Frontend Engineer assessment"
- [ ] **Assessment Card**:
  - Tag: "Candidate assessment"
  - Heading: "Frontend Engineering Assessment"
  - Metrics: DURATION (90 mins), SECTIONS (3 sections), CODING (1 challenge), QUESTIONS (2 questions)
  - Footer message: Timer cannot be paused once started
  - Button: "Start assessment"
- [ ] **Sidebar**:
  - Timebox: 90 minutes
  - Instructions / Rules: Allowed languages (Python, JS, TS), no external libraries, plagiarism detection active

---

### Phase 5: Candidate Question List (`/questions`)
- [ ] **Coding Task Card**:
  - Title: "Coding Challenge: Bracket Matcher"
  - Duration & language metadata
  - "Start coding" button
- [ ] **Written Response Card**:
  - Tag "1", question prompt, formatted response area
- [ ] **Multiple Choice Card**:
  - Tag "2", accessible modal question, clean radio list with correct default state
- [ ] **Progress Rail**:
  - Timer: countdown display
  - Section checklist with status badges
  - "Submit assessment" button

---

### Phase 6: Candidate Challenge Overview (`/challenge`)
- [ ] **Header**: Challenges / Assessments navigation
- [ ] **Challenge Header**:
  - Eyebrow: "PRACTICE" / "ASSESSMENT"
  - Title: "Bracket combinations"
- [ ] **Brief Card**:
  - Tag: "Medium", points: "20 pts"
  - Assignment description matching exact algorithmic problem
  - Duration & difficulty metrics
- [ ] **Topics & Guidelines**:
  - Stack pattern, Depth-first search, Input validation
- [ ] **Footer**:
  - Status indicator, time limit, "Start challenge" action

---

### Phase 7: Candidate Coding Workspace & Modal (`/workspace`)
- [ ] **3-Column Workspace**:
  - Problem Panel: Problem description, sample cases, criteria checklist
  - Editor Panel: Dark forest green theme, language selector, line numbers, code editor body, shortcut hint, run action
  - Output Panel: Dark panel, test input field, console log output, test pass/fail status strip
- [ ] **Footer**:
  - Back link, timer remaining, submit button
- [ ] **Integrity Warning Modal**:
  - Centered dialog, exact title & warning badge, warning message, dual action buttons ("Keep coding" vs "Exit")

---

### Phase 8: Final Review & Shareable Summary
- [ ] Verify local dev server `npm run dev` at `http://localhost:3020`
- [ ] Check console for zero errors or TypeScript issues (`npm run lint`)
- [ ] Generate final summary document for you to share with your friend
