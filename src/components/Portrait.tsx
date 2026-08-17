import p480 from "@/assets/amr-portrait-480.webp";
import p720 from "@/assets/amr-portrait-720.webp";
import p1024 from "@/assets/amr-portrait-1024.webp";

export const portraitSrc = p1024;

export function Portrait({ alt }: { alt: string }) {
  return (
    <img
      src={p720}
      srcSet={`${p480} 480w, ${p720} 720w, ${p1024} 1024w`}
      sizes="(max-width: 768px) 90vw, 420px"
      width={720}
      height={900}
      alt={alt}
      fetchPriority="high"
      decoding="async"
      className="aspect-[4/5] w-full object-cover"
    />
  );
}
