import { Container } from "../ui/Container";

function IconProblem({ className }: { className?: string }) {
  return (
    <svg
      className={className || "h-6 w-6"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Alert / Problem - Simpler minimal icon */}
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
}

function IconSolution({ className }: { className?: string }) {
  return (
    <svg
      className={className || "h-6 w-6"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Check Circle / Solution */}
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className || "h-6 w-6"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

export function ProblemSolution() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Background Decoration - Subtle gradient blob */}
      <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-gray-50 blur-3xl opacity-60" />
      <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl opacity-60" />

      <Container className="relative z-10">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-heading">
            Before & After
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
            From Patchy to Perfect
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Your transformation journey starts here.
          </p>
        </header>

        <div className="relative mx-auto grid max-w-5xl gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
          {/* Problem Card - Elegant Muted Design */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-gray-50/50 p-8 transition-all duration-300 hover:border-gray-200 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-gray-400 shadow-sm ring-1 ring-gray-100 transition-colors group-hover:text-gray-600">
                <IconProblem className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">The Challenge</h3>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Before Transplant</p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "Sparse or non-existent facial hair",
                "Uneven growth patterns",
                "Scars or gaps in your beard",
                "Lack of confidence in your appearance"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-500 transition-colors group-hover:text-gray-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow Connector - Floating & Elegant */}
          <div className="flex items-center justify-center py-6 md:py-0">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-300 shadow-sm ring-1 ring-gray-100 transition-transform duration-500 hover:scale-110 hover:text-primary md:h-14 md:w-14">
              <IconArrowRight className="h-5 w-5 rotate-90 md:h-6 md:w-6 md:rotate-0" />
            </div>
          </div>

          {/* Solution Card - Vibrant & Elevated */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-lg shadow-gray-100/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
            {/* Subtle top highlight */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-black shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-primary/30">
                <IconSolution className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-heading">The Solution</h3>
                 <p className="text-xs font-medium uppercase tracking-wider text-primary/80">After Transplant</p>
              </div>
            </div>
            <ul className="space-y-4">
               {[
                "Permanent beard restoration with FUE or DHI",
                "Natural-looking results matching your face",
                "1,500–4,000 grafts for complete coverage",
                "Full recovery in 5–7 days"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 transition-colors group-hover:text-gray-900">
                   <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-dark">
                    <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#beard-free-analysis"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-primary-dark"
          >
            <span>Find Out If You're a Good Candidate</span>
            <svg 
              className="h-4 w-4" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
