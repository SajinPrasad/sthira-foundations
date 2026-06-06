import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Info } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import PlanSelector from '../components/PlanSelector';
import RoomSelector from '../components/RoomSelector';
import CustomizerPanel from '../components/CustomizerPanel';
import PreviewCanvas from '../components/PreviewCanvas';
import { useConfigurator } from '../context/ConfiguratorContext';
import plans from '../data/plans.json';

const ConfiguratorInner: React.FC = () => {
  const { state, selectPlan } = useConfigurator();
  const plan = plans.find(p => p.id === state.selectedPlan);

  if (!state.selectedPlan) {
    return <PlanSelector />;
  }

  return (
    <div className="min-h-screen bg-stone-950 flex flex-col pt-16">
      {/* Top bar */}
      <div className="bg-stone-900/80 backdrop-blur-sm border-b border-stone-800/60 px-6 py-3 flex-shrink-0">
        <div className="max-w-[1600px] mx-auto flex items-center gap-4 flex-wrap">
          <button
            onClick={() => selectPlan('')}
            className="flex items-center gap-1.5 text-stone-500 hover:text-stone-300 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg px-2 py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Change Plan</span>
          </button>

          <div className="h-4 w-px bg-stone-700 hidden sm:block" aria-hidden="true" />

          {plan && (
            <span className="text-stone-300 text-sm font-medium">
              <span className="text-stone-500">Plan:</span> {plan.name}
            </span>
          )}

          <div className="h-4 w-px bg-stone-700 hidden sm:block" aria-hidden="true" />

          <div className="flex-1 min-w-0">
            <RoomSelector />
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left panel */}
        <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0 p-4 lg:p-6 lg:overflow-y-auto lg:h-[calc(100vh-8rem)]">
          <CustomizerPanel />
        </aside>

        {/* Preview */}
        <main className="flex-1 p-4 lg:p-6 flex flex-col gap-4 min-h-[400px] lg:h-[calc(100vh-8rem)] lg:overflow-hidden">
          <motion.div
            className="flex-1 min-h-0"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <PreviewCanvas />
          </motion.div>

          {/* Disclaimer */}
          <div className="flex items-start gap-2.5 bg-stone-900/60 border border-stone-800/40 rounded-xl px-4 py-3 flex-shrink-0">
            <Info className="w-4 h-4 text-stone-500 flex-shrink-0 mt-0.5" />
            <p className="text-stone-500 text-xs leading-relaxed">
              Design preview for inspiration only. Actual materials, colors, and finishes may vary.{' '}
              <NavLink to="/contact" className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors">
                Contact our team
              </NavLink>{' '}
              for real project planning and accurate quotations.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

const Configurator: React.FC = () => {
  return (
    <>
      <Header />
      <Suspense fallback={
        <div className="min-h-screen bg-stone-950 flex items-center justify-center pt-16">
          <div className="text-stone-500 text-sm animate-pulse">Loading configurator…</div>
        </div>
      }>
        <ConfiguratorInner />
      </Suspense>
    </>
  );
};

export default Configurator;