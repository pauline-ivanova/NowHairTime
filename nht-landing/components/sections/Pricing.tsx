import { Container } from "../ui/Container";

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section className="bg-background-alt py-16 md:py-24">
      <Container>
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-heading">
            Pricing & Packages
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
            Beard Transplant Cost in Turkey — All-Inclusive Packages
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
             If you are comparing beard transplant cost in Turkey with prices in your country, our packages make it easy to see the real total.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Standard Package */}
          <div className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="mb-6">
               <h3 className="text-lg font-bold text-heading">Standard Package</h3>
               <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-sm text-gray-500">From</span>
                  <span className="text-3xl font-bold text-primary-dark">€1,500</span>
               </div>
               <p className="mt-2 text-xs text-gray-500">Base all-inclusive package</p>
            </div>
            
            <ul className="mb-8 flex-1 space-y-4">
              {[
                "Beard transplant (FUE or DHI)",
                "All medications & aftercare kit",
                "Post-op washing + follow-up",
                "VIP transfers (airport–hotel–clinic)",
                "English-speaking consultant",
                "3 nights in a 5-star hotel",
                "Long-term support and check-ins"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <IconCheck className="h-3 w-3" />
                  </div>
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            
            <a
               href="#beard-free-analysis"
               className="inline-flex w-full items-center justify-center rounded-md border border-primary bg-white px-6 py-3 text-sm font-semibold text-primary-dark transition hover:bg-primary/5"
             >
               Get Standard Quote
             </a>
          </div>

          {/* Premium Package */}
          <div className="relative flex flex-col rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm transition hover:shadow-md">
             <div className="absolute -top-3 right-8 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase text-white shadow-sm">
                Most Popular
             </div>
             <div className="mb-6">
               <h3 className="text-lg font-bold text-heading">Premium Package</h3>
               <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-sm text-gray-500">From</span>
                  <span className="text-3xl font-bold text-primary-dark">€1,800</span>
               </div>
               <p className="mt-2 text-xs text-gray-500">Everything in Standard, plus extras</p>
            </div>
            
            <ul className="mb-8 flex-1 space-y-4">
              {[
                "Everything in Standard Package",
                "PRP treatment included",
                "Special care kit for beard growth",
                "Additional long-term follow-up touchpoints",
                "Option to extend your stay beyond 3 nights"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                   <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-black">
                    <IconCheck className="h-3 w-3" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
             <a
               href="#beard-free-analysis"
               className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-primary-dark"
             >
               Get Premium Quote
             </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-500">
           *Final price depends on graft count and chosen method. There are no hidden fees in the clinic or package.
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <h3 className="mb-8 text-center text-xl font-semibold text-heading">
            Cost Comparison: Turkey vs UK, USA & Germany
          </h3>
          
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <th className="px-6 py-4 font-semibold text-gray-500">Country</th>
                    <th className="px-6 py-4 font-semibold text-gray-500">Approx. Price</th>
                    <th className="px-6 py-4 font-semibold text-gray-500">Surgeon Exp.</th>
                    <th className="px-6 py-4 font-semibold text-gray-500">Waiting Time</th>
                    <th className="px-6 py-4 font-semibold text-gray-500">Aftercare</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-primary/5">
                    <td className="px-6 py-4 font-bold text-primary-dark">Turkey</td>
                    <td className="px-6 py-4 font-bold text-heading">€1,500–€2,000</td>
                    <td className="px-6 py-4 text-gray-700">Very High</td>
                    <td className="px-6 py-4 font-medium text-green-600">Short</td>
                    <td className="px-6 py-4 font-medium text-green-600">Strong</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">UK</td>
                    <td className="px-6 py-4 text-gray-600">€5,000–€7,000</td>
                    <td className="px-6 py-4 text-gray-600">Medium</td>
                    <td className="px-6 py-4 text-gray-500">Long</td>
                    <td className="px-6 py-4 text-gray-500">Variable</td>
                  </tr>
                   <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">USA</td>
                    <td className="px-6 py-4 text-gray-600">€6,000–€9,000</td>
                    <td className="px-6 py-4 text-gray-600">Mixed</td>
                    <td className="px-6 py-4 text-gray-500">Very Long</td>
                    <td className="px-6 py-4 text-gray-500">Often Paid</td>
                  </tr>
                   <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Germany</td>
                    <td className="px-6 py-4 text-gray-600">€5,000–€8,000</td>
                    <td className="px-6 py-4 text-gray-600">High</td>
                    <td className="px-6 py-4 text-gray-500">Medium</td>
                    <td className="px-6 py-4 text-gray-500">Good</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

