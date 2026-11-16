export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-mono">Built with React, TypeScript &amp; Tailwind CSS.</p>
        <p className="font-mono">© {new Date().getFullYear()} Preshita Jaiswal</p>
      </div>
    </footer>
  );
}
