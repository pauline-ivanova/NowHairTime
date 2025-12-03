import { Container } from "../ui/Container";

export function Testimonials() {
  const reviews = [
    {
      text: "I had almost no beard and always felt insecure. After 8 months, the result looks completely natural. I finally have the beard I've always wanted.",
      author: "Marco",
      country: "Italy"
    },
    {
      text: "Perfect shaping and density. The aftercare and follow-up were excellent. The support doesn't end when you leave Istanbul.",
      author: "James",
      country: "UK"
    },
    {
      text: "They covered an old scar on my jaw. Now nobody can tell it was ever there. Very happy with the result.",
      author: "Ahmed",
      country: "UAE"
    },
    {
      text: "I was skeptical about Turkey, but the clinic exceeded all expectations. Best decision I've made.",
      author: "Thomas",
      country: "Germany"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-heading">
            Social Proof
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
            Real Patient Reviews: What Our Istanbul Patients Say
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mb-4 flex gap-1 text-primary">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-gray-600 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-500">
                    {review.author[0]}
                 </div>
                 <div>
                    <p className="text-sm font-bold text-heading">{review.author}</p>
                    <p className="text-xs font-medium text-gray-500">{review.country}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#beard-free-analysis"
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-3 text-sm font-semibold text-heading shadow-sm transition hover:border-primary hover:text-primary"
          >
            Read More Patient Reviews
          </a>
        </div>
      </Container>
    </section>
  );
}

