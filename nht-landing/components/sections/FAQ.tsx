"use client";

import { useState } from "react";
import { Container } from "../ui/Container";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  id: string;
  label: string;
  items: FAQItem[];
};

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: "general",
    label: "General & Results",
    items: [
      {
        question: "Is a beard transplant permanent?",
        answer: "Yes. Transplanted follicles from your donor area are genetically resistant to hair loss and grow permanently for life."
      },
      {
        question: "Will it look natural?",
        answer: "Absolutely. When performed by experienced surgeons, results are indistinguishable from natural beard growth. Each graft is placed at the correct angle and direction."
      },
      {
        question: "How long until I see full results?",
        answer: "Initial growth starts at month 3. Significant improvement at month 6. Full results appear between months 9–12."
      },
      {
        question: "Will transplanted beard hairs fall out?",
        answer: "Yes — and this is normal. Transplanted hairs usually shed in the first 2–4 weeks (shedding phase), then start to regrow from month 3, with visible improvement by month 6 and full results by 9–12 months."
      }
    ]
  },
  {
    id: "procedure",
    label: "Procedure & Safety",
    items: [
      {
        question: "Is a beard transplant painful?",
        answer: "The procedure is performed under local or needle‑free anesthesia. You may feel pressure and mild discomfort during certain stages, but most patients describe it as “much easier than expected” and rest comfortably throughout the day."
      },
      {
        question: "Is beard transplant safe in Turkey?",
        answer: "Yes — when performed in a licensed medical facility by experienced surgeons. Our clinic in Turkey is certified by the Turkish Ministry of Health, follows European‑level hygiene and safety standards, uses advanced FUE and DHI technology, and provides clear informed consent and aftercare for every patient."
      },
      {
        question: "What are the risks?",
        answer: "Beard transplant is very safe. Potential side effects include temporary swelling (3–5 days), minor redness (1–2 weeks), and normal hair shedding (weeks 2–4). Serious complications are extremely rare."
      },
      {
        question: "Can I combine with other procedures?",
        answer: "Yes. Many patients combine beard transplant with scalp hair transplant, mustache transplant, or PRP treatments. We can discuss options during consultation."
      }
    ]
  },
  {
    id: "cost",
    label: "Cost & Travel",
    items: [
      {
        question: "How much does a beard transplant cost in Turkey?",
        answer: "All-inclusive packages start from €1,500. Final beard transplant cost depends on graft count (typically 1,500–4,000) and chosen method."
      },
      {
        question: "Why Turkey for beard transplant?",
        answer: "Turkey combines experienced surgeons, modern technology and competitive pricing. Many international patients choose Turkey because they can receive high‑quality beard transplant results, full packages with hotel and transfers included, and shorter waiting times than in many Western countries."
      },
      {
        question: "Do I need to travel to Istanbul?",
        answer: "Yes, the procedure is performed in our Istanbul clinic. We handle all travel arrangements, transfers, and accommodation as part of your package."
      }
    ]
  },
  {
    id: "candidacy",
    label: "Candidacy & Grafts",
    items: [
      {
        question: "What if I have very little donor hair?",
        answer: "We assess this during consultation. Most patients have sufficient donor hair. Even with limited donor area, 1,500–3,000 grafts can create a strong beard line."
      },
      {
        question: "Can a beard transplant fix acne scars?",
        answer: "In many cases, beard transplant can significantly improve the appearance of acne scars, surgical scars or trauma scars by covering them with new hair. While it cannot fully erase the underlying skin texture, it often makes scars far less noticeable in everyday life."
      },
      {
        question: "How many grafts do I need for a full beard?",
        answer: "For complete beard creation, most patients need around 2,500–3,500 grafts; for beard density improvement or filling patchy areas, 800–2,000 grafts are often enough. Your exact graft count is calculated during consultation based on your goals and donor capacity."
      },
      {
        question: "What if I want more density later?",
        answer: "In some cases, a second session can be planned after 12 months to add more density in specific zones. Proper donor management in the first session keeps this option open when medically appropriate."
      }
    ]
  },
  {
    id: "recovery",
    label: "Recovery & Aftercare",
    items: [
      {
        question: "Can I shave normally after the procedure?",
        answer: "Yes, after 4–6 weeks. Once grafts are settled, you can shave, trim, and style your beard exactly like natural facial hair."
      },
      {
        question: "Can I smoke after beard transplant?",
        answer: "It’s best to avoid smoking for at least a few days before and 1–2 weeks after your beard transplant, because nicotine can affect blood flow and healing. If you do smoke, we’ll give you clear guidance on how to minimize risk and protect graft survival."
      },
      {
        question: "Can I return to work soon after the procedure?",
        answer: "Many office‑based patients return to remote work the next day. For public‑facing or physically demanding jobs, we recommend discussing your schedule during consultation so we can plan realistic, individual downtime together."
      }
    ]
  }
];

function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setOpenIndex(null); // Close questions when switching categories, or we could keep first one open
  };

  const activeCategoryData = FAQ_CATEGORIES.find(c => c.id === activeCategory) || FAQ_CATEGORIES[0];

  return (
    <section className="bg-white py-16 md:py-24" id="faq">
      <Container>
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-heading">
            Common Questions
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Everything you need to know about the procedure, recovery, and results.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar Categories */}
          <div className="w-full lg:w-1/4 flex-shrink-0">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
              {FAQ_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`whitespace-nowrap rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-200 lg:w-full ${
                    activeCategory === category.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Questions List */}
          <div className="w-full lg:w-3/4">
            <div className="space-y-4">
              <div className="mb-6 lg:hidden">
                <h3 className="text-lg font-semibold text-heading">
                  {activeCategoryData.label}
                </h3>
              </div>
              
              {activeCategoryData.items.map((faq, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                    openIndex === i
                      ? "border-primary/30 bg-primary/5 shadow-sm"
                      : "border-gray-100 bg-white hover:border-primary/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left sm:py-5"
                  >
                    <span className={`text-sm font-medium sm:text-base pr-4 ${openIndex === i ? "text-heading" : "text-gray-700"}`}>
                      {faq.question}
                    </span>
                    <span className={`ml-4 shrink-0 rounded-full p-1 transition-transform duration-200 ${openIndex === i ? "rotate-180 text-primary" : "text-gray-400"}`}>
                      <IconChevronDown className="h-5 w-5" />
                    </span>
                  </button>
                  
                  <div
                    className={`grid transition-all duration-200 ease-in-out ${
                      openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 pt-0 text-sm leading-relaxed text-gray-600 sm:text-base">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-sm text-gray-500">
            Have more questions? We're here to help.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=905545769958"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white border border-gray-200 px-6 py-3 text-sm font-semibold text-heading shadow-sm transition hover:bg-gray-50 hover:border-gray-300"
          >
            <svg className="h-5 w-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.495.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
