import { Container } from "../ui/Container";

export function MethodComparison() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-heading">
            Technical Comparison
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
            FUE vs DHI: Which Method Is Right for You?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Both techniques offer permanent results, but they excel in different scenarios. Our specialists recommend the best method based on your needs during consultation.
          </p>
        </header>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="px-6 py-4 font-semibold text-gray-500">Feature</th>
                  <th className="px-6 py-4 font-bold text-heading">FUE (Sapphire)</th>
                  <th className="px-6 py-4 font-bold text-primary-dark">DHI (Choi Pen)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Density</td>
                  <td className="px-6 py-4 text-gray-600">High</td>
                  <td className="px-6 py-4 font-medium text-primary-dark">Very High</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Recovery</td>
                  <td className="px-6 py-4 text-gray-600">5–7 days</td>
                  <td className="px-6 py-4 font-medium text-primary-dark">3–5 days</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Scarring</td>
                  <td className="px-6 py-4 text-gray-600">Minimal (micro-dots)</td>
                  <td className="px-6 py-4 font-medium text-primary-dark">None visible</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Best For</td>
                  <td className="px-6 py-4 text-gray-600">Full beard creation (large areas)</td>
                  <td className="px-6 py-4 font-medium text-primary-dark">Precision & shaping (filling gaps)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Grafts/Session</td>
                  <td className="px-6 py-4 text-gray-600">2,000–4,000</td>
                  <td className="px-6 py-4 font-medium text-primary-dark">1,500–2,500</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Cost</td>
                  <td className="px-6 py-4 text-gray-600">Lower</td>
                  <td className="px-6 py-4 font-medium text-primary-dark">Slightly higher</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#beard-free-analysis"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-primary-dark"
          >
            Get Your Personalized Method Recommendation
          </a>
        </div>
      </Container>
    </section>
  );
}

