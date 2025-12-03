import { Container } from "../ui/Container";

export function RecoveryTimeline() {
  const timeline = [
    {
      period: "Days 1–3",
      status: "Swelling, scabs forming",
      action: "Rest, avoid touching area. Our clinic provides 24/7 support."
    },
    {
      period: "Days 4–7",
      status: "Scabs becoming visible",
      action: "Begin gentle washing. Post-op care at our facility."
    },
    {
      period: "Weeks 2–4",
      status: "Hair shedding (normal!)",
      action: "Continue care, be patient. Remote follow-up from our team."
    },
    {
      period: "Months 1–3",
      status: "Waiting period",
      action: "Shave normally, resume activities."
    },
    {
      period: "Months 3–6",
      status: "First growth appears",
      action: "Trim and style as needed."
    },
    {
      period: "Months 6–9",
      status: "Significant improvement",
      action: "Enjoy visible progress."
    },
    {
      period: "Months 9–12",
      status: "Full results achieved",
      action: "Permanent, natural beard."
    }
  ];

  return (
    <section className="bg-background-alt py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="lg:max-w-lg">
             <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-heading">
              Recovery Journey
            </p>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
              Beard Transplant Recovery Time — Your Journey
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-600 sm:text-base">
              During your stay, our team provides comprehensive support throughout your recovery. The beard transplant recovery time and day-by-day appearance can vary, but here is the typical timeline you can expect.
            </p>
            
            <div className="rounded-2xl border border-gray-100 bg-primary/5 p-8">
                <h3 className="mb-4 text-lg font-semibold text-heading">Need a Complete Guide?</h3>
                <p className="mb-6 text-sm text-gray-600">Download our detailed PDF guide with day-by-day instructions, washing techniques, and tips for faster healing.</p>
                <button className="w-full rounded-md bg-white px-6 py-3 text-sm font-semibold text-heading shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50">
                  Download Recovery Guide
                </button>
            </div>
          </div>

          <div className="relative border-l border-gray-100 pl-8 lg:pl-12">
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-gray-50 lg:-left-[57px]">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-heading">{item.period}</h4>
                    <p className="text-sm font-semibold text-primary-dark">{item.status}</p>
                    <p className="mt-1 text-sm text-gray-600">{item.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

