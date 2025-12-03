import { Container } from "../ui/Container";

export function ProcessSteps() {
  const steps = [
    {
      title: "Free Online Consultation",
      subtitle: "15 minutes",
      desc: "Get personalized plan and graft count estimate. When you arrive in Istanbul, our specialists will review your assessment."
    },
    {
      title: "Donor Hair Extraction",
      subtitle: "FUE technique",
      desc: "Healthy follicles extracted from scalp (genetically resistant to hair loss) at our clinic."
    },
    {
      title: "Channel Creation",
      subtitle: "Precision placement",
      desc: "Micro-channels created at correct angle and direction by experienced surgeons."
    },
    {
      title: "Graft Implantation",
      subtitle: "FUE or DHI",
      desc: "Follicles placed one by one for natural density using advanced techniques."
    },
    {
      title: "Aftercare & Follow-Up",
      subtitle: "12 months support",
      desc: "Detailed instructions, medications, and continuous monitoring. Our team provides comprehensive care during your stay and beyond."
    }
  ];

  return (
    <section className="bg-background-alt py-16 md:py-24">
      <Container>
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-heading">
            Process Section
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
            How Beard Transplant Works in Istanbul — 5 Simple Steps
          </h2>
        </header>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-[15px] top-0 hidden h-full w-0.5 bg-gray-100 md:block lg:left-1/2 lg:-ml-px" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col gap-8 md:flex-row ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-gray-50 md:left-0 lg:left-1/2 lg:-ml-4">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>

                {/* Content */}
                <div className="ml-12 flex-1 md:ml-0 lg:w-1/2">
                  <div
                    className={`rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md ${
                      i % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
                    }`}
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary-dark">
                        {i + 1}
                      </span>
                      <h3 className="text-lg font-bold text-heading">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary-dark">
                      {step.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {step.desc}
                    </p>
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden flex-1 md:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-6 text-center">
          <div className="inline-flex items-center gap-4 rounded-full bg-gray-50 px-6 py-2 text-sm font-medium text-gray-600">
            <span>Total Procedure Time: <strong className="text-heading">4–6 hours</strong></span>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span>Recovery: <strong className="text-heading">5–7 days</strong></span>
          </div>
          <a
            href="#beard-free-analysis"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-primary-dark"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </Container>
    </section>
  );
}

