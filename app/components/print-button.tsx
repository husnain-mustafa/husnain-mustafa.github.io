"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink/[0.06]"
    >
      <Printer className="h-4 w-4" strokeWidth={1.75} />
      Print / Save PDF
    </button>
  );
}
