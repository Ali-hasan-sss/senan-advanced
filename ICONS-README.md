# أيقونات الموقع — Site Icons Reference

> هذا الملف يجمع **جميع الأيقونات** المستخدمة في موقع Sinan Advanced Industries (بدون اللوجوهات)

---

## 1. مكتبة Lucide React (أيقونات SVG)

**المصدر:** [lucide-react](https://lucide.dev) — النسخة 0.487.0

هذه الأيقونات تُستورد من المكتبة ولا تحتاج ملفات منفصلة.

| الأيقونة     | الاستخدام          | الملف                               |
| ------------ | ------------------ | ----------------------------------- |
| `Menu`       | قائمة الهاتف (فتح) | Header.tsx, MobileMenu.tsx, App.tsx |
| `X`          | إغلاق القائمة      | Header.tsx, MobileMenu.tsx, App.tsx |
| `Linkedin`   | رابط LinkedIn      | App.tsx (Footer), ContactPage.tsx   |
| `Youtube`    | رابط YouTube       | App.tsx (Footer), ContactPage.tsx   |
| `Settings`   | قيمة: التميز       | ValuesPage.tsx                      |
| `TrendingUp` | قيمة: الريادة      | ValuesPage.tsx                      |
| `Brain`      | قيمة: الابتكار     | ValuesPage.tsx                      |
| `Users`      | مهارات وخبرات      | ExperiencePage.tsx                  |
| `Network`    | مهارات وخبرات      | ExperiencePage.tsx                  |
| `Rocket`     | مهارات وخبرات      | ExperiencePage.tsx                  |
| `Ship`       | مهارات وخبرات      | ExperiencePage.tsx                  |
| `Radio`      | مهارات وخبرات      | ExperiencePage.tsx                  |
| `Handshake`  | مهارات وخبرات      | ExperiencePage.tsx                  |
| `Mail`       | البريد الإلكتروني  | Footer.tsx                          |
| `Phone`      | الهاتف             | Footer.tsx                          |
| `MapPin`     | الموقع             | Footer.tsx                          |

**طريقة الاستخدام:**

```tsx
import { Linkedin, Youtube } from "lucide-react";
<Linkedin size={24} strokeWidth={1.5} />;
```

---

## 2. أيقونات قسم الحلول — Solutions (SVG مخصصة)

أيقونات الحلول الثلاثة الرئيسية (اتصالات، تدريب، دفاع) — مبنية كـ React components من SVG.

| الأيقونة              | الوصف     | الملفات المطلوبة                                                          |
| --------------------- | --------- | ------------------------------------------------------------------------- |
| **CommunicationIcon** | الاتصالات | `src/imports/IsolationMode-203-171.tsx` + `src/imports/svg-gza8iykhk2.ts` |
| **TrainingIcon**      | التدريب   | `src/imports/IsolationMode-203-189.tsx` + `src/imports/svg-bwonn12561.ts` |
| **DefenseIcon**       | الدفاع    | `src/imports/IsolationMode-203-207.tsx` + `src/imports/svg-jmyal60d5m.ts` |

**مسار المجلد:** `src/imports/`

---

## 3. أيقونات المجالات — Solutions Domains (PNG)

أيقونات دوائر المجالات حول الحلول المركزية (Space, Air, Land, Maritime, Cyber).

| المجال   | الملف                                                     |
| -------- | --------------------------------------------------------- |
| Space    | `src/assets/9dd7749060815e64b5bacb0298a6f6e916d93f98.png` |
| Air      | `src/assets/cd1779045309571142b8f0a31bf6fab645307577.png` |
| Land     | `src/assets/e148e8f3ba9387c1003e8bf5da1696c2cf8435d8.png` |
| Maritime | `src/assets/c1ac93a6c938a74dea95a6ec8d8ef43174627311.png` |
| Cyber    | `src/assets/6dcb2184ab0b8f46c9fb262f728e15f319f393da.png` |

---

## 4. أيقونة Hero (الهوفر على المثلث)

| الوصف                                        | الملف                                                     |
| -------------------------------------------- | --------------------------------------------------------- |
| أيقونة الهوفر على المثلث الأسود (Target/هدف) | `src/assets/10ece0636bfeb213b95a9827ed51f9647c03da9c.png` |

---

## 5. أيقونات قسم الإنجازات — Achievements (PNG)

> ملاحظة: قسم الإنجازات معطّل حالياً في الموقع، لكن الأيقونات مستخدمة في الكود.

| الوصف                        | الملف                                                     |
| ---------------------------- | --------------------------------------------------------- |
| Drone (طائرة بدون طيار)      | `src/assets/669a0ce404909f959cf5cefdfea8336d84b11a8f.png` |
| Pipeline (خط أنابيب)         | `src/assets/dee5cc203bd2569e78692655ee29ae032620b066.png` |
| Powerline (خط كهرباء)        | `src/assets/bd4ab696d64d5f8cbdecca7eb47780f5a1387c77.png` |
| Oil Facility (منشأة نفطية)   | `src/assets/ba1377289758df9486546693e914fc1ee925cbea.png` |
| Data Analyzed (تحليل بيانات) | `src/assets/2d6e478796bc360c4c5104f57282306e31757ce6.png` |
| Flare Tower (برج مشعل)       | `src/assets/1f5088bdec50b1d8838c57ad94eaa181f8ee070d.png` |
| Inventions (اختراعات)        | `src/assets/a1025a1283a6fe7aa4bda70a6b45931d9d23b66b.png` |
| Patents (براءات اختراع)      | `src/assets/12d9ae57507c85b392c04f545d72420580f1b204.png` |

---

## ملخص الملفات لإرسالها

إذا أردت إرسال **ملفات الأيقونات** فقط (بدون Lucide لأنها مكتبة):

### مجلد `src/imports/` — أيقونات Solutions SVG

- `IsolationMode-203-171.tsx`
- `IsolationMode-203-189.tsx`
- `IsolationMode-203-207.tsx`
- `svg-gza8iykhk2.ts`
- `svg-bwonn12561.ts`
- `svg-jmyal60d5m.ts`

### مجلد `src/assets/` — PNG

- `9dd7749060815e64b5bacb0298a6f6e916d93f98.png` (Space)
- `cd1779045309571142b8f0a31bf6fab645307577.png` (Air)
- `e148e8f3ba9387c1003e8bf5da1696c2cf8435d8.png` (Land)
- `c1ac93a6c938a74dea95a6ec8d8ef43174627311.png` (Maritime)
- `6dcb2184ab0b8f46c9fb262f728e15f319f393da.png` (Cyber)
- `10ece0636bfeb213b95a9827ed51f9647c03da9c.png` (Hero target)
- `669a0ce404909f959cf5cefdfea8336d84b11a8f.png` (Drone)
- `dee5cc203bd2569e78692655ee29ae032620b066.png` (Pipeline)
- `bd4ab696d64d5f8cbdecca7eb47780f5a1387c77.png` (Powerline)
- `ba1377289758df9486546693e914fc1ee925cbea.png` (Oil facility)
- `2d6e478796bc360c4c5104f57282306e31757ce6.png` (Data)
- `1f5088bdec50b1d8838c57ad94eaa181f8ee070d.png` (Flare tower)
- `a1025a1283a6fe7aa4bda70a6b45931d9d23b66b.png` (Inventions)
- `12d9ae57507c85b392c04f545d72420580f1b204.png` (Patents)

---

## ملاحظة للمصمم

- **Lucide:** يمكن تحميل أي أيقونة من [lucide.dev](https://lucide.dev) بصيغ SVG/PNG إذا احتجت نسخة مستقلة.
- **ألوان الأيقونات المخصصة:** تُستخدم ألوان مثل `#9BA0A5` و `#231F20` في بعض SVG.
