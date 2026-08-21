"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 min-h-screen flex items-center justify-center p-6 text-center font-sans">
        <div className="max-w-md bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Application Error</h2>
          <p className="text-sm text-slate-600">An unexpected system error occurred. Click below to recover.</p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-sm hover:bg-blue-500 transition-colors"
          >
            Recover Application
          </button>
        </div>
      </body>
    </html>
  );
}
