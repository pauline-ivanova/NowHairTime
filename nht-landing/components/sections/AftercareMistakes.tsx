import { Container } from "../ui/Container";

function IconXCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
}

export function AftercareMistakes() {
  const mistakes = [
    {
      title: "Shaving too early",
      desc: "Don’t shave or trim the transplanted area in the first weeks. We’ll tell you exactly when it’s safe."
    },
    {
      title: "Touching, rubbing or picking scabs",
      desc: "Let the crusts fall off naturally. Scratching or rubbing can dislodge grafts."
    },
    {
      title: "Using regular shampoos or harsh products",
      desc: "Only use the products we recommend during the early healing phase."
    },
    {
      title: "Going to sauna, steam room or intense gym sessions too soon",
      desc: "Excessive heat and sweating in the first days can irritate the skin and affect healing."
    },
    {
      title: "Sleeping face‑down or on very hard pillows",
      desc: "Protect the transplanted area while you sleep as instructed by your medical team."
    },
    {
      title: "Ignoring aftercare instructions or skipping follow‑up",
      desc: "If you’re unsure about anything, it’s always better to ask — even months later."
    }
  ];

  return (
    <section className="bg-red-50/30 py-16 md:py-24">
      <Container>
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-500">
            Don't Do This
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
            Common Patient Mistakes to Avoid
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Your result depends not only on what happens in the clinic, but also on how you treat your beard in the first days and weeks.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mistakes.map((item, i) => (
            <div key={i} className="rounded-xl border border-red-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-500">
                <IconXCircle className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-base font-bold text-heading">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
           <p className="mb-6 text-sm font-medium text-gray-900">
            By avoiding these typical mistakes, you protect your investment and give your new beard the best chance to grow strong and evenly.
           </p>
           <a
            href="#beard-free-analysis"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-heading shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50"
          >
            Download the Full Aftercare “Do & Don’t” Checklist
          </a>
        </div>
      </Container>
    </section>
  );
}

