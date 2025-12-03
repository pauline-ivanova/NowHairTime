import { KeyTakeaways } from "../components/sections/KeyTakeaways";
import { ProblemSolution } from "../components/sections/ProblemSolution";
import { FailuresVsSuccess } from "../components/sections/FailuresVsSuccess";
import { WhatMakesNatural } from "../components/sections/WhatMakesNatural";
import { CandidateProfiles } from "../components/sections/CandidateProfiles";
import { ProcessSteps } from "../components/sections/ProcessSteps";
import { BeforeAfterCases } from "../components/sections/BeforeAfterCases";
import { BeardStyles } from "../components/sections/BeardStyles";
import { MethodComparison } from "../components/sections/MethodComparison";
import { RecoveryTimeline } from "../components/sections/RecoveryTimeline";
import { Testimonials } from "../components/sections/Testimonials";
import { Pricing } from "../components/sections/Pricing";
import { CostTransparency } from "../components/sections/CostTransparency";
import { TravelGuide } from "../components/sections/TravelGuide";
import { ReadinessChecklist } from "../components/sections/ReadinessChecklist";
import { HonestLimitations } from "../components/sections/HonestLimitations";
import { AftercareMistakes } from "../components/sections/AftercareMistakes";
import { SafetyTrust } from "../components/sections/SafetyTrust";
import { FinalCTA } from "../components/sections/FinalCTA";
import { FAQ } from "../components/sections/FAQ";
import { Container } from "../components/ui/Container";

function IconWhatsApp() {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.495.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

// Hero Icons
function IconTech() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12l4 6-10 13L2 9Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  );
}

function IconSavings() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}

function IconExperience() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}

function IconPackage() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0" />
      <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
      <path d="M10 20h4" />
      <circle cx="16" cy="20" r="2" />
      <circle cx="8" cy="20" r="2" />
    </svg>
  );
}

function IconPermanent() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
    </svg>
  );
}

function IconNatural() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" x2="2" y1="8" y2="22" />
      <line x1="17.5" x2="9" y1="15" y2="15" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="bg-background">
      <section className="bg-background-alt py-16">
        <Container className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-heading shadow-sm">
              <span>Beard Transplant Free Analysis</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Beard Transplant <br /> in Turkey
            </h1>
            <h2 className="text-base font-medium text-heading sm:text-lg lg:text-xl">
              Natural, permanent beard restoration in a certified clinic.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
              We perform beard transplant Turkey procedures with FUE and DHI
              techniques for men from Europe, the UK, USA and the Middle East.
              All packages include clinic, hotel and VIP transfers.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-medium text-gray-700 sm:text-sm">
              <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                12+ years experience
              </span>
              <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                From €1,500 all-inclusive
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://api.whatsapp.com/send/?phone=905545769958"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#128C7E]"
              >
                <IconWhatsApp />
                <span>Chat on WhatsApp</span>
              </a>
              <button className="inline-flex items-center gap-2 rounded-md border border-primary px-4 py-2 text-sm font-medium text-heading underline-offset-4 transition hover:bg-primary/10">
                <span>See before &amp; after photos</span>
              </button>
            </div>
          </div>

          <div
            id="beard-free-analysis"
            className="rounded-3xl border border-gray-200 bg-white/95 p-6 shadow-soft"
          >
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Beard Transplant Free Analysis
            </h2>
            <form className="space-y-3">
              <div>
                <label htmlFor="hero-name" className="sr-only">Name Surname</label>
                <input
                  id="hero-name"
                  type="text"
                  placeholder="Name Surname"
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm outline-none ring-primary/20 transition focus:border-primary focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="hero-email" className="sr-only">E-mail</label>
                <input
                  id="hero-email"
                  type="email"
                  placeholder="E-mail"
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm outline-none ring-primary/20 transition focus:border-primary focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="hero-country" className="sr-only">Country</label>
                <input
                  id="hero-country"
                  type="text"
                  placeholder="Country"
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm outline-none ring-primary/20 transition focus:border-primary focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="hero-phone" className="sr-only">Phone Number</label>
                <input
                  id="hero-phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm outline-none ring-primary/20 transition focus:border-primary focus:ring-2"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:bg-primary-dark"
              >
                Send
              </button>
            </form>
          </div>
        </Container>
      </section>
      
      <KeyTakeaways />
      
      {/* Benefits Section - "Why Choose Us" - Preserving Existing Component Structure */}
      <section className="bg-background-alt py-16">
        <Container className="space-y-10">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-heading">
              Why choose us
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
              Why Choose Us for Your Beard Transplant?
            </h2>
          </header>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="space-y-2 rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-soft transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary-dark">
                <IconTech />
              </div>
              <h3 className="text-sm font-semibold text-heading sm:text-base">
                World-Class Technology
              </h3>
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                Advanced FUE devices, sapphire blades and DHI pens for precise, natural implantation.
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-soft transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary-dark">
                <IconSavings />
              </div>
              <h3 className="text-sm font-semibold text-heading sm:text-base">
                Significant Savings vs Europe and the USA
              </h3>
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                Same quality standards as Western Europe and the USA, at a significantly lower total cost.
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-soft transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary-dark">
                <IconExperience />
              </div>
              <h3 className="text-sm font-semibold text-heading sm:text-base">
                12+ Years Experience
              </h3>
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                Thousands of successful procedures performed by certified hair transplant specialists.
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-soft transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary-dark">
                <IconPackage />
              </div>
              <h3 className="text-sm font-semibold text-heading sm:text-base">
                All-Inclusive Packages
              </h3>
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                Procedure, hotel, VIP transfers and medications — everything organised in one clear package.
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-soft transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary-dark">
                <IconPermanent />
              </div>
              <h3 className="text-sm font-semibold text-heading sm:text-base">
                Permanent Results
              </h3>
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                Transplanted follicles grow for life, just like your natural facial hair.
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-soft transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary-dark">
                <IconNatural />
              </div>
              <h3 className="text-sm font-semibold text-heading sm:text-base">
                Natural Appearance
              </h3>
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                Indistinguishable from natural beard growth when angle, density and design are done correctly.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ProblemSolution />
      <FailuresVsSuccess />
      <WhatMakesNatural />
      <CandidateProfiles />
      <ProcessSteps />
      <BeforeAfterCases />
      <BeardStyles />
      <MethodComparison />
      <RecoveryTimeline />
      <Testimonials />
      <Pricing />
      <CostTransparency />
      <TravelGuide />
      <FAQ />
      <ReadinessChecklist />
      <HonestLimitations />
      <AftercareMistakes />
      <SafetyTrust />
      <FinalCTA />
    </div>
  );
}
