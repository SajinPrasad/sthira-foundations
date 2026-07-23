import type { Variants, Transition } from 'framer-motion';

/**
 * Shared motion language for the site.
 * A single easing curve + a small set of variants keeps every section's
 * entrance feeling consistent, smooth and unhurried — never snappy.
 */

// easeOutQuint-style curve: quick to settle, soft on arrival.
export const EASE = [0.22, 1, 0.36, 1] as const;

export const revealTransition: Transition = { duration: 0.8, ease: EASE };

// Standard viewport trigger — fires once, slightly before the block is centred.
export const viewportOnce = { once: true, amount: 0.2 } as const;

/**
 * Parent container that reveals its children one after another.
 * @param stagger  gap between consecutive children (seconds)
 * @param delayChildren  initial pause before the first child (seconds)
 */
export const staggerContainer = (stagger = 0.12, delayChildren = 0.05): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

// Card / media reveal: fade + gentle rise + subtle scale (0.98 → 1).
export const revealItem: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: revealTransition },
};

// Text / block reveal: fade + rise only (no scale, keeps type crisp).
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: revealTransition },
};
