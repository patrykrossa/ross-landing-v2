'use client';

import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useReducedMotion,
} from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { MouseEvent, ReactNode } from 'react';

interface BentoTileProps {
	href: string;
	title: string;
	description: string;
	buttonLabel: string;
	image: string;
	index: number;
	icon?: ReactNode;
	large?: boolean;
}

export default function BentoTile({
	href,
	title,
	description,
	buttonLabel,
	image,
	index,
	icon,
	large = false,
}: BentoTileProps) {
	const reduce = useReducedMotion();
	const mx = useMotionValue(-300);
	const my = useMotionValue(-300);
	const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(117,192,67,0.22), transparent 60%)`;

	const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
		if (reduce) return;
		const r = e.currentTarget.getBoundingClientRect();
		mx.set(e.clientX - r.left);
		my.set(e.clientY - r.top);
	};

	return (
		<Link
			href={href}
			onMouseMove={onMove}
			draggable={false}
			className='group relative block h-full w-full overflow-hidden rounded-2xl bg-zinc-900 ring-1 ring-white/10 transition-shadow duration-500 hover:ring-brand/60 hover:shadow-[0_0_40px_-10px_rgba(117,192,67,0.45)] focus-visible:ring-2 focus-visible:ring-brand'>
			<motion.div
				className='absolute inset-0 brightness-[0.65] saturate-[0.85] transition-[filter] duration-700 group-hover:brightness-90 group-hover:saturate-100'
				whileHover={reduce ? undefined : { scale: 1.08 }}
				transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
				<Image
					src={image}
					alt=''
					fill
					sizes={
						large
							? '(min-width: 1024px) 50vw, 100vw'
							: '(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw'
					}
					className='object-cover'
				/>
			</motion.div>
			<div className='absolute inset-0 bg-linear-to-t from-black via-black/55 to-black/10' />
			<motion.div
				aria-hidden
				className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
				style={{ background: spotlight }}
			/>

			<div className='absolute inset-x-0 top-0 flex items-start justify-between p-5'>
				{icon ? (
					<span className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/40 text-brand backdrop-blur-md transition-colors duration-300 group-hover:border-brand/60 group-hover:bg-brand group-hover:text-black'>
						{icon}
					</span>
				) : (
					<span />
				)}
				<span
					className={`text-outline font-black leading-none select-none ${large ? 'text-7xl' : 'text-5xl'}`}>
					{String(index + 1).padStart(2, '0')}
				</span>
			</div>

			<div className='absolute inset-x-0 bottom-0 flex flex-col p-5 md:p-6'>
				<h3
					className={`font-black uppercase leading-tight text-white transition-colors duration-300 group-hover:text-brand ${large ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
					{title}
				</h3>
				<p
					className={`bento-desc mt-2 text-sm leading-relaxed text-gray-300 ${large ? 'line-clamp-4 max-w-md' : 'line-clamp-3'}`}>
					{description}
				</p>
				<span className='mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand'>
					{buttonLabel}
					<ArrowUpRight
						size={16}
						strokeWidth={3}
						className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
					/>
				</span>
			</div>
		</Link>
	);
}
