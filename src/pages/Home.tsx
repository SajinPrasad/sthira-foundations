import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Palette, LayoutGrid, Sparkles, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const features = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Layer-Based Preview',
    description: 'See walls, floors, ceilings, and furniture update in real time as you make selections.',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Rich Material Library',
    description: 'Choose from curated paints, marble, hardwood, tiles, and textured finishes.',
  },
  {
    icon: <LayoutGrid className="w-6 h-6" />,
    title: 'Furniture Layouts',
    description: 'Switch between professionally designed furniture arrangements for each room.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Theme Presets',
    description: 'Apply Modern, Minimal, Luxury, Scandinavian, or Traditional themes instantly.',
  },
];

const steps = [
  { num: '01', title: 'Pick a House Plan', desc: '1 BHK, 2 BHK, 3 BHK, or Villa — choose your layout.' },
  { num: '02', title: 'Select a Room', desc: 'Navigate between Living Room, Bedroom, Kitchen, and more.' },
  { num: '03', title: 'Customize Materials', desc: 'Choose wall colors, floor types, and ceiling styles.' },
  { num: '04', title: 'Apply a Theme', desc: 'One-click presets that set the entire room aesthetic.' },
  { num: '05', title: 'Choose Furniture', desc: 'Pick from curated layout arrangements per room.' },
];

const Home: React.FC = () => {
  return (
    <div className="bg-stone-950 min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&h=900&fit=crop"
            alt="Luxurious modern interior with warm lighting and premium finishes"
            width={1600}
            height={900}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-amber-400 text-sm font-mono tracking-widest uppercase mb-6 border border-amber-400/30 px-4 py-1.5 rounded-full">
              Premium Interior Design
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-stone-50 mb-6 leading-tight">
              Design Your Space With Us
              <br />
              <span className="text-amber-400">Before You Build It</span>
            </h1>
            <p className="text-stone-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Collaborate with our expert team to explore materials, themes, and layouts. We bring your vision to life before construction even begins.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* <NavLink
                to="/configurator"
                className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-stone-950"
              >
                Start Configuring
                <ArrowRight className="w-5 h-5" />
              </NavLink> */}
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-3 border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-stone-100 font-medium px-8 py-4 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-stone-950"
              >
                Talk to Our Team
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-stone-50 mb-4">
              Everything You Need to Visualize
            </h2>
            <p className="text-stone-400 text-lg max-w-xl mx-auto">
              A complete toolkit for exploring your interior design options before committing to a single purchase.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-stone-900 border border-stone-800/60 hover:border-amber-400/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-5 group-hover:bg-amber-400/20 transition-colors duration-200">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl text-stone-100 mb-3">{feature.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 bg-stone-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-stone-50 mb-4">How It Works</h2>
            <p className="text-stone-400 text-lg">Five simple steps to your perfect interior.</p>
          </motion.div>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-6 p-6 rounded-2xl bg-stone-900 border border-stone-800/60 hover:border-stone-700/60 transition-all duration-200"
              >
                <span className="font-mono text-amber-400 text-2xl font-bold flex-shrink-0 w-10">{step.num}</span>
                <div>
                  <h3 className="text-stone-100 font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-stone-500 text-sm">{step.desc}</p>
                </div>
                <CheckCircle className="w-5 h-5 text-stone-700 flex-shrink-0 ml-auto mt-0.5" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            {/* <NavLink
              to="/configurator"
              className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold px-10 py-4 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-stone-950"
            >
              Open the Configurator
              <ArrowRight className="w-5 h-5" />
            </NavLink> */}
          </motion.div>
        </div>
      </section>

      {/* Preview image */}
      <section className="py-24 px-6 bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden h-96 md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=700&fit=crop"
              alt="Beautifully designed modern living room with curated furniture and warm lighting"
              width={1400}
              height={700}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/30 to-transparent" />
            <div className="absolute inset-0 flex items-center px-12 md:px-20">
              <div className="max-w-md">
                <p className="text-amber-400 text-sm font-mono uppercase tracking-widest mb-3">Real Results</p>
                <h2 className="font-serif text-4xl md:text-5xl text-stone-50 mb-4 leading-tight">
                  From Vision to Reality
                </h2>
                <p className="text-stone-300 text-base leading-relaxed mb-6">
                  Our configurator bridges the gap between imagination and execution. Share your design with our team and get a real project quote.
                </p>
                <NavLink
                  to="/contact"
                  className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Contact Our Team <ArrowRight className="w-4 h-4" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;