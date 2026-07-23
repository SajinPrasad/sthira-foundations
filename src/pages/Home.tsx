import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  PencilRuler,
  Gem,
  Users,
  Timer,
  HeartHandshake,
  MessagesSquare,
  Hammer,
  KeyRound,
  Compass,
  Layers,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  EASE,
  revealTransition,
  viewportOnce,
  staggerContainer,
  revealItem,
  fadeUp,
} from '../lib/motion';
import {
  heroLiving,
  aboutRoom,
  villaPool,
  openPlan,
  twilightHouse,
  cozyLiving,
} from '../assets/images';

/* ---------- shared scroll-reveal helper (fade + gentle rise) ---------- */
const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className,
}) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={viewportOnce}
    transition={{ ...revealTransition, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ---------- small eyebrow with leading rule (signature motif) ---------- */
const Eyebrow: React.FC<{ children: React.ReactNode; center?: boolean }> = ({ children, center }) => (
  <span
    className={`inline-flex items-center gap-3 text-clay-600 text-xs font-semibold uppercase tracking-eyebrow ${
      center ? 'justify-center' : ''
    }`}
  >
    <span className="h-px w-8 bg-clay-600/50" aria-hidden="true" />
    {children}
  </span>
);

/* ---------- data ---------- */
const trust = [
  { icon: PencilRuler, title: 'Design + Build', desc: 'End-to-end, one roof.' },
  { icon: Gem, title: 'Quality Materials', desc: 'Sourced with care.' },
  { icon: Users, title: 'Experienced Team', desc: 'Craftsmen you trust.' },
  { icon: Timer, title: 'On-Time Delivery', desc: 'Timelines we keep.' },
  { icon: HeartHandshake, title: 'After-Sales Support', desc: 'Beyond handover.' },
];

const projects = [
  { img: villaPool, title: 'Palm Court Villa', category: 'Design & Build', span: 'lg:col-span-7' },
  { img: openPlan, title: 'Ivory Residence', category: 'Interior Design', span: 'lg:col-span-5' },
  { img: cozyLiving, title: 'Maple Heights', category: 'Interior Design', span: 'lg:col-span-5' },
  { img: twilightHouse, title: 'Timberline House', category: 'Design & Build', span: 'lg:col-span-7' },
];

const process = [
  {
    num: '01',
    icon: MessagesSquare,
    title: 'Consultation',
    desc: 'We listen to how you live, then map your goals, site and budget together.',
  },
  {
    num: '02',
    icon: Compass,
    title: 'Design',
    desc: 'Concepts, materials and visuals — refined until every corner feels right.',
  },
  {
    num: '03',
    icon: Hammer,
    title: 'Build',
    desc: 'Our craftsmen execute with precision, on schedule and on budget.',
  },
  {
    num: '04',
    icon: KeyRound,
    title: 'Handover',
    desc: 'A finished space, walked through with you — and supported long after.',
  },
];

const Home: React.FC = () => {
  return (
    <div className="bg-cream-100 min-h-screen">
      <Header />

      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left — content */}
          <div className="relative z-10 flex items-center bg-cream-100 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="px-6 sm:px-10 lg:pl-10 lg:pr-16 xl:pl-16 py-16 lg:py-0 max-w-2xl"
            >
              <Eyebrow>Harmony in every corner</Eyebrow>
              <h1 className="font-serif text-[2.75rem] leading-[1.05] sm:text-6xl xl:text-7xl text-ink mt-6 tracking-[-0.01em]">
                We don't just
                <br />
                design interiors.
                <span className="block text-clay-600 italic mt-2">
                  We build spaces
                  <br className="hidden sm:block" /> that life is built on.
                </span>
              </h1>
              <p className="text-ink-muted text-lg leading-relaxed mt-8 max-w-lg">
                From the first foundation to the final finish, Sthira Spaces offers complete
                design and build solutions that bring harmony, beauty and purpose to every corner.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
                <NavLink
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-clay-600 hover:bg-clay-700 text-cream-50 font-medium pl-7 pr-6 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </NavLink>
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 text-ink-soft hover:text-clay-600 font-medium px-3 py-4 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-600 rounded-lg"
                >
                  Explore Our Work
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — dominant image with fade into content */}
          <div className="relative order-1 lg:order-2 min-h-[52vh] lg:min-h-screen">
            <motion.img
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.3, ease: EASE }}
              src={heroLiving}
              alt="Warm, light-filled living room with a linen sofa, timber accents and layered textures"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* soft cream fade where image meets content */}
            <div
              className="hidden lg:block absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-cream-100 to-transparent"
              aria-hidden="true"
            />
            <div
              className="lg:hidden absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream-100 to-transparent"
              aria-hidden="true"
            />
            {/* signature terracotta bleed tab */}
            <div className="absolute bottom-8 right-0 bg-clay-600 text-cream-50 pl-6 pr-7 py-3.5 rounded-l-full shadow-lg">
              <span className="font-medium tracking-wide text-sm sm:text-base">#BuildWithSthira</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= TRUST STRIP ========================= */}
      <section className="bg-cream-200 border-y border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.ul
            variants={staggerContainer(0.09, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y divide-line md:divide-y-0 md:divide-x"
          >
            {trust.map((item) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                className="flex items-center gap-4 py-7 md:px-6 first:pl-0 last:pr-0"
              >
                <span className="flex-shrink-0 w-11 h-11 rounded-full border border-clay-600/25 bg-clay-50 text-clay-600 flex items-center justify-center">
                  <item.icon className="w-5 h-5" strokeWidth={1.6} />
                </span>
                <span>
                  <span className="block text-ink font-medium text-sm leading-snug">{item.title}</span>
                  <span className="block text-ink-faint text-xs mt-0.5">{item.desc}</span>
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ========================== PROJECTS ========================== */}
      <section id="projects" className="bg-cream-100 py-24 lg:py-32 px-6 lg:px-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <Eyebrow>Featured Projects</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl text-ink mt-5 leading-[1.05] tracking-[-0.01em]">
                Spaces we're proud of.
                <span className="block text-ink-soft">Stories we've built.</span>
              </h2>
            </div>
            <NavLink
              to="/contact"
              className="group inline-flex items-center gap-2 text-clay-600 font-medium hover:text-clay-700 transition-colors flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-600 rounded-lg self-start md:self-auto"
            >
              Start a project like these
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </NavLink>
          </Reveal>

          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid lg:grid-cols-12 gap-6"
          >
            {projects.map((p) => (
              <motion.article
                key={p.title}
                variants={revealItem}
                className={`group relative overflow-hidden rounded-3xl bg-cream-200 shadow-sm hover:shadow-xl transition-shadow duration-500 ${p.span}`}
              >
                <div className="relative h-72 md:h-[26rem] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.title} — ${p.category} by Sthira Spaces`}
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-90"
                    aria-hidden="true"
                  />
                  <span className="absolute top-5 right-5 w-10 h-10 rounded-full bg-cream-50/90 text-clay-600 flex items-center justify-center translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                  <div className="absolute bottom-0 left-0 p-7">
                    <p className="text-cream-200/90 text-xs uppercase tracking-eyebrow font-medium mb-2">
                      {p.category}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl text-cream-50">{p.title}</h3>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================ ABOUT ============================ */}
      <section className="bg-cream-200 py-24 lg:py-32 px-6 lg:px-10 border-y border-line">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src={aboutRoom}
                alt="Minimal, sunlit living space with a sculptural chair, plants and soft neutral palette"
                className="w-full h-[30rem] lg:h-[38rem] object-cover"
              />
            </div>
            {/* floating accent card */}
            <div className="absolute -bottom-6 -right-2 lg:-right-8 bg-clay-600 text-cream-50 rounded-2xl px-7 py-6 shadow-xl max-w-[15rem]">
              <Layers className="w-6 h-6 mb-3 opacity-90" strokeWidth={1.6} />
              <p className="font-serif text-xl leading-snug">More than interiors. More than construction.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl text-ink mt-5 leading-[1.08] tracking-[-0.01em]">
              We create complete spaces that feel like home.
            </h2>
            <p className="text-ink-muted text-lg leading-relaxed mt-7">
              Sthira Spaces is a design and build studio for people who want their home done once,
              and done right. We bring architecture, interiors and craftsmanship under a single
              roof — so the vision you fall in love with is the space you actually move into.
            </p>
            <p className="text-ink-muted text-lg leading-relaxed mt-5">
              From the first sketch to the final handover, we stay accountable for every detail,
              every timeline and every finish.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {[
                { k: 'End-to-end', v: 'Design and build under one roof' },
                { k: 'In-house', v: 'Craftsmen and project leads' },
                { k: 'Transparent', v: 'Clear pricing at every stage' },
              ].map((s) => (
                <div key={s.k} className="border-t-2 border-clay-600/30 pt-4">
                  <p className="font-serif text-2xl text-clay-600">{s.k}</p>
                  <p className="text-ink-muted text-sm mt-1 leading-snug">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================== PROCESS =========================== */}
      <section className="bg-cream-100 py-24 lg:py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-2xl mb-16">
            <Eyebrow>How We Work</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl text-ink mt-5 leading-[1.05] tracking-[-0.01em]">
              A calm, considered path from idea to keys.
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {process.map((step) => (
              <motion.div
                key={step.num}
                variants={revealItem}
                className="group relative bg-cream-50 border border-line rounded-3xl p-8 hover:border-clay-600/30 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="w-12 h-12 rounded-2xl bg-clay-50 text-clay-600 flex items-center justify-center group-hover:bg-clay-600 group-hover:text-cream-50 transition-colors duration-300">
                    <step.icon className="w-6 h-6" strokeWidth={1.6} />
                  </span>
                  <span className="font-serif text-4xl text-cream-400 group-hover:text-clay-600/40 transition-colors duration-300">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-ink mb-3">{step.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================== CTA BAND ========================== */}
      <section className="px-6 lg:px-10 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2rem] bg-clay-700">
          {/* subtle texture accents */}
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-clay-600/40 blur-2xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-10 w-80 h-80 rounded-full bg-clay-900/40 blur-3xl" aria-hidden="true" />
          <Reveal className="relative px-8 sm:px-14 lg:px-20 py-16 lg:py-24 text-center">
            <p className="text-cream-200/80 text-xs uppercase tracking-eyebrow font-semibold mb-6">
              Design · Build · Live
            </p>
            <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl text-cream-50 leading-[1.08] tracking-[-0.01em] max-w-3xl mx-auto">
              Let's build a space that feels like home.
            </h2>
            <p className="text-cream-200/85 text-lg leading-relaxed mt-6 max-w-xl mx-auto">
              Tell us about your project. We'll help you shape it — from first idea to final finish.
            </p>
            <NavLink
              to="/contact"
              className="group inline-flex items-center gap-3 bg-cream-50 hover:bg-white text-clay-700 font-semibold pl-8 pr-7 py-4 rounded-full mt-10 transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cream-50 focus-visible:ring-offset-2 focus-visible:ring-offset-clay-700"
            >
              Get a Consultation
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </NavLink>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
