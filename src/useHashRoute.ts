import { useEffect, useState } from "react";

/**
 * Minimal hash-based router. No dependency on react-router, and hash routing
 * works identically whether this site is viewed inside an embedded preview
 * or deployed standalone (no server rewrite rules needed, unlike path routing).
 */
export function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // #project-<slug> -> "<slug>" ; anything else -> null (home view)
  const match = hash.match(/^#project-(.+)$/);
  const projectSlug = match ? decodeURIComponent(match[1]) : null;

  return { projectSlug, hash };
}
