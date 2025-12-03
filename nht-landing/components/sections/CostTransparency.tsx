import { Container } from "../ui/Container";

export function CostTransparency() {
  const included = [
    "Medical procedure (FUE or DHI)",
    "Medications & aftercare kit",
    "VIP transfers (Airport-Hotel-Clinic)",
    "3 nights in 5-star hotel",
    "English-speaking support"
  ];

  const notIncluded = [
    "Flight tickets to/from Istanbul",
    "Personal expenses (food, shopping)",
    "Optional extra hotel nights",
    "Optional add-on treatments"
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Transparency Text */}
          <div>
             <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-heading">
              Transparency
            </p>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
              No Hidden Costs — Honest Breakdown of Your Real Budget
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-600 sm:text-base">
              One of the biggest fears patients have is that the price will quietly grow once they arrive. We keep pricing simple and transparent from the start.
            </p>
            
            <div className="space-y-6">
               <div className="rounded-xl border border-green-100 bg-green-50/30 p-6">
                  <h3 className="mb-4 text-sm font-bold text-green-800">What Your Package Already Covers</h3>
                  <ul className="space-y-3">
                     {included.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                           <svg className="h-4 w-4 shrink-0 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="20 6 9 17 4 12" />
                           </svg>
                           <span className="text-sm text-gray-700">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
               
               <div className="rounded-xl border border-red-100 bg-red-50/30 p-6">
                  <h3 className="mb-4 text-sm font-bold text-red-800">What Is Not Included</h3>
                  <ul className="space-y-3">
                     {notIncluded.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                           <svg className="h-4 w-4 shrink-0 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                           </svg>
                           <span className="text-sm text-gray-700">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
          </div>

          {/* Right: Budget Calculator */}
          <div className="relative">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg md:p-10">
               <h3 className="mb-6 text-lg font-bold text-heading">Real Total Budget Calculator</h3>
               <p className="mb-8 text-xs text-gray-500">Illustrative example for a typical patient from Europe/UK.</p>
               
               <div className="mb-8 space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                     <span className="text-sm font-medium text-gray-600">Beard Transplant Package</span>
                     <span className="font-bold text-heading">€1,500 – €2,000</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                     <span className="text-sm font-medium text-gray-600">Round-trip Flight</span>
                     <span className="font-medium text-gray-900">~€120 – €250</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                     <span className="text-sm font-medium text-gray-600">Hotel (3 Nights)</span>
                     <span className="rounded bg-green-100 px-2 py-0.5 text-[10px] font-bold uppercase text-green-700">Included</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                     <span className="text-sm font-medium text-gray-600">Transfers</span>
                     <span className="rounded bg-green-100 px-2 py-0.5 text-[10px] font-bold uppercase text-green-700">Included</span>
                  </div>
                   <div className="flex items-center justify-between pb-4">
                     <span className="text-sm font-medium text-gray-600">Medications</span>
                     <span className="rounded bg-green-100 px-2 py-0.5 text-[10px] font-bold uppercase text-green-700">Included</span>
                  </div>
               </div>
               
               <div className="rounded-xl bg-gray-50 p-6 text-center">
                  <p className="mb-1 text-xs font-semibold uppercase text-gray-500">Estimated Total</p>
                  <p className="text-3xl font-bold text-primary-dark">~ €1,620 – €2,250</p>
                  <p className="mt-2 text-[10px] text-gray-400">All-inclusive, including flights</p>
               </div>
               
               <div className="mt-8 text-center">
                   <a
                     href="https://api.whatsapp.com/send/?phone=905545769958"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary-dark hover:underline"
                   >
                     Get Your Personalized Estimate via WhatsApp →
                   </a>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

