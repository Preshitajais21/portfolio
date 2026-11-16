import { useState } from "react";
import { profile } from "../data";
import { SectionLabel } from "./About";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the email is still shown as selectable text below.
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionLabel index="05" label="Contact" />

        <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-fg">
          Open to Software Engineer, AI/ML Engineer, and Data Engineer roles. Reach out directly
          or connect on LinkedIn.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <button
            type="button"
            onClick={copyEmail}
            className="flex items-center gap-2 rounded-md border border-line px-4 py-2.5 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent"
          >
            {profile.email}
            <span className="text-xs text-muted">{copied ? "copied ✓" : "(copy)"}</span>
          </button>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener"
            className="rounded-md border border-line px-4 py-2.5 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn ↗
          </a>

          <a
            href={profile.resumeFile}
            target="_blank"
            rel="noopener"
            className="rounded-md bg-accent px-4 py-2.5 font-mono text-sm font-medium text-[#15100b] transition-opacity hover:opacity-90"
          >
            View résumé
          </a>
        </div>
      </div>
    </section>
  );
}
