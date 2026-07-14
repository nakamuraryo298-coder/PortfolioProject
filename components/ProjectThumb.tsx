import type { ReactNode } from "react";

// Generative UI "screenshots" for each achievement card.
// Every project renders a mock of a real working product — a website, landing
// page, admin table, dashboard, mobile app, AI chat, or storefront — with hue,
// layout details, and chart/data seeded from the project index so no two match.

type Palette = {
  dark: boolean;
  bg: string;
  surface: string;
  surface2: string;
  border: string;
  text: string;
  subtext: string;
  accent: string;
  accent2: string;
  sidebar: string;
  hue: number;
};

const CATEGORY: Record<string, { kind: string; hue: number }> = {
  medical: { kind: "site", hue: 200 },
  animal: { kind: "site", hue: 150 },
  corporate: { kind: "table", hue: 220 },
  beauty: { kind: "lp", hue: 330 },
  brand: { kind: "shop", hue: 20 },
  recruit: { kind: "site", hue: 262 },
  education: { kind: "site", hue: 40 },
  welfare: { kind: "site", hue: 170 },
  shopping: { kind: "shop", hue: 10 },
  sports: { kind: "dash", hue: 280 },
  certification: { kind: "table", hue: 210 },
  food: { kind: "lp", hue: 30 },
  leisure: { kind: "site", hue: 120 },
  public: { kind: "table", hue: 205 },
  lp: { kind: "lp", hue: 300 },
  nocode: { kind: "site", hue: 190 },
  app: { kind: "phone", hue: 150 },
  tool: { kind: "dash", hue: 210 },
};

// deterministic PRNG so server and client render identically (no hydration drift)
function mulberry32(seed: number) {
  let a = seed + 0x9e3779b9;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildPalette(rnd: () => number, baseHue: number): Palette {
  const h = Math.round(baseHue + (rnd() * 44 - 22) + 360) % 360;
  const h2 = (h + 24 + Math.round(rnd() * 70)) % 360;
  const dark = rnd() < 0.42;
  const accent = `hsl(${h} 85% ${dark ? 63 : 54}%)`;
  const accent2 = `hsl(${h2} 82% ${dark ? 66 : 57}%)`;
  const sidebar = `hsl(${h} 30% ${dark ? 10 : 15}%)`;
  return dark
    ? {
        dark, accent, accent2, sidebar, hue: h,
        bg: `hsl(${h} 28% 9%)`,
        surface: `hsl(${h} 24% 13%)`,
        surface2: `hsl(${h} 22% 18%)`,
        border: `hsl(${h} 20% 25%)`,
        text: `hsl(${h} 30% 95%)`,
        subtext: `hsl(${h} 16% 58%)`,
      }
    : {
        dark, accent, accent2, sidebar, hue: h,
        bg: `hsl(${h} 32% 97%)`,
        surface: "#ffffff",
        surface2: `hsl(${h} 30% 93%)`,
        border: `hsl(${h} 26% 87%)`,
        text: `hsl(${h} 26% 17%)`,
        subtext: `hsl(${h} 12% 60%)`,
      };
}

const ri = (rnd: () => number, a: number, b: number) => a + Math.floor(rnd() * (b - a + 1));

function Chrome({ c }: { c: Palette }) {
  return (
    <>
      <rect x={0} y={0} width={400} height={22} fill={c.surface2} />
      <circle cx={13} cy={11} r={3} fill="#ff5f57" />
      <circle cx={25} cy={11} r={3} fill="#febc2e" />
      <circle cx={37} cy={11} r={3} fill="#28c840" />
      <rect x={58} y={6} width={300} height={11} rx={5.5} fill={c.surface2} />
      <rect x={64} y={9} width={70} height={5} rx={2.5} fill={c.subtext} opacity={0.6} />
    </>
  );
}

function Site({ c, rnd, seed }: { c: Palette; rnd: () => number; seed: number }) {
  return (
    <>
      <rect x={0} y={0} width={400} height={250} fill={c.bg} />
      <Chrome c={c} />
      {/* nav */}
      <rect x={0} y={22} width={400} height={30} fill={c.surface} />
      <circle cx={26} cy={37} r={6} fill={c.accent} />
      <rect x={36} y={34} width={40} height={6} rx={3} fill={c.text} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={224 + i * 34} y={34} width={22} height={5} rx={2.5} fill={c.subtext} />
      ))}
      <rect x={330} y={29} width={54} height={16} rx={8} fill={c.accent} />
      {/* hero copy */}
      <rect x={24} y={80} width={150} height={16} rx={4} fill={c.text} />
      <rect x={24} y={102} width={116} height={16} rx={4} fill={c.text} />
      <rect x={24} y={130} width={170} height={7} rx={3.5} fill={c.subtext} />
      <rect x={24} y={142} width={140} height={7} rx={3.5} fill={c.subtext} />
      <rect x={24} y={162} width={78} height={22} rx={11} fill={c.accent} />
      <rect x={110} y={162} width={64} height={22} rx={11} fill="none" stroke={c.border} strokeWidth={2} />
      {/* hero visual */}
      <rect x={222} y={74} width={158} height={116} rx={10} fill={`url(#g-${seed})`} />
      <circle cx={301} cy={118} r={22} fill="#ffffff" opacity={0.85} />
      <path d={`M294 108 L294 128 L312 118 Z`} fill={c.accent} />
      {/* feature cards */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={24 + i * 122} y={202} width={110} height={38} rx={7} fill={c.surface} stroke={c.border} />
          <circle cx={40 + i * 122} cy={216} r={6} fill={c.accent2} />
          <rect x={52 + i * 122} y={212} width={58} height={5} rx={2.5} fill={c.text} />
          <rect x={34 + i * 122} y={226} width={90} height={4} rx={2} fill={c.subtext} />
        </g>
      ))}
    </>
  );
}

function Lp({ c, rnd, seed }: { c: Palette; rnd: () => number; seed: number }) {
  return (
    <>
      <rect x={0} y={0} width={400} height={250} fill={c.bg} />
      <Chrome c={c} />
      {/* hero band */}
      <rect x={0} y={22} width={400} height={156} fill={`url(#g-${seed})`} />
      <circle cx={24} cy={41} r={6} fill="#ffffff" opacity={0.9} />
      <rect x={34} y={38} width={40} height={6} rx={3} fill="#ffffff" opacity={0.85} />
      <rect x={330} y={33} width={54} height={16} rx={8} fill="#ffffff" />
      <rect x={30} y={70} width={185} height={16} rx={4} fill="#ffffff" />
      <rect x={30} y={92} width={150} height={16} rx={4} fill="#ffffff" />
      <rect x={30} y={118} width={190} height={6} rx={3} fill="#ffffff" opacity={0.8} />
      <rect x={30} y={129} width={158} height={6} rx={3} fill="#ffffff" opacity={0.8} />
      <rect x={30} y={148} width={92} height={22} rx={11} fill="#ffffff" />
      <rect x={44} y={155} width={44} height={8} rx={4} fill={c.accent} />
      {/* form card */}
      <rect x={250} y={52} width={132} height={120} rx={10} fill={c.surface} stroke={c.border} />
      <rect x={264} y={66} width={74} height={7} rx={3} fill={c.text} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={264} y={84 + i * 20} width={104} height={13} rx={4} fill={c.surface2} />
      ))}
      <rect x={264} y={148} width={104} height={16} rx={8} fill={c.accent} />
      {/* trust logos */}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={40 + i * 90} y={198} width={60} height={11} rx={5.5} fill={c.surface2} />
      ))}
      <rect x={110} y={226} width={180} height={8} rx={4} fill={c.subtext} opacity={0.45} />
    </>
  );
}

function Table({ c, rnd }: { c: Palette; rnd: () => number }) {
  const statuses = [c.accent, "hsl(150 60% 48%)", "hsl(40 92% 55%)", c.accent2, "hsl(150 60% 48%)"];
  return (
    <>
      <rect x={0} y={0} width={400} height={250} fill={c.bg} />
      {/* sidebar */}
      <rect x={0} y={0} width={78} height={250} fill={c.sidebar} />
      <circle cx={18} cy={20} r={6} fill={c.accent} />
      <rect x={30} y={17} width={34} height={6} rx={3} fill="#ffffff" opacity={0.8} />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          {i === 1 && <rect x={8} y={36 + i * 22} width={62} height={18} rx={5} fill="#ffffff" opacity={0.12} />}
          <circle cx={18} cy={45 + i * 22} r={3.5} fill="#ffffff" opacity={i === 1 ? 0.95 : 0.4} />
          <rect x={28} y={42 + i * 22} width={ri(rnd, 26, 44)} height={5} rx={2.5} fill="#ffffff" opacity={i === 1 ? 0.9 : 0.35} />
        </g>
      ))}
      {/* topbar */}
      <rect x={78} y={0} width={322} height={30} fill={c.surface} />
      <rect x={92} y={11} width={92} height={9} rx={4.5} fill={c.surface2} />
      <circle cx={384} cy={15} r={8} fill={c.accent2} />
      {/* title + action */}
      <rect x={92} y={44} width={82} height={9} rx={4} fill={c.text} />
      <rect x={330} y={41} width={54} height={15} rx={7} fill={c.accent} />
      {/* table header */}
      <rect x={92} y={66} width={296} height={20} rx={4} fill={c.surface2} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={100 + i * 74} y={73} width={ri(rnd, 30, 46)} height={5} rx={2.5} fill={c.subtext} />
      ))}
      {/* rows */}
      {[0, 1, 2, 3, 4].map((r) => (
        <g key={r}>
          <rect x={92} y={90 + r * 28} width={296} height={24} rx={4} fill={c.surface} stroke={c.border} />
          <circle cx={104} cy={102 + r * 28} r={5} fill={c.accent2} opacity={0.7} />
          <rect x={116} y={99 + r * 28} width={ri(rnd, 40, 70)} height={5} rx={2.5} fill={c.text} />
          <rect x={210} y={99 + r * 28} width={ri(rnd, 30, 50)} height={5} rx={2.5} fill={c.subtext} />
          <rect x={320} y={97 + r * 28} width={48} height={12} rx={6} fill={statuses[r % statuses.length]} opacity={0.9} />
        </g>
      ))}
    </>
  );
}

function Dash({ c, rnd, seed }: { c: Palette; rnd: () => number; seed: number }) {
  const pts: number[] = Array.from({ length: 7 }, () => ri(rnd, 138, 210));
  const x0 = 84;
  const dx = (262 - x0) / 6;
  const line = pts.map((y, i) => `${(x0 + i * dx).toFixed(1)},${y}`).join(" ");
  const area = `${x0},224 ${line} ${(x0 + 6 * dx).toFixed(1)},224`;
  const bars = Array.from({ length: 5 }, () => ri(rnd, 24, 90));
  return (
    <>
      <rect x={0} y={0} width={400} height={250} fill={c.bg} />
      {/* sidebar */}
      <rect x={0} y={0} width={56} height={250} fill={c.sidebar} />
      <circle cx={28} cy={22} r={7} fill={c.accent} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={16} y={46 + i * 24} width={24} height={6} rx={3} fill="#ffffff" opacity={i === 0 ? 0.9 : 0.4} />
      ))}
      {/* topbar */}
      <rect x={56} y={0} width={344} height={28} fill={c.surface} />
      <rect x={70} y={10} width={70} height={8} rx={4} fill={c.text} />
      <circle cx={384} cy={14} r={7} fill={c.accent2} />
      {/* KPI cards */}
      {[0, 1, 2].map((i) => {
        const sx = 70 + i * 110;
        const sp = Array.from({ length: 5 }, (_, k) => `${sx + 10 + k * 18},${80 - ri(rnd, 2, 14)}`).join(" ");
        return (
          <g key={i}>
            <rect x={sx} y={40} width={98} height={48} rx={7} fill={c.surface} stroke={c.border} />
            <rect x={sx + 10} y={50} width={40} height={5} rx={2.5} fill={c.subtext} />
            <rect x={sx + 10} y={60} width={ri(rnd, 30, 52)} height={11} rx={3} fill={c.text} />
            <polyline points={sp} fill="none" stroke={c.accent2} strokeWidth={1.5} />
          </g>
        );
      })}
      {/* line chart */}
      <rect x={70} y={100} width={208} height={138} rx={8} fill={c.surface} stroke={c.border} />
      <rect x={82} y={112} width={64} height={6} rx={3} fill={c.text} />
      <polygon points={area} fill={`url(#area-${seed})`} />
      <polyline points={line} fill="none" stroke={c.accent} strokeWidth={2.5} strokeLinejoin="round" />
      {pts.map((y, i) => (
        <circle key={i} cx={x0 + i * dx} cy={y} r={2.5} fill={c.accent} />
      ))}
      {/* bar chart */}
      <rect x={288} y={100} width={100} height={138} rx={8} fill={c.surface} stroke={c.border} />
      <rect x={300} y={112} width={46} height={6} rx={3} fill={c.text} />
      {bars.map((h, i) => (
        <rect key={i} x={300 + i * 16} y={224 - h} width={10} height={h} rx={2} fill={i % 2 ? c.accent2 : c.accent} />
      ))}
    </>
  );
}

function Phone({ c, seed }: { c: Palette; rnd: () => number; seed: number }) {
  return (
    <>
      <rect x={0} y={0} width={400} height={250} fill={`url(#g-${seed})`} />
      <circle cx={60} cy={58} r={52} fill="#ffffff" opacity={0.08} />
      <circle cx={352} cy={202} r={72} fill="#ffffff" opacity={0.07} />
      {/* back phone */}
      <rect x={112} y={50} width={92} height={196} rx={16} fill={c.surface2} opacity={0.65} stroke={c.border} />
      {/* front phone */}
      <rect x={166} y={28} width={106} height={212} rx={18} fill={c.surface} stroke={c.border} strokeWidth={1.5} />
      <rect x={204} y={34} width={30} height={6} rx={3} fill={c.bg} />
      {/* header */}
      <rect x={174} y={46} width={90} height={36} rx={8} fill={c.accent} />
      <circle cx={189} cy={64} r={7} fill="#ffffff" opacity={0.9} />
      <rect x={202} y={58} width={44} height={5} rx={2.5} fill="#ffffff" opacity={0.9} />
      <rect x={202} y={68} width={30} height={4} rx={2} fill="#ffffff" opacity={0.6} />
      {/* list */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={174} y={90 + i * 38} width={90} height={32} rx={7} fill={c.surface2} />
          <rect x={180} y={96 + i * 38} width={20} height={20} rx={5} fill={c.accent2} opacity={0.85} />
          <rect x={206} y={98 + i * 38} width={46} height={5} rx={2.5} fill={c.text} />
          <rect x={206} y={108 + i * 38} width={32} height={4} rx={2} fill={c.subtext} />
        </g>
      ))}
      {/* tab bar */}
      <rect x={174} y={210} width={90} height={24} rx={8} fill={c.surface2} />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={190 + i * 20} cy={222} r={3.5} fill={i === 0 ? c.accent : c.subtext} />
      ))}
    </>
  );
}

function Chat({ c, rnd }: { c: Palette; rnd: () => number }) {
  const bubbles = [
    { me: false, y: 42, w: 176, h: 34, lines: 3 },
    { me: true, y: 84, w: 138, h: 26, lines: 2 },
    { me: false, y: 118, w: 200, h: 42, lines: 3 },
    { me: true, y: 168, w: 126, h: 24, lines: 2 },
  ];
  return (
    <>
      <rect x={0} y={0} width={400} height={250} fill={c.bg} />
      {/* sidebar */}
      <rect x={0} y={0} width={96} height={250} fill={c.surface2} />
      <rect x={12} y={14} width={72} height={16} rx={8} fill={c.accent} />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          {i === 0 && <rect x={8} y={38 + i * 22} width={80} height={18} rx={5} fill={c.accent} opacity={0.16} />}
          <rect x={14} y={43 + i * 22} width={ri(rnd, 40, 72)} height={6} rx={3} fill={c.subtext} opacity={i === 0 ? 0.9 : 0.5} />
        </g>
      ))}
      {/* header */}
      <rect x={96} y={0} width={304} height={28} fill={c.surface} />
      <rect x={110} y={10} width={70} height={8} rx={4} fill={c.text} />
      {/* bubbles */}
      {bubbles.map((b, i) => {
        const x = b.me ? 372 - b.w : 112;
        return (
          <g key={i}>
            {!b.me && <circle cx={120} cy={b.y + 10} r={7} fill={c.accent} />}
            <rect x={b.me ? x : x + 18} y={b.y} width={b.me ? b.w : b.w - 18} height={b.h} rx={10} fill={b.me ? c.accent : c.surface2} />
            {Array.from({ length: b.lines }).map((_, k) => (
              <rect
                key={k}
                x={(b.me ? x : x + 18) + 12}
                y={b.y + 9 + k * 9}
                width={(b.me ? b.w : b.w - 18) - 24 - (k === b.lines - 1 ? ri(rnd, 10, 40) : 0)}
                height={4}
                rx={2}
                fill={b.me ? "#ffffff" : c.text}
                opacity={b.me ? 0.85 : 0.7}
              />
            ))}
          </g>
        );
      })}
      {/* input */}
      <rect x={112} y={212} width={248} height={24} rx={12} fill={c.surface} stroke={c.border} />
      <rect x={124} y={221} width={120} height={6} rx={3} fill={c.subtext} opacity={0.5} />
      <circle cx={348} cy={224} r={9} fill={c.accent} />
      <path d="M344 224 L352 224 M349 221 L352 224 L349 227" stroke="#ffffff" strokeWidth={1.5} fill="none" />
    </>
  );
}

function Shop({ c, rnd }: { c: Palette; rnd: () => number }) {
  return (
    <>
      <rect x={0} y={0} width={400} height={250} fill={c.bg} />
      <Chrome c={c} />
      {/* nav */}
      <rect x={0} y={22} width={400} height={30} fill={c.surface} />
      <rect x={16} y={33} width={46} height={8} rx={4} fill={c.text} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={150 + i * 40} y={35} width={26} height={5} rx={2.5} fill={c.subtext} />
      ))}
      <circle cx={356} cy={37} r={8} fill={c.surface2} />
      <rect x={372} y={30} width={16} height={14} rx={3} fill={c.accent} />
      {/* product grid 3x2 */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 18 + col * 128;
        const y = 60 + row * 94;
        const imgHue = (c.hue + i * 42) % 360;
        return (
          <g key={i}>
            <rect x={x} y={y} width={120} height={88} rx={8} fill={c.surface} stroke={c.border} />
            <rect x={x} y={y} width={120} height={46} rx={8} fill={`hsl(${imgHue} 70% ${c.dark ? 55 : 62}%)`} />
            <rect x={x} y={y + 38} width={120} height={8} fill={`hsl(${imgHue} 70% ${c.dark ? 55 : 62}%)`} />
            <rect x={x + 10} y={y + 56} width={64} height={6} rx={3} fill={c.text} />
            <rect x={x + 10} y={y + 68} width={36} height={9} rx={3} fill={c.accent} />
            <rect x={x + 84} y={y + 64} width={26} height={16} rx={8} fill={c.accent2} />
          </g>
        );
      })}
    </>
  );
}

export default function ProjectThumb({ category, seed = 0 }: { category: string; seed?: number }) {
  const cfg = CATEGORY[category] ?? { kind: "site", hue: 220 };
  const rnd = mulberry32((seed + 1) * 2654435761);
  const baseHue = (cfg.hue + seed * 41) % 360;
  const c = buildPalette(rnd, baseHue);

  let body: ReactNode;
  switch (cfg.kind) {
    case "lp": body = <Lp c={c} rnd={rnd} seed={seed} />; break;
    case "table": body = <Table c={c} rnd={rnd} />; break;
    case "dash": body = <Dash c={c} rnd={rnd} seed={seed} />; break;
    case "phone": body = <Phone c={c} rnd={rnd} seed={seed} />; break;
    case "chat": body = <Chat c={c} rnd={rnd} />; break;
    case "shop": body = <Shop c={c} rnd={rnd} />; break;
    default: body = <Site c={c} rnd={rnd} seed={seed} />;
  }

  return (
    <div aria-hidden className="relative h-full w-full overflow-hidden">
      <svg viewBox="0 0 400 250" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`g-${seed}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={c.accent} />
            <stop offset="1" stopColor={c.accent2} />
          </linearGradient>
          <linearGradient id={`area-${seed}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={c.accent} stopOpacity="0.35" />
            <stop offset="1" stopColor={c.accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        {body}
      </svg>
      {/* subtle screen sheen */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5" />
    </div>
  );
}
