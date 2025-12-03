"use client";

import { useState } from "react";
import { Container } from "../ui/Container";

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

function IconRefresh({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 4v6h-6" />
      <path d="M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

export function ReadinessChecklist() {
  const steps = [
    {
      id: "medical",
      title: "Medical Profile",
      description: "Basic biological requirements for a successful transplant.",
      items: [
        { id: 0, text: "I am 25+ years old (or have medical approval)" },
        { id: 1, text: "I have healthy donor hair on the back of my head" },
        { id: 2, text: "I am in good general health (no blood-borne diseases)" }
      ]
    },
    {
      id: "logistics",
      title: "Logistics & Time",
      description: "Can you fit the procedure into your schedule?",
      items: [
        { id: 3, text: "I can take 5–7 days off work/social events" },
        { id: 4, text: "I am ready for the 2-week healing appearance (scabs/redness)" },
        { id: 5, text: "I can travel to Istanbul for 3–4 days" }
      ]
    },
    {
      id: "mindset",
      title: "Mindset & Budget",
      description: "Are you prepared for the investment and journey?",
      items: [
        { id: 6, text: "I understand results take 6–12 months to fully appear" },
        { id: 7, text: "I have a budget of €1,500–€2,500 (plus flights)" },
        { id: 8, text: "I want a permanent solution, not a quick fix" }
      ]
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [isFinished, setIsFinished] = useState(false);

  const totalItems = steps.reduce((acc, step) => acc + step.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((checkedCount / totalItems) * 100);

  const handleToggle = (id: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setIsFinished(false);
    setCheckedItems({});
  };

  return (
    <section className="bg-background-alt py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <header className="mb-10 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-heading">
            Readiness Quiz
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
            Are You Ready for Beard Transplant?
          </h2>
        </header>

        {/* Quiz Container */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          
          {/* Progress Bar */}
          <div className="absolute left-0 top-0 h-1.5 w-full bg-gray-100">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${Math.max(5, ((currentStep + (isFinished ? 1 : 0)) / steps.length) * 100)}%` }}
            />
          </div>

          <div className="p-6 sm:p-10 md:p-12">
            {!isFinished ? (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300" key={currentStep}>
                {/* Step Header */}
                <div className="mb-8 text-center">
                  <span className="mb-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Step {currentStep + 1} of {steps.length}
                  </span>
                  <h3 className="text-2xl font-bold text-heading">{steps[currentStep].title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{steps[currentStep].description}</p>
                </div>

                {/* Checklist Items */}
                <div className="space-y-3">
                  {steps[currentStep].items.map((item) => (
                    <label 
                      key={item.id}
                      className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition-all duration-200 hover:bg-gray-50 ${
                        checkedItems[item.id] 
                          ? "border-primary bg-primary/5 shadow-sm ring-1 ring-primary" 
                          : "border-gray-200"
                      }`}
                    >
                      <div 
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all ${
                          checkedItems[item.id]
                            ? "border-primary bg-primary text-black"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {checkedItems[item.id] && <IconCheck className="h-3.5 w-3.5" />}
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={!!checkedItems[item.id]}
                        onChange={() => handleToggle(item.id)}
                      />
                      <span className={`text-sm font-medium ${checkedItems[item.id] ? "text-heading" : "text-gray-600"}`}>
                        {item.text}
                      </span>
                    </label>
                  ))}
                </div>

                {/* Navigation */}
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={handleNext}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-heading px-8 py-4 text-sm font-bold text-white transition-all hover:bg-black hover:shadow-lg sm:w-auto"
                  >
                    <span>{currentStep === steps.length - 1 ? "See My Results" : "Next Step"}</span>
                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ) : (
              // Result Slide
              <div className="animate-in zoom-in-95 duration-500 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary-dark ring-8 ring-primary/5">
                  <span className="text-2xl font-bold">{progress}%</span>
                </div>
                
                <h3 className="text-2xl font-bold text-heading">
                  {progress >= 80 ? "You Are Ready!" : "Almost There!"}
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm text-gray-600">
                  {progress >= 80 
                    ? "You meet the key criteria for a successful beard transplant. Your profile looks great for a procedure in Istanbul."
                    : "You have some readiness factors, but might need to clarify a few things before booking."}
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="#beard-free-analysis"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-bold text-black shadow-lg shadow-primary/20 transition hover:bg-primary-dark hover:shadow-xl sm:w-auto"
                  >
                    Get Free Consultation
                  </a>
                  <button
                    onClick={handleRestart}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-4 text-sm font-semibold text-gray-600 transition hover:bg-gray-50 sm:w-auto"
                  >
                    <IconRefresh className="h-4 w-4" />
                    <span>Restart Quiz</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </Container>
    </section>
  );
}
