import type { Project } from "./content";

// Per-project detail shown in the achievement modal: the assigned role, the
// skills/tech used, and the concrete scope of work. Values are derived from
// each project's category tags to reflect a typical Japanese web-production
// workflow — review and adjust to match the exact role/stack of each job.
export interface ProjectDetail {
  role: { ja: string; en: string };
  tech: string[];
  scope: { ja: string[]; en: string[] };
}

const CODED_BASE: ProjectDetail = {
  role: {
    ja: "デザインをもとにしたフロントエンドのコーディング・実装を担当。",
    en: "Handled the front-end coding and implementation from the design.",
  },
  tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "SCSS", "WordPress"],
  scope: {
    ja: [
      "デザインカンプからのマークアップ・コーディング",
      "スマートフォン／タブレット対応（レスポンシブ）",
      "WordPress によるCMS化（お知らせ・ブログ等）",
      "表示速度・SEO の内部最適化",
    ],
    en: [
      "Markup and coding from design comps",
      "Responsive support for smartphone and tablet",
      "CMS implementation with WordPress (news, blog, etc.)",
      "Performance and on-page SEO optimization",
    ],
  },
};

const NOCODE_BASE: ProjectDetail = {
  role: {
    ja: "ノーコードツール「STUDIO」でのデザイン・構築・公開を担当。",
    en: "Designed, built, and launched the site with the no-code tool STUDIO.",
  },
  tech: ["STUDIO", "STUDIO CMS", "ノーコード", "レスポンシブデザイン"],
  scope: {
    ja: [
      "STUDIO でのデザイン・ページ構築",
      "スマートフォン対応（レスポンシブ）",
      "STUDIO CMS での記事・お知らせ管理",
      "独自ドメインでの公開設定",
    ],
    en: [
      "Design and page building in STUDIO",
      "Responsive support for mobile",
      "Article/news management via STUDIO CMS",
      "Custom-domain publishing setup",
    ],
  },
};

// primary-category-specific scope line, for a bit of per-project specificity
const PRIMARY_SCOPE: Record<string, { ja: string; en: string }> = {
  medical: { ja: "診療科・診療時間・アクセスなどの情報設計", en: "Information design for departments, hours, and access" },
  animal: { ja: "診療案内・アクセスの情報設計", en: "Information design for services and access" },
  corporate: { ja: "会社情報・事業紹介とお問い合わせフォームの実装", en: "Company/business intro and contact-form implementation" },
  beauty: { ja: "ブランドの世界観に合わせたビジュアル実装", en: "Visual implementation matching the brand world" },
  brand: { ja: "ブランドの世界観に合わせたビジュアル実装", en: "Visual implementation matching the brand world" },
  education: { ja: "学部・コース・プログラム紹介コンテンツの実装", en: "Department, course, and program content" },
  welfare: { ja: "施設・サービス紹介ページの構成と実装", en: "Structuring facility and service pages" },
  sports: { ja: "スケジュール・レッスン・料金情報の実装", en: "Schedule, lesson, and pricing content" },
  food: { ja: "メニュー・店舗情報の実装", en: "Menu and store information" },
  leisure: { ja: "利用案内・料金の情報設計", en: "Information design for usage and pricing" },
};

export function getProjectDetail(p: Project): ProjectDetail {
  // A project may carry its own detail (e.g. system/app work with a specific
  // stack). Use it verbatim when provided.
  if (p.role && p.tech && p.scope) {
    return { role: p.role, tech: p.tech, scope: p.scope };
  }

  const cats = p.categories;
  const base = cats.includes("nocode") ? NOCODE_BASE : CODED_BASE;

  // deep clone so we can extend without mutating the shared base
  const d: ProjectDetail = {
    role: { ...base.role },
    tech: [...base.tech],
    scope: { ja: [...base.scope.ja], en: [...base.scope.en] },
  };

  const addTech = (t: string) => {
    if (!d.tech.includes(t)) d.tech.push(t);
  };
  const addScope = (ja: string, en: string) => {
    d.scope.ja.push(ja);
    d.scope.en.push(en);
  };

  const primary = cats[0];
  const ps = PRIMARY_SCOPE[primary];
  if (ps) addScope(ps.ja, ps.en);

  if (cats.includes("lp")) {
    addTech("GSAP");
    addScope("ファーストビュー・訴求構成の実装", "First-view and persuasive section build");
    addScope("CVR を意識した導線・フォーム設置", "Conversion-focused flow and form placement");
  }
  if (cats.includes("shopping")) {
    addTech("ECサイト");
    addScope("商品一覧・詳細ページの実装", "Product listing and detail page implementation");
    addScope("カート・購入導線の最適化", "Cart and checkout-flow optimization");
  }
  if (cats.includes("recruit")) {
    addScope("エントリーフォーム・募集要項コンテンツの実装", "Application form and job-listing content");
  }
  if (cats.includes("certification") || cats.includes("public")) {
    addScope("資格・試験情報の整理と申込導線の実装", "Structuring exam info and application flow");
  }

  return d;
}
