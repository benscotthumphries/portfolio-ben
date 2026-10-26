import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { profile } from "../data";
import CookieSettingsButton from "./cookie-settings-button";

// Shell for standalone pages (project pages, privacy policies): a back link, a narrow column and a footer.
export default function SubPage({ back = { href: "/", label: "Back to portfolio" }, children }: {
  back?: { href: string; label: string };
  children: ReactNode;
}) {
  return (
    <>
      <header className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-mono text-sm font-semibold">
          <span className="text-accent">~/</span>
          {profile.name.split(" ")[0].toLowerCase()}
        </Link>
        <Link href={back.href} className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-accent">
          <ArrowLeft className="size-4" /> {back.label}
        </Link>
      </header>
      <main className="mx-auto max-w-3xl px-4 pt-10 pb-24 sm:px-6">{children}</main>
      <footer className="pb-12 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name} ·{" "}
        <Link href="/privacy" className="transition hover:text-accent">
          Privacy
        </Link>{" "}
        · <CookieSettingsButton />
      </footer>
    </>
  );
}

// Long-form text styling for policy pages.
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4 leading-relaxed text-muted [&_a]:text-accent [&_a:hover]:underline [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-fg [&_strong]:text-fg">
      {children}
    </div>
  );
}
