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

export interface Project {
  title: { ja: string; en: string };
  category: { ja: string; en: string };
  description: { ja: string; en: string };
  stack: string[];
  highlights: { ja: string[]; en: string[] };
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
  email: "biyou00000@gmail.com",
  yearsOfExperience: 8,
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  line: "https://line.me/",
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
    ja: "Webシステム・モバイルアプリ・業務システム・AI開発まで幅広く対応。品質・保守性・拡張性を重視し、お客様の課題解決につながるシステムを提供しています。",
    en: "Broad expertise across web systems, mobile apps, business systems, and AI development. I focus on quality, maintainability, and scalability to deliver systems that solve real client problems.",
  },
  ctaPrimary: { ja: "お仕事のご相談", en: "Hire Me" },
  ctaSecondary: { ja: "制作実績を見る", en: "View Work" },
  badges: {
    available: { ja: "新規案件 受付中", en: "Available for projects" },
  },
  stats: [
    { value: "8+", icon: "CalendarDays", label: { ja: "年の経験", en: "Years of experience" } },
    { value: "120+", icon: "FolderCheck", label: { ja: "制作実績", en: "Projects delivered" } },
    { value: "70+", icon: "Users", label: { ja: "取引企業", en: "Client companies" } },
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
    title: { ja: "フロントエンド", en: "Frontend" },
    skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "Vite"],
  },
  {
    icon: "Server",
    title: { ja: "バックエンド", en: "Backend" },
    skills: ["Node.js", "Go", "Python", "Java", "Ruby on Rails", "PHP", "GraphQL", "REST / gRPC"],
  },
  {
    icon: "Smartphone",
    title: { ja: "モバイル", en: "Mobile" },
    skills: ["React Native", "Flutter", "Swift / iOS", "Kotlin / Android", "Expo"],
  },
  {
    icon: "Cloud",
    title: { ja: "クラウド / DevOps", en: "Cloud / DevOps" },
    skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions"],
  },
  {
    icon: "Database",
    title: { ja: "データ / AI", en: "Data / AI" },
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "BigQuery", "LLM / RAG", "TensorFlow", "Pandas"],
  },
  {
    icon: "ShieldCheck",
    title: { ja: "設計 / 品質", en: "Architecture / Quality" },
    skills: ["System Design", "Microservices", "DDD", "Testing", "Security", "Performance", "Agile / Scrum"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: { ja: "2023 — 現在", en: "2023 — Present" },
    role: { ja: "フリーランス ソフトウェアエンジニア", en: "Freelance Software Engineer" },
    company: { ja: "個人事業", en: "Independent" },
    description: {
      ja: "独立後、コーポレートサイト・LP・業務システム・モバイルアプリの開発を、要件定義から設計・実装・運用まで一貫して請け負う。Next.js / TypeScript を中心としたモダンな構成に加え、生成AIを活用した業務効率化ツールの開発や、既存システムの改善・保守も担当。準委任・請負の双方でプロジェクトを推進している。",
      en: "Since going independent, I deliver corporate sites, landing pages, business systems, and mobile apps end-to-end — from requirements through design, implementation, and operation. Alongside a modern Next.js / TypeScript stack, I build generative-AI tools for operational efficiency and take on the improvement and maintenance of existing systems, working on both retainer and fixed-scope engagements.",
    },
    tags: ["Next.js", "TypeScript", "AWS", "生成AI / LLM"],
  },
  {
    period: { ja: "2021 — 2023", en: "2021 — 2023" },
    role: { ja: "テックリード / シニアエンジニア", en: "Tech Lead / Senior Engineer" },
    company: { ja: "自社開発企業（SaaS）", en: "Product Company (SaaS)" },
    description: {
      ja: "BtoB向けSaaSプロダクトの開発チームで、フロントエンドとバックエンドの設計・実装をリード。モノリスからのサービス分割やCI/CDの整備、パフォーマンス改善に取り組み、主要画面の表示速度を大きく改善した。コードレビューや若手メンバーのメンタリングを通じて、チーム全体の開発品質向上にも貢献。",
      en: "Led frontend and backend design and implementation on a B2B SaaS product team. Drove the migration from a monolith toward split services, established CI/CD, and improved performance — substantially speeding up key screens. Also raised overall team quality through code review and mentoring of junior engineers.",
    },
    tags: ["TypeScript", "Node.js", "Docker", "CI/CD"],
  },
  {
    period: { ja: "2019 — 2021", en: "2019 — 2021" },
    role: { ja: "フルスタックエンジニア", en: "Full-Stack Engineer" },
    company: { ja: "Web開発エージェンシー", en: "Web Development Agency" },
    description: {
      ja: "受託開発のエージェンシーで、ECサイト・コーポレートサイト・予約管理システムなど、業種の異なる案件を並行して担当。クライアントとの要件定義から画面設計、実装、公開後の保守までを一貫して手掛け、複数のプロジェクトを納期通りにリリースした。",
      en: "At a client-services agency, I handled diverse projects in parallel — e-commerce, corporate sites, and reservation-management systems across different industries. I owned each project from requirements and screen design through implementation and post-launch maintenance, shipping multiple releases on schedule.",
    },
    tags: ["Ruby on Rails", "Vue.js", "MySQL", "E-commerce"],
  },
  {
    period: { ja: "2018 — 2019", en: "2018 — 2019" },
    role: { ja: "ソフトウェアエンジニア", en: "Software Engineer" },
    company: { ja: "システム開発会社", en: "Software Development Firm" },
    description: {
      ja: "社内業務システムや基幹系アプリケーションの開発でエンジニアとしてのキャリアをスタート。詳細設計・実装・テスト・ドキュメント作成といった開発工程の基礎を実務で身につけ、チーム開発やバージョン管理、レビュー文化を学んだ。",
      en: "Began my engineering career developing in-house business systems and core enterprise applications. Through hands-on detailed design, implementation, testing, and documentation, I built solid fundamentals and learned team development, version control, and a culture of code review.",
    },
    tags: ["Java", "SQL", "業務システム / Enterprise"],
  },
];

export const projects: Project[] = [
  {
    title: { ja: "コーポレートホームページ制作", en: "Corporate Homepage Production" },
    category: { ja: "ホームページ", en: "Homepage" },
    description: {
      ja: "企業の個性を反映したコーポレートサイトを制作。ブランドの信頼性を高め、問い合わせ導線を最適化しました。",
      en: "Produced a corporate website that reflects the company's character, enhancing brand trust and optimizing inquiry flow.",
    },
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    highlights: {
      ja: ["問い合わせ数を25%増加", "ページ表示速度を50%改善", "ブランド表現の強化"],
      en: ["25% more inquiries", "50% faster page speed", "Stronger brand expression"],
    },
  },
  {
    title: { ja: "キャンペーンLP制作", en: "Campaign Landing Page" },
    category: { ja: "LP", en: "Landing Page" },
    description: {
      ja: "商品・サービスの訴求に特化したLPを制作し、広告費対効果を最大化。読みやすさと心理的誘導を重視しました。",
      en: "Created a campaign LP focused on product and service appeal, maximizing advertising ROI with readability and persuasive flow.",
    },
    stack: ["Next.js", "React", "SEO", "Analytics"],
    highlights: {
      ja: ["CVRを1.8倍に改善", "広告CPAを30%削減", "スマホ最適化完了"],
      en: ["1.8× conversion rate", "30% lower CPA", "Mobile optimized"],
    },
  },
  {
    title: { ja: "業務システム開発", en: "Business System Development" },
    category: { ja: "業務システム", en: "Business System" },
    description: {
      ja: "受発注・在庫管理・営業支援を統合する業務システムを構築。現場の作業負担を軽減し、運用しやすいUIを実装しました。",
      en: "Built an integrated business system for order, inventory, and sales support, reducing workload and providing an operator-friendly UI.",
    },
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    highlights: {
      ja: ["作業時間を40%削減", "入力エラーを70%減少", "現場に寄り添うUI"],
      en: ["40% less manual work", "70% fewer data entry errors", "Operator-centered UI"],
    },
  },
  {
    title: { ja: "業務改善LP制作", en: "Business Improvement LP" },
    category: { ja: "LP", en: "Landing Page" },
    description: {
      ja: "サービス導入検討者向けのLPを制作。信頼感のある構成と分かりやすい事例紹介で申込数を伸ばしました。",
      en: "Produced a landing page for service consideration, increasing signups with trust-building content and clear case studies.",
    },
    stack: ["Next.js", "Framer Motion", "SEO"],
    highlights: {
      ja: ["資料請求数が2倍", "ページ滞在時間を延長", "ブランド訴求を強化"],
      en: ["2× more leads", "Longer page engagement", "Stronger brand messaging"],
    },
  },
  {
    title: { ja: "会員向けモバイルアプリ開発", en: "Membership Mobile App" },
    category: { ja: "モバイルアプリ", en: "Mobile App" },
    description: {
      ja: "iOS / Android 両対応の会員向けモバイルアプリを開発。プッシュ通知やオフライン対応を実装し、リピート利用を促進しました。",
      en: "Developed a members' mobile app for both iOS and Android, implementing push notifications and offline support to encourage repeat usage.",
    },
    stack: ["React Native", "Expo", "TypeScript", "Firebase"],
    highlights: {
      ja: ["継続利用率を35%向上", "アプリ評価4.6を獲得", "オフライン閲覧に対応"],
      en: ["35% higher retention", "4.6 app rating", "Offline reading support"],
    },
  },
  {
    title: { ja: "AIチャットボット開発", en: "AI Chatbot Development" },
    category: { ja: "AI開発", en: "AI Development" },
    description: {
      ja: "社内ドキュメントを学習させたAIチャットボットを構築。問い合わせ対応を自動化し、担当者の負担を大幅に軽減しました。",
      en: "Built an AI chatbot trained on internal documents, automating inquiry handling and greatly reducing staff workload.",
    },
    stack: ["Next.js", "OpenAI API", "RAG", "PostgreSQL"],
    highlights: {
      ja: ["問い合わせ対応を60%自動化", "回答時間を大幅短縮", "社内ナレッジを一元化"],
      en: ["60% of inquiries automated", "Much faster responses", "Centralized knowledge"],
    },
  },
  {
    title: { ja: "予約管理システム開発", en: "Reservation Management System" },
    category: { ja: "業務システム", en: "Business System" },
    description: {
      ja: "店舗向けの予約・顧客管理システムを開発。ダブルブッキングを防ぎ、日々の予約業務を効率化しました。",
      en: "Developed a reservation and customer-management system for retail locations, preventing double-bookings and streamlining daily operations.",
    },
    stack: ["React", "Node.js", "MySQL", "AWS"],
    highlights: {
      ja: ["予約対応の工数を50%削減", "ダブルブッキングを解消", "スマホから予約管理"],
      en: ["50% less booking effort", "Zero double-bookings", "Manage bookings on mobile"],
    },
  },
  {
    title: { ja: "ブランドECサイト構築", en: "Brand E-commerce Build" },
    category: { ja: "ECサイト", en: "E-commerce" },
    description: {
      ja: "ブランドの世界観を表現したECサイトを構築。決済・在庫連携を整備し、購入までの導線を最適化しました。",
      en: "Built an e-commerce site expressing the brand's world view, integrating payments and inventory while optimizing the path to purchase.",
    },
    stack: ["Next.js", "Stripe", "Headless CMS", "Vercel"],
    highlights: {
      ja: ["カゴ落ち率を改善", "客単価が向上", "在庫連携を自動化"],
      en: ["Lower cart abandonment", "Higher order value", "Automated inventory sync"],
    },
  },
  {
    title: { ja: "社内向けダッシュボード開発", en: "Internal Analytics Dashboard" },
    category: { ja: "Webアプリ", en: "Web App" },
    description: {
      ja: "各種データを可視化する社内向けダッシュボードを開発。散在していた指標を統合し、意思決定のスピードを高めました。",
      en: "Developed an internal dashboard visualizing key data, consolidating scattered metrics to speed up decision-making.",
    },
    stack: ["React", "TypeScript", "BigQuery", "Recharts"],
    highlights: {
      ja: ["レポート作成を自動化", "指標を一画面に統合", "集計作業を80%削減"],
      en: ["Automated reporting", "All metrics in one view", "80% less manual work"],
    },
  },
  {
    title: { ja: "採用サイト制作", en: "Recruitment Site" },
    category: { ja: "ホームページ", en: "Homepage" },
    description: {
      ja: "求職者に企業の魅力を伝える採用サイトを制作。社員インタビューや職場紹介を通じて応募意欲を高めました。",
      en: "Produced a recruitment site conveying the company's appeal to job seekers, boosting applications through employee interviews and workplace features.",
    },
    stack: ["Next.js", "microCMS", "Tailwind CSS", "Vercel"],
    highlights: {
      ja: ["応募数を1.6倍に増加", "採用ミスマッチを削減", "スマホ閲覧に最適化"],
      en: ["1.6× more applicants", "Fewer hiring mismatches", "Mobile-optimized"],
    },
  },
  {
    title: { ja: "クリニックサイト制作", en: "Clinic Website" },
    category: { ja: "ホームページ", en: "Homepage" },
    description: {
      ja: "地域のクリニック向けに、オンライン予約と診療案内を備えたサイトを制作。患者が迷わず来院できる導線を設計しました。",
      en: "Built a site for a local clinic with online booking and treatment guidance, designing a clear path that helps patients visit with confidence.",
    },
    stack: ["Next.js", "TypeScript", "予約API", "Vercel"],
    highlights: {
      ja: ["電話予約の負担を軽減", "新患の来院を増加", "アクセシビリティに配慮"],
      en: ["Less phone-booking load", "More new-patient visits", "Accessibility-conscious"],
    },
  },
  {
    title: { ja: "不動産ポータル開発", en: "Real Estate Portal" },
    category: { ja: "Webアプリ", en: "Web App" },
    description: {
      ja: "物件検索・問い合わせ機能を備えた不動産ポータルサイトを開発。地図連携と絞り込み検索で使い勝手を高めました。",
      en: "Developed a real-estate portal with property search and inquiry features, improving usability with map integration and faceted search.",
    },
    stack: ["Next.js", "PostgreSQL", "Google Maps API", "AWS"],
    highlights: {
      ja: ["問い合わせ率が向上", "検索離脱を削減", "物件更新を効率化"],
      en: ["Higher inquiry rate", "Lower search drop-off", "Streamlined listing updates"],
    },
  },
  {
    title: { ja: "サブスク申込LP制作", en: "Subscription Signup LP" },
    category: { ja: "LP", en: "Landing Page" },
    description: {
      ja: "サブスクリプションサービスの申込に特化したLPを制作。料金プランの比較と安心材料の訴求で申込を後押ししました。",
      en: "Created an LP focused on subscription signups, driving conversions with clear plan comparisons and trust-building messaging.",
    },
    stack: ["Next.js", "Stripe", "SEO", "Analytics"],
    highlights: {
      ja: ["申込率を1.5倍に改善", "離脱ポイントを解消", "決済まで最短導線"],
      en: ["1.5× signup rate", "Removed drop-off points", "Shortest path to checkout"],
    },
  },
  {
    title: { ja: "セミナー集客LP制作", en: "Seminar Recruitment LP" },
    category: { ja: "LP", en: "Landing Page" },
    description: {
      ja: "オンラインセミナーの集客用LPを制作。登壇者紹介と参加メリットを分かりやすく伝え、申込を最大化しました。",
      en: "Produced an LP for online-seminar recruitment, maximizing signups by clearly presenting speakers and participation benefits.",
    },
    stack: ["Next.js", "Framer Motion", "フォーム連携"],
    highlights: {
      ja: ["申込数が2.2倍", "広告CPAを削減", "当日参加率が向上"],
      en: ["2.2× signups", "Lower ad CPA", "Higher attendance rate"],
    },
  },
  {
    title: { ja: "在庫管理システム開発", en: "Inventory Management System" },
    category: { ja: "業務システム", en: "Business System" },
    description: {
      ja: "複数拠点の在庫をリアルタイムに把握できる在庫管理システムを開発。欠品と過剰在庫の削減を実現しました。",
      en: "Developed an inventory system giving real-time visibility across multiple locations, reducing both stockouts and overstock.",
    },
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    highlights: {
      ja: ["棚卸し工数を60%削減", "欠品率を改善", "拠点間の在庫を可視化"],
      en: ["60% less stocktaking", "Fewer stockouts", "Cross-site stock visibility"],
    },
  },
  {
    title: { ja: "勤怠管理システム開発", en: "Attendance Management System" },
    category: { ja: "業務システム", en: "Business System" },
    description: {
      ja: "打刻・申請・集計を一元化した勤怠管理システムを開発。手作業の集計をなくし、労務担当の負担を軽減しました。",
      en: "Built a time-and-attendance system unifying clock-in, requests, and totals, eliminating manual aggregation and easing HR workload.",
    },
    stack: ["Vue.js", "Laravel", "MySQL", "AWS"],
    highlights: {
      ja: ["集計作業をほぼ自動化", "申請漏れを削減", "法令改正にも対応"],
      en: ["Near-automated totals", "Fewer missed requests", "Compliant with law changes"],
    },
  },
  {
    title: { ja: "CRMシステム開発", en: "CRM System Development" },
    category: { ja: "業務システム", en: "Business System" },
    description: {
      ja: "営業活動と顧客情報を一元管理するCRMを開発。案件の進捗を可視化し、チームの連携を強化しました。",
      en: "Developed a CRM centralizing sales activity and customer data, visualizing deal progress and strengthening team coordination.",
    },
    stack: ["React", "Node.js", "PostgreSQL", "GraphQL"],
    highlights: {
      ja: ["対応漏れを削減", "商談化率が向上", "レポートを自動生成"],
      en: ["Fewer dropped follow-ups", "Higher deal conversion", "Auto-generated reports"],
    },
  },
  {
    title: { ja: "モバイルオーダーアプリ開発", en: "Mobile Order App" },
    category: { ja: "モバイルアプリ", en: "Mobile App" },
    description: {
      ja: "飲食店向けにテーブルから注文できるモバイルオーダーアプリを開発。回転率の向上と注文ミスの削減に貢献しました。",
      en: "Developed a mobile-order app letting restaurant guests order from their table, improving turnover and reducing order errors.",
    },
    stack: ["Flutter", "Firebase", "Stripe"],
    highlights: {
      ja: ["注文ミスを削減", "回転率が向上", "多言語メニューに対応"],
      en: ["Fewer order errors", "Better table turnover", "Multilingual menus"],
    },
  },
  {
    title: { ja: "フィットネス記録アプリ開発", en: "Fitness Tracking App" },
    category: { ja: "モバイルアプリ", en: "Mobile App" },
    description: {
      ja: "トレーニングと食事を記録できるフィットネスアプリを開発。継続を促すUIとグラフ表示で習慣化を支援しました。",
      en: "Developed a fitness app for logging workouts and meals, supporting habit-building with motivating UI and progress charts.",
    },
    stack: ["React Native", "Expo", "TypeScript", "Supabase"],
    highlights: {
      ja: ["継続率が向上", "記録の手間を軽減", "進捗をグラフで可視化"],
      en: ["Higher retention", "Faster logging", "Progress visualized in charts"],
    },
  },
  {
    title: { ja: "AI文書要約ツール開発", en: "AI Document Summarizer" },
    category: { ja: "AI開発", en: "AI Development" },
    description: {
      ja: "長文の議事録や資料を自動で要約するAIツールを開発。情報共有のスピードを高め、確認負担を軽減しました。",
      en: "Developed an AI tool that automatically summarizes long minutes and documents, speeding up information sharing and reducing review effort.",
    },
    stack: ["Next.js", "OpenAI API", "TypeScript"],
    highlights: {
      ja: ["要約作業を自動化", "確認時間を短縮", "社内共有を効率化"],
      en: ["Automated summarizing", "Less review time", "Efficient internal sharing"],
    },
  },
  {
    title: { ja: "AI画像解析システム開発", en: "AI Image Analysis System" },
    category: { ja: "AI開発", en: "AI Development" },
    description: {
      ja: "製造現場の検品を支援するAI画像解析システムを開発。目視検査のばらつきを抑え、品質チェックを効率化しました。",
      en: "Developed an AI image-analysis system to assist manufacturing inspection, reducing variability in visual checks and streamlining QA.",
    },
    stack: ["Python", "TensorFlow", "FastAPI", "Docker"],
    highlights: {
      ja: ["検品のばらつきを抑制", "チェック時間を短縮", "不良流出を低減"],
      en: ["Reduced inspection variance", "Faster checks", "Fewer defects shipped"],
    },
  },
  {
    title: { ja: "レコメンドエンジン開発", en: "Recommendation Engine" },
    category: { ja: "AI開発", en: "AI Development" },
    description: {
      ja: "ECサイト向けに購買履歴を活用したレコメンドエンジンを開発。関連商品の提案で客単価の向上に貢献しました。",
      en: "Built a recommendation engine for an e-commerce site using purchase history, lifting average order value through related-item suggestions.",
    },
    stack: ["Python", "PostgreSQL", "FastAPI", "AWS"],
    highlights: {
      ja: ["客単価が向上", "回遊率が改善", "在庫消化を促進"],
      en: ["Higher order value", "Better engagement", "Faster inventory turnover"],
    },
  },
  {
    title: { ja: "BtoB ECサイト構築", en: "B2B E-commerce Build" },
    category: { ja: "ECサイト", en: "E-commerce" },
    description: {
      ja: "取引先ごとの掛率や承認フローに対応したBtoB向けECサイトを構築。受注業務の効率化を実現しました。",
      en: "Built a B2B e-commerce site supporting customer-specific pricing and approval flows, streamlining order operations.",
    },
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    highlights: {
      ja: ["受注処理を効率化", "取引先別価格に対応", "発注ミスを削減"],
      en: ["Streamlined order handling", "Customer-specific pricing", "Fewer ordering errors"],
    },
  },
  {
    title: { ja: "定期通販サイト構築", en: "Subscription Commerce Site" },
    category: { ja: "ECサイト", en: "E-commerce" },
    description: {
      ja: "定期購入モデルの通販サイトを構築。継続課金と配送スケジュールの管理を自動化し、運用負担を軽減しました。",
      en: "Built a subscription-commerce site, automating recurring billing and delivery scheduling to reduce operational load.",
    },
    stack: ["Next.js", "Stripe", "Headless CMS", "Vercel"],
    highlights: {
      ja: ["継続率が向上", "課金管理を自動化", "解約率を低減"],
      en: ["Higher retention", "Automated billing", "Lower churn"],
    },
  },
  {
    title: { ja: "社内ポータル開発", en: "Internal Portal" },
    category: { ja: "Webアプリ", en: "Web App" },
    description: {
      ja: "各種申請や社内情報を集約する社内ポータルを開発。情報の分散を解消し、社員の業務効率を高めました。",
      en: "Developed an internal portal consolidating requests and company information, eliminating scattered data and improving staff efficiency.",
    },
    stack: ["React", "TypeScript", "Node.js", "AWS"],
    highlights: {
      ja: ["情報探しの時間を短縮", "申請をペーパーレス化", "問い合わせを削減"],
      en: ["Less time searching", "Paperless requests", "Fewer internal inquiries"],
    },
  },
  {
    title: { ja: "データ分析基盤構築", en: "Data Analytics Platform" },
    category: { ja: "Webアプリ", en: "Web App" },
    description: {
      ja: "散在する業務データを集約する分析基盤を構築。ダッシュボードで指標を可視化し、データドリブンな意思決定を支援しました。",
      en: "Built a data-analytics platform consolidating scattered business data, visualizing metrics on dashboards to support data-driven decisions.",
    },
    stack: ["BigQuery", "dbt", "Looker", "Python"],
    highlights: {
      ja: ["集計を自動化", "指標を横断で可視化", "意思決定を迅速化"],
      en: ["Automated aggregation", "Cross-cutting metrics", "Faster decisions"],
    },
  },
  {
    title: { ja: "コーポレートサイトリニューアル", en: "Corporate Site Renewal" },
    category: { ja: "ホームページ", en: "Homepage" },
    description: {
      ja: "老朽化したコーポレートサイトをリニューアル。情報設計と表示速度を見直し、ブランド印象と使いやすさを向上しました。",
      en: "Renewed an aging corporate site, revisiting information architecture and performance to improve brand impression and usability.",
    },
    stack: ["Next.js", "Tailwind CSS", "Headless CMS", "Vercel"],
    highlights: {
      ja: ["表示速度を大幅改善", "回遊率が向上", "更新運用を簡素化"],
      en: ["Much faster load", "Better engagement", "Simpler content updates"],
    },
  },
  {
    title: { ja: "オウンドメディア構築", en: "Owned Media Site" },
    category: { ja: "ホームページ", en: "Homepage" },
    description: {
      ja: "集客につながるオウンドメディアを構築。SEOを意識した設計と更新しやすいCMSで、継続的な情報発信を支援しました。",
      en: "Built an owned-media site for lead generation, supporting ongoing publishing with SEO-focused design and an easy-to-update CMS.",
    },
    stack: ["Next.js", "microCMS", "SEO", "Vercel"],
    highlights: {
      ja: ["オーガニック流入が増加", "記事更新を効率化", "指名検索が増加"],
      en: ["More organic traffic", "Efficient publishing", "More branded searches"],
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
    ja: "あらゆる領域をカバーする、フルスタックの技術力。",
    en: "Full-stack expertise spanning every layer of the modern stack.",
  },
};

export const experienceSection = {
  heading: { ja: "経歴", en: "Experience" },
  lead: {
    ja: "8年間、技術と共に歩んできたキャリア。",
    en: "An 8-year career growing alongside technology.",
  },
};

export const projectsSection = {
  heading: { ja: "実績", en: "Selected Work" },
  lead: {
    ja: "幅広い領域での開発実績の一部をご紹介します。",
    en: "A selection of projects across diverse domains.",
  },
  note: {
    ja: "※ 守秘義務により一部内容を一般化しています。",
    en: "* Some details are generalized due to confidentiality agreements.",
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

export interface CaseStudy {
  tag: { ja: string; en: string };
  title: { ja: string; en: string };
  challenge: { ja: string; en: string };
  solution: { ja: string; en: string };
  results: { value: string; label: { ja: string; en: string } }[];
  stack: string[];
}

export const caseStudiesSection = {
  heading: { ja: "ケーススタディ", en: "Case Studies" },
  lead: {
    ja: "ホームページ、LP、業務システムの代表的な事例を、課題・解決・成果の順でご紹介します。",
    en: "Representative homepage, LP, and business system cases presented as challenge, solution, and result.",
  },
  labels: {
    challenge: { ja: "課題", en: "Challenge" },
    solution: { ja: "解決アプローチ", en: "Solution" },
    result: { ja: "成果", en: "Results" },
  },
  note: {
    ja: "※ 守秘義務により一部内容を一般化しています。",
    en: "* Some details are generalized due to confidentiality agreements.",
  },
};

export const caseStudies: CaseStudy[] = [
  {
    tag: { ja: "コーポレートサイト", en: "Corporate Site" },
    title: { ja: "信頼感を高めるコーポレートサイトリニューアル", en: "Corporate Site Renewal for Trust" },
    challenge: {
      ja: "老朽化したサイトは情報が分かりにくく、問い合わせ数が伸び悩んでいました。",
      en: "An aging website made information hard to find and inquiries had stalled.",
    },
    solution: {
      ja: "会社情報、サービス訴求、導線を整理し、洗練されたデザインで安心感を高めました。SEOと問い合わせ導線も強化しています。",
      en: "I reorganized company info, service messaging, and navigation, using a refined design that reinforces trust while strengthening SEO and lead paths.",
    },
    results: [
      { value: "25%", label: { ja: "問い合わせ増加", en: "More inquiries" } },
      { value: "40%", label: { ja: "ページ滞在時間増加", en: "Longer engagement" } },
      { value: "100%", label: { ja: "レスポンス迅速化", en: "Faster response" } },
    ],
    stack: ["Next.js", "Tailwind CSS", "SEO", "CMS"],
  },
  {
    tag: { ja: "LP", en: "Landing Page" },
    title: { ja: "CVRを伸ばすキャンペーンLP制作", en: "Campaign LP That Boosted CVR" },
    challenge: {
      ja: "新サービスの認知・申込を高めるLPが必要でしたが、既存の訴求構造では反応が弱い状態でした。",
      en: "A new service needed an LP that generated awareness and signups, but the existing messaging structure was underperforming.",
    },
    solution: {
      ja: "ユーザー心理に沿ってメリット・事例・信頼性を再設計し、広告からの遷移を最適化しました。物語性を持たせた構成で検討者を自然に誘導します。",
      en: "I redesigned benefits, case studies, and trust elements to align with user psychology and optimized the ad-to-LP flow, guiding prospects with a narrative structure.",
    },
    results: [
      { value: "1.8x", label: { ja: "CVR改善", en: "Conversion increase" } },
      { value: "30%", label: { ja: "CPA削減", en: "Lower CPA" } },
      { value: "95%", label: { ja: "スマホ対応率", en: "Mobile readiness" } },
    ],
    stack: ["Next.js", "React", "Analytics", "SEO"],
  },
  {
    tag: { ja: "業務システム", en: "Business System" },
    title: { ja: "現場を支える業務システム開発", en: "Business System That Supports Operations" },
    challenge: {
      ja: "手作業中心の運用によりミスが発生し、対応時間が膨らんでいました。",
      en: "Manual operations caused frequent errors and growing response times.",
    },
    solution: {
      ja: "受発注、在庫、見積作成を一つにまとめ、現場の使い勝手を重視したUIで業務を効率化しました。",
      en: "I consolidated order, inventory, and quotation workflows into one system with an operator-friendly UI to improve efficiency.",
    },
    results: [
      { value: "40%", label: { ja: "作業時間削減", en: "Work time saved" } },
      { value: "70%", label: { ja: "入力ミス削減", en: "Fewer errors" } },
      { value: "4.8", label: { ja: "現場満足度", en: "Operator satisfaction" } },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
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
