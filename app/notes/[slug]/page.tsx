import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { notes, profile } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  if (!note) return {};
  return { title: note.title, description: note.excerpt };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  if (!note) notFound();

  return (
    <main className="article-page">
      <div className="noise" aria-hidden="true" />
      <article className="article-wrap">
        <Link className="back-link" href="/notes">← ALL FIELD NOTES</Link>
        <header className="article-header">
          <div className="article-meta"><span>{note.number}</span><span>{note.date}</span><span>{note.readTime}</span></div>
          <h1>{note.title}</h1><p>{note.excerpt}</p>
        </header>
        <div className="article-body">
          {note.sections.map((section) => (
            <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
          ))}
          <div className="article-cta"><span>CONTINUE THE CONVERSATION</span><a href={profile.links.linkedin} target="_blank" rel="noreferrer">CONNECT ON LINKEDIN ↗</a></div>
        </div>
      </article>
    </main>
  );
}
