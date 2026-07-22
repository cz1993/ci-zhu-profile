"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  academicThroughline,
  aiEngineering,
  aiPrinciples,
  audienceModes,
  caseStudies,
  currentQuests,
  education,
  experience,
  notes,
  profile,
  proof,
  skillGroups,
} from "@/content/site";

type Audience = keyof typeof audienceModes;

export function ProfileShell() {
  const [audience, setAudience] = useState<Audience>("recruiter");
  const [activeCase, setActiveCase] = useState(caseStudies[0].id);
  const [menuOpen, setMenuOpen] = useState(false);
  const mode = audienceModes[audience];
  const selectedCase = caseStudies.find((item) => item.id === activeCase) ?? caseStudies[0];

  useEffect(() => {
    document.documentElement.dataset.audience = audience;
  }, [audience]);

  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Ci Zhu, back to top">
          <span className="brand-mark">CZ</span>
          <span className="brand-copy"><strong>CI ZHU</strong><small>DATA + AI OPERATOR</small></span>
        </a>
        <button className="menu-toggle" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>WORK</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>EXPERIENCE</a>
          <a href="#ai-engineering" onClick={() => setMenuOpen(false)}>AI ENGINEERING</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>EDUCATION</a>
          <a href="#now" onClick={() => setMenuOpen(false)}>NOW</a>
          <Link href="/notes" onClick={() => setMenuOpen(false)}>NOTES</Link>
          <a className="nav-connect" href={profile.links.linkedin} target="_blank" rel="noreferrer">CONNECT ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker"><span className="live-dot" /> BASED IN {profile.location.toUpperCase()} <span>•</span> SYSTEM ONLINE</p>
            <div className="display-wrap">
              <span className="display-index">00</span>
              <h1>BUILD SYSTEMS.<br /><em>SHIP INTELLIGENCE.</em></h1>
            </div>
            <p className="hero-lede">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">EXPLORE THE WORK <span>↘</span></a>
              <a className="button button-ghost" href={profile.links.github} target="_blank" rel="noreferrer">VIEW SOURCE ↗</a>
            </div>
          </div>

          <aside className="mode-console" aria-label="Choose how to view Ci Zhu's profile">
            <div className="console-header"><span>SELECT SIGNAL</span><span>VIEW / 03</span></div>
            <div className="mode-tabs" role="tablist" aria-label="Audience mode">
              {(Object.keys(audienceModes) as Audience[]).map((key) => (
                <button
                  key={key}
                  className={audience === key ? "active" : ""}
                  onClick={() => setAudience(key)}
                  role="tab"
                  aria-selected={audience === key}
                >
                  {audienceModes[key].label}
                </button>
              ))}
            </div>
            <div className="mode-screen" role="tabpanel">
              <p className="screen-label">{mode.eyebrow}</p>
              <h2>{mode.headline}</h2>
              <p>{mode.description}</p>
              <span className="scanline" aria-hidden="true" />
            </div>
            <div className="console-footer"><span>PROFILE: {audience.toUpperCase()}</span><span>READY ●</span></div>
          </aside>
        </div>

        <div className="proof-strip" aria-label="Career highlights">
          {proof.map((item, index) => (
            <div className="proof-item" key={item.label}>
              <span className="proof-number">0{index + 1}</span>
              <strong>{item.value}</strong>
              <small>{item.label}</small>
            </div>
          ))}
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>MULTI-AGENT SYSTEMS ✦ AGENT SKILLS ✦ APPLIED AI ✦ MICROSOFT FABRIC ✦ OPTIMIZATION ✦ KNOWLEDGE SYSTEMS ✦ REINFORCEMENT LEARNING ✦ MULTI-AGENT SYSTEMS ✦ AGENT SKILLS ✦ APPLIED AI ✦</div>
      </div>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div><span className="section-index">01 / SELECTED OPERATIONS</span><h2>Outcomes over theatre.</h2></div>
          <p>Enterprise work, framed as problems solved—not a wall of technologies.</p>
        </div>

        <div className="case-console">
          <div className="case-list" role="tablist" aria-label="Selected case studies">
            {caseStudies.map((item) => (
              <button
                key={item.id}
                className={activeCase === item.id ? "active" : ""}
                onClick={() => setActiveCase(item.id)}
                role="tab"
                aria-selected={activeCase === item.id}
              >
                <span>{item.index}</span><strong>{item.title}</strong><i>↗</i>
              </button>
            ))}
          </div>
          <article className="case-detail" role="tabpanel" key={selectedCase.id}>
            <div className="case-meta"><span>{selectedCase.tag}</span><span>CASE / {selectedCase.index}</span></div>
            <h3>{selectedCase.title}</h3>
            <p className="case-summary">{selectedCase.summary}</p>
            <div className="outcome-card"><small>MEASURED OUTCOME</small><p>{selectedCase.outcome}</p></div>
            <div className="tag-list">{selectedCase.stack.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        </div>

        <article className="project-feature">
          <div className="project-signal">
            <span className="project-id">OPEN SOURCE / 001</span>
            <div className="project-logo" aria-label="MirrorArc monogram">MA</div>
            <div className="demo-readout" aria-label="MirrorArc demo capabilities">
              <span>ONTARIO GRID / PUBLIC DEMO</span>
              <div><i>01</i><strong>RELATIONSHIP MAP</strong></div>
              <div><i>02</i><strong>PROVENANCE + LIFECYCLE</strong></div>
              <div><i>03</i><strong>RENDERED DOCUMENT VIEW</strong></div>
            </div>
            <div><span className="status-pill">TECHNICAL ALPHA</span><span className="status-copy">199 commits • Python 3.11+ • AGPL-3.0</span></div>
          </div>
          <div className="project-copy">
            <span className="eyebrow">CURRENT FLAGSHIP BUILD</span>
            <h3>MirrorArc</h3>
            <p className="project-intro">A governed documentation layer for both people and AI agents—built to turn changing Office files, PDFs, repositories, datasets, and notes into a source-backed knowledge workspace.</p>
            <ul>
              <li>Keeps original records authoritative while deterministic Markdown mirrors stay refreshable</li>
              <li>Connects evidence through a relationship map, provenance inspector, and document view</li>
              <li>Gives agents durable context without requiring a vector database</li>
              <li>Ships a provenance-documented, 50+ file Ontario electricity evidence demo</li>
            </ul>
            <div className="project-actions">
              <a className="button project-demo-button" href={profile.links.mirrorArcDemo} target="_blank" rel="noreferrer">LAUNCH LIVE DEMO ↗</a>
              <a className="text-link" href={profile.links.mirrorArc} target="_blank" rel="noreferrer">INSPECT THE REPOSITORY ↗</a>
            </div>
          </div>
        </article>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading light">
          <div><span className="section-index">02 / EXPERIENCE LOG</span><h2>From query to strategy.</h2></div>
          <p>A career built by moving outward: from technical depth to organizational leverage.</p>
        </div>
        <div className="experience-layout">
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.company}>
                <span className="timeline-dot">{index + 1}</span>
                <div className="timeline-years">{item.years}</div>
                <div className="timeline-copy"><h3>{item.company}</h3><h4>{item.role}</h4><p>{item.detail}</p></div>
              </article>
            ))}
          </div>
          <aside className="skill-deck">
            <div className="deck-title"><span>CAPABILITY DECK</span><span>03 STACKS</span></div>
            {skillGroups.map((group, index) => (
              <div className="skill-group" key={group.title}>
                <h3><span>0{index + 1}</span>{group.title}</h3>
                <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
            <div className="skill-deck-footer"><small>ENGINEERING + LEADERSHIP</small><p>Technical depth, operating discipline, and the ability to translate across teams.</p></div>
          </aside>
        </div>
      </section>

      <section className="section ai-section" id="ai-engineering">
        <div className="section-heading">
          <div><span className="section-index">03 / AI ENGINEERING</span><h2>Engineer the agent,<br />not the demo.</h2></div>
          <p>My AI work centers on coordination, reusable expertise, governed evidence, and the delivery system around the model.</p>
        </div>
        <div className="ai-layout">
          <div className="ai-grid">
            {aiEngineering.map((capability) => (
              <article className="ai-card" key={capability.index}>
                <div className="ai-card-top"><span>{capability.index}</span><span>CAPABILITY</span></div>
                <h3>{capability.title}</h3>
                <p className="ai-summary">{capability.summary}</p>
                <p className="ai-detail">{capability.detail}</p>
                <div className="ai-tags">{capability.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
          <aside className="ai-principles">
            <div className="principles-head"><span>DESIGN DOCTRINE</span><span>03 RULES</span></div>
            <strong>AI systems should remain inspectable when the conversation ends.</strong>
            <ol>{aiPrinciples.map((principle, index) => <li key={principle}><span>0{index + 1}</span>{principle}</li>)}</ol>
          </aside>
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="section-heading light">
          <div><span className="section-index">04 / EDUCATION</span><h2>Theory with<br />operating range.</h2></div>
          <p>Optimization, strategic behavior, learning systems, and business application are not separate chapters—they are the intellectual spine of my work.</p>
        </div>
        <div className="academic-throughline">
          <span>THE THROUGHLINE</span><h3>{academicThroughline.title}</h3><p>{academicThroughline.detail}</p>
        </div>
        <div className="education-grid">
          {education.map((item, index) => (
            <article className={`education-card education-card-${item.id}`} key={item.id}>
              <div className="education-card-top"><span>ACADEMIC RECORD / 0{index + 1}</span><span>{item.years}</span></div>
              <span className="education-lens">{item.lens}</span>
              <h3>{item.school}</h3><h4>{item.degree}</h4><p className="education-program">{item.program}</p>
              <p className="education-statement">{item.statement}</p>
              <div className="education-topics">{item.topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
              <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section now-section" id="now">
        <div className="section-heading">
          <div><span className="section-index">05 / ACTIVE QUESTS</span><h2>What I’m building now.</h2></div>
          <p>Public work in motion—because credibility should leave a trail.</p>
        </div>
        <div className="quest-grid">
          {currentQuests.map((quest, index) => (
            <article className="quest-card" key={quest.title}>
              <div className="quest-top"><span>Q—00{index + 1}</span><span className="quest-state">{quest.state}</span></div>
              <h3>{quest.title}</h3><p>{quest.detail}</p>
              <div className="progress"><span style={{ width: `${72 - index * 17}%` }} /></div>
            </article>
          ))}
        </div>

        <div className="notes-preview">
          <div className="notes-header"><span>FIELD NOTES / LATEST</span><Link href="/notes">VIEW ALL NOTES ↗</Link></div>
          {notes.map((note) => (
            <Link className="note-row" href={`/notes/${note.slug}`} key={note.slug}>
              <span className="note-number">{note.number}</span><span className="note-title">{note.title}</span><span>{note.date}</span><span>{note.readTime}</span><i>↗</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-stamp">OPEN CHANNEL</div>
        <p>RECRUITING • PARTNERSHIPS • DESIGN PARTNERS • GOOD QUESTIONS</p>
        <h2>Let’s build the system behind the ambition.</h2>
        <div className="contact-actions">
          <a className="button button-dark" href={profile.links.linkedin} target="_blank" rel="noreferrer">START A CONVERSATION ↗</a>
          <a className="button button-ghost dark-ghost" href={profile.links.github} target="_blank" rel="noreferrer">FOLLOW THE BUILD ↗</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><strong>CI ZHU</strong><span>© 2026 / TORONTO</span></div>
        <p>Designed as an original signal system. No game art, characters, logos, or proprietary interface assets used.</p>
        <div><a href={profile.links.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href={profile.links.github} target="_blank" rel="noreferrer">GITHUB ↗</a><a href="#top">TOP ↑</a></div>
      </footer>
    </main>
  );
}
