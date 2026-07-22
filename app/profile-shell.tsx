"use client";

import { useEffect, useState, type PointerEvent as ReactPointerEvent } from "react";
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

function trackPointer(event: ReactPointerEvent<HTMLElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  event.currentTarget.style.setProperty("--pointer-x", x.toFixed(3));
  event.currentTarget.style.setProperty("--pointer-y", y.toFixed(3));
  event.currentTarget.style.setProperty("--shift-x", `${(x * 12).toFixed(2)}px`);
  event.currentTarget.style.setProperty("--shift-y", `${(y * 12).toFixed(2)}px`);
  event.currentTarget.style.setProperty("--shift-x-inverse", `${(x * -8).toFixed(2)}px`);
  event.currentTarget.style.setProperty("--shift-y-inverse", `${(y * -8).toFixed(2)}px`);
  event.currentTarget.style.setProperty("--tilt-x", `${(y * -4).toFixed(2)}deg`);
  event.currentTarget.style.setProperty("--tilt-y", `${(x * 6).toFixed(2)}deg`);
}

function resetPointer(event: ReactPointerEvent<HTMLElement>) {
  event.currentTarget.style.setProperty("--pointer-x", "0");
  event.currentTarget.style.setProperty("--pointer-y", "0");
  event.currentTarget.style.setProperty("--shift-x", "0px");
  event.currentTarget.style.setProperty("--shift-y", "0px");
  event.currentTarget.style.setProperty("--shift-x-inverse", "0px");
  event.currentTarget.style.setProperty("--shift-y-inverse", "0px");
  event.currentTarget.style.setProperty("--tilt-x", "0deg");
  event.currentTarget.style.setProperty("--tilt-y", "0deg");
}

export function ProfileShell() {
  const [audience, setAudience] = useState<Audience>("recruiter");
  const [activeCase, setActiveCase] = useState(caseStudies[0].id);
  const [menuOpen, setMenuOpen] = useState(false);
  const mode = audienceModes[audience];
  const selectedCase = caseStudies.find((item) => item.id === activeCase) ?? caseStudies[0];

  useEffect(() => {
    document.documentElement.dataset.audience = audience;
  }, [audience]);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let observer: IntersectionObserver | undefined;

    if (reducedMotion) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          }
        }),
        { threshold: 0.12, rootMargin: "0px 0px -8%" },
      );
      revealNodes.forEach((node) => observer?.observe(node));
    }

    const updateScrollProgress = () => {
      const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-progress", scrollRange > 0 ? String(window.scrollY / scrollRange) : "0");
    };
    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Ci Zhu, back to top">
          <span className="brand-mark">CZ</span>
          <span className="brand-copy"><strong>Ci Zhu</strong><small>Data + AI operator</small></span>
        </a>
        <button className="menu-toggle" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#ai-engineering" onClick={() => setMenuOpen(false)}>AI engineering</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#now" onClick={() => setMenuOpen(false)}>Now</a>
          <Link href="/notes" onClick={() => setMenuOpen(false)}>Notes</Link>
          <a className="nav-connect" href={profile.links.linkedin} target="_blank" rel="noreferrer">Connect ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" onPointerMove={trackPointer} onPointerLeave={resetPointer}>
          <div className="hero-copy" data-reveal>
            <p className="kicker"><span className="live-dot" /> Based in {profile.location} <span>•</span> System online</p>
            <div className="display-wrap">
              <span className="display-index">00</span>
              <h1>Build systems.<br /><em>Ship intelligence.</em></h1>
            </div>
            <p className="hero-lede">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore the work <span>↘</span></a>
              <a className="button button-ghost" href={profile.links.github} target="_blank" rel="noreferrer">View source ↗</a>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <figure className="portrait-panel">
              <div className="portrait-orbit" aria-hidden="true"><span /><i /></div>
              <img src="/ci-zhu-portrait.jpeg" alt="Portrait of Ci Zhu" />
              <div className="portrait-scan" aria-hidden="true" />
              <figcaption><span>Operator / 01</span><strong>Ci Zhu</strong><small>Data + AI systems</small></figcaption>
            </figure>

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
        </div>

        <div className="proof-strip" aria-label="Career highlights" data-reveal>
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
        <div>Multi-agent systems ✦ Agent skills ✦ Applied AI ✦ Microsoft Fabric ✦ Optimization ✦ Knowledge systems ✦ Reinforcement learning ✦ Multi-agent systems ✦ Agent skills ✦ Applied AI ✦</div>
      </div>

      <section className="section work-section" id="work">
        <div className="section-heading" data-reveal>
          <div><span className="section-index">01 / SELECTED OPERATIONS</span><h2>Outcomes over theatre.</h2></div>
          <p>Enterprise work, framed as problems solved—not a wall of technologies.</p>
        </div>

        <div className="case-console" data-reveal>
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

        <article className="project-feature" data-reveal onPointerMove={trackPointer} onPointerLeave={resetPointer}>
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
              <a className="button project-demo-button" href={profile.links.mirrorArcDemo} target="_blank" rel="noreferrer">Launch live demo ↗</a>
              <a className="text-link" href={profile.links.mirrorArc} target="_blank" rel="noreferrer">Inspect the repository ↗</a>
            </div>
          </div>
        </article>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading light" data-reveal>
          <div><span className="section-index">02 / EXPERIENCE LOG</span><h2>From query to strategy.</h2></div>
          <p>A career built by moving outward: from technical depth to organizational leverage.</p>
        </div>
        <div className="experience-layout">
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.company} data-reveal>
                <span className="timeline-dot">{index + 1}</span>
                <div className="timeline-years">{item.years}</div>
                <div className="timeline-copy"><h3>{item.company}</h3><h4>{item.role}</h4><p>{item.detail}</p></div>
              </article>
            ))}
          </div>
          <aside className="skill-deck" data-reveal onPointerMove={trackPointer} onPointerLeave={resetPointer}>
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
        <div className="section-heading" data-reveal>
          <div><span className="section-index">03 / AI ENGINEERING</span><h2>Engineer the agent,<br />not the demo.</h2></div>
          <p>My AI work centers on coordination, reusable expertise, governed evidence, and the delivery system around the model.</p>
        </div>
        <div className="ai-layout">
          <div className="ai-grid">
            {aiEngineering.map((capability) => (
              <article className="ai-card motion-card" key={capability.index} data-reveal onPointerMove={trackPointer} onPointerLeave={resetPointer}>
                <div className="ai-card-top"><span>{capability.index}</span><span>CAPABILITY</span></div>
                <h3>{capability.title}</h3>
                <p className="ai-summary">{capability.summary}</p>
                <p className="ai-detail">{capability.detail}</p>
                <div className="ai-tags">{capability.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
          <aside className="ai-principles" data-reveal>
            <div className="principles-head"><span>DESIGN DOCTRINE</span><span>03 RULES</span></div>
            <strong>AI systems should remain inspectable when the conversation ends.</strong>
            <ol>{aiPrinciples.map((principle, index) => <li key={principle}><span>0{index + 1}</span>{principle}</li>)}</ol>
          </aside>
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="section-heading light" data-reveal>
          <div><span className="section-index">04 / EDUCATION</span><h2>Theory with<br />operating range.</h2></div>
          <p>Optimization, strategic behavior, learning systems, and business application are not separate chapters—they are the intellectual spine of my work.</p>
        </div>
        <div className="academic-throughline" data-reveal>
          <span>THE THROUGHLINE</span><h3>{academicThroughline.title}</h3><p>{academicThroughline.detail}</p>
        </div>
        <div className="education-grid">
          {education.map((item, index) => (
            <article className={`education-card education-card-${item.id} motion-card`} key={item.id} data-reveal onPointerMove={trackPointer} onPointerLeave={resetPointer}>
              <div className="education-card-top"><span>ACADEMIC RECORD / 0{index + 1}</span><span>{item.years}</span></div>
              <div className="education-brand"><img src={item.logo} alt={item.logoAlt} /></div>
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
        <div className="section-heading" data-reveal>
          <div><span className="section-index">05 / ACTIVE QUESTS</span><h2>What I’m building now.</h2></div>
          <p>Public work in motion—because credibility should leave a trail.</p>
        </div>
        <div className="quest-grid">
          {currentQuests.map((quest, index) => (
            <article className="quest-card motion-card" key={quest.title} data-reveal onPointerMove={trackPointer} onPointerLeave={resetPointer}>
              <div className="quest-top"><span>Q—00{index + 1}</span><span className="quest-state">{quest.state}</span></div>
              <h3>{quest.title}</h3><p>{quest.detail}</p>
              <div className="progress"><span style={{ width: `${72 - index * 17}%` }} /></div>
            </article>
          ))}
        </div>

        <div className="notes-preview" data-reveal>
          <div className="notes-header"><span>FIELD NOTES / LATEST</span><Link href="/notes">View all notes ↗</Link></div>
          {notes.map((note) => (
            <Link className="note-row" href={`/notes/${note.slug}`} key={note.slug}>
              <span className="note-number">{note.number}</span><span className="note-title">{note.title}</span><span>{note.date}</span><span>{note.readTime}</span><i>↗</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-stamp">OPEN CHANNEL</div>
        <p>Recruiting • Partnerships • Design partners • Good questions</p>
        <h2>Let’s build the system behind the ambition.</h2>
        <div className="contact-actions">
          <a className="button button-dark" href={profile.links.linkedin} target="_blank" rel="noreferrer">Start a conversation ↗</a>
          <a className="button button-ghost dark-ghost" href={profile.links.github} target="_blank" rel="noreferrer">Follow the build ↗</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><strong>Ci Zhu</strong><span>© 2026 / Toronto</span></div>
        <p>Designed as an original signal system. No game artwork, characters, or proprietary game-interface assets used.</p>
        <div><a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">Top ↑</a></div>
      </footer>
    </main>
  );
}
