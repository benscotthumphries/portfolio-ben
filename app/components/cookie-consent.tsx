"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

// Google Analytics only loads after the visitor accepts. Declining is as easy as accepting, a
// Global Privacy Control signal counts as declining, and "Cookie settings" reopens the banner.

const STORAGE_KEY = "cookie-consent";
const OPEN_EVENT = "open-cookie-settings";

type Choice = "granted" | "denied";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean;
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

function savedChoice(): Choice | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function clearAnalyticsCookies() {
  const host = location.hostname;
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (!name.startsWith("_ga")) continue;
    for (const domain of ["", `; domain=${host}`, `; domain=.${host}`]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }
  }
}

export default function CookieConsent({ gaId }: { gaId: string }) {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const load = () => {
      const saved = savedChoice();
      const gpc = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl;
      if (saved) setChoice(saved);
      else if (gpc) setChoice("denied");
      else setOpen(true);
    };
    load();
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  const decide = (next: Choice) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing or storage blocked: the choice still applies for this visit.
    }
    window[`ga-disable-${gaId}`] = next === "denied";
    if (next === "denied") clearAnalyticsCookies();
    else window.gtag?.("config", gaId);
    setChoice(next);
    setOpen(false);
  };

  return (
    <>
      {choice === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${gaId}');`}
          </Script>
        </>
      )}
      {open && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-[60] p-4 print:hidden"
        >
          <div className="card mx-auto flex max-w-3xl flex-col gap-4 p-5 shadow-2xl backdrop-blur-lg sm:flex-row sm:items-center">
            <p className="flex-1 text-sm leading-relaxed text-muted">
              Can I use Google Analytics cookies to count visits? Nothing is used for ads.{" "}
              <Link href="/privacy" className="text-accent hover:underline">
                Privacy policy
              </Link>
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => decide("denied")}
                className="flex-1 rounded-full border border-line px-5 py-2 text-sm font-medium transition hover:border-accent/60 sm:flex-none"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => decide("granted")}
                className="flex-1 rounded-full border border-accent bg-accent px-5 py-2 text-sm font-medium text-bg transition hover:bg-accent/85 sm:flex-none"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
