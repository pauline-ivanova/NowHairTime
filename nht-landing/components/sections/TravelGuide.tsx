import { Container } from "../ui/Container";

export function TravelGuide() {
  return (
    <section className="bg-background-alt py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
           <div className="order-2 lg:order-1">
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-gray-100">
                 {/* Placeholder for Map or Airport Visual */}
                 <div className="flex h-full items-center justify-center p-8 text-center text-gray-400">
                     <div>
                       <svg className="mx-auto mb-4 h-12 w-12 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                       </svg>
                       <p>Visual of Travel Route / Airport Transfer</p>
                     </div>
                 </div>
              </div>
           </div>

           <div className="order-1 lg:order-2">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-heading">
                Travel Itinerary
              </p>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
                Designed for International Patients — From Airport to Return Flight
              </h2>
              <p className="mb-10 text-sm leading-relaxed text-gray-600 sm:text-base">
                Most of our beard transplant patients come from Europe, the UK, the USA and the Middle East. The entire journey is designed to be simple, safe and comfortable.
              </p>

              <div className="space-y-8">
                 {[
                    {
                       day: "Day 1 — Arrival",
                       desc: "Airport pickup by VIP car. Check-in to your 5-star hotel. In-person consultation and final design."
                    },
                    {
                       day: "Day 2 — Procedure",
                       desc: "Transfer to clinic. Beard transplant (4–6 hours) with breaks. Return to hotel to rest."
                    },
                    {
                       day: "Day 3 — Check-Up & Wash",
                       desc: "Dressing removal and first wash. Aftercare instructions. Ready to fly home (or stay longer)."
                    }
                 ].map((day, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary-dark">
                          {i + 1}
                       </div>
                       <div>
                          <h3 className="text-base font-bold text-heading">{day.day}</h3>
                          <p className="mt-1 text-sm text-gray-600">{day.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>

              <div className="mt-10 rounded-xl border border-gray-100 bg-gray-50 p-6">
                 <h4 className="mb-3 text-sm font-bold text-heading">Common Travel Questions</h4>
                 <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex gap-2">
                       <span className="text-primary-dark">●</span>
                       <span><strong>Safe to travel alone?</strong> Yes, we handle all transfers and support.</span>
                    </li>
                    <li className="flex gap-2">
                       <span className="text-primary-dark">●</span>
                       <span><strong>Airport visibility?</strong> We show you how to cover up; it's very common in Istanbul.</span>
                    </li>
                 </ul>
              </div>
           </div>
        </div>
      </Container>
    </section>
  );
}

