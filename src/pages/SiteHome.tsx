import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BifurcationDivider from "../components/BifurcationDivider";
import LorenzCanvas from "../components/LorenzCanvas";
import { awards, experience, profile, publications, recipes } from "../siteContent";

const nav = [
  { label: "about", id: "about" },
  { label: "cv", id: "cv" },
  { label: "publications", id: "publications" },
  { label: "personal", id: "personal" },
];

const sectionClass = "px-4 py-16 sm:px-6 md:py-24";

const SiteHome = () => {
  return (
    <div className="min-h-screen bg-phase-bg font-sans-theme text-phase-text">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-phase-ghost/20 bg-phase-bg/85 backdrop-blur-md">
        <div className="mx-auto flex min-h-14 max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="font-mono-theme text-xs text-phase-text-dim transition-colors hover:text-phase-teal">
            {profile.name}
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-mono-theme text-xs uppercase tracking-wide text-phase-text-dim transition-colors hover:text-phase-teal"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 font-mono-theme text-[11px] text-phase-teal/80 sm:text-xs">
            <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-phase-teal">
              github
            </a>
            <a href={profile.scholar} target="_blank" rel="noreferrer" className="transition-colors hover:text-phase-teal">
              scholar
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-phase-teal">
              linkedin
            </a>
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-phase-teal">
              email
            </a>
          </div>
        </div>
      </nav>

      <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24 sm:pt-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <p className="mb-6 font-mono-theme text-xs uppercase tracking-[0.3em] text-phase-teal">{profile.title}</p>
            <h1 className="mb-8 font-serif-theme text-5xl font-light leading-[0.92] sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block text-phase-text">Elise</span>
              <span className="block text-phase-teal">Özalp</span>
            </h1>
            <p className="mb-6 max-w-xl font-mono-theme text-sm leading-relaxed text-phase-text-dim">{profile.subtitle}</p>
            <p className="max-w-xl text-sm leading-relaxed text-phase-text-dim/80 sm:text-base">{profile.intro[0]}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Applied ML", "Dynamical systems", "Physics-informed models", profile.location].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-phase-teal/30 px-3 py-1.5 font-mono-theme text-[11px] text-phase-teal/80 sm:text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#cv"
                className="rounded-full bg-phase-teal px-5 py-2 font-mono-theme text-xs uppercase tracking-wider text-slate-950 transition-transform hover:scale-[1.02]"
              >
                View CV
              </a>
              <a
                href="#publications"
                className="rounded-full border border-phase-ghost/40 px-5 py-2 font-mono-theme text-xs uppercase tracking-wider text-phase-text transition-colors hover:border-phase-teal/40 hover:text-phase-teal"
              >
                View Publications
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.25 }}
            className="flex items-center justify-center"
          >
            <LorenzCanvas width={420} height={380} className="h-auto w-full max-w-[430px] opacity-95" />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono-theme text-[10px] tracking-[0.25em] text-phase-text-dim/40 sm:bottom-12 sm:text-xs"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          scroll to solve the system ↓
        </motion.div>
      </section>

      <BifurcationDivider className="my-4" />

      <section id="about" className={sectionClass}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-baseline gap-4 md:mb-16">
            <span className="font-mono-theme text-xs uppercase tracking-[0.3em] text-phase-teal">Initial Conditions</span>
            <div className="h-px flex-1 bg-phase-ghost/20" />
            <span className="hidden font-mono-theme text-xs text-phase-text-dim sm:inline">Research focus and recent work</span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 text-base leading-relaxed text-phase-text-dim/85">
              {profile.intro.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="rounded-[1.75rem] border border-phase-ghost/20 bg-phase-surface/50 p-5 sm:p-6">
              <img
                src="/images/profile.png"
                alt="Portrait of Elise Özalp"
                className="mb-5 aspect-square w-full rounded-[1.25rem] object-cover object-center"
              />
              <div className="space-y-3">
                <p className="font-serif-theme text-2xl text-phase-text">{profile.name}</p>
                <p className="font-mono-theme text-xs uppercase tracking-[0.25em] text-phase-teal">{profile.location}</p>
                <p className="text-sm leading-relaxed text-phase-text-dim/80">
                  Applied ML researcher focused on chaotic systems, partial observations, and physically grounded forecasting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BifurcationDivider className="my-4 rotate-180" />

      <section id="cv" className={sectionClass}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-baseline gap-4 md:mb-16">
            <span className="font-mono-theme text-xs uppercase tracking-[0.3em] text-phase-teal">Trajectory</span>
            <div className="h-px flex-1 bg-phase-ghost/20" />
            <span className="hidden font-mono-theme text-xs text-phase-text-dim sm:inline">Experience, awards, and CV</span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-10">
              <div>
                <h3 className="mb-5 font-mono-theme text-xs uppercase tracking-[0.25em] text-phase-text-dim">Experience</h3>
                <div className="space-y-5">
                  {experience.map((item) => (
                    <div key={item.role}>
                      <p className="font-serif-theme text-xl text-phase-text">{item.role}</p>
                      <p className="mt-1 font-mono-theme text-xs text-phase-teal/85">
                        {item.place} · {item.year}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-phase-text-dim/80">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-5 font-mono-theme text-xs uppercase tracking-[0.25em] text-phase-text-dim">Awards</h3>
                <div className="space-y-3">
                  {awards.map((award) => (
                    <div key={award} className="rounded-2xl border border-phase-ghost/20 px-4 py-3 text-sm text-phase-text-dim/85">
                      {award}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-phase-ghost/20 bg-phase-surface/35 p-4 sm:p-5">
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-serif-theme text-2xl text-phase-text">Curriculum Vitae</h3>
                  <p className="mt-1 font-mono-theme text-xs uppercase tracking-[0.2em] text-phase-text-dim">
                    Download and preview the latest CV
                  </p>
                </div>
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-phase-teal/35 px-4 py-2 text-center font-mono-theme text-xs uppercase tracking-wider text-phase-teal transition-colors hover:bg-phase-teal hover:text-slate-950"
                >
                  Download PDF
                </a>
              </div>
              <iframe
                src={profile.cv}
                title="CV preview"
                className="h-[420px] w-full rounded-[1rem] border border-phase-ghost/15 bg-white sm:h-[520px] lg:h-[720px]"
              />
            </div>
          </div>
        </div>
      </section>

      <BifurcationDivider className="my-4" />

      <section id="publications" className={sectionClass}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-baseline gap-4 md:mb-16">
            <span className="font-mono-theme text-xs uppercase tracking-[0.3em] text-phase-teal">Publications</span>
            <div className="h-px flex-1 bg-phase-ghost/20" />
            <span className="hidden font-mono-theme text-xs text-phase-text-dim sm:inline">Selected publications and preprints</span>
          </div>

          <div className="space-y-4">
            {publications.map((publication, index) => (
              <motion.a
                key={publication.title}
                href={publication.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group block rounded-[1.4rem] border border-phase-ghost/15 bg-phase-surface/35 p-5 sm:p-6 transition-colors hover:border-phase-teal/35"
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-serif-theme text-xl text-phase-text transition-colors group-hover:text-phase-teal sm:text-2xl">
                    {publication.title}
                  </h3>
                  <span className="rounded-full bg-phase-teal/10 px-3 py-1 font-mono-theme text-xs text-phase-teal/80">
                    {publication.year}
                  </span>
                </div>
                <p className="mb-3 font-mono-theme text-xs uppercase tracking-[0.2em] text-phase-text-dim">{publication.venue}</p>
                <p className="max-w-4xl text-sm leading-relaxed text-phase-text-dim/85">{publication.summary}</p>
              </motion.a>
            ))}
          </div>

          <p className="mt-10 font-mono-theme text-xs text-phase-text-dim/70">
            More papers are also available on{" "}
            <a href={profile.scholar} target="_blank" rel="noreferrer" className="text-phase-teal hover:text-phase-warm">
              Google Scholar
            </a>
            .
          </p>
        </div>
      </section>

      <BifurcationDivider className="my-4 rotate-180" />

      <section id="personal" className={sectionClass}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-baseline gap-4 md:mb-16">
            <span className="font-mono-theme text-xs uppercase tracking-[0.3em] text-phase-warm">Strange Attractor</span>
            <div className="h-px flex-1 bg-phase-ghost/20" />
            <span className="hidden font-mono-theme text-xs text-phase-text-dim sm:inline">A small corner outside research</span>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.75rem] border border-phase-ghost/20 bg-phase-surface/35 p-5 sm:p-6">
              <p className="mb-4 font-serif-theme text-3xl text-phase-text">Recipes</p>
              <p className="mb-6 text-sm leading-relaxed text-phase-text-dim/85">
                Baking is still the main non-research thread here, now with proper recipe pages instead of source-file links.
              </p>
              <img
                src="/images/pecanpie.jpeg"
                alt="Maple pecan pie"
                className="h-72 w-full rounded-[1.25rem] object-cover"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {recipes.map((recipe, index) => (
                <motion.div
                  key={recipe.slug}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={`/recipes/${recipe.slug}`}
                    className="flex min-h-44 flex-col justify-between rounded-[1.5rem] border border-phase-ghost/15 bg-phase-surface/35 p-5 transition-colors hover:border-phase-warm/40"
                  >
                    <div>
                      <p className="mb-3 font-mono-theme text-xs uppercase tracking-[0.25em] text-phase-warm">{recipe.tag}</p>
                      <h3 className="font-serif-theme text-2xl text-phase-text">{recipe.name}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-phase-text-dim/80">{recipe.note}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-phase-ghost/15 px-4 py-12 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="font-mono-theme text-xs text-phase-text-dim/40">© 2026 {profile.name}</p>
            <p className="mt-2 text-sm text-phase-text-dim/70">Research, writing, and recipes collected in one place.</p>
          </div>
          <p className="font-mono-theme text-xs text-phase-text-dim/30">sigma = 10, rho = 28, beta = 8/3</p>
        </div>
      </footer>
    </div>
  );
};

export default SiteHome;
