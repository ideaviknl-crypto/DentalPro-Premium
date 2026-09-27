const services = [
  {
    title: "Smile Makeover",
    description: "Premium whitening, veneer design, and smile planning tailored to your style.",
    icon: "✨",
  },
  {
    title: "Digital Dentistry",
    description: "3D scans, AI diagnostics, and precision treatment planning for faster care.",
    icon: "🦷",
  },
  {
    title: "Invisible Aligners",
    description: "Clear aligner systems with flexible scheduling and subtle progress tracking.",
    icon: "📐",
  },
  {
    title: "Dental Wellness",
    description: "Preventive checkups, hygiene plans, and care programs for every age group.",
    icon: "💎",
  },
];

const stats = [
  { value: "18k+", label: "happy smiles" },
  { value: "4.9/5", label: "patient rating" },
  { value: "24/7", label: "support desk" },
  { value: "12 min", label: "average booking time" },
];

const doctors = [
  { name: "Dr. Maya Liew", role: "Cosmetic Dentist", initials: "ML", accent: "from-cyan-500 to-blue-600" },
  { name: "Dr. Noah Clark", role: "Orthodontist", initials: "NC", accent: "from-emerald-500 to-teal-600" },
  { name: "Dr. Aisha Rowan", role: "Implant Specialist", initials: "AR", accent: "from-violet-500 to-purple-600" },
];

const testimonials = [
  {
    quote: "The experience felt premium from check-in to follow-up. The digital smile plan was honestly a game changer.",
    name: "Sophia R.",
  },
  {
    quote: "Booking was super easy, the team was warm, and the results looked natural and polished.",
    name: "Daniel K.",
  },
  {
    quote: "Feels like a luxury clinic with a fresh, upbeat vibe. I actually looked forward to my visits.",
    name: "Talia W.",
  },
];

const queue = [
  { name: "Harper", status: "Consultation", time: "09:10" },
  { name: "Leo", status: "Scanning", time: "09:22" },
  { name: "Nia", status: "Treatment", time: "09:35" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="bg-mesh">
        <header className="mx-auto max-w-7xl px-6 py-6">
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-lg font-bold text-slate-950">
                D
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">DentalPro</p>
                <p className="text-xs text-slate-300">Premium Care</p>
              </div>
            </div>

            <div className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
              <a href="#services">Services</a>
              <a href="#team">Team</a>
              <a href="#stories">Stories</a>
              <a href="#booking">Booking</a>
            </div>

            <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:scale-[1.02]">
              Book visit
            </button>
          </nav>
        </header>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Real-time dental care, reimagined
            </div>

            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Smile brighter with a clinic built for the next generation.
            </h1>

            <p className="mt-6 max-w-lg text-lg text-slate-300">
              Premium whitening, invisible aligners, aesthetic dentistry, and seamless digital care—all designed to feel modern, warm, and stress-free.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 font-semibold text-slate-950 shadow-soft transition hover:brightness-110">
                Schedule a consultation
              </button>
              <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Explore treatments
              </button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 via-slate-900 to-slate-950 p-5 shadow-soft">
              <div className="rounded-[1.5rem] border border-cyan-400/20 bg-slate-900/80 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Clinic live</p>
                    <h2 className="mt-2 text-2xl font-bold">Today’s queue</h2>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">
                    3 patients now
                  </div>
                </div>

                <div className="space-y-3">
                  {queue.map((patient) => (
                    <div key={patient.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 font-semibold text-white">
                          {patient.name.slice(0, 1)}
                        </div>
                        <div>
                          <p className="font-medium text-white">{patient.name}</p>
                          <p className="text-xs text-slate-300">{patient.status}</p>
                        </div>
                      </div>
                      <span className="text-sm text-cyan-300">{patient.time}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-gradient-to-r from-cyan-500/15 to-emerald-500/15 p-4">
                  <p className="text-sm text-slate-200">Next available</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-white">09:45 AM</p>
                      <p className="text-xs text-slate-300">Smile consultation with Dr. Maya</p>
                    </div>
                    <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Our care</p>
          <h2 className="mt-4 text-4xl font-black">Luxury dentistry, tailored to your goals.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 text-2xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Technology</p>
            <h3 className="mt-4 text-2xl font-bold">Precision care backed by digital tools.</h3>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-4xl font-black text-cyan-300">AI</p>
            <p className="mt-3 text-slate-300">Smart diagnostics and treatment simulation help us plan with clarity and confidence.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-4xl font-black text-emerald-300">3D</p>
            <p className="mt-3 text-slate-300">From scans to smile previews, every step is designed to feel smooth and transparent.</p>
          </div>
        </div>
      </section>

      <section id="team" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Meet the team</p>
            <h2 className="mt-4 text-4xl font-black">Specialists who make confidence feel effortless.</h2>
          </div>
          <button className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white md:inline-flex">
            View all specialists
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {doctors.map((doctor) => (
            <article key={doctor.name} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-slate-900 p-5">
              <div className={`mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${doctor.accent} text-2xl font-black text-white`}>
                {doctor.initials}
              </div>
              <h3 className="text-2xl font-bold text-white">{doctor.name}</h3>
              <p className="mt-2 text-cyan-300">{doctor.role}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Focused on customized treatment plans, visible results, and patient-centered care.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="stories" className="bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Patient stories</p>
            <h2 className="mt-4 text-4xl font-black">Clinics should feel as good as the results.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <p className="text-lg leading-8 text-slate-200">“{testimonial.quote}”</p>
                <footer className="mt-6 text-sm font-semibold text-cyan-300">{testimonial.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-emerald-500/10 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Book your visit</p>
              <h2 className="mt-4 text-4xl font-black">Start your premium dental journey in minutes.</h2>
              <p className="mt-4 max-w-xl text-slate-300">
                Choose your preferred treatment, share your goals, and our care coordinators will match you with the right specialist.
              </p>
            </div>

            <form className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Treatment</label>
                  <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none">
                    <option>Smile consultation</option>
                    <option>Teeth whitening</option>
                    <option>Invisalign consultation</option>
                    <option>Implant evaluation</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">Preferred date</label>
                  <input type="date" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" />
                </div>

                <button className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-3 font-semibold text-slate-950">
                  Reserve appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
