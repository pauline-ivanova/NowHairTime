import { Container } from "../ui/Container";

function IconUser({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconGripHorizontal({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="1" />
      <circle cx="19" cy="9" r="1" />
      <circle cx="5" cy="9" r="1" />
      <circle cx="12" cy="15" r="1" />
      <circle cx="19" cy="15" r="1" />
      <circle cx="5" cy="15" r="1" />
    </svg>
  );
}

function IconActivity({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function IconFeather({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" y1="8" x2="2" y2="22" />
      <line x1="17.5" y1="15" x2="9" y2="15" />
    </svg>
  );
}

function IconPill({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7z" />
      <path d="M8.5 8.5l7 7" />
    </svg>
  );
}

function IconPenTool({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

export function CandidateProfiles() {
  const profiles = [
    {
      title: "Men with almost no beard growth",
      desc: "Little to no facial hair, but a stable donor area on the back of the head.",
      icon: IconUser
    },
    {
      title: "Men with patchy, uneven beard",
      desc: "Gaps on the cheeks, jawline or mustache area that never fill in, even with age or topical products.",
      icon: IconGripHorizontal
    },
    {
      title: "Men with scars after acne, surgery or trauma",
      desc: "Visible scars on the cheeks, jawline or chin that you’d like to camouflage with natural hair.",
      icon: IconActivity
    },
    {
      title: "Men with naturally sparse “Asian‑type” growth",
      desc: "Fine, low‑density facial hair where a stronger outline and more coverage is desired.",
      icon: IconFeather
    },
    {
      title: "Men with hormonally weak beard growth",
      desc: "Even after trying lifestyle changes or medications, the beard remains thin or incomplete.",
      icon: IconPill
    },
    {
      title: "Men who want to correct or reshape their beard line",
      desc: "Good basic growth, but the shape, density distribution or cheek line is not flattering.",
      icon: IconPenTool
    }
  ];

  const checklist = [
    "You have a sufficient donor area on the scalp",
    "Your general health is stable",
    "Your expectations are realistic (9–12 months for full results)",
    "You can take 3–5 days for travel"
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-heading">
            Am I a Good Candidate?
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
            Am I a Good Candidate for Beard Transplant in Turkey?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Many men hesitate because they are not sure if they “qualify”. These are the profiles that most often achieve strong, predictable results.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile, i) => {
            const IconComponent = profile.icon;
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary-dark transition group-hover:bg-primary group-hover:text-white">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-heading">
                  {profile.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {profile.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100">
          <div className="grid md:grid-cols-2">
            <div className="bg-[#011826] p-8 text-white md:p-12">
              <h3 className="mb-6 text-xl font-semibold text-white">Basic Candidacy Checklist</h3>
              <ul className="space-y-4">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[#011826]">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center p-8 text-center md:p-12">
              <h3 className="mb-4 text-xl font-semibold text-heading">Not Sure? Let Us Check For Free.</h3>
              <p className="mb-8 text-sm text-gray-600">
                Send us 2 photos (front and side) and our surgeons will assess your donor area and beard potential within 15 minutes.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=905545769958"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-sm font-bold text-black shadow-sm transition hover:bg-primary-dark"
              >
                <span>Send 2 Photos to Check</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
