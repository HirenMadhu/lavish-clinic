import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentRoot = path.join(process.cwd(), "src/content");

export function getAllSlugs(type: "conditions" | "treatments") {
  const dir = path.join(contentRoot, type);
  return fs.readdirSync(dir).map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

export function getPageBySlug(
  type: "conditions" | "treatments",
  slug: string
) {
  const filePath = path.join(contentRoot, type, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return {
    content,
    frontmatter: data as {
      title: string;
      description?: string;
    },
  };
}

export function getAllPages(type: "conditions" | "treatments") {
  const dir = path.join(contentRoot, type);

  return fs.readdirSync(dir).map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const source = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(source);

    return {
      slug,
      title: data.title as string,
    };
  });
}
