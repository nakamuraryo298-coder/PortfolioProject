export type Lang = "ja" | "en";

export interface SkillCategory {
  icon: string;
  title: { ja: string; en: string };
  skills: string[];
}

export interface ExperienceItem {
  period: { ja: string; en: string };
  role: { ja: string; en: string };
  company: { ja: string; en: string };
  description: { ja: string; en: string };
  tags: string[];
}

export interface ProjectCategory {
  key: string;
  ja: string;
  en: string;
}

// Category registry — a project can belong to several of these (tags), so the
// same site can appear under multiple filters (e.g. Beauty + Landing Page).
export const projectCategories: ProjectCategory[] = [
  { key: "medical", ja: "医療・ヘルスケア", en: "Medical" },
  { key: "animal", ja: "動物病院", en: "Veterinary" },
  { key: "corporate", ja: "コーポレート", en: "Corporate" },
  { key: "beauty", ja: "美容・ウェルネス", en: "Beauty & Wellness" },
  { key: "brand", ja: "ブランド・商品", en: "Brand" },
  { key: "recruit", ja: "採用・リクルート", en: "Recruitment" },
  { key: "education", ja: "教育", en: "Education" },
  { key: "welfare", ja: "福祉・介護", en: "Welfare" },
  { key: "shopping", ja: "EC・ショッピング", en: "E-commerce" },
  { key: "sports", ja: "スポーツ・フィットネス", en: "Sports" },
  { key: "certification", ja: "資格・試験・団体", en: "Certification" },
  { key: "food", ja: "飲食", en: "Food & Beverage" },
  { key: "leisure", ja: "レジャー・施設", en: "Leisure" },
  { key: "public", ja: "公共・団体", en: "Public / Nonprofit" },
  { key: "lp", ja: "ランディングページ", en: "Landing Page" },
  { key: "nocode", ja: "ノーコード制作", en: "No-code" },
  { key: "app", ja: "アプリ・システム開発", en: "App & System" },
  { key: "tool", ja: "業務ツール・自動化", en: "Tools & Automation" },
];

export interface Project {
  title: { ja: string; en: string };
  categories: string[];
  url?: string;
  image: string;
  description: { ja: string; en: string };
  // optional per-project detail override (otherwise derived from category)
  role?: { ja: string; en: string };
  tech?: string[];
  scope?: { ja: string[]; en: string[] };
}

export interface Service {
  icon: string;
  title: { ja: string; en: string };
  description: { ja: string; en: string };
}

export const profile = {
  name: { ja: "高橋 寛武", en: "Hiromu Takahashi" },
  title: {
    ja: "フリーランス ソフトウェアエンジニア",
    en: "Freelance Software Engineer",
  },
  location: { ja: "日本", en: "Japan" },
  email: "mistsid46@gmail.com",
  yearsOfExperience: 8,
  chatwork: "https://www.chatwork.com/w0u5iho8ow74",
  line: "https://line.me/ti/p/RxM-Bgw7nS",
};

export const nav = {
  about: { ja: "プロフィール", en: "About" },
  strengths: { ja: "強み", en: "Strengths" },
  skills: { ja: "スキル", en: "Skills" },
  experience: { ja: "経歴", en: "Experience" },
  projects: { ja: "実績", en: "Projects" },
  services: { ja: "サービス", en: "Services" },
  cases: { ja: "実績", en: "Work" },
  pricing: { ja: "料金", en: "Pricing" },
  voice: { ja: "お客様の声", en: "Reviews" },
  flow: { ja: "流れ", en: "Process" },
  faq: { ja: "FAQ", en: "FAQ" },
  contact: { ja: "お問い合わせ", en: "Contact" },
};

export const hero = {
  greeting: { ja: "こんにちは、私は", en: "Hello, I'm" },
  tagline: {
    ja: "開発経験8年。",
    en: "8 years of development experience.",
  },
  subtitle: {
    ja: "コーポレートサイト・LP・ECなどのWeb制作を軸に、業務ツールやシステム開発まで対応。品質・保守性・使いやすさを重視し、お客様の課題解決につながる成果物を提供します。",
    en: "Centred on web production — corporate sites, landing pages, and e-commerce — extending into business tools and system development. I focus on quality, maintainability, and usability to deliver results that solve real problems.",
  },
  ctaPrimary: { ja: "お仕事のご相談", en: "Hire Me" },
  ctaSecondary: { ja: "制作実績を見る", en: "View Work" },
  badges: {
    available: { ja: "新規案件 受付中", en: "Available for projects" },
  },
  stats: [
    { value: "8+", icon: "CalendarDays", label: { ja: "年の経験", en: "Years of experience" } },
    { value: "40+", icon: "FolderCheck", label: { ja: "制作実績", en: "Sites delivered" } },
    { value: "10+", icon: "LayoutGrid", label: { ja: "対応ジャンル", en: "Industries served" } },
    { value: "100%", icon: "BadgeCheck", label: { ja: "納期遵守", en: "On-time delivery" } },
  ],
};

export const about = {
  heading: { ja: "プロフィール", en: "About Me" },
  lead: {
    ja: "お客様に寄り添うWebエンジニア",
    en: "A Web Engineer Who Stays Close to Your Business",
  },
  paragraphs: {
    ja: [
      "お客様のビジネスや課題を深く理解し、成果につながるシステム開発を第一に考えています。業務システムやWebアプリケーション、モバイルアプリ、AIを活用した開発まで幅広く対応し、企画・設計・開発・運用まで一貫してサポートいたします。",
      "システム開発では、現場の課題を丁寧にヒアリングし、使いやすさだけでなく、保守性・拡張性を考慮した設計を重視しています。AI技術を活用した業務効率化や自動化など、新しい技術も積極的に取り入れ、お客様にとって最適なソリューションをご提案します。",
      "ホームページやランディングページ制作では、ブランドイメージを大切にしながら、ユーザー目線の導線設計やCVR向上、SEOを意識したWebサイトを制作しています。見た目の美しさだけでなく、成果につながるサイトづくりを心掛けています。",
      "また、開発中は進捗状況を分かりやすく共有し、迅速かつ丁寧なコミュニケーションを徹底しています。Web制作やシステム開発が初めてのお客様にも安心してご依頼いただけるよう、一つひとつの工程を分かりやすくご説明しながら進めています。",
      "技術力だけでなく、「相談しやすさ」と「信頼関係」を大切にし、お客様のビジネスを支えるパートナーとして、長期的に価値を提供できる開発を目指しています。",
    ],
    en: [
      "I deeply understand your business and challenges, always prioritizing system development that leads to real results. I handle a broad range of work — business systems, web applications, mobile apps, and AI-powered development — supporting you end-to-end across planning, design, development, and operation.",
      "In system development, I carefully listen to on-the-ground challenges and prioritize designs that consider not only usability but also maintainability and scalability. I actively adopt new technologies, such as AI-driven efficiency and automation, to propose the optimal solution for you.",
      "For homepage and landing page production, I value your brand image while building websites with user-focused navigation, conversion improvement, and SEO in mind. Beyond visual beauty, I focus on creating sites that lead to real results.",
      "During development, I share progress in an easy-to-understand way and maintain fast, courteous communication. So that even clients new to web production or system development can feel at ease, I explain each step clearly as we proceed.",
      "Beyond technical skill, I value approachability and trust, aiming to deliver long-term value as a partner who supports your business.",
    ],
  },
  highlights: {
    ja: [
      "成果につながるWeb制作",
      "Web・モバイル・業務システム・AI開発の実績多数",
      "丁寧で分かりやすいコミュニケーション",
      "納期と品質を両立した開発体制",
    ],
    en: [
      "Web production focused on real results",
      "Proven work across web, mobile, business systems, and AI",
      "Clear, approachable communication",
      "Development that respects deadlines and quality",
    ],
  },
  valuesLabel: { ja: "大切にしている信条", en: "What I value" },
  values: {
    ja: [
      { title: "本質に向き合う", desc: "課題の背後にある目的と成果を見据え、最適な技術を選びます。" },
      { title: "使いやすさを最優先", desc: "利用者と運用者の両方にやさしい設計を心がけます。" },
      { title: "正直なコミュニケーション", desc: "わかりやすい言葉で進捗やリスクを丁寧にお伝えします。" },
      { title: "着実な改善", desc: "リリース後も改善につなげ、長期的な価値を高めます。" },
    ],
    en: [
      { title: "Focus on the real need", desc: "I choose technology based on the client’s goals, not trendy tools." },
      { title: "Prioritize usability", desc: "I design for both users and operators, making systems easy to use and maintain." },
      { title: "Communicate honestly", desc: "I share progress and risks clearly in plain language." },
      { title: "Improve steadily", desc: "I keep raising value after launch with continuous improvement." },
    ],
  },
  toolsLabel: { ja: "愛用ツール", en: "Daily toolkit" },
  tools: ["VS Code", "GitHub", "Figma", "Notion", "Slack", "Vercel", "AWS", "Docker"],
};

export interface Strength {
  icon: string;
  no: string;
  title: { ja: string; en: string };
  description: { ja: string; en: string };
}

export const strengthsSection = {
  heading: { ja: "選ばれる理由", en: "Why Clients Choose Me" },
  lead: {
    ja: "数あるエンジニアの中から、私が選ばれ続ける3つの理由。",
    en: "Three reasons clients keep choosing to work with me.",
  },
};

export const strengths: Strength[] = [
  {
    icon: "Workflow",
    no: "01",
    title: { ja: "ワンストップ制作", en: "One-stop Production" },
    description: {
      ja: "Webシステム、モバイルアプリ、業務システム、AI開発を同一の視点で設計。企画から納品・運用まで責任を持って進めます。",
      en: "I design web systems, mobile apps, business systems, and AI solutions with a consistent perspective, taking responsibility from concept through delivery and operation.",
    },
  },
  {
    icon: "Award",
    no: "02",
    title: { ja: "確かな制作実績", en: "Proven Track Record" },
    description: {
      ja: "伝統企業から成長事業まで、幅広い企業・団体をサポート。成果につながるWeb制作を多く手掛けています。",
      en: "I support organizations from established firms to growing ventures, delivering web production that leads to real business outcomes.",
    },
  },
  {
    icon: "MessagesSquare",
    no: "03",
    title: { ja: "安心のコミュニケーション", en: "Reliable Communication" },
    description: {
      ja: "丁寧な報告と合意を重ね、ずれのない進行を徹底します。お客様の期待に応える誠実な対応を大切にしています。",
      en: "I emphasize careful reporting and alignment so projects stay on track. I value honest, dependable communication that meets client expectations.",
    },
  },
];

export const skillCategories: SkillCategory[] = [
  {
    icon: "Layout",
    title: { ja: "Web制作・コーディング", en: "Web Production" },
    skills: ["HTML5", "CSS3", "SCSS", "JavaScript", "jQuery", "WordPress", "レスポンシブデザイン"],
  },
  {
    icon: "Code2",
    title: { ja: "モダンフロントエンド", en: "Modern Frontend" },
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: "Boxes",
    title: { ja: "ノーコード制作", en: "No-code" },
    skills: ["STUDIO", "STUDIO CMS", "CMS", "SEO"],
  },
  {
    icon: "Server",
    title: { ja: "バックエンド・システム", en: "Backend & Systems" },
    skills: ["Python", "PHP", "Node.js", "MySQL", "REST API"],
  },
  {
    icon: "BrainCircuit",
    title: { ja: "データ・自動化 / AI", en: "Data, Automation & AI" },
    skills: ["Selenium", "BeautifulSoup", "pandas", "スクレイピング", "機械学習"],
  },
  {
    icon: "Cloud",
    title: { ja: "モバイル・クラウド", en: "Mobile & Cloud" },
    skills: ["Swift / iOS", "AWS", "Vercel", "GitHub"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: { ja: "2023 — 現在", en: "2023 — Present" },
    role: { ja: "フリーランス（Web制作・開発）", en: "Freelance — Web & Development" },
    company: { ja: "個人事業", en: "Independent" },
    description: {
      ja: "コーポレートサイト・LP・ECサイトなどのWeb制作を中心に、WordPressやモダンなフロントエンドでの実装を数多く担当。あわせて、Pythonを用いた業務効率化ツールや、モバイルアプリ・システム開発にも取り組んでいます。",
      en: "Primarily web production — corporate sites, LPs, and e-commerce — implemented with WordPress and modern frontend stacks, alongside Python-based automation tools and mobile/system development.",
    },
    tags: ["WordPress", "Next.js", "Python", "Swift / iOS"],
  },
  {
    period: { ja: "2020 — 2023", en: "2020 — 2023" },
    role: { ja: "Web制作・コーディング", en: "Web Production & Coding" },
    company: { ja: "受託・協業", en: "Contract / Collaboration" },
    description: {
      ja: "医療・福祉・教育・コーポレートなど幅広い業種のWebサイト制作に携わり、デザインをもとにしたコーディング・CMS実装・公開までを担当。案件に応じてチームでの協業や、公開後の更新・運用にも対応してきました。",
      en: "Worked on websites across healthcare, welfare, education, and corporate sectors — coding from designs, CMS implementation, and launch — collaborating in teams and supporting post-launch updates as needed.",
    },
    tags: ["HTML / CSS", "jQuery", "WordPress", "STUDIO"],
  },
  {
    period: { ja: "2018 — 2020", en: "2018 — 2020" },
    role: { ja: "Webコーディング（キャリア初期）", en: "Web Coding (Early Career)" },
    company: { ja: "制作現場", en: "Production Work" },
    description: {
      ja: "Web制作の現場でコーディング・実装の実務を通じて基礎を習得。レスポンシブ対応やCMS構築、公開後の更新作業などを重ねながら、制作フロー全体への理解を深めました。",
      en: "Built the fundamentals through hands-on coding and implementation — responsive work, CMS builds, and post-launch updates — deepening my grasp of the whole production workflow.",
    },
    tags: ["HTML / CSS", "JavaScript", "レスポンシブデザイン"],
  },
];

export const projects: Project[] = [
  {
    title: { ja: "東北公済病院", en: "Tohoku Kosai Hospital" },
    categories: ["medical"],
    url: "https://tohokukosai.kkr.or.jp/",
    image: "med-tohokukosai.png",
    description: {
      ja: "国家公務員共済組合連合会が運営する、地域に根ざした総合病院の公式サイト。",
      en: "Official site for a community-focused general hospital run by the KKR federation.",
    },
  },
  {
    title: { ja: "岐阜県総合医療センター", en: "Gifu Prefectural General Medical Center" },
    categories: ["medical"],
    url: "https://www.gifu-hp.jp/index.html",
    image: "med-gifu.png",
    description: {
      ja: "岐阜県の高度・救急医療を担う総合医療センターの公式サイト。",
      en: "Official site for a prefectural center providing advanced and emergency care in Gifu.",
    },
  },
  {
    title: { ja: "横浜市立市民病院", en: "Yokohama City Municipal Hospital" },
    categories: ["medical"],
    url: "https://yokohama-shiminhosp.jp/index.html",
    image: "med-yokohama.png",
    description: {
      ja: "横浜市の地域医療の拠点となる市立総合病院の公式サイト。",
      en: "Official site for Yokohama's municipal general hospital, a regional care hub.",
    },
  },
  {
    title: { ja: "たまの病院", en: "Tamano Hospital" },
    categories: ["medical"],
    url: "https://tamano-hp.jp/",
    image: "med-tamano.png",
    description: {
      ja: "玉野地域の中核を担い、安心できる医療を提供する病院の公式サイト。",
      en: "Official site for a core hospital serving the Tamano region.",
    },
  },
  {
    title: { ja: "隈病院", en: "Kuma Hospital" },
    categories: ["medical"],
    url: "https://www.kuma-h.or.jp/",
    image: "med-kuma.png",
    description: {
      ja: "神戸市にある甲状腺疾患の専門病院の公式サイト。",
      en: "Official site for a thyroid-disease specialty hospital in Kobe.",
    },
  },
  {
    title: { ja: "武田病院グループ", en: "Takeda Hospital Group" },
    categories: ["medical"],
    url: "https://www.takedahp.or.jp/",
    image: "med-takeda.png",
    description: {
      ja: "医療・介護・健診を幅広く展開する病院グループのコーポレートサイト。",
      en: "Corporate site for a hospital group spanning medical, care, and health-check services.",
    },
  },
  {
    title: { ja: "山田メディカルクリニック", en: "Yamada Medical Clinic" },
    categories: ["medical"],
    url: "https://www.yamada-medical.or.jp/",
    image: "med-yamada.png",
    description: {
      ja: "岐阜駅前の総合診療所の公式サイト。",
      en: "Official site for a general clinic in front of Gifu Station.",
    },
  },
  {
    title: { ja: "緑の森どうぶつ病院", en: "Midori-no-Mori Animal Hospital" },
    categories: ["animal"],
    url: "https://midori-no-mori.jp/",
    image: "ani-midori.png",
    description: {
      ja: "北海道最大級の動物病院グループの公式サイト。",
      en: "Official site for one of Hokkaido's largest veterinary hospital groups.",
    },
  },
  {
    title: { ja: "ほごねこクリニック", en: "Hogoneko Clinic" },
    categories: ["animal"],
    url: "https://hogoneco-clinic.neco-republic.jp/",
    image: "ani-hogoneco.png",
    description: {
      ja: "保護猫専用の不妊手術病院（ネコリパブリック）のサイト。",
      en: "Site for a spay/neuter clinic dedicated to rescue cats (Neco Republic).",
    },
  },
  {
    title: { ja: "KINS WITH 動物病院", en: "KINS WITH Animal Hospital" },
    categories: ["animal"],
    url: "https://kinswith-vet.com/",
    image: "ani-kinswith.png",
    description: {
      ja: "「常在菌から診る」新しい動物病院のブランドサイト。",
      en: "Brand site for a new veterinary hospital centered on microbiome-based care.",
    },
  },
  {
    title: { ja: "株式会社中原組", en: "Nakahara-gumi Co., Ltd." },
    categories: ["corporate"],
    url: "https://www.nakaharagumi.jp/",
    image: "corp-nakahara.png",
    description: {
      ja: "土木×建築でまちづくりを担う総合建設会社のコーポレートサイト。",
      en: "Corporate site for a general contractor working across civil and building construction.",
    },
  },
  {
    title: { ja: "株式会社河野製作所", en: "Kohno Mfg. Co., Ltd." },
    categories: ["corporate"],
    url: "https://kohno-mfg.co.jp/",
    image: "corp-kohno.png",
    description: {
      ja: "岐阜県関市で金属（板金・レーザー）加工を手がけるメーカーのサイト。",
      en: "Site for a sheet-metal and laser processing manufacturer in Seki, Gifu.",
    },
  },
  {
    title: { ja: "FineOne", en: "FineOne" },
    categories: ["corporate"],
    url: "https://www.fine-1.co.jp/",
    image: "corp-fine.png",
    description: {
      ja: "オーダーメイド枕・布団など寝具専門店（岐阜市）のサイト。",
      en: "Site for a made-to-order pillow and bedding specialist in Gifu.",
    },
  },
  {
    title: { ja: "株式会社トリニティーラボ", en: "Trinity-Lab Inc." },
    categories: ["corporate"],
    url: "https://trinity-lab.com/",
    image: "corp-trinity.png",
    description: {
      ja: "摩擦摩耗測定機・触覚/食感評価試験機メーカーのコーポレートサイト。",
      en: "Corporate site for a maker of friction/wear and tactile-evaluation testing instruments.",
    },
  },
  {
    title: { ja: "大野こども園", en: "Ono Kodomoen" },
    categories: ["corporate"],
    url: "https://www.onons.jp/",
    image: "corp-onons.png",
    description: {
      ja: "岐阜県大野町の幼保連携型認定こども園のサイト。",
      en: "Site for a certified early-childhood center in Ono, Gifu.",
    },
  },
  {
    title: { ja: "一宮美容クリニック", en: "Ichinomiya Beauty Clinic" },
    categories: ["beauty", "lp"],
    url: "https://138beauty.jp/",
    image: "corp-138beauty.png",
    description: {
      ja: "愛知県一宮市の美容外科・美容皮膚科クリニックのサイト。",
      en: "Site for a cosmetic surgery and dermatology clinic in Ichinomiya, Aichi.",
    },
  },
  {
    title: { ja: "スヴェンソン 医療用ウィッグ", en: "Svenson Medical Wigs" },
    categories: ["beauty"],
    url: "https://www.datsumousyou-wig.net/",
    image: "brand-wig.png",
    description: {
      ja: "円形脱毛症向けの医療用ウィッグ・ヘアケアサービスのサイト。",
      en: "Site for medical wigs and hair-care services for alopecia.",
    },
  },
  {
    title: { ja: "ロート製薬 商品情報サイト", en: "Rohto Pharmaceutical" },
    categories: ["beauty"],
    url: "https://jp.rohto.com/",
    image: "brand-rohto.png",
    description: {
      ja: "化粧品・スキンケアを中心にロート製薬の商品情報を紹介するブランドサイト。",
      en: "Brand site presenting Rohto's cosmetics, skincare, and healthcare products.",
    },
  },
  {
    title: { ja: "リストーナ", en: "Restorna" },
    categories: ["beauty", "lp"],
    url: "https://restorna.jp/",
    image: "brand-restorna.png",
    description: {
      ja: "横浜のプライベート＆コンディショニングジムのサービスサイト。",
      en: "Service site for a private conditioning and wellness gym in Yokohama.",
    },
  },
  {
    title: { ja: "指輪工房 G.festa", en: "G.festa Ring Atelier" },
    categories: ["brand", "lp"],
    url: "https://www.yubiwatsukuru.com/",
    image: "brand-yubiwa.png",
    description: {
      ja: "手作り結婚指輪の工房（名古屋・岐阜ほか）のブランドサイト。",
      en: "Brand site for a handmade wedding-ring atelier across Nagoya, Gifu, and more.",
    },
  },
  {
    title: { ja: "長良川温泉 十八楼", en: "Nagaragawa Onsen Juhachiro" },
    categories: ["brand", "food"],
    url: "https://www.18rou.com/",
    image: "brand-18rou.png",
    description: {
      ja: "岐阜・長良川温泉の老舗旅館の公式サイト。",
      en: "Official site for a long-established ryokan at Nagaragawa Onsen, Gifu.",
    },
  },
  {
    title: { ja: "クリーニングの和光", en: "Wako Cleaning" },
    categories: ["brand", "lp"],
    url: "http://takuhai.cl-wakou.com/",
    image: "brand-takuhai.png",
    description: {
      ja: "送料・保管無料の宅配クリーニングサービスのサイト。",
      en: "Site for a delivery laundry service with free shipping and storage.",
    },
  },
  {
    title: { ja: "はな工房", en: "Hana Kobo" },
    categories: ["brand"],
    url: "https://hana-kobo.jp/",
    image: "brand-hana.png",
    description: {
      ja: "犬用車椅子・歩行器のオーダーメイド専門店のサイト。",
      en: "Site for a made-to-order maker of dog wheelchairs and walkers.",
    },
  },
  {
    title: { ja: "佐藤歯科医院 採用サイト", en: "Sato Dental — Recruiting" },
    categories: ["recruit"],
    url: "https://recruit.dentist-sato.com/",
    image: "rec-sato.png",
    description: {
      ja: "美濃加茂市の歯科医院（医療法人社団神明会）の採用サイト。",
      en: "Recruiting site for a dental clinic in Minokamo, Gifu.",
    },
  },
  {
    title: { ja: "TRAIL INC.", en: "TRAIL INC." },
    categories: ["recruit"],
    url: "https://trail-inc.jp/",
    image: "rec-trail.png",
    description: {
      ja: "オープンマネジメントを掲げる企業の採用・コーポレートサイト。",
      en: "Recruiting and corporate site for a company built on open management.",
    },
  },
  {
    title: { ja: "あすかのサマバケ", en: "Asuka Summer Program" },
    categories: ["education"],
    url: "https://samabake-asuka.com/",
    image: "edu-asuka.png",
    description: {
      ja: "奈良県明日香村の子ども向け体験プログラムの祭典サイト。",
      en: "Site for a festival of children's hands-on programs in Asuka, Nara.",
    },
  },
  {
    title: { ja: "嘉瀬こどもの森", en: "Kase Kodomo-no-Mori" },
    categories: ["education"],
    url: "https://seigaku.jp/kase/",
    image: "edu-seigaku.png",
    description: {
      ja: "佐賀市の認定こども園のサイト。",
      en: "Site for a certified early-childhood center in Saga City.",
    },
  },
  {
    title: { ja: "神戸女子大学", en: "Kobe Women's University" },
    categories: ["education"],
    url: "https://www.kobe-wu.ac.jp/",
    image: "edu-kobewu.png",
    description: {
      ja: "神戸女子大学の公式サイト。",
      en: "Official site for Kobe Women's University.",
    },
  },
  {
    title: { ja: "社会福祉法人 功有会", en: "Koyukai Welfare" },
    categories: ["welfare"],
    url: "https://www.yamatoen.or.jp/",
    image: "wel-yamatoen.png",
    description: {
      ja: "奈良県下で18施設・18サービスを展開する社会福祉法人のサイト。",
      en: "Site for a social-welfare corporation running 18 facilities across Nara.",
    },
  },
  {
    title: { ja: "メディケア・リハビリ", en: "Medi-care Rehabilitation" },
    categories: ["welfare"],
    url: "https://kango.medi-care.co.jp/",
    image: "wel-medicare.png",
    description: {
      ja: "訪問看護・リハビリを提供する企業の採用・サービスサイト。",
      en: "Site for a company providing home-visit nursing and rehabilitation.",
    },
  },
  {
    title: { ja: "仁誠会", en: "Jinseikai" },
    categories: ["welfare"],
    url: "https://www.jinseikai.or.jp/",
    image: "wel-jinseikai.png",
    description: {
      ja: "熊本で人工透析・介護・リハビリを担う医療法人のサイト。",
      en: "Site for a Kumamoto medical group offering dialysis, care, and rehabilitation.",
    },
  },
  {
    title: { ja: "肌ナチュール", en: "HADANATURE" },
    categories: ["welfare"],
    url: "https://hadanature-rmc.jp/",
    image: "wel-hadanature.png",
    description: {
      ja: "医療・リハビリと連携したスキンケアブランドのサイト。",
      en: "Site for a skincare brand tied to medical and rehabilitation services.",
    },
  },
  {
    title: { ja: "タウン情報おかやま", en: "Town Joho Okayama" },
    categories: ["shopping"],
    url: "https://tjokayama.jp/",
    image: "shop-tj.png",
    description: {
      ja: "岡山のグルメ・お出かけ情報を届けるタウン情報Webメディア。",
      en: "A local web media delivering gourmet and outing information for Okayama.",
    },
  },
  {
    title: { ja: "三越伊勢丹オンラインストア", en: "Mitsukoshi Isetan Online" },
    categories: ["shopping"],
    url: "https://www.mistore.jp/shopping",
    image: "shop-mistore.png",
    description: {
      ja: "三越伊勢丹の公式オンラインストア・通販サイト。",
      en: "Official online store for Mitsukoshi Isetan department stores.",
    },
  },
  {
    title: { ja: "紀ノ国屋 オンラインストア", en: "Kinokuniya Online Store" },
    categories: ["shopping"],
    url: "https://www.super-kinokuniya.jp/",
    image: "shop-kinokuniya.png",
    description: {
      ja: "高級スーパー紀ノ国屋の公式オンラインストア。",
      en: "Official online store for the premium supermarket Kinokuniya.",
    },
  },
  {
    title: { ja: "YogaStudio アンジャリ六甲", en: "Yoga Studio Anjali Rokko" },
    categories: ["sports"],
    url: "https://anjalirokko.jp/",
    image: "spo-anjali.png",
    description: {
      ja: "神戸・六甲のヨガスタジオのサイト。",
      en: "Site for a yoga studio in Rokko, Kobe.",
    },
  },
  {
    title: { ja: "横浜トライアスロン大会", en: "Yokohama Triathlon (WTS)" },
    categories: ["sports"],
    url: "https://yokohamatriathlon.jp/wts/",
    image: "spo-triathlon.png",
    description: {
      ja: "ワールドトライアスロンシリーズ横浜大会の情報サイト。",
      en: "Information site for the World Triathlon Series Yokohama race.",
    },
  },
  {
    title: { ja: "Dr.トレーニング", en: "Dr. Training" },
    categories: ["sports"],
    url: "https://drtraining.jp/",
    image: "spo-drtraining.png",
    description: {
      ja: "パーソナルトレーニング・パーソナルジムの公式サイト。",
      en: "Official site for a personal-training gym.",
    },
  },
  {
    title: { ja: "日本防犯設備協会", en: "SSAJ — Security Equipment Assoc." },
    categories: ["certification", "public"],
    url: "https://www.ssaj.or.jp/security_officer/shiken.html",
    image: "cert-ssaj.png",
    description: {
      ja: "防犯設備士の資格試験を案内する公益社団法人のサイト。",
      en: "Site for a public-interest association running the security-equipment technician exam.",
    },
  },
  {
    title: { ja: "ハウスキーピング協会", en: "Housekeeping Association" },
    categories: ["certification", "public"],
    url: "https://housekeeping.or.jp/",
    image: "cert-housekeeping.png",
    description: {
      ja: "整理収納アドバイザーなどの資格を運営する協会の公式サイト。",
      en: "Official site for an association running organizing and tidying certifications.",
    },
  },
  {
    title: { ja: "日本防犯学校", en: "Japan Crime-Prevention School" },
    categories: ["certification", "public"],
    url: "http://j-ss.org/",
    image: "cert-jss.png",
    description: {
      ja: "防犯の専門資格・講座を提供する一般社団法人のサイト。",
      en: "Site for an association offering crime-prevention qualifications and courses.",
    },
  },
  {
    title: { ja: "資格スクエア", en: "Shikaku Square" },
    categories: ["certification"],
    url: "https://www.shikaku-square.com/",
    image: "cert-shikaku.png",
    description: {
      ja: "難関資格に特化したオンライン予備校・通信講座のサイト。",
      en: "Site for an online prep school specializing in difficult professional qualifications.",
    },
  },
  {
    title: { ja: "フォーサイト", en: "Foresight" },
    categories: ["certification"],
    url: "https://www.foresight.jp/",
    image: "cert-foresight.png",
    description: {
      ja: "資格試験の通信教育・通信講座を提供するオンライン講座のサイト。",
      en: "Site for an online distance-learning provider for professional qualification exams.",
    },
  },
  {
    title: { ja: "Paw Park", en: "Paw Park" },
    categories: ["leisure", "nocode"],
    url: "https://pawpark.jp/",
    image: "noc-pawpark.png",
    description: {
      ja: "犬の幼稚園・保育園＆ドッグランのサイト（STUDIO / ノーコード制作）。",
      en: "Site for a dog daycare and dog run, built with STUDIO (no-code).",
    },
  },
  {
    title: { ja: "しまなみブルワリー", en: "Shimanami Brewery" },
    categories: ["food", "nocode"],
    url: "https://shimanami-brewery.com/",
    image: "noc-shimanami.png",
    description: {
      ja: "クラフトビールブランドの公式サイト（STUDIO / ノーコード制作）。",
      en: "Official brand site for a craft brewery, built with STUDIO (no-code).",
    },
  },
  {
    title: { ja: "食楽堂 蓬左〈hōsa〉", en: "Hosa Nagoya" },
    categories: ["nocode"],
    url: "https://www.hosa.nagoya/",
    image: "noc-hosa.png",
    description: {
      ja: "尾張名古屋の味を未来へつなぐ食のブランドサイト（STUDIO / ノーコード制作）。",
      en: "A Nagoya food-brand site carrying local flavors forward, built with STUDIO (no-code).",
    },
  },
  {
    title: { ja: "Webスクレイピング自動収集ツール", en: "Web Scraping Automation Tool" },
    categories: ["tool"],
    image: "tool-scraping.png",
    description: {
      ja: "Webサイトから企業・求人・商品情報などを自動で収集・整形し、Excel／CSVで出力する業務効率化ツール。動的サイト（JavaScript）にも対応し、定期実行で最新データを自動更新します。",
      en: "An automation tool that scrapes company, job, and product data from websites, cleans it, and exports to Excel/CSV — handling JavaScript-rendered sites and refreshing data on a schedule.",
    },
    role: {
      ja: "要件整理から収集ロジックの設計・実装、運用の自動化までを担当。",
      en: "Owned requirements, scraping-logic design and implementation, and operational automation.",
    },
    tech: ["Python", "Selenium", "BeautifulSoup", "requests", "pandas", "openpyxl"],
    scope: {
      ja: [
        "対象サイトの構造解析と収集ロジックの設計",
        "動的サイト（JavaScript）への対応（Selenium）",
        "アクセス間隔の制御・エラー処理・リトライの実装",
        "データの整形・重複除去（pandas）",
        "Excel／CSV出力と定期実行による自動更新",
      ],
      en: [
        "Analyzing target-site structure and designing scraping logic",
        "Handling JavaScript-rendered sites with Selenium",
        "Rate-limiting, error handling, and retry logic",
        "Data cleaning and de-duplication with pandas",
        "Excel/CSV export and scheduled auto-refresh",
      ],
    },
  },
  {
    title: { ja: "GPS見守りサービス", en: "GPS Monitoring Service" },
    categories: ["app"],
    image: "app-gps.png",
    description: {
      ja: "GPSトラッカーの位置情報をAWSで受信・保存し、iPhoneアプリでリアルタイムに確認・通知する見守りシステム。ジオフェンスやSOS通知にも対応します。",
      en: "A child-safety system that ingests GPS-tracker location data on AWS and lets guardians view it in real time on an iPhone app, with geofence and SOS alerts.",
    },
    role: {
      ja: "iOSアプリとAWSバックエンドの設計・実装を担当。",
      en: "Designed and built the iOS app and the AWS backend.",
    },
    tech: ["Swift", "iOS", "AWS Lambda", "API Gateway", "Amazon RDS", "Amazon S3", "Amazon SNS", "MySQL"],
    scope: {
      ja: [
        "GPSトラッカーからの位置情報受信基盤（TCP/UDP）",
        "REST APIによる認証・データ提供（Lambda / API Gateway）",
        "位置履歴・端末情報の保存（Amazon RDS / MySQL）",
        "ジオフェンス・SOSのプッシュ通知（Amazon SNS）",
        "iPhoneアプリでのリアルタイム地図表示・履歴確認",
      ],
      en: [
        "Location-ingestion backend from GPS trackers (TCP/UDP)",
        "Authentication and data REST API (Lambda / API Gateway)",
        "Location-history and device storage (Amazon RDS / MySQL)",
        "Geofence and SOS push notifications (Amazon SNS)",
        "Real-time map view and history in the iPhone app",
      ],
    },
  },
];

export const services: Service[] = [
  {
    icon: "Code2",
    title: { ja: "ホームページ制作", en: "Homepage Production" },
    description: {
      ja: "コーポレートサイトやブランドサイトの制作。訴求力のあるデザインと使いやすさを両立させます。",
      en: "Corporate and brand website production with compelling design and strong usability.",
    },
  },
  {
    icon: "Sparkles",
    title: { ja: "ランディングページ制作", en: "Landing Page Production" },
    description: {
      ja: "キャンペーンやサービス訴求に最適化したLPを制作し、CVR向上とリード獲得をサポートします。",
      en: "Landing pages optimized for campaigns and service promotion, designed to increase conversions and leads.",
    },
  },
  {
    icon: "ShieldCheck",
    title: { ja: "業務システム開発", en: "Business Systems Development" },
    description: {
      ja: "受発注・会計・顧客管理などの業務システムを、使いやすさと運用性を両立して構築します。",
      en: "Business systems for order management, accounting, CRM, and more, built for usability and maintainability.",
    },
  },
  {
    icon: "Smartphone",
    title: { ja: "モバイルアプリ開発", en: "Mobile App Development" },
    description: {
      ja: "iOS・Android・クロスプラットフォームに対応。快適な操作性とスムーズな体験を備えたアプリを開発します。",
      en: "iOS, Android, and cross-platform apps built for smooth, comfortable user experiences.",
    },
  },
  {
    icon: "BrainCircuit",
    title: { ja: "AI開発 / データ活用", en: "AI & Data Solutions" },
    description: {
      ja: "生成AIやLLM/RAGの導入、データ分析・自動化など、AIを活かした課題解決を支援します。",
      en: "Generative AI, LLM/RAG integration, data analysis, and automation to solve real business problems.",
    },
  },
  {
    icon: "Cloud",
    title: { ja: "クラウド / インフラ構築", en: "Cloud & Infrastructure" },
    description: {
      ja: "AWS・GCPでのスケーラブルなインフラ設計と運用自動化を提供します。",
      en: "Scalable cloud infrastructure and operations automation on AWS and GCP.",
    },
  },
  {
    icon: "Compass",
    title: { ja: "技術顧問 / コンサルティング", en: "Technical Advisory" },
    description: {
      ja: "技術選定、アーキテクチャ設計、運用改善など、開発方針の策定を支援します。",
      en: "I support tech selection, architecture planning, and operations improvement.",
    },
  },
  {
    icon: "RefreshCw",
    title: { ja: "改善・保守", en: "Refinement & Maintenance" },
    description: {
      ja: "リリース後の改善、保守、運用サポートまで一貫して対応します。",
      en: "I handle post-launch improvement, maintenance, and operational support.",
    },
  },
];

export const servicesSection = {
  heading: { ja: "提供サービス", en: "What I Do" },
  lead: {
    ja: "Webシステム、モバイルアプリ、業務システム、AI開発まで、成果にこだわる開発を幅広く提供します。",
    en: "From web systems and mobile apps to business systems and AI, I deliver results-focused development across a broad range.",
  },
};

export const skillsSection = {
  heading: { ja: "技術スタック", en: "Skills & Technologies" },
  lead: {
    ja: "Web制作を軸に、システム・ツール開発まで対応できる技術。",
    en: "A stack centred on web production, extending into systems and tooling.",
  },
};

export const experienceSection = {
  heading: { ja: "経歴", en: "Experience" },
  lead: {
    ja: "Web制作を軸に歩んできた、これまでのあゆみ。",
    en: "My path so far, centred on web production.",
  },
};

export const projectsSection = {
  heading: { ja: "制作実績", en: "Selected Work" },
  lead: {
    ja: "医療・美容・コーポレート・教育・福祉・スポーツなど、さまざまなジャンルのWeb制作を手がけてきました。カテゴリーから絞り込んでご覧いただけます。",
    en: "Web production across medical, beauty, corporate, education, welfare, sports, and more — filter by category below.",
  },
  note: {
    ja: "※ 制作・実装に携わった案件を掲載しています。各カードから担当内容の詳細をご覧いただけます。",
    en: "* Projects I contributed to. Open any card for details on my role.",
  },
};

export interface Commitment {
  icon: string;
  title: { ja: string; en: string };
  description: { ja: string; en: string };
}

export const commitmentsSection = {
  heading: { ja: "安心のお約束", en: "My Commitment to You" },
  lead: {
    ja: "大切なお仕事を安心してお任せいただくために、私が必ず守ることをお約束します。",
    en: "So you can entrust your project with complete peace of mind, here is what I always guarantee.",
  },
};

export const commitments: Commitment[] = [
  {
    icon: "ShieldCheck",
    title: { ja: "秘密保持の徹底", en: "Strict Confidentiality" },
    description: {
      ja: "NDA(秘密保持契約)の締結に対応。お客様の情報・ソースコード・ノウハウは厳重に管理します。",
      en: "I sign NDAs on request and rigorously protect your data, source code, and know-how.",
    },
  },
  {
    icon: "FileSignature",
    title: { ja: "契約書の取り交わし", en: "Clear Contracts" },
    description: {
      ja: "業務委託契約を締結し、業務範囲・納期・条件を明文化。インボイス制度にも対応します。",
      en: "We formalize scope, deadlines, and terms in a written contract. Qualified-invoice compliant.",
    },
  },
  {
    icon: "ReceiptText",
    title: { ja: "明確なお見積り", en: "Transparent Pricing" },
    description: {
      ja: "作業内容と費用を事前に明示。後から追加費用が発生しない、透明性の高いお見積りをお出しします。",
      en: "Costs and scope are agreed up front — no surprise fees, no hidden charges, ever.",
    },
  },
  {
    icon: "Activity",
    title: { ja: "進捗の定期報告", en: "Regular Progress Reports" },
    description: {
      ja: "進捗状況を定期的に分かりやすくご報告。専門用語に頼らず、いつでも状況を把握いただけます。",
      en: "I report progress regularly in plain language, so you always know exactly where things stand.",
    },
  },
  {
    icon: "Clock",
    title: { ja: "迅速なレスポンス", en: "Fast Response" },
    description: {
      ja: "ご連絡には原則1営業日以内に返信。スピーディーで誠実なコミュニケーションを心がけます。",
      en: "I reply within one business day as a rule — fast, honest communication you can count on.",
    },
  },
  {
    icon: "LifeBuoy",
    title: { ja: "納品後のサポート", en: "Post-Delivery Support" },
    description: {
      ja: "納品して終わりではありません。運用・保守や改善のご相談にも継続して対応します。",
      en: "Delivery isn't the end — I stay available for operations, maintenance, and future improvements.",
    },
  },
];

export interface ProcessStep {
  no: string;
  title: { ja: string; en: string };
  description: { ja: string; en: string };
}

export const processSection = {
  heading: { ja: "ご依頼の流れ", en: "How We'll Work Together" },
  lead: {
    ja: "お問い合わせから納品・運用まで、安心して進めていただける明確なステップ。",
    en: "A clear, reassuring path from first inquiry through delivery and beyond.",
  },
};

export const processSteps: ProcessStep[] = [
  {
    no: "01",
    title: { ja: "お問い合わせ", en: "Inquiry" },
    description: {
      ja: "フォームまたはメールでお気軽にご連絡ください。まずはお話をお伺いします。",
      en: "Reach out via the form or email. We start by simply listening to your needs.",
    },
  },
  {
    no: "02",
    title: { ja: "ヒアリング・ご提案", en: "Discovery & Proposal" },
    description: {
      ja: "課題や目的を丁寧にヒアリングし、最適な進め方と技術をご提案します。",
      en: "I carefully understand your goals, then propose the best approach and technology.",
    },
  },
  {
    no: "03",
    title: { ja: "お見積り・ご契約", en: "Quote & Contract" },
    description: {
      ja: "明確なお見積りを提示し、ご納得いただいたうえで契約を締結します。",
      en: "I provide a transparent quote and we sign a contract once you're fully comfortable.",
    },
  },
  {
    no: "04",
    title: { ja: "設計・開発", en: "Design & Development" },
    description: {
      ja: "進捗を定期的に共有しながら、品質にこだわって設計・開発を進めます。",
      en: "I build with a focus on quality, sharing progress with you along the way.",
    },
  },
  {
    no: "05",
    title: { ja: "テスト・納品", en: "Testing & Delivery" },
    description: {
      ja: "入念なテストを経て納品。ご確認いただき、必要な調整を行います。",
      en: "After thorough testing I deliver, then refine based on your feedback.",
    },
  },
  {
    no: "06",
    title: { ja: "運用・保守サポート", en: "Operation & Support" },
    description: {
      ja: "納品後も運用・保守や追加開発を継続的にサポートします。",
      en: "I continue to support operations, maintenance, and future enhancements.",
    },
  },
];

export const caseStudiesSection = {
  heading: { ja: "注目の制作事例", en: "Featured Work" },
  lead: {
    ja: "実際に手がけたサイトの中から、代表的な事例をピックアップしてご紹介します。",
    en: "A closer look at a few representative sites I've actually built.",
  },
  labels: {
    overview: { ja: "概要", en: "Overview" },
    scope: { ja: "対応内容", en: "Scope of Work" },
    tech: { ja: "使用技術", en: "Skills & Tech" },
  },
  note: {
    ja: "※ 各事例の「サイトを見る」から実際のサイトをご覧いただけます。",
    en: "* Open the live site from “Visit site” on each case.",
  },
};

// URLs (from `projects`) to spotlight as case studies. Real work only — the
// screenshot, title, and description come straight from the project data.
export const featuredCaseStudies: string[] = [
  "https://tohokukosai.kkr.or.jp/",
  "https://www.nakaharagumi.jp/",
  "https://138beauty.jp/",
];

export interface PricingPlan {
  name: { ja: string; en: string };
  price: { ja: string; en: string };
  unit: { ja: string; en: string };
  description: { ja: string; en: string };
  features: { ja: string[]; en: string[] };
  highlighted?: boolean;
  cta: { ja: string; en: string };
}

export const pricingSection = {
  heading: { ja: "料金プラン", en: "Pricing" },
  lead: {
    ja: "ご予算やフェーズに合わせて、3つの柔軟なプランをご用意しています。",
    en: "Three flexible engagement models to match your budget and project phase.",
  },
  note: {
    ja: "※ 金額はあくまで目安です。要件をお伺いし、正式なお見積りをご提示します。",
    en: "* Figures are indicative. I provide a formal quote after understanding your requirements.",
  },
};

export const pricingPlans: PricingPlan[] = [
  {
    name: { ja: "スポット", en: "Spot" },
    price: { ja: "¥50,000〜", en: "from ¥50k" },
    unit: { ja: "/ 件", en: "/ task" },
    description: {
      ja: "技術相談・コードレビュー・トラブル対応など、単発のご依頼に。",
      en: "For one-off needs — consulting, code review, or troubleshooting.",
    },
    features: {
      ja: ["技術相談・アドバイス", "コードレビュー", "スポットでの不具合対応", "オンライン打ち合わせ"],
      en: ["Technical consulting", "Code review", "Spot bug fixing", "Online meetings"],
    },
    cta: { ja: "相談する", en: "Get in touch" },
  },
  {
    name: { ja: "月額（準委任）", en: "Monthly Retainer" },
    price: { ja: "¥400,000〜", en: "from ¥400k" },
    unit: { ja: "/ 月", en: "/ month" },
    description: {
      ja: "継続的な開発・改善に。チームの一員として伴走します。",
      en: "For ongoing development — I work alongside your team as a partner.",
    },
    features: {
      ja: [
        "週2〜5日の柔軟な稼働",
        "設計から実装・運用まで",
        "定期的な進捗報告",
        "技術選定・アーキテクチャ支援",
        "優先的なサポート対応",
      ],
      en: [
        "Flexible 2–5 days / week",
        "Design to build to operations",
        "Regular progress reports",
        "Architecture & tech guidance",
        "Priority support",
      ],
    },
    highlighted: true,
    cta: { ja: "このプランで相談", en: "Start a conversation" },
  },
  {
    name: { ja: "プロジェクト（請負）", en: "Project (Fixed)" },
    price: { ja: "個別見積り", en: "Custom quote" },
    unit: { ja: "", en: "" },
    description: {
      ja: "明確なゴールがある案件に。要件に応じた一括のお見積り。",
      en: "For well-defined scopes — a fixed quote tailored to requirements.",
    },
    features: {
      ja: ["要件定義・設計から対応", "成果物ベースの契約", "明確な納期とマイルストーン", "納品後の保守対応", "品質保証"],
      en: ["From requirements & design", "Deliverable-based contract", "Clear milestones & deadline", "Post-delivery support", "Quality assurance"],
    },
    cta: { ja: "見積りを依頼", en: "Request a quote" },
  },
];

export interface Testimonial {
  quote: { ja: string; en: string };
  author: string;
  role: { ja: string; en: string };
}

export const testimonialsSection = {
  heading: { ja: "お客様の声", en: "What Clients Say" },
  lead: {
    ja: "ご一緒したお客様からいただいた評価の一部をご紹介します。",
    en: "A few words from clients I've had the pleasure of working with.",
  },
  note: {
    ja: "※ 掲載許諾済み。社名等は一部伏せています（サンプル）。",
    en: "* Published with permission; some names withheld (sample content).",
  },
};

export const testimonials: Testimonial[] = [
  {
    quote: {
      ja: "技術力はもちろん、こちらの意図を汲み取る理解力が抜群でした。曖昧な要望を的確な形にしてくれて、安心して任せられました。",
      en: "Beyond strong technical skill, his ability to grasp our intent was outstanding. He turned vague requests into exactly what we needed — we felt safe entrusting the work to him.",
    },
    author: "K. Sato",
    role: { ja: "SaaSスタートアップ / CTO", en: "CTO, SaaS Startup" },
  },
  {
    quote: {
      ja: "進捗の報告が丁寧で、開発の状況が常に見えて安心でした。納期も品質も期待以上。またぜひお願いしたいです。",
      en: "His progress reports were so clear that we always knew where things stood. Both the timeline and the quality exceeded our expectations. We'll absolutely work with him again.",
    },
    author: "M. Tanaka",
    role: { ja: "EC事業会社 / 事業責任者", en: "Head of Business, E-Commerce" },
  },
  {
    quote: {
      ja: "難しい技術課題を一つひとつ分かりやすく説明してくれて、非エンジニアの私たちでも判断ができました。誠実な仕事ぶりに感謝しています。",
      en: "He explained tough technical issues in plain terms, so even our non-engineers could make decisions. We're grateful for his honest, dependable work.",
    },
    author: "Y. Suzuki",
    role: { ja: "製造業 / DX推進担当", en: "DX Lead, Manufacturing" },
  },
  {
    quote: {
      ja: "病院サイトのリニューアルをお願いしました。患者さま目線の分かりやすい導線で、お問い合わせや予約の反応が目に見えて増えました。",
      en: "We asked for a hospital site renewal. The patient-focused, easy-to-follow layout noticeably increased inquiries and bookings.",
    },
    author: "H. Nakamura",
    role: { ja: "医療法人 / 広報ご担当", en: "PR, Medical Corporation" },
  },
  {
    quote: {
      ja: "採用サイトを制作いただきました。医院の雰囲気がしっかり伝わり、応募の質が上がったと実感しています。",
      en: "You built our recruiting site. It conveys the clinic's atmosphere well, and we've felt a real rise in applicant quality.",
    },
    author: "R. Kobayashi",
    role: { ja: "歯科医院 / 院長", en: "Director, Dental Clinic" },
  },
  {
    quote: {
      ja: "こちらの想いを丁寧に汲み取ってくださり、温かみのあるサイトに仕上げてくれました。スタッフからも好評です。",
      en: "You carefully captured what we wanted and delivered a warm, welcoming site. Our staff love it too.",
    },
    author: "A. Yoshida",
    role: { ja: "動物病院 / 院長", en: "Director, Animal Hospital" },
  },
  {
    quote: {
      ja: "施設やサービスが多く情報整理が大変でしたが、見やすくまとめていただきました。更新もしやすく助かっています。",
      en: "We had many facilities and services to organize, but everything was arranged clearly — and it's easy to update.",
    },
    author: "T. Ito",
    role: { ja: "社会福祉法人 / 採用ご担当", en: "Recruiting, Welfare Corporation" },
  },
  {
    quote: {
      ja: "保護者の方にも見やすいと好評です。スマホ対応もばっちりで、安心してお任せできました。",
      en: "Parents say it's easy to read. Mobile support is flawless, and we felt secure leaving it in your hands.",
    },
    author: "M. Watanabe",
    role: { ja: "認定こども園 / 園長", en: "Principal, Kindergarten" },
  },
  {
    quote: {
      ja: "会社の信頼感が伝わるデザインに仕上げていただきました。求人の応募にもつながっていて満足しています。",
      en: "The design conveys our company's trustworthiness, and it's even driving job applications. Very satisfied.",
    },
    author: "S. Yamamoto",
    role: { ja: "建設会社 / 代表取締役", en: "CEO, Construction Company" },
  },
  {
    quote: {
      ja: "LPのCVRが大きく改善しました。数字を意識したご提案をしてくださるので、しっかり成果につながっています。",
      en: "Our LP's conversion rate improved significantly. The data-minded proposals really translate into results.",
    },
    author: "N. Kato",
    role: { ja: "美容クリニック / マーケティング", en: "Marketing, Beauty Clinic" },
  },
  {
    quote: {
      ja: "ブランドの世界観をそのまま形にしてくれました。予約導線も分かりやすく、新規のお客様が増えました。",
      en: "You brought our brand's world to life. The booking flow is clear, and we've gained new customers.",
    },
    author: "E. Matsumoto",
    role: { ja: "ヨガスタジオ / オーナー", en: "Owner, Yoga Studio" },
  },
  {
    quote: {
      ja: "商品の魅力が伝わる作りで、購入までの流れもスムーズ。売上アップに貢献いただきました。",
      en: "The build showcases our products and makes the path to purchase smooth. It boosted our sales.",
    },
    author: "K. Hayashi",
    role: { ja: "オンラインストア / 店長", en: "Manager, Online Store" },
  },
  {
    quote: {
      ja: "分かりにくかった講座・試験情報を整理していただき、申込みがスムーズになりました。対応も迅速で安心です。",
      en: "You organized our confusing course and exam info, making sign-ups smooth. Fast, reassuring support.",
    },
    author: "D. Shimizu",
    role: { ja: "資格スクール / 運営ご担当", en: "Operations, Certification School" },
  },
  {
    quote: {
      ja: "ブランドサイトを丁寧に作り込んでいただきました。細部までこだわる姿勢に信頼が持てます。",
      en: "You crafted our brand site with great care. Your attention to detail earns real trust.",
    },
    author: "Y. Mori",
    role: { ja: "メーカー / 広報ご担当", en: "PR, Manufacturer" },
  },
];

export interface FaqItem {
  question: { ja: string; en: string };
  answer: { ja: string; en: string };
}

export const faqSection = {
  heading: { ja: "よくあるご質問", en: "Frequently Asked Questions" },
  lead: {
    ja: "ご依頼前によくいただくご質問をまとめました。",
    en: "Answers to the questions clients ask most before getting started.",
  },
};

export const faqs: FaqItem[] = [
  {
    question: { ja: "対応可能な稼働形態を教えてください。", en: "What engagement styles do you offer?" },
    answer: {
      ja: "リモートを中心に、準委任(月額・稼働日数ベース)と請負(案件単位)の両方に対応しています。必要に応じて打ち合わせは対面でも可能です。",
      en: "Primarily remote. I work both on a monthly retainer (time-based) and on a per-project (fixed-scope) basis, with in-person meetings available when needed.",
    },
  },
  {
    question: { ja: "料金体系はどのようになっていますか？", en: "How is pricing structured?" },
    answer: {
      ja: "月額の準委任契約、または案件単位の請負見積りからお選びいただけます。ご予算やフェーズに応じて柔軟にご提案しますので、まずはご相談ください。",
      en: "Choose between a monthly retainer or a fixed per-project quote. I tailor proposals to your budget and project phase — just get in touch.",
    },
  },
  {
    question: { ja: "小規模な案件や技術相談だけでも依頼できますか？", en: "Can I hire you for small tasks or just consulting?" },
    answer: {
      ja: "はい、歓迎します。スポットでの技術相談、コードレビュー、トラブル対応など、小規模なご依頼にも柔軟に対応します。",
      en: "Absolutely. I'm happy to take on spot consulting, code reviews, troubleshooting, and other smaller engagements.",
    },
  },
  {
    question: { ja: "契約や請求はどうなりますか？", en: "How do contracts and invoicing work?" },
    answer: {
      ja: "業務委託契約を締結したうえで進めます。請求書を発行し、適格請求書(インボイス制度)にも対応可能です。",
      en: "We proceed under a formal contract. I issue invoices and can comply with Japan's qualified-invoice (invoice system) requirements.",
    },
  },
  {
    question: { ja: "対応エリアや言語を教えてください。", en: "What regions and languages do you cover?" },
    answer: {
      ja: "全国どこでもリモートで対応しています。日本語に加えて英語でのやり取りも可能で、海外のお客様のご相談も歓迎します。",
      en: "I work remotely nationwide, and can also communicate in English in addition to Japanese, including with overseas clients.",
    },
  },
  {
    question: { ja: "既存システムの改修やトラブル対応も可能ですか？", en: "Can you fix or improve an existing system?" },
    answer: {
      ja: "可能です。レガシーシステムの改修、パフォーマンス改善、障害対応など、まずは現状を丁寧にヒアリングしたうえで最適な解決策をご提案します。",
      en: "Yes. For legacy improvements, performance issues, or incidents, I start by understanding the current state, then propose the best path forward.",
    },
  },
];

export const contact = {
  heading: { ja: "お問い合わせ", en: "Let's Work Together" },
  lead: {
    ja: "新しいプロジェクトのご相談を歓迎します。お気軽にご連絡ください。",
    en: "I'm open to new projects and collaborations. Feel free to reach out.",
  },
  form: {
    name: { ja: "お名前", en: "Name" },
    email: { ja: "メールアドレス", en: "Email" },
    message: { ja: "ご相談内容", en: "Message" },
    namePlaceholder: { ja: "山田 太郎", en: "Your name" },
    emailPlaceholder: { ja: "you@example.com", en: "you@example.com" },
    messagePlaceholder: {
      ja: "プロジェクトの概要やご相談内容をご記入ください。",
      en: "Tell me about your project or idea.",
    },
    submit: { ja: "送信する", en: "Send Message" },
    or: { ja: "または、直接メールで", en: "Or email me directly" },
  },
};

export const footer = {
  tagline: {
    ja: "アイデアを、信頼できるソフトウェアへ。",
    en: "Turning ideas into reliable software.",
  },
  rights: {
    ja: "All rights reserved.",
    en: "All rights reserved.",
  },
  builtWith: {
    ja: "Next.js と Tailwind CSS で構築",
    en: "Built with Next.js & Tailwind CSS",
  },
};
