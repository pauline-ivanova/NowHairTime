import { Container } from "../ui/Container";

function IconX({ className }: { className?: string }) {
  return (
    <svg
      className={className || "h-5 w-5"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      className={className || "h-5 w-5"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function FailuresVsSuccess() {
  return (
    <section className="bg-background-alt py-16 md:py-24">
      <Container>
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-heading">
            Technical Expertise
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
            Why Some Beard Transplants Look Unnatural — And How We Do It Differently
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            In most cases, the problem is not your genetics, but predictable technical mistakes that can be avoided with proper planning and execution.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1: Angle */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
            <div className="flex-1 border-b border-gray-100 bg-red-50/30 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-500">
                  <IconX className="h-4 w-4" />
                </div>
                <h4 className="font-semibold text-gray-900">The Mistake: Wrong Angle</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Hairs placed too upright creating a "spiky", pluggy look instead of a soft, natural flow.
              </p>
            </div>
            <div className="flex-1 bg-green-50/10 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <IconCheck className="h-4 w-4" />
                </div>
                <h4 className="font-semibold text-heading">Our Fix: Natural Implantation</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Every graft follows natural growth direction: lower on cheeks, forward on chin, thicker along jawline.
              </p>
            </div>
          </div>

          {/* Card 2: Donor */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
            <div className="flex-1 border-b border-gray-100 bg-red-50/30 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-500">
                  <IconX className="h-4 w-4" />
                </div>
                <h4 className="font-semibold text-gray-900">The Mistake: Overharvesting</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Taking too many grafts from one spot, leading to visible thinning or patchiness on the back of the head.
              </p>
            </div>
            <div className="flex-1 bg-green-50/10 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <IconCheck className="h-4 w-4" />
                </div>
                <h4 className="font-semibold text-heading">Our Fix: Safe Management</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                We calculate the safe number of grafts to protect your donor area for the future.
              </p>
            </div>
          </div>

          {/* Card 3: Lines */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
            <div className="flex-1 border-b border-gray-100 bg-red-50/30 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-500">
                  <IconX className="h-4 w-4" />
                </div>
                <h4 className="font-semibold text-gray-900">The Mistake: Artificial Lines</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Lines drawn perfectly sharp and symmetrical like with a ruler — looking unnatural on a real face.
              </p>
            </div>
            <div className="flex-1 bg-green-50/10 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <IconCheck className="h-4 w-4" />
                </div>
                <h4 className="font-semibold text-heading">Our Fix: Zone Planning</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                We map zones (chin, jawline, cheeks) and plan realistic density per area instead of random placement.
              </p>
            </div>
          </div>

          {/* Card 4: Density */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
            <div className="flex-1 border-b border-gray-100 bg-red-50/30 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-500">
                  <IconX className="h-4 w-4" />
                </div>
                <h4 className="font-semibold text-gray-900">The Mistake: Poor Density</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Random density leaving "holes" or thin spots when you trim the beard short.
              </p>
            </div>
            <div className="flex-1 bg-green-50/10 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <IconCheck className="h-4 w-4" />
                </div>
                <h4 className="font-semibold text-heading">Our Fix: Calibre Matching</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Thicker follicles along the jawline, softer ones on cheeks to mimic natural growth patterns.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#beard-free-analysis"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-primary-dark"
          >
            See How We Plan Your Beard Design Step by Step
          </a>
        </div>
      </Container>
    </section>
  );
}
