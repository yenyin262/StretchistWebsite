// import fs from "fs";
// import { join } from "path";
// import matter from "gray-matter";
import sectionsData from "../data/sections.json";

// MD
// const sectionsDirectory = join(process.cwd(), "_sections");

// export function getSectionNames() {
//   return fs.readdirSync(sectionsDirectory);
// }

// export function getSection(name) {
//   const realSlug = name.replace(/\.md$/, "");
//   const fullPath = join(sectionsDirectory, `${realSlug}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const { data, content } = matter(fileContents);

//   const section = { data, content };

//   return section;
// }

// export function getAllSections() {
//   const names = getSectionNames();
//   console.log(names);
//   const sections = names
//     .map((name) => getSection(name))
//     .sort((section1, section2) => (section1.order < section2.order ? -1 : 1));
//   return sections;
// }
//

// JSON

export function getJSONSections() {
  return sectionsData;
}
