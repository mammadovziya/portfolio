type ArticleNode = { type: string; value?: string; tagName?: string; properties?: Record<string, unknown>; children?: ArticleNode[] };
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  updatedAt?: string;
  summary: string;
  image?: string;
  category?: string;
  tags?: string[];
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function copyableBlocks() {
  return (tree: ArticleNode) => {
    const text = (node: ArticleNode): string => node.type === "text" ? node.value ?? "" : node.children?.map(text).join("") ?? "";
    const find = (node: ArticleNode, predicate: (element: ArticleNode) => boolean): ArticleNode | undefined => {
      if (predicate(node)) return node;
      for (const child of node.children ?? []) {
        if (child.type === "element") {
          const match = find(child, predicate);
          if (match) return match;
        }
      }
    };
    const walk = (parent: ArticleNode) => {
      parent.children = (parent.children ?? []).map((node) => {
        if (node.type !== "element") return node;
        const math = Array.isArray(node.properties?.className) && node.properties?.className.includes("katex-display");
        if (node.tagName === "pre" || math) {
          const source = math ? find(node, (el) => el.tagName === "annotation" && el.properties?.encoding === "application/x-tex") : find(node, (el) => el.tagName === "code");
          if (!source) return node;
          const lines = (source.children ?? []).filter((child) => child.type === "element" && "dataLine" in (child.properties ?? {}));
          const value = !math && lines.length ? lines.map(text).join("\n") : text(source);
          return { type: "element", tagName: "div", properties: { className: ["copyable-block"], dataCopyText: value, dataCopyKind: math ? "math" : "code" }, children: [node, { type: "element", tagName: "button", properties: { type: "button", className: ["article-copy-button"], ariaLabel: math ? "Copy equation as LaTeX" : "Copy code", ariaLive: "polite" }, children: [{ type: "text", value: math ? "Copy LaTeX" : "Copy" }] }] } as ArticleNode;
        }
        walk(node);
        return node;
      });
    };
    walk(tree);
  };
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex, { strict: "error" })
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(copyableBlocks)
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug,
    readingMinutes: Math.max(1, Math.ceil(rawContent.replace(/!\[[^\]]*\]\([^)]*\)/g, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length / 200)),
  };
}

async function getAllPosts(dir: string) {
  const posts = await Promise.all(
    getMDXFiles(dir).map((file) => getPost(path.basename(file, path.extname(file))))
  );
  return posts.filter((post): post is NonNullable<typeof post> => post !== null);
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}
