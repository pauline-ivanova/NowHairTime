import { Container } from "../ui/Container";

export function BeforeAfterCases() {
  const cases = [
    {
      title: "Case 1: Complete Beard Creation",
      before: "Virtually no facial hair",
      after: "Full, natural beard (12 months)",
      stats: "3,000 FUE | 5.5 hours"
    },
    {
      title: "Case 2: Patchy Beard Restoration",
      before: "Uneven, patchy growth",
      after: "Uniform density (10 months)",
      stats: "2,000 DHI | 4 hours"
    },
    {
      title: "Case 3: Scar Coverage",
      before: "Prominent jawline scar",
      after: "Complete coverage (12 months)",
      stats: "1,800 FUE | 3.5 hours"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-heading">
            Real Results
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
            Beard Transplant Before and After Results
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
             See how we approach beard density improvement for patchy areas and scar coverage while keeping a natural beard line design.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {cases.map((item, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md">
              {/* Placeholder for Image Comparison */}
              <div className="relative aspect-[4/3] bg-gray-200">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span className="text-sm font-medium">Before / After Image {i + 1}</span>
                 </div>
                 {/* Overlay Labels */}
                 <div className="absolute bottom-3 left-3 rounded bg-black/50 px-2 py-1 text-[10px] font-bold uppercase text-white backdrop-blur-sm">
                    Before
                 </div>
                 <div className="absolute bottom-3 right-3 rounded bg-primary/90 px-2 py-1 text-[10px] font-bold uppercase text-black backdrop-blur-sm">
                    After
                 </div>
              </div>
              
              <div className="p-6">
                <h3 className="mb-4 text-lg font-bold text-heading">{item.title}</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Before</span>
                    <span className="font-medium text-heading text-right">{item.before}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">After</span>
                    <span className="font-medium text-heading text-right">{item.after}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-gray-500">Details</span>
                    <span className="font-medium text-primary-dark text-right">{item.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-xs text-gray-500 italic">
            *All images from real patients. These beard transplant before and after pictures show typical progress; results may vary based on individual factors.
          </p>
          <a
            href="#beard-free-analysis"
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-3 text-sm font-semibold text-heading shadow-sm transition hover:border-primary hover:text-primary"
          >
            View More Before & After Photos
          </a>
        </div>
      </Container>
    </section>
  );
}

