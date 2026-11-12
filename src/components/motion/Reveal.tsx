'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

interface RevealProps {
	children: ReactNode;
	delay?: number;
	y?: number;
	className?: string;
}

/** Płynne pojawianie się elementu przy przewijaniu. Szanuje prefers-reduced-motion. */
export default function Reveal({
	children,
	delay = 0,
	y = 28,
	className,
}: RevealProps) {
	const reduce = useReducedMotion();
	return (
		<motion.div
			className={className}
			initial={reduce ? false : { opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '0px 0px -8% 0px' }}
			transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
			{children}
		</motion.div>
	);
}
