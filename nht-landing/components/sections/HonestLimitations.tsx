import { Container } from "../ui/Container";

export function HonestLimitations() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-heading">
              Reality Check
            </p>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
              Honest Limitations — What a Beard Transplant Can and Cannot Do
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
              We want you to be genuinely happy with your result months and years from now, not just impressed by promises on a website. That's why we are transparent about real‑world limitations.
            </p>
            
            <p className="mb-8 text-sm leading-relaxed text-gray-600 sm:text-base lg:mb-0">
              When you know exactly what is possible, you can make a calm, informed decision — and you are far more likely to be satisfied with your beard long term.
            </p>

            <a
               href="#beard-free-analysis"
               className="hidden lg:inline-flex lg:mt-8 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-primary-dark"
            >
               Get Your Free Consultation
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

          <div className="space-y-6">
             <div className="rounded-xl border-l-4 border-green-500 bg-white p-5">
                <h3 className="mb-3 text-base font-semibold text-heading">What We Can Realistically Achieve</h3>
                <ul className="space-y-2.5">
                   {[
                      "Create or complete a full beard where there was little to no growth before.",
                      "Significantly improve scars from acne, surgery or trauma.",
                      "Strengthen your jawline and facial proportions with better density.",
                      "Provide permanent growth from transplanted follicles."
                   ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-600">
                         <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                         </svg>
                         <span>{item}</span>
                      </li>
                   ))}
                </ul>
             </div>

             <div className="rounded-xl border-l-4 border-orange-400 bg-white p-5">
                <h3 className="mb-3 text-base font-semibold text-heading">What You Should Not Expect</h3>
                <ul className="space-y-2.5">
                   {[
                      "Unlimited density with limited donor hair — donor area is finite.",
                      "100% invisible scars in every case — we improve appearance by 60–90%.",
                      "A \"perfect\" beard in the first weeks — redness and shedding are normal.",
                      "Zero maintenance — you still need to trim and care for your skin."
                   ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-600">
                         <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                         </svg>
                         <span>{item}</span>
                      </li>
                   ))}
                </ul>
             </div>

             <a
                href="#beard-free-analysis"
                className="flex lg:hidden items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-primary-dark"
             >
                Get Your Free Consultation
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
        </div>
      </Container>
    </section>
  );
}

