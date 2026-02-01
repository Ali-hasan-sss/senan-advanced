/**
 * استخراج الصورة المضمنة من Assxet.svg وحفظها كـ PNG منفصل لاستخدامها كخلفية الهيرو.
 * تشغيل: node scripts/extract-hero-png.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const svgPath = path.join(projectRoot, "public", "Assxet.svg");
const outPath = path.join(projectRoot, "public", "hero-bg.png");

const svg = fs.readFileSync(svgPath, "utf8");
const match = svg.match(/xlink:href="data:image\/png;base64,([^"]+)"/);
if (!match) {
  console.error("لم يتم العثور على صورة PNG مضمّنة في الـ SVG.");
  process.exit(1);
}
const base64 = match[1];
const buffer = Buffer.from(base64, "base64");
fs.writeFileSync(outPath, buffer);
console.log("تم حفظ الصورة في:", outPath);
