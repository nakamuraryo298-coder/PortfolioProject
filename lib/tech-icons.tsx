import type { IconType } from "react-icons";
import {
  SiReact, SiNextdotjs, SiVuedotjs, SiTypescript, SiTailwindcss, SiFramer, SiRedux, SiVite,
  SiNodedotjs, SiGo, SiPython, SiRubyonrails, SiPhp, SiGraphql, SiFlutter, SiSwift, SiKotlin,
  SiExpo, SiGooglecloud, SiDocker, SiKubernetes, SiTerraform, SiGithubactions, SiPostgresql,
  SiMysql, SiMongodb, SiRedis, SiGooglebigquery, SiTensorflow, SiPandas, SiRust, SiOpenjdk,
  SiStripe, SiFirebase, SiFastapi, SiOpenai, SiVercel, SiFigma, SiNotion, SiSlack, SiLinear,
  SiGithub,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import {
  Code2, Network, Boxes, Layers, FlaskConical, ShieldCheck, Gauge, RefreshCw, GitBranch,
  Database, BarChart3, Radio, FileText, type LucideIcon,
} from "lucide-react";

export interface TechIcon {
  Icon: IconType | LucideIcon;
  color: string;
}

// Brand logos + colors (dark-theme friendly — dark brands get a light tone).
const map: Record<string, TechIcon> = {
  "React": { Icon: SiReact, color: "#61DAFB" },
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#ffffff" },
  "Vue.js": { Icon: SiVuedotjs, color: "#42B883" },
  "TypeScript": { Icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
  "Framer Motion": { Icon: SiFramer, color: "#A78BFA" },
  "Redux": { Icon: SiRedux, color: "#A475F9" },
  "Vite": { Icon: SiVite, color: "#FFC83D" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  "Go": { Icon: SiGo, color: "#00ADD8" },
  "Python": { Icon: SiPython, color: "#FFD64A" },
  "Java": { Icon: SiOpenjdk, color: "#F0A04B" },
  "Ruby on Rails": { Icon: SiRubyonrails, color: "#E0584B" },
  "PHP": { Icon: SiPhp, color: "#8993BE" },
  "GraphQL": { Icon: SiGraphql, color: "#E535AB" },
  "Rust": { Icon: SiRust, color: "#DEA584" },
  "Flutter": { Icon: SiFlutter, color: "#54C5F8" },
  "Swift / iOS": { Icon: SiSwift, color: "#F05138" },
  "Kotlin / Android": { Icon: SiKotlin, color: "#A97BFF" },
  "Expo": { Icon: SiExpo, color: "#ffffff" },
  "AWS": { Icon: FaAws, color: "#FF9900" },
  "Google Cloud": { Icon: SiGooglecloud, color: "#4FA0F7" },
  "GCP": { Icon: SiGooglecloud, color: "#4FA0F7" },
  "Docker": { Icon: SiDocker, color: "#2496ED" },
  "Kubernetes": { Icon: SiKubernetes, color: "#5B8DEF" },
  "Terraform": { Icon: SiTerraform, color: "#A172F7" },
  "GitHub Actions": { Icon: SiGithubactions, color: "#7AA2FF" },
  "PostgreSQL": { Icon: SiPostgresql, color: "#5A93D4" },
  "MySQL": { Icon: SiMysql, color: "#5B91B0" },
  "MongoDB": { Icon: SiMongodb, color: "#4DB33D" },
  "Redis": { Icon: SiRedis, color: "#FF6B5E" },
  "BigQuery": { Icon: SiGooglebigquery, color: "#7BAAF7" },
  "TensorFlow": { Icon: SiTensorflow, color: "#FF8F2B" },
  "Pandas": { Icon: SiPandas, color: "#C18FFF" },
  "FastAPI": { Icon: SiFastapi, color: "#11C9A7" },
  "Stripe": { Icon: SiStripe, color: "#9B8AFB" },
  "Firebase": { Icon: SiFirebase, color: "#FFCA28" },
  "Vercel": { Icon: SiVercel, color: "#ffffff" },
  "LLM / RAG": { Icon: SiOpenai, color: "#9AE6C9" },
  "VS Code": { Icon: Code2, color: "#3FA0FF" },
  "GitHub": { Icon: SiGithub, color: "#ffffff" },
  "Figma": { Icon: SiFigma, color: "#F26D4F" },
  "Notion": { Icon: SiNotion, color: "#ffffff" },
  "Slack": { Icon: SiSlack, color: "#E8A33D" },
  "Linear": { Icon: SiLinear, color: "#9AA0FF" },
  // Concepts / no brand logo — expressive fallbacks
  "REST / gRPC": { Icon: Network, color: "#22d3ee" },
  "gRPC": { Icon: Network, color: "#22d3ee" },
  "CI/CD": { Icon: GitBranch, color: "#22d3ee" },
  "System Design": { Icon: Network, color: "#8aa0ff" },
  "Microservices": { Icon: Boxes, color: "#8aa0ff" },
  "DDD": { Icon: Layers, color: "#8aa0ff" },
  "Testing": { Icon: FlaskConical, color: "#22d3ee" },
  "Security": { Icon: ShieldCheck, color: "#5FA04E" },
  "Performance": { Icon: Gauge, color: "#FF9900" },
  "Agile / Scrum": { Icon: RefreshCw, color: "#22d3ee" },
  "Vector DB": { Icon: Database, color: "#8aa0ff" },
  "Headless CMS": { Icon: FileText, color: "#22d3ee" },
  "D3.js": { Icon: BarChart3, color: "#FF8F2B" },
  "WebSocket": { Icon: Radio, color: "#22d3ee" },
};

const fallback: TechIcon = { Icon: Code2, color: "var(--color-accent-2)" };

export function techIcon(name: string): TechIcon {
  return map[name] ?? fallback;
}
