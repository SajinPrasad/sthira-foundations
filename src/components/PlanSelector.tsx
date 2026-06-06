import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Maximize2 } from 'lucide-react';
import { useConfigurator } from '../context/ConfiguratorContext';
import plans from '../data/plans.json';

const PlanSelector: React.FC = () => {
  const { state, selectPlan } = useConfigurator();

  return (
    <section className="min-h-screen bg-stone-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-amber-400 text-sm font-mono tracking-widest uppercase mb-4">
            Step 1 of 5
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-stone-50 mb-5 leading-tight">
            Choose Your House Plan
          </h1>
          <p className="text-stone-400 text-lg max-w-xl mx-auto leading-relaxed">
            Select the layout that matches your space. You'll customize every room in the next steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => {
            const isSelected = state.selectedPlan === plan.id;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => selectPlan(plan.id)}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onKeyDown={e => e.key === 'Enter' && selectPlan(plan.id)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-stone-950 ${
                  isSelected
                    ? 'ring-2 ring-amber-400 shadow-2xl shadow-amber-400/20'
                    : 'hover:shadow-xl hover:shadow-stone-900/60 hover:-translate-y-1'
                }`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={`${plan.name} floor plan preview`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                  <span className="absolute top-3 left-3 bg-amber-400 text-stone-950 text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.tag}
                  </span>
                  {isSelected && (
                    <div className="absolute top-3 right-3">
                      <CheckCircle className="w-6 h-6 text-amber-400 fill-stone-950" />
                    </div>
                  )}
                </div>

                <div className={`p-6 transition-colors duration-300 ${isSelected ? 'bg-stone-800' : 'bg-stone-900 group-hover:bg-stone-800'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Maximize2 className="w-3.5 h-3.5 text-stone-500" />
                    <span className="text-stone-500 text-xs font-mono">{plan.area}</span>
                  </div>
                  <h2 className="font-serif text-xl text-stone-50 mb-2">{plan.name}</h2>
                  <p className="text-stone-400 text-sm leading-relaxed mb-4">{plan.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500 text-xs">
                      {plan.rooms.length} rooms
                    </span>
                    <span className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${isSelected ? 'text-amber-400' : 'text-stone-400 group-hover:text-amber-400'}`}>
                      {isSelected ? 'Selected' : 'Select'}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {state.selectedPlan && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => {}}
              className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold px-10 py-4 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-stone-950"
            >
              Continue to Configurator
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PlanSelector;