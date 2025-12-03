import { Container } from "../ui/Container";

function IconWhatsApp() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.495.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-[#011826] py-20 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Appearance?
          </h2>

          <div className="mb-12 grid gap-8 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
               <div className="mb-4 text-3xl font-bold text-primary">01</div>
               <h3 className="mb-2 font-bold text-white">Schedule Consultation</h3>
               <p className="text-sm text-gray-400">Get personalized assessment and treatment plan in 15 minutes.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
               <div className="mb-4 text-3xl font-bold text-primary">02</div>
               <h3 className="mb-2 font-bold text-white">Review Your Options</h3>
               <p className="text-sm text-gray-400">Understand procedure, timeline, and investment clear and simple.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
               <div className="mb-4 text-3xl font-bold text-primary">03</div>
               <h3 className="mb-2 font-bold text-white">Book Your Procedure</h3>
               <p className="text-sm text-gray-400">Secure your preferred date and begin your transformation.</p>
            </div>
          </div>
          
          <p className="mb-10 text-lg font-medium text-gray-300">
            No pressure. No obligation. Just honest information to help you make the right decision.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#beard-free-analysis"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-8 py-4 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,215,0,0.3)] transition hover:bg-primary-dark hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] sm:w-auto"
            >
              Get Your Free Consultation
            </a>
             <a
              href="https://api.whatsapp.com/send/?phone=905545769958"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
            >
              <IconWhatsApp />
              <span>Send Photos via WhatsApp</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

