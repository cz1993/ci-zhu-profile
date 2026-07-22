import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "http://localhost"), {
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

test("keeps public repository metadata and content centralized", async () => {
  const [packageJson, content, layout] = await Promise.all([
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../content/site.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(packageJson, /"name": "ci-zhu-profile"/);
  assert.match(packageJson, /"deploy": "vinext deploy --name ci-zhu-profile"/);
  assert.match(content, /github\.com\/cz1993\/MirrorArc/);
  assert.match(layout, /Ci Zhu — Data \+ AI Operator/);

  await assert.rejects(access(new URL("app/_sites-preview", projectRoot)));
});
