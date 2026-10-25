"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 90;
const DELETE_MS = 45;
const PAUSE_MS = 1600;

export default function Typewriter({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    let delay = deleting ? DELETE_MS : TYPE_MS;
    let next = () => setText(deleting ? text.slice(0, -1) : word.slice(0, text.length + 1));

    if (!deleting && text === word) {
      delay = PAUSE_MS;
      next = () => setDeleting(true);
    } else if (deleting && text === "") {
      delay = TYPE_MS;
      next = () => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      };
    }

    const timeout = setTimeout(next, delay);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return (
    <span aria-label={words.join(", ")}>
      <span aria-hidden className="gradient-text font-semibold">
        {text}
      </span>
      <span aria-hidden className="animate-blink ml-0.5 text-accent">
        ▍
      </span>
    </span>
  );
}
