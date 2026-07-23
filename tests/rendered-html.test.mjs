import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render(pathname = "/", origin = "http://localhost") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${origin}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, origin), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete public profile", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Ci Zhu — Data \+ AI Operator<\/title>/i);
  assert.match(html, /Build systems\./);
  assert.match(html, /Ship intelligence\./);
  assert.match(html, /MirrorArc/);
  assert.match(html, /University of Waterloo/);
  assert.match(html, /Smith School of Business/);
  assert.match(html, /ci-zhu-portrait\.jpeg/);
  assert.match(html, /rel="canonical" href="https:\/\/ci-zhu\.com\/"/);
  assert.match(html, /property="og:image" content="https:\/\/ci-zhu\.com\/og\.png"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("server-renders the notes index", async () => {
  const response = await render("/notes");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Field notes/i);
  assert.match(html, /Governed knowledge beats another chatbot/i);
  assert.match(html, /Return to profile/i);
});

test("redirects every legacy hostname to the canonical domain", async () => {
  for (const origin of [
    "https://www.ci-zhu.com",
    "https://cz1993.com",
    "https://www.cz1993.com",
  ]) {
    const response = await render("/notes?utm_source=legacy", origin);
    assert.equal(response.status, 308);
    assert.equal(
      response.headers.get("location"),
      "https://ci-zhu.com/notes?utm_source=legacy",
    );
  }
});

test("keeps public repository metadata and content centralized", async () => {
  const [packageJson, content, layout, readme, worker, wrangler] = await Promise.all([
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../content/site.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../README.md", import.meta.url), "utf8"),
    readFile(new URL("../worker/index.ts", import.meta.url), "utf8"),
    readFile(new URL("../wrangler.jsonc", import.meta.url), "utf8"),
  ]);

  assert.match(packageJson, /"name": "ci-zhu-profile"/);
  assert.match(packageJson, /"deploy": "vinext deploy --name ci-zhu-profile"/);
  assert.match(content, /github\.com\/cz1993\/MirrorArc/);
  assert.match(layout, /Ci Zhu — Data \+ AI Operator/);
  assert.match(layout, /https:\/\/ci-zhu\.com/);
  assert.match(readme, /\[ci-zhu\.com\]\(https:\/\/ci-zhu\.com\)/);
  assert.match(worker, /PRIMARY_HOSTNAME = "ci-zhu\.com"/);
  assert.match(wrangler, /"pattern": "ci-zhu\.com"/);
  assert.match(wrangler, /"pattern": "cz1993\.com"/);

  await assert.rejects(access(new URL("app/_sites-preview", projectRoot)));
});
