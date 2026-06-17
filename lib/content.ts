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
  name: { ja: "高橋 貴樹", en: "Takaki Takahashi" },
  title: {
    ja: "フリーランス ソフトウェアエンジニア",
    en: "Freelance Software Engineer",
  },
  location: { ja: "日本", en: "Japan" },
  email: "mirai.lucky.dev@gmail.com",
  yearsOfExperience: 12,
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  twitter: "https://x.com/",
};

export const nav = {
  about: { ja: "プロフィール", en: "About" },
  strengths: { ja: "強み", en: "Strengths" },
  skills: { ja: "スキル", en: "Skills" },
  experience: { ja: "経歴", en: "Experience" },
  projects: { ja: "実績", en: "Projects" },
  services: { ja: "サービス", en: "Services" },
  flow: { ja: "流れ", en: "Process" },
  faq: { ja: "FAQ", en: "FAQ" },
  contact: { ja: "お問い合わせ", en: "Contact" },
};

export const hero = {
  greeting: { ja: "こんにちは、私は", en: "Hello, I'm" },
  tagline: {
    ja: "アイデアを、信頼できるソフトウェアへ。",
    en: "Turning ideas into reliable software.",
  },
  subtitle: {
    ja: "12年の実務経験を持つフルスタックエンジニア。フロントエンドからバックエンド、クラウド、AIまで、あらゆる領域でビジネスの成果に直結するプロダクトを構築します。",
    en: "A full-stack engineer with 12 years of hands-on experience. From frontend to backend, cloud, and AI — I build products that drive real business results across every domain.",
  },
  ctaPrimary: { ja: "お仕事のご相談", en: "Hire Me" },
  ctaSecondary: { ja: "実績を見る", en: "View Work" },
  badges: {
    available: { ja: "新規案件 受付中", en: "Available for projects" },
  },
  stats: [
    { value: "12+", label: { ja: "年の経験", en: "Years of experience" } },
    { value: "60+", label: { ja: "プロジェクト", en: "Projects delivered" } },
    { value: "30+", label: { ja: "クライアント", en: "Happy clients" } },
    { value: "100%", label: { ja: "納品実績", en: "On-time delivery" } },
  ],
};

export const about = {
  heading: { ja: "プロフィール", en: "About Me" },
  lead: {
    ja: "ビジネス課題を、技術で解決します。",
    en: "I solve business problems with technology.",
  },
  paragraphs: {
    ja: [
      "日本を拠点に活動するフリーランスのソフトウェアエンジニア、高橋貴樹です。スタートアップから大手企業まで、12年間にわたり多様なプロジェクトに携わってきました。",
      "得意とするのは、要件定義から設計・開発・運用まで一気通貫で担う「フルサイクル開発」。技術選定や課題の本質を見極める力に強みがあり、単なる実装者ではなく、ビジネスの成功に責任を持つパートナーとして貢献します。",
      "フロントエンド、バックエンド、モバイル、クラウドインフラ、データ・AIまで、領域を横断して最適な解決策を提供します。",
    ],
    en: [
      "I'm Takaki Takahashi, a freelance software engineer based in Japan. Over the past 12 years I have delivered projects for clients ranging from early-stage startups to large enterprises.",
      "My specialty is full-cycle development — owning everything from requirements and architecture to implementation and operations. I excel at technology selection and getting to the root of a problem, contributing not just as a developer but as a partner accountable for business outcomes.",
      "I work across frontend, backend, mobile, cloud infrastructure, and data/AI to deliver the right solution for each challenge.",
    ],
  },
  highlights: {
    ja: [
      "上流から下流まで一貫して対応可能",
      "日本語・英語でのコミュニケーション",
      "リモート・常駐どちらも対応",
      "品質とスピードの両立",
    ],
    en: [
      "End-to-end ownership, from planning to delivery",
      "Communication in Japanese and English",
      "Remote or on-site engagements",
      "Quality and speed, without compromise",
    ],
  },
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
    title: { ja: "ワンストップ対応", en: "One-Stop Partnership" },
    description: {
      ja: "企画・要件定義から設計・開発、運用・保守まで一人で完結します。窓口が一つにまとまるため、認識のズレや余計なコミュニケーションコストが生じません。",
      en: "From planning and requirements to design, development, and ongoing operations — I handle it all. A single point of contact means no miscommunication and no wasted coordination cost.",
    },
  },
  {
    icon: "Award",
    no: "02",
    title: { ja: "確かな実績と技術力", en: "Proven Track Record" },
    description: {
      ja: "12年・60件超のプロジェクト経験。スタートアップから大手企業まで、幅広い業界・規模の開発を成功に導いてきました。最新技術にも継続的にキャッチアップしています。",
      en: "12 years and 60+ projects delivered, for clients from startups to large enterprises across many industries. I continually keep pace with the latest technologies.",
    },
  },
  {
    icon: "MessagesSquare",
    no: "03",
    title: { ja: "丁寧で透明なコミュニケーション", en: "Clear, Transparent Communication" },
    description: {
      ja: "進捗の可視化と分かりやすいご報告を徹底します。専門用語に頼らず、ビジネスの目的に立ち返った対話を大切にし、安心して任せていただける関係を築きます。",
      en: "I keep progress visible and reports easy to follow. I avoid jargon, stay focused on your business goals, and build a relationship you can rely on with peace of mind.",
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
    title: { ja: "BtoB SaaSプラットフォーム", en: "B2B SaaS Platform" },
    category: { ja: "Webアプリケーション", en: "Web Application" },
    description: {
      ja: "業務管理SaaSの設計・開発をフルスタックで担当。マルチテナント構成とリアルタイム機能を実装し、数千社の利用に耐えるスケーラブルな基盤を構築。",
      en: "Full-stack design and development of a business-management SaaS. Built a multi-tenant, real-time architecture scalable to thousands of companies.",
    },
    stack: ["Next.js", "Go", "PostgreSQL", "AWS", "Kubernetes"],
    highlights: {
      ja: ["レスポンス速度を60%改善", "稼働率99.9%を達成", "マルチテナント設計"],
      en: ["60% faster response times", "99.9% uptime achieved", "Multi-tenant architecture"],
    },
  },
  {
    title: { ja: "クロスプラットフォーム モバイルアプリ", en: "Cross-Platform Mobile App" },
    category: { ja: "モバイル", en: "Mobile" },
    description: {
      ja: "iOS / Android 両対応の消費者向けアプリを単一コードベースで開発。オフライン対応とプッシュ通知を備え、App Storeで高評価を獲得。",
      en: "A consumer app for iOS and Android from a single codebase, with offline support and push notifications — earning high ratings on the App Store.",
    },
    stack: ["React Native", "Expo", "Firebase", "TypeScript"],
    highlights: {
      ja: ["評価★4.8を獲得", "10万DL突破", "オフライン対応"],
      en: ["★4.8 average rating", "100k+ downloads", "Full offline support"],
    },
  },
  {
    title: { ja: "AI 業務効率化システム", en: "AI Workflow Automation" },
    category: { ja: "AI / 機械学習", en: "AI / Machine Learning" },
    description: {
      ja: "LLMとRAGを活用した社内ドキュメント検索・要約システムを構築。問い合わせ対応工数を大幅に削減し、業務効率を飛躍的に向上。",
      en: "Built an internal document search and summarization system using LLMs and RAG, dramatically cutting support workload and boosting team efficiency.",
    },
    stack: ["Python", "LLM / RAG", "FastAPI", "Vector DB", "GCP"],
    highlights: {
      ja: ["問い合わせ工数を70%削減", "高精度な検索", "セキュアな自社運用"],
      en: ["70% less manual support", "High-accuracy retrieval", "Secure self-hosted setup"],
    },
  },
  {
    title: { ja: "ECサイト リニューアル", en: "E-Commerce Rebuild" },
    category: { ja: "Eコマース", en: "E-Commerce" },
    description: {
      ja: "老朽化したECサイトをモダンな技術スタックで再構築。表示速度とSEOを大幅に改善し、コンバージョン率の向上に貢献。",
      en: "Rebuilt a legacy e-commerce site on a modern stack, dramatically improving load speed and SEO and lifting conversion rates.",
    },
    stack: ["Next.js", "Stripe", "Headless CMS", "Vercel"],
    highlights: {
      ja: ["コンバージョン率1.5倍", "Core Web Vitals 満点", "SEO流入が大幅増加"],
      en: ["1.5× conversion rate", "Perfect Core Web Vitals", "Major SEO traffic growth"],
    },
  },
  {
    title: { ja: "クラウド基盤構築 / DevOps", en: "Cloud Infrastructure / DevOps" },
    category: { ja: "インフラ / DevOps", en: "Infrastructure / DevOps" },
    description: {
      ja: "Infrastructure as Codeによるクラウド基盤の構築と、CI/CDパイプラインの整備を実施。デプロイの自動化と運用コストの削減を実現。",
      en: "Built cloud infrastructure as code and established CI/CD pipelines, automating deployments and reducing operational costs.",
    },
    stack: ["Terraform", "AWS", "Docker", "GitHub Actions"],
    highlights: {
      ja: ["デプロイ時間を80%短縮", "インフラの完全コード化", "運用コスト削減"],
      en: ["80% faster deploys", "Fully codified infra", "Lower operating costs"],
    },
  },
  {
    title: { ja: "リアルタイム ダッシュボード", en: "Real-Time Analytics Dashboard" },
    category: { ja: "データ可視化", en: "Data Visualization" },
    description: {
      ja: "大量データをリアルタイムに集計・可視化する分析ダッシュボードを開発。経営判断に直結するインサイトを提供。",
      en: "Developed a real-time analytics dashboard that aggregates and visualizes large datasets, delivering insights that drive executive decisions.",
    },
    stack: ["React", "D3.js", "BigQuery", "WebSocket"],
    highlights: {
      ja: ["リアルタイム集計", "直感的なUI/UX", "意思決定の高速化"],
      en: ["Real-time aggregation", "Intuitive UI/UX", "Faster decision-making"],
    },
  },
];

export const services: Service[] = [
  {
    icon: "Code2",
    title: { ja: "Webアプリ開発", en: "Web App Development" },
    description: {
      ja: "モダンなフレームワークによる高速・高品質なWebアプリケーションの開発。SPAから大規模システムまで対応します。",
      en: "Fast, high-quality web applications built on modern frameworks — from SPAs to large-scale systems.",
    },
  },
  {
    icon: "Smartphone",
    title: { ja: "モバイルアプリ開発", en: "Mobile App Development" },
    description: {
      ja: "iOS / Android 両対応のネイティブ・クロスプラットフォームアプリを、企画から公開まで一貫して開発します。",
      en: "Native and cross-platform apps for iOS and Android, from concept to App Store launch.",
    },
  },
  {
    icon: "Cloud",
    title: { ja: "クラウド / インフラ構築", en: "Cloud & Infrastructure" },
    description: {
      ja: "AWS・GCPでのスケーラブルなインフラ設計、CI/CD構築、IaCによる運用自動化を提供します。",
      en: "Scalable infrastructure on AWS & GCP, CI/CD pipelines, and operations automation with IaC.",
    },
  },
  {
    icon: "Sparkles",
    title: { ja: "AI / 自動化", en: "AI & Automation" },
    description: {
      ja: "LLM・機械学習を活用した業務効率化、チャットボット、データ分析システムを構築します。",
      en: "Workflow automation, chatbots, and analytics systems powered by LLMs and machine learning.",
    },
  },
  {
    icon: "Compass",
    title: { ja: "技術顧問 / コンサルティング", en: "Technical Advisory" },
    description: {
      ja: "技術選定、アーキテクチャ設計、コードレビュー、チーム育成など、開発組織の成長を支援します。",
      en: "Technology selection, architecture, code review, and team growth — helping your engineering org level up.",
    },
  },
  {
    icon: "RefreshCw",
    title: { ja: "リプレイス / 改善", en: "Modernization & Refactoring" },
    description: {
      ja: "レガシーシステムのモダン化、パフォーマンス改善、技術的負債の解消をサポートします。",
      en: "Modernizing legacy systems, improving performance, and paying down technical debt.",
    },
  },
];

export const servicesSection = {
  heading: { ja: "提供サービス", en: "What I Do" },
  lead: {
    ja: "プロジェクトのあらゆるフェーズで、価値を提供します。",
    en: "Delivering value at every phase of your project.",
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
      ja: "日本全国にリモートで対応しています。日本語・英語の両方でコミュニケーションが可能で、海外のお客様にも対応します。",
      en: "I work remotely across Japan and communicate in both Japanese and English, including with overseas clients.",
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
