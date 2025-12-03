import { Container } from "../ui/Container";

function IconAngle() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Angle / Direction */}
      <path d="M3 12l18-9-9 18-2-8-8-2z" />
    </svg>
  );
}

function IconDensity() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Density / Zones */}
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

function IconAsymmetry() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Asymmetry / Natural variation */}
      <path d="M12 2v20M2 12h20" />
      <circle cx="8" cy="8" r="2" />
      <circle cx="16" cy="16" r="2" />
    </svg>
  );
}

function IconLine() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Soft line / Feather */}
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" x2="2" y1="8" y2="22" />
    </svg>
  );
}

function IconCalibre() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Hair thickness / Calibre */}
      <line x1="3" y1="12" x2="21" y2="12" strokeWidth="1.5" />
      <line x1="3" y1="8" x2="21" y2="8" strokeWidth="2.5" />
      <line x1="3" y1="16" x2="21" y2="16" strokeWidth="1" />
    </svg>
  );
}

export function WhatMakesNatural() {
  const principles = [
    {
      Icon: IconAngle,
      title: "Correct growth angle",
      description:
        "Hairs flow along the face, not straight out. Each zone (cheeks, jawline, chin, mustache) has its own typical angle that must be respected.",
    },
    {
      Icon: IconDensity,
      title: "Different density by zone",
      description:
        'Natural beards are denser at the chin and jawline, slightly lighter on the cheeks. This controlled beard density improvement looks realistic; if everything is equally dense, it looks like a painted-on block.',
    },
    {
      Icon: IconAsymmetry,
      title: "Micro‑asymmetry is normal",
      description:
        "Real beards are never perfectly mirrored. A small difference in density or line height between left and right side makes the result look more believable.",
    },
    {
      Icon: IconLine,
      title: "Soft, natural cheek line",
      description:
        'Instead of a razor‑sharp "marker line", we create a slightly irregular, feathered transition — a soft cheek line design that looks good with and without trimming.',
    },
    {
      Icon: IconCalibre,
      title: "Correct hair calibre placement",
      description:
        "Thicker hairs closer to the jawline for a stronger frame, softer hairs higher on the cheeks so the beard doesn't look too heavy.",
    },
  ];

  return (
    <>
    <section className="bg-white py-16 md:py-24">
      <Container>
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-heading">
            Natural Design Principles
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
            What Makes a Natural Beard? The Details Most Clinics Ignore
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Photos are important, but what really matters is how your beard looks{" "}
            <strong className="font-semibold text-heading">up close, in daylight and on video calls</strong>.
            A natural result is always built on the same few principles.
          </p>
        </header>

        <div className="space-y-6">
          {/* First 3 cards in 3-column grid on desktop */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.slice(0, 3).map((principle, index) => {
              const IconComponent = principle.Icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <IconComponent />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-heading">{principle.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-gray-600">{principle.description}</p>
                </div>
              );
            })}
          </div>
          
          {/* Last 2 cards in 2-column grid on desktop */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {principles.slice(3).map((principle, index) => {
              const IconComponent = principle.Icon;
              return (
                <div
                  key={index + 3}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <IconComponent />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-heading">{principle.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-gray-600">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>

    <section className="bg-primary/5 py-12">
      <Container>
        <div className="mx-auto max-w-2xl space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-heading shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>How We Apply These Principles</span>
          </div>

          <div className="space-y-2">
            <p className="text-base font-semibold text-heading sm:text-lg">
              How We Apply These Principles in Istanbul
            </p>
          </div>

          <ul className="space-y-2 text-xs text-gray-700 sm:text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-[4px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-[10px] text-heading">
                ✓
              </span>
              <span>
                We design your beard directly on your face, respecting your{" "}
                <strong className="font-semibold text-heading">jawline contour, cheek line and facial proportions</strong>.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[4px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-[10px] text-heading">
                ✓
              </span>
              <span>
                We use different implantation densities in different zones to create a masculine, but still natural look.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[4px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-[10px] text-heading">
                ✓
              </span>
              <span>
                We explain the design to you before the procedure so you understand{" "}
                <strong className="font-semibold text-heading">why</strong> your beard will look natural, not just "full".
              </span>
            </li>
          </ul>

          <div className="pt-1">
            <a
              href="#beard-free-analysis"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-xs font-semibold text-black shadow-sm transition hover:bg-primary-dark sm:w-auto"
            >
              Get a Natural Beard Design Planned for Your Face Shape
            </a>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}

