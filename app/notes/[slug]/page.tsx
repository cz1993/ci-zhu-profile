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
  const pathname = `/notes/${note.slug}`;
  return {
    title: note.title,
    description: note.excerpt,
    alternates: { canonical: pathname },
    openGraph: {
      title: note.title,
      description: note.excerpt,
      url: pathname,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ci Zhu — Build systems. Ship intelligence." }],
    },
  };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  if (!note) notFound();

  return (
    <main className="article-page">
      <div className="noise" aria-hidden="true" />
      <article className="article-wrap">
        <Link className="back-link" href="/notes">← All field notes</Link>
        <header className="article-header">
          <div className="article-meta"><span>{note.number}</span><span>{note.date}</span><span>{note.readTime}</span></div>
          <h1>{note.title}</h1><p>{note.excerpt}</p>
        </header>
        <div className="article-body">
          {note.sections.map((section) => (
            <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
          ))}
          <div className="article-cta"><span>Continue the conversation</span><a href={profile.links.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></div>
        </div>
      </article>
    </main>
  );
}
