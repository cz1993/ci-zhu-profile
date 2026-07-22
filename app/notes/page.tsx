import type { Metadata } from "next";
import Link from "next/link";
import { notes } from "@/content/site";

export const metadata: Metadata = {
  title: "Field Notes",
  description: "Notes from Ci Zhu on enterprise AI, data platforms, knowledge systems, and operating craft.",
};

export default function NotesPage() {
  return (
    <main className="notes-page">
      <div className="noise" aria-hidden="true" />
      <div className="notes-page-inner">
        <Link className="back-link" href="/">← RETURN TO PROFILE</Link>
        <header className="notes-hero">
          <div><span className="section-index">PUBLIC WORKING NOTES / VOL. 01</span><h1>Field<br />notes.</h1></div>
          <p>Ideas from the workbench: governed AI, platform economics, transformation craft, and the systems that help expertise compound.</p>
        </header>
        <section className="notes-grid" aria-label="Articles">
          {notes.map((note) => (
            <Link className="note-card" href={`/notes/${note.slug}`} key={note.slug}>
              <div className="note-card-meta"><span>{note.number}</span><span>{note.date} / {note.readTime}</span></div>
              <h2>{note.title}</h2><p>{note.excerpt}</p><strong>READ NOTE ↗</strong>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
