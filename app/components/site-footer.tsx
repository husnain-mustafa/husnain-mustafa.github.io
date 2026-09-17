import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print border-t border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div>
            <p className="text-sm font-medium text-ink">Husnain Mustafa</p>
            <p className="mt-1 text-sm text-muted">Warsaw, Poland</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/#bench" className="text-muted transition-colors hover:text-ink">
              Bench
            </Link>
            <Link href="/#record" className="text-muted transition-colors hover:text-ink">
              Record
            </Link>
            <Link href="/resume" className="text-muted transition-colors hover:text-ink">
              Résumé
            </Link>
            <a
              href="https://github.com/husnain-mustafa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-ink"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/husnain-mustafa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-2 border-t border-line pt-6 font-mono text-[11px] text-faint sm:flex-row">
          <span>© {year} Husnain Mustafa</span>
          <span>Warsaw, PL · CET</span>
        </div>
      </div>
    </footer>
  );
}
