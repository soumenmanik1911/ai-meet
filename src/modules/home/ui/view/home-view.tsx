"use client";

import * as React from "react";
import { authClient } from "@/lib/auth-client";

const MeetMeLogo = () => (
  <svg width="56" height="56" viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="30" fill="url(#grad)" />
    <text x="32" y="40" textAnchor="middle" fontSize="28" fill="#00FFC6" fontWeight="bold">🤝</text>
    <defs>
      <radialGradient id="grad" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#2be9a7" />
        <stop offset="100%" stopColor="#111" />
      </radialGradient>
    </defs>
  </svg>
);

export const HomeView = () => {
  const { data: session } = authClient.useSession();

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="rounded-xl shadow-2xl bg-zinc-900 px-8 py-10 flex flex-col items-center max-w-md w-full">
        <MeetMeLogo />
        <h2 className="mt-4 text-3xl font-bold text-white">Meet-Me</h2>
        <span className="mt-1 text-teal-300 text-md font-medium">Welcome home</span>
        <div className="mt-8 text-center">
          <p className="text-white text-lg">
            Logged in as <span className="font-semibold text-teal-300">{session.user.name}</span>
          </p>
          <button
            onClick={() => authClient.signOut()}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-900 px-6 py-2 font-semibold text-white transition hover:from-zinc-800 hover:to-zinc-900"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};
