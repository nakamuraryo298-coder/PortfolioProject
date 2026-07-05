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
  yearsOfExperience: 12,
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
    ja: "確かな技術で、成果の出るWebをつくります。",
    en: "Crafting web experiences that deliver real results.",
  },
  subtitle: {
    ja: "コーポレートサイト・ランディングページ・業務システムを中心に制作。成果を重視したWeb開発で、信頼されるパートナーとして動きます。",
    en: "I build corporate sites, landing pages, and business systems that deliver measurable results.",
  },
  ctaPrimary: { ja: "お仕事のご相談", en: "Hire Me" },
  ctaSecondary: { ja: "制作実績を見る", en: "View Work" },
  badges: {
    available: { ja: "新規案件 受付中", en: "Available for projects" },
  },
  stats: [
    { value: "12+", icon: "CalendarDays", label: { ja: "年の経験", en: "Years of experience" } },
    { value: "120+", icon: "FolderCheck", label: { ja: "制作実績", en: "Projects delivered" } },
    { value: "70+", icon: "Users", label: { ja: "取引企業", en: "Client companies" } },
    { value: "100%", icon: "BadgeCheck", label: { ja: "納期遵守", en: "On-time delivery" } },
  ],
};

export const about = {
  heading: { ja: "プロフィール", en: "About Me" },
  lead: {
    ja: "お客様に寄り添い、成果に直結するWeb制作とシステム開発を提供します。",
    en: "I partner closely with clients to deliver web production and systems that drive real results.",
  },
  paragraphs: {
    ja: [
      "コーポレートサイト、ランディングページ、業務システムの制作・運用を手がけるフリーランスエンジニアです。",
      "ホームページやキャンペーンLPの制作では、ブランドの魅力を伝えつつ、CVR向上とSEOの両立を実現してきました。",
      "業務システムでは、社内の業務効率化やデータ活用まで見据えた設計・開発を行い、安心して長く使える基盤を構築します。",
    ],
    en: [
      "I produce and operate corporate websites, landing pages, and business systems as a freelance engineer.",
      "For homepage and campaign LP work, I balance brand storytelling with conversion and SEO performance.",
      "For business systems, I design and build secure, maintainable platforms that improve operational efficiency.",
    ],
  },
  highlights: {
    ja: [
      "成果につながるWeb制作",
      "ホームページ・LP・業務システムの実績多数",
      "丁寧で分かりやすいコミュニケーション",
      "納期と品質を両立した開発体制",
    ],
    en: [
      "Web production focused on real results",
      "Proven experience with homepages, LPs, and business systems",
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
      ja: "ホームページ、LP、業務システムを同一の視点で設計。企画から納品・運用まで責任を持って進めます。",
      en: "I design homepages, LPs, and business systems with a consistent perspective, taking responsibility from concept through delivery and operation.",
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
    period: { ja: "2021 — 現在", en: "2021 — Present" },
    role: { ja: "フリーランス ソフトウェアエンジニア", en: "Freelance Software Engineer" },
    company: { ja: "個人事業", en: "Independent" },
    description: {
      ja: "複数のクライアント向けにWebサービス・モバイルアプリ・クラウド基盤を設計から開発・運用まで担当。技術顧問やチームの立ち上げ支援も行う。",
      en: "Designing, building, and operating web services, mobile apps, and cloud infrastructure for multiple clients. Also serving as a technical advisor and helping teams get off the ground.",
    },
    tags: ["Next.js", "Go", "AWS", "技術顧問 / Advisory"],
  },
  {
    period: { ja: "2017 — 2021", en: "2017 — 2021" },
    role: { ja: "テックリード / シニアエンジニア", en: "Tech Lead / Senior Engineer" },
    company: { ja: "自社開発企業（SaaS）", en: "Product Company (SaaS)" },
    description: {
      ja: "BtoB SaaSプロダクトの開発をリード。マイクロサービス化、パフォーマンス改善、チームのメンタリングを推進し、ユーザー数を大幅に拡大。",
      en: "Led development of a B2B SaaS product. Drove the move to microservices, performance improvements, and team mentoring — significantly scaling the user base.",
    },
    tags: ["TypeScript", "Kubernetes", "Microservices", "Mentoring"],
  },
  {
    period: { ja: "2014 — 2017", en: "2014 — 2017" },
    role: { ja: "フルスタックエンジニア", en: "Full-Stack Engineer" },
    company: { ja: "Web開発エージェンシー", en: "Web Development Agency" },
    description: {
      ja: "ECサイト、コーポレートサイト、業務システムなど幅広い案件を担当。要件定義からリリースまで一貫して対応し、多数のプロジェクトを成功に導く。",
      en: "Delivered a wide range of projects — e-commerce, corporate sites, and internal systems — owning everything from requirements to release and shipping many successful projects.",
    },
    tags: ["Ruby on Rails", "Vue.js", "MySQL", "E-commerce"],
  },
  {
    period: { ja: "2013 — 2014", en: "2013 — 2014" },
    role: { ja: "ソフトウェアエンジニア", en: "Software Engineer" },
    company: { ja: "システム開発会社", en: "Software Development Firm" },
    description: {
      ja: "業務系アプリケーションの開発でキャリアをスタート。基礎的な設計・実装・テストの実務を通じてエンジニアリングの土台を築く。",
      en: "Started my career building enterprise applications, establishing strong engineering fundamentals through hands-on design, implementation, and testing.",
    },
    tags: ["Java", "SQL", "Enterprise"],
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
    ja: "ホームページ制作、LP制作、業務システム開発まで、成果にこだわる開発を提供します。",
    en: "From homepages and landing pages to business systems, I deliver results-focused development.",
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
    ja: "12年間、技術と共に歩んできたキャリア。",
    en: "A 12-year career growing alongside technology.",
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
