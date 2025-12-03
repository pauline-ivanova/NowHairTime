import { Container } from "../ui/Container";

function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function SafetyTrust() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Safety List */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                <IconShield className="h-3.5 w-3.5" />
                <span>Safety First</span>
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
                Beard transplant safety in Turkey — your safety is our priority
              </h2>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                We adhere to strict medical protocols to ensure a safe procedure and optimal results for our international patients.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Certified Medical Facility",
                  desc: "Licensed by Turkish Ministry of Health, meeting European medical standards."
                },
                {
                  title: "Qualified Surgeons",
                  desc: "Medical degrees, specialized training, 12+ years experience, thousands of procedures."
                },
                {
                  title: "Latest Technology",
                  desc: "Advanced FUE devices, sapphire blades, DHI pens, sterile environments."
                },
                {
                  title: "Comprehensive Care",
                  desc: "24/7 support during your stay, detailed aftercare, 12 months follow-up."
                },
                {
                  title: "Transparent Process",
                  desc: "No hidden fees, clear expectations, informed consent, honest communication."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <IconCheck className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-heading">{item.title}</h3>
                    <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who Performs Block */}
          <div className="relative flex items-center">
            <div className="relative w-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-xl shadow-gray-200/50 md:p-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary-dark">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              
              <h3 className="mb-4 text-xl font-semibold text-heading">
                Who Performs the Surgery?
              </h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                <p>
                  Your beard transplant is performed by a <strong className="font-medium text-gray-900">dedicated medical team</strong>, not technicians working alone. 
                </p>
                <p>
                  Our surgeons have <strong className="font-medium text-gray-900">over 12 years of experience</strong> in FUE/DHI facial hair restoration, with thousands of successful procedures and a strong focus on natural beard design, donor management and long‑term graft survival.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-dark">12+</p>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">Years</p>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-dark">3k+</p>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">Beards</p>
                </div>
                 <div className="h-8 w-px bg-gray-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-dark">98%</p>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">Success</p>
                </div>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -top-6 -left-6 -z-10 h-64 w-64 rounded-full bg-blue-50 blur-3xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}

