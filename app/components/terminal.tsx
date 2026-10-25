"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { about, experience, funFact, homelab, profile, projects, skills, socials } from "../data";

type Host = "portfolio" | "homelab";
type Line = { id: number; content: ReactNode };

type Context = {
  host: Host;
  print: (...content: ReactNode[]) => void;
  run: (input: string) => void;
  setHost: (host: Host) => void;
  clear: () => void;
  history: string[];
  sleep: (ms: number) => Promise<void>;
};

type Command = {
  description: string;
  hidden?: boolean;
  run: (args: string[], ctx: Context) => void | Promise<void>;
};

const FILES: Record<string, string> = {
  "about.txt": "about",
  "resume.txt": "resume",
  "skills.txt": "skills",
  "projects.txt": "projects",
  "contact.txt": "contact",
};

const Link = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target={href.startsWith("#") || href.startsWith("mailto:") ? undefined : "_blank"}
    rel="noopener noreferrer"
    className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
  >
    {children}
  </a>
);

const Neofetch = () => (
  <div className="flex gap-5">
    <pre aria-hidden className="hidden leading-tight text-accent sm:block">{`   .--.
  |o_o |
  |:_/ |
 //   \\ \\
(|     | )
/'\\_   _/\`\\
\\___)=(___/`}</pre>
    <dl className="grid grid-cols-[auto_1fr] content-start gap-x-4">
      <dt className="col-span-2 mb-1 font-semibold text-accent">ben@homelab</dt>
      {homelab.specs.map(({ label, value }) => (
        <div key={label} className="contents">
          <dt className="text-accent-2">{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  </div>
);

const commands: Record<string, Command> = {
  help: {
    description: "List available commands",
    run: (_, { host, print, run }) => {
      const visible = Object.entries(commands).filter(([name, c]) => !c.hidden && (host === "homelab" || !HOMELAB_ONLY.has(name)));
      print(
        <div className="grid grid-cols-[auto_1fr] gap-x-6">
          {visible.map(([name, c]) => (
            <div key={name} className="contents">
              <button type="button" onClick={() => run(name)} className="text-left text-accent hover:underline">
                {name}
              </button>
              <span className="text-muted">{c.description}</span>
            </div>
          ))}
        </div>,
      );
    },
  },
  whoami: {
    description: "Who is Ben?",
    run: (_, { print }) => print(`${profile.name}: ${profile.title}.`, profile.availability),
  },
  about: {
    description: "The short version",
    run: (_, { print }) => print(...about),
  },
  resume: {
    description: "Where I've worked",
    run: (_, { print }) =>
      print(
        <ul>
          {experience.flatMap((job) =>
            job.roles.map((role) => (
              <li key={job.company + role.title}>
                <span className="text-accent-2">{role.dates.padEnd(20)}</span> {role.title} @ {job.company}
              </li>
            )),
          )}
        </ul>,
        <span>
          Full resume: <Link href="#resume">scroll to Experience</Link>
        </span>,
      ),
  },
  skills: {
    description: "What I work with",
    run: (_, { print }) =>
      print(
        ...skills.map(({ category, items }) => (
          <span key={category}>
            <span className="text-accent-2">{category}:</span> {items.join(", ")}
          </span>
        )),
      ),
  },
  projects: {
    description: "Things I've built",
    run: (_, { print }) =>
      print(
        ...projects.map((p) => (
          <span key={p.name}>
            {p.href ? <Link href={p.href}>{p.name}</Link> : <span className="text-accent">{p.name}</span>}
            <span className="text-muted"> ({p.tags.join(", ")})</span>
          </span>
        )),
      ),
  },
  contact: {
    description: "Get in touch",
    run: (_, { print }) =>
      print(
        <span>
          email    <Link href={`mailto:${profile.email}`}>{profile.email}</Link>
        </span>,
        <span>
          github   <Link href={socials.github}>{socials.github.replace("https://", "")}</Link>
        </span>,
        <span>
          linkedin <Link href={socials.linkedin}>{socials.linkedin.replace("https://www.", "")}</Link>
        </span>,
      ),
  },
  ssh: {
    description: "Connect to a machine (try: ssh homelab)",
    run: async ([target], { host, print, setHost, sleep }) => {
      if (host === "homelab") return print("Already connected. Type 'exit' to disconnect.");
      if (target !== "homelab") return print(`ssh: Could not resolve hostname ${target ?? ""}: Name or service not known`);
      print(<span className="text-muted">Connecting to homelab...</span>);
      await sleep(600);
      print(<span className="text-muted">Authenticated with public key.</span>);
      await sleep(400);
      setHost("homelab");
      print(<Neofetch />, <span className="text-muted">Type &apos;services&apos; to see what&apos;s running, or &apos;exit&apos; to disconnect.</span>);
    },
  },
  services: {
    description: "List running services",
    run: (_, { print }) =>
      print(
        ...homelab.services.map(({ name, description }) => (
          <span key={name}>
            <span className="text-emerald-500">●</span> <span className="text-accent">{name.padEnd(16)}</span>
            <span className="text-muted">{description}</span>
          </span>
        )),
      ),
  },
  neofetch: {
    description: "System info",
    run: (_, { print }) => print(<Neofetch />),
  },
  exit: {
    description: "Disconnect from homelab",
    run: (_, { host, print, setHost }) => {
      if (host !== "homelab") return print("You're already home.");
      setHost("portfolio");
      print(<span className="text-muted">Connection to homelab closed.</span>);
    },
  },
  ls: {
    description: "List files",
    run: (_, { print }) => print(<span className="text-accent-2">{Object.keys(FILES).join("  ")}</span>),
  },
  cat: {
    description: "Read a file (try: cat about.txt)",
    run: ([file], { print, run }) => {
      if (!file) return print("usage: cat <file>");
      if (!FILES[file]) return print(`cat: ${file}: No such file or directory`);
      run(FILES[file]);
    },
  },
  history: {
    description: "Show command history",
    run: (_, { print, history }) => print(...history.map((h, i) => `${String(i + 1).padStart(3)}  ${h}`)),
  },
  clear: {
    description: "Clear the screen",
    run: (_, { clear }) => clear(),
  },
  dive: {
    description: "",
    hidden: true,
    run: async (_, { print, sleep }) => {
      for (const depth of ["5m", "10m", "18m"]) {
        print(<span className="text-accent-2">descending... {depth}</span>);
        await sleep(450);
      }
      print(<span className="text-accent-2">surfacing...</span>);
      await sleep(700);
      print(<span className="text-muted">where&apos;s the boat?</span>);
      await sleep(900);
      print(funFact.headline, funFact.detail);
    },
  },
  sudo: {
    description: "",
    hidden: true,
    run: (_, { print }) => print("ben is not in the sudoers file. This incident will be reported."),
  },
};

const HOMELAB_ONLY = new Set(["services", "neofetch", "exit"]);
const SUGGESTIONS: Record<Host, string[]> = {
  portfolio: ["whoami", "resume", "ssh homelab", "help"],
  homelab: ["services", "neofetch", "exit"],
};

let nextId = 0;

export default function Terminal() {
  const [host, setHost] = useState<Host>("portfolio");
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  // Commands await between prints, so they read the host from a ref instead of a stale closure.
  const hostRef = useRef<Host>("portfolio");

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const print = (...content: ReactNode[]) =>
    setLines((prev) => [...prev, ...content.map((c) => ({ id: nextId++, content: c }))]);

  const prompt = (h: Host) => (
    <span className="shrink-0">
      <span className="text-accent">ben@{h}</span>
      <span className="text-muted">:~$</span>
    </span>
  );

  const run = async (raw: string, echo = true) => {
    const trimmed = raw.trim();
    if (echo) {
      print(
        <span className="flex gap-2">
          {prompt(hostRef.current)} {trimmed}
        </span>,
      );
    }
    if (!trimmed) return;
    if (echo) setHistory((h) => [...h, trimmed]);

    const [rawName, ...args] = trimmed.split(/\s+/);
    const name = rawName.toLowerCase();
    const command = commands[name];
    if (!command || (hostRef.current === "portfolio" && HOMELAB_ONLY.has(name) && name !== "exit")) {
      print(`command not found: ${rawName}. Type 'help' to see what you can do.`);
      return;
    }

    setBusy(true);
    await command.run(args, {
      host: hostRef.current,
      print,
      run: (next) => void run(next, false),
      setHost: (h) => {
        hostRef.current = h;
        setHost(h);
      },
      clear: () => setLines([]),
      history: [...history, trimmed],
      sleep: (ms) => new Promise((r) => setTimeout(r, ms)),
    });
    setBusy(false);
  };

  const submit = (value: string) => {
    if (busy) return;
    setInput("");
    setHistoryIndex(null);
    void run(value);
    inputRef.current?.focus({ preventScroll: true });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submit(input);
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      if (!history.length) return;
      const index =
        e.key === "ArrowUp"
          ? Math.max(0, (historyIndex ?? history.length) - 1)
          : Math.min(history.length, (historyIndex ?? history.length) + 1);
      setHistoryIndex(index);
      setInput(history[index] ?? "");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const candidates = [...Object.keys(commands).filter((c) => !commands[c].hidden), "ssh homelab", ...Object.keys(FILES).map((f) => `cat ${f}`)];
      const matches = candidates.filter((c) => c.startsWith(input) && c !== input);
      if (matches.length === 1) setInput(matches[0]);
      else if (matches.length > 1) print(<span className="text-muted">{matches.join("  ")}</span>);
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <div
      className="card flex h-[28rem] flex-col overflow-hidden font-mono text-sm"
      onClick={() => {
        // Don't steal focus while someone is selecting text to copy.
        if (!window.getSelection()?.toString()) inputRef.current?.focus({ preventScroll: true });
      }}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="size-3 rounded-full bg-red-400/80" />
        <span className="size-3 rounded-full bg-yellow-400/80" />
        <span className="size-3 rounded-full bg-green-400/80" />
        <span className="ml-2 text-xs text-muted">ben@{host}: ~</span>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-1 overflow-y-auto p-4 break-words whitespace-pre-wrap">
        <p className="text-muted">
          Welcome. This terminal actually works: type <span className="text-accent">help</span>, or tap a command below.
        </p>
        <div role="log" aria-live="polite" className="space-y-1">
          {lines.map((line) => (
            <div key={line.id}>{line.content}</div>
          ))}
        </div>
        <label className="flex items-center gap-2">
          {prompt(host)}
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            readOnly={busy}
            aria-label="Terminal command"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            className="min-w-0 flex-1 bg-transparent text-base text-fg caret-accent outline-none sm:text-sm"
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3">
        {SUGGESTIONS[host].map((cmd) => (
          <button
            key={cmd}
            type="button"
            disabled={busy}
            onClick={(e) => {
              e.stopPropagation();
              submit(cmd);
            }}
            className="rounded-full border border-line px-3 py-1 text-xs text-muted transition hover:border-accent hover:text-accent disabled:opacity-50"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
