import { Container } from "../ui/Container";

export function KeyTakeaways() {
  const stats = [
    { label: "Technique", value: "FUE & DHI" },
    { label: "Procedure Time", value: "4–6 hours" },
    { label: "Recovery", value: "5–7 days" },
    { label: "Full Results", value: "6–12 months" },
    { label: "Typical Grafts", value: "1,500–4,000" },
    { label: "Package Price", value: "From €1,500" }
  ];

  return (
    <section className="border-b border-gray-100 bg-white py-8">
      <Container>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 text-center transition hover:bg-white hover:shadow-sm"
            >
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                {stat.label}
              </p>
              <p className="text-sm font-bold text-heading sm:text-base">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-primary/5 p-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
             <p className="text-sm font-medium text-heading">
              <strong className="text-primary-dark">Ideal for:</strong> Men aged 20–45 with patchy beard, no beard growth, or visible scars.
            </p>
            <p className="mt-1 text-sm text-gray-600">
              <strong className="text-primary-dark">Best if you want:</strong> Natural density improvement, jawline enhancement, and permanent restoration.
            </p>
          </div>
          <div className="shrink-0">
            <a href="#beard-free-analysis" className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-heading shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50">
              Check Candidacy
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

