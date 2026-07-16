"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectThumb from "./ProjectThumb";

// Cover for an achievement card.
// • If a real screenshot exists, it is shown directly over a solid color
//   placeholder — no generated mockup appears first.
// • Only if the image fails to load (e.g. firewall-blocked sites with no file)
//   do we fall back to the generated <ProjectThumb /> mockup.
export default function ProjectCover({
  image,
  category,
  seed,
  alt,
}: {
  image: string;
  category: string;
  seed: number;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);
  const hasImage = Boolean(image) && !failed;
  const hue = (seed * 47) % 360;

  return (
    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden border-b border-[var(--color-border)]">
      {hasImage ? (
        <>
          {/* solid color placeholder, shown only until the screenshot paints */}
          <div className="absolute inset-0" style={{ backgroundColor: `hsl(${hue} 28% 15%)` }} />
          <Image
            src={`/projects/${image}`}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 400px"
            loading="lazy"
            onError={() => setFailed(true)}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </>
      ) : (
        // fallback: no screenshot available → generated mockup
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
          <ProjectThumb category={category} seed={seed} />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5" />
    </div>
  );
}
