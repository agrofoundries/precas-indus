"use client";

import React, { useEffect } from "react";
import { RefreshCw, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App boundary error caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
      <div className="max-w-md bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-extrabold text-navy-900">Application Recovered</h2>
        <p className="text-sm text-navy-600">A transient client refresh occurred. Click below to reload.</p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 text-white font-bold text-xs shadow-glow-subtle hover:bg-brand-500 transition-all"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Reload Application</span>
        </button>
      </div>
    </div>
  );
}
