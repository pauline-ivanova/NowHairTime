import { Container } from "../ui/Container";

export function BeardStyles() {
  const styles = [
    {
      title: "Full Beard",
      desc: "Maximum coverage on cheeks, jawline, chin, and mustache for a strong, masculine look."
    },
    {
      title: "Defined Jawline",
      desc: "Focus on the jawline and chin to sharpen facial contours, ideal if your cheeks are naturally lighter."
    },
    {
      title: "Short Boxed Beard",
      desc: "Clean, professional style with clear lines and controlled length — great for office environments."
    },
    {
      title: "Goatee & Circle",
      desc: "Emphasis on chin and mustache area, perfect for men who prefer a more minimal, stylized look."
    },
    {
      title: "Stubble Look",
      desc: "Enough density to look full even when trimmed very short, without obvious gaps or patches."
    },
    {
      title: "Scar‑Focused",
      desc: "Strategic coverage to hide acne, burn or surgical scars along the jawline, cheeks or chin."
    }
  ];

  return (
    <section className="bg-background-alt py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-heading">
              Design Options
            </p>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
              Beard Shapes and Styles You Can Achieve
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-600 sm:text-base">
              Your beard transplant is not just about “more hair” — it’s about choosing a shape that truly fits your face, lifestyle, and personal style. During your consultation, we discuss which beard shape, density and outline will best match your face shape (oval, round, square, long) and hair characteristics.
            </p>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {styles.map((style, i) => (
                <div key={i} className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 transition hover:border-primary/20 hover:bg-white hover:shadow-sm">
                  <h3 className="mb-2 font-semibold text-heading">{style.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-600">{style.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
               <a
                href="#beard-free-analysis"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-primary-dark"
              >
                Discover Which Beard Shape Fits Your Face Best
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl bg-gray-100">
               {/* Placeholder for Beard Styles Visual */}
               <div className="flex h-full items-center justify-center text-center p-8 text-gray-400">
                  <div>
                    <svg className="mx-auto h-12 w-12 mb-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <p>Visual Illustration of Beard Styles</p>
                    <p className="text-xs mt-2">(Full, Goatee, Stubble, etc.)</p>
                  </div>
               </div>
            </div>
             {/* Decorative blob */}
            <div className="absolute -right-12 -top-12 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}

