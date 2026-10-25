"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-muted transition hover:border-accent hover:text-accent print:hidden"
    >
      <Printer className="size-4" />
      Print / Save PDF
    </button>
  );
}
