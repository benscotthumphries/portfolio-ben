"use client";

import { openCookieSettings } from "./cookie-consent";

export default function CookieSettingsButton() {
  return (
    <button type="button" onClick={openCookieSettings} className="transition hover:text-accent">
      Cookie settings
    </button>
  );
}
