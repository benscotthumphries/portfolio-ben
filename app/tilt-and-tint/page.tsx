import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SubPage from "../components/sub-page";
import menu from "../assets/tilt-and-tint/menu.webp";
import paint from "../assets/tilt-and-tint/paint.webp";
import prism from "../assets/tilt-and-tint/prism.webp";
import themes from "../assets/tilt-and-tint/themes.webp";

const description = "A sliding block puzzle game for Android: tilt the board, mix the colours.";

export const metadata: Metadata = {
  title: "Tilt & Tint",
  description,
  openGraph: { title: "Tilt & Tint", description, type: "website" },
};

const shots = [
  { src: menu, alt: "Tilt & Tint title screen with a demo board" },
  { src: paint, alt: "A paint level: slide yellow into blue to make green" },
  { src: prism, alt: "A Prism level on a dark starry theme" },
  { src: themes, alt: "The theme picker with eleven themes" },
];

const features = [
  ["One swipe moves everything", "Tilt the board and every block slides until it hits something. Plan where they'll stop."],
  ["8 worlds, 240 levels", "Stones, sticky moss, mirror blocks that slide the opposite way, twins, and paint that mixes on collision."],
  ["A hard daily puzzle", "The same puzzle for everyone each day, with a different mechanic each weekday and a shareable result."],
  ["Fair by design", "No forced ads. Half the worlds are free forever; one purchase unlocks the rest."],
];

const build = [
  "Godot 4 and GDScript",
  "Breadth-first solver proves every level is solvable and sets its par",
  "Procedural level and daily generator with difficulty ramps",
  "All art drawn in code and all sound synthesised at runtime",
  "Colour-blind symbols on every block",
];

export default function TiltAndTint() {
  return (
    <SubPage>
      <p className="font-mono text-sm text-accent">Coming soon to Google Play · Basement Box Games</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Tilt &amp; Tint</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">{description}</p>

      <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-4 sm:overflow-visible">
        {shots.map(({ src, alt }) => (
          <Image
            key={alt}
            src={src}
            alt={alt}
            className="w-44 shrink-0 snap-start rounded-2xl border border-line sm:w-full"
            placeholder="empty"
          />
        ))}
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {features.map(([title, text]) => (
          <div key={title} className="card p-6">
            <h2 className="font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-bold tracking-tight">How it&apos;s built</h2>
      <ul className="mt-4 space-y-2 text-muted">
        {build.map((line) => (
          <li key={line} className="flex gap-3">
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
            {line}
          </li>
        ))}
      </ul>

      <p className="mt-16 text-sm text-muted">
        <Link href="/tilt-and-tint/privacy" className="text-accent hover:underline">
          Privacy policy
        </Link>
      </p>
    </SubPage>
  );
}
