'use client';

import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useReducedMotion,
} from 'motion/react';
import type { MouseEvent, ReactNode } from 'react';

interface SpotlightCardProps {
	children: ReactNode;
	className?: string;
}

/** Karta z unoszeniem, zieloną poświatą podążającą za kursorem i linią akcentu u dołu. */
export default function SpotlightCard({
	children,
	className = '',
}: SpotlightCardProps) {
	const reduce = useReducedMotion();
	const mx = useMotionValue(-300);
	const my = useMotionValue(-300);
	const spotlight = useMotionTemplate`radial-gradient(360px circle at ${mx}px ${my}px, rgba(117,192,67,0.16), transparent 60%)`;

	const onMove = (e: MouseEvent<HTMLDivElement>) => {
		if (reduce) return;
		const r = e.currentTarget.getBoundingClientRect();
		mx.set(e.clientX - r.left);
		my.set(e.clientY - r.top);
	};

	return (
		<motion.div
			onMouseMove={onMove}
			whileHover={reduce ? undefined : { y: -6 }}
			transition={{ type: 'spring', stiffness: 300, damping: 22 }}
			className={`group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 transition-[border-color,box-shadow] duration-500 hover:border-brand/50 hover:shadow-[0_20px_50px_-20px_rgba(117,192,67,0.45)] ${className}`}>
			<motion.div
				aria-hidden
				className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
				style={{ background: spotlight }}
			/>
			<span
				aria-hidden
				className='absolute bottom-0 left-0 h-0.5 w-0 bg-brand transition-[width] duration-500 group-hover:w-full'
			/>
			<div className='relative h-full'>{children}</div>
		</motion.div>
	);
}
