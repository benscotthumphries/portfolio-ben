import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import SubPage from "../components/sub-page";
import menu from "../assets/slidescape/menu.webp";
import paint from "../assets/slidescape/paint.webp";
import prism from "../assets/slidescape/prism.webp";
import moss from "../assets/slidescape/moss.webp";

const description = "A sliding block puzzle game for Android: one swipe slides everything, mix the colors.";

export const metadata: Metadata = {
  title: "Slidescape",
  description,
  openGraph: { title: "Slidescape", description, type: "website" },
};

const shots = [
  { src: menu, alt: "Slidescape title screen with a demo board" },
  { src: moss, alt: "A Moss level: sticky tiles stop blocks dead" },
  { src: paint, alt: "A Paint level: red, blue and yellow paint to mix" },
  { src: prism, alt: "A Prism level: glowing tiles recolor blocks" },
];

const features = [
  ["One swipe moves everything", "Swipe once and every block slides until it hits something. Plan where they'll stop."],
  ["8 worlds, 240 levels", "Stones, sticky moss, mirror blocks that slide the opposite way, portals, paint that mixes on collision and prism tiles that recolor."],
  ["A hard daily puzzle", "The same puzzle for everyone each day, with a different mechanic each weekday and a shareable result."],
  ["Fair by design", "No ads, ever. Half the worlds are free forever; one purchase unlocks the rest."],
];

const build = [
  "Godot 4 and GDScript",
  "Breadth-first solver proves every level is solvable and sets its par",
  "Procedural level and daily generator with difficulty ramps",
  "All art drawn in code and all sound synthesized at runtime",
  "Color-blind symbols on every block",
];

export default function Slidescape() {
  return (
    <SubPage>
      <p className="font-mono text-sm text-accent">A Basement Box Games project · Coming soon to Google Play</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Slidescape</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">{description}</p>
      <p className="mt-4 max-w-xl text-muted">
        I built Slidescape under Basement Box Games, my indie game studio. This page covers how it&apos;s made; the game&apos;s
        own page has everything for players.
      </p>
      <a
        href="https://basementboxgames.com/slidescape/"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:bg-accent/85"
      >
        Visit basementboxgames.com <ArrowUpRight className="size-4" />
      </a>

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
        <a href="https://basementboxgames.com/slidescape/" className="text-accent hover:underline">
          basementboxgames.com
        </a>{" "}
        ·{" "}
        <a href="https://basementboxgames.com/slidescape/privacy/" className="text-accent hover:underline">
          Privacy policy
        </a>
      </p>
    </SubPage>
  );
}
