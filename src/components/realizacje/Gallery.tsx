'use client';

import { projects } from '@/utils/consts';
import {
	AnimatePresence,
	motion,
	useReducedMotion,
	type PanInfo,
} from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';

const ALL = 'Wszystkie';
const ease = [0.22, 1, 0.36, 1] as const;

const getItemClasses = (index: number, total: number) => {
	const remainder = total % 4;
	const isLastGroup = index >= total - remainder;

	if (isLastGroup) {
		if (remainder === 1)
			return 'col-span-1 md:col-span-2 lg:col-span-4 row-span-1';
		if (remainder === 2)
			return 'col-span-1 md:col-span-1 lg:col-span-2 row-span-1';
		if (remainder === 3) {
			if (index === total - 3)
				return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1';
			return 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1';
		}
	}

	const pos = index % 4;
	if (pos === 0)
		return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2';
	if (pos === 1 || pos === 2)
		return 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1';
	return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1';
};

export default function Gallery() {
	const reduce = useReducedMotion();
	const [active, setActive] = useState(ALL);
	const [selected, setSelected] = useState<{
		index: number;
		dir: number;
	} | null>(null);

	const categories = useMemo(
		() => [ALL, ...Array.from(new Set(projects.map((p) => p.category)))],
		[],
	);
	const filtered = useMemo(
		() =>
			active === ALL ? projects : projects.filter((p) => p.category === active),
		[active],
	);

	const close = useCallback(() => setSelected(null), []);
	const go = useCallback(
		(dir: number) =>
			setSelected((s) =>
				s
					? {
							index: (s.index + dir + filtered.length) % filtered.length,
							dir,
						}
					: s,
			),
		[filtered.length],
	);

	useEffect(() => {
		if (!selected) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') close();
			if (e.key === 'ArrowRight') go(1);
			if (e.key === 'ArrowLeft') go(-1);
		};
		window.addEventListener('keydown', onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			window.removeEventListener('keydown', onKey);
			document.body.style.overflow = prev;
		};
	}, [selected, close, go]);

	const onDragEnd = (_: unknown, info: PanInfo) => {
		if (info.offset.x < -80) go(1);
		else if (info.offset.x > 80) go(-1);
	};

	const current = selected ? filtered[selected.index] : null;

	return (
		<section className='py-20 bg-black min-h-screen'>
			<div className='container mx-auto px-6'>
				{/* FILTRY */}
				<div
					role='tablist'
					aria-label='Filtr realizacji'
					className='mb-10 flex flex-wrap gap-2'>
					{categories.map((c) => {
						const isActive = c === active;
						return (
							<button
								key={c}
								role='tab'
								aria-selected={isActive}
								type='button'
								onClick={() => setActive(c)}
								className={`relative cursor-pointer rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
									isActive
										? 'border-transparent text-black'
										: 'border-white/15 text-white/70 hover:border-brand/60 hover:text-white'
								}`}>
								{isActive && (
									<motion.span
										layoutId='gallery-filter'
										className='absolute inset-0 rounded-full bg-brand'
										transition={{ type: 'spring', stiffness: 400, damping: 32 }}
									/>
								)}
								<span className='relative'>{c}</span>
							</button>
						);
					})}
				</div>

				{/* SIATKA */}
				<motion.div
					layout
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] lg:auto-rows-[300px] gap-4 md:gap-6 grid-flow-dense'>
					<AnimatePresence mode='popLayout'>
						{filtered.map((project, index) => (
							<motion.button
								key={project.id}
								type='button'
								layout={!reduce}
								initial={reduce ? false : { opacity: 0, scale: 0.92 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={reduce ? undefined : { opacity: 0, scale: 0.92 }}
								transition={{ duration: 0.5, ease }}
								onClick={() => setSelected({ index, dir: 0 })}
								aria-label={`Otwórz: ${project.title}`}
								className={`group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-900 text-left ring-1 ring-white/10 transition-shadow duration-500 hover:ring-brand/60 hover:shadow-[0_0_40px_-12px_rgba(117,192,67,0.5)] focus-visible:ring-2 focus-visible:ring-brand ${getItemClasses(index, filtered.length)}`}>
								<div className='absolute inset-0 transition-all duration-700 group-hover:scale-110 md:grayscale group-hover:grayscale-0'>
									<Image
										src={project.src}
										alt=''
										fill
										sizes='(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw'
										className='object-cover'
									/>
								</div>
								<div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100' />

								<span className='absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white/80 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-75'>
									<Maximize2 size={18} />
								</span>

								<div className='absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 focus-visible:opacity-100'>
									<p className='mb-1 text-xs font-bold uppercase tracking-widest text-brand'>
										{project.category}
									</p>
									<h3 className='text-xl font-bold uppercase italic text-white'>
										{project.title}
									</h3>
								</div>
							</motion.button>
						))}
					</AnimatePresence>
				</motion.div>
			</div>

			{/* LIGHTBOX */}
			<AnimatePresence>
				{current && selected && (
					<motion.div
						role='dialog'
						aria-modal='true'
						aria-label={current.title}
						className='fixed inset-0 z-100 flex flex-col items-center justify-center bg-black/95 p-4 pt-16 backdrop-blur-xl md:p-10'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.25 }}
						onClick={close}>
						<button
							type='button'
							aria-label='Zamknij'
							onClick={close}
							className='absolute right-4 top-4 z-110 cursor-pointer rounded-full bg-black/50 p-2 text-white/60 transition-colors hover:text-white md:right-6 md:top-6'>
							<X size={32} />
						</button>

						<button
							type='button'
							aria-label='Poprzednie zdjęcie'
							onClick={(e) => {
								e.stopPropagation();
								go(-1);
							}}
							className='absolute left-4 z-110 hidden cursor-pointer text-white/30 transition-colors hover:text-brand md:block lg:left-10'>
							<ChevronLeft size={60} strokeWidth={1} />
						</button>
						<button
							type='button'
							aria-label='Następne zdjęcie'
							onClick={(e) => {
								e.stopPropagation();
								go(1);
							}}
							className='absolute right-4 z-110 hidden cursor-pointer text-white/30 transition-colors hover:text-brand md:block lg:right-10'>
							<ChevronRight size={60} strokeWidth={1} />
						</button>

						<div
							className='relative flex min-h-0 w-full max-w-5xl flex-1 flex-col items-center'
							onClick={(e) => e.stopPropagation()}>
							<AnimatePresence mode='wait' initial={false} custom={selected.dir}>
								<motion.div
									key={current.id}
									custom={selected.dir}
									variants={{
										enter: (d: number) => ({
											x: reduce ? 0 : d === 0 ? 0 : d > 0 ? 120 : -120,
											opacity: 0,
											scale: d === 0 ? 0.94 : 1,
										}),
										center: { x: 0, opacity: 1, scale: 1 },
										exit: (d: number) => ({
											x: reduce ? 0 : d >= 0 ? -120 : 120,
											opacity: 0,
										}),
									}}
									initial='enter'
									animate='center'
									exit='exit'
									transition={{ duration: 0.35, ease }}
									drag='x'
									dragConstraints={{ left: 0, right: 0 }}
									dragElastic={0.4}
									onDragEnd={onDragEnd}
									className='flex w-full flex-col items-center'>
									<div className='relative h-[50vh] w-full md:h-[68vh]'>
										<Image
											src={current.src}
											alt={`${current.title} — ${current.category}`}
											fill
											sizes='(min-width: 1024px) 1024px, 100vw'
											draggable={false}
											className='rounded-lg object-contain'
										/>
									</div>
									<div className='mt-6 px-4 text-center md:mt-8'>
										<p className='mb-1 text-xs font-bold uppercase tracking-widest text-brand md:mb-2 md:text-sm'>
											{current.category}
										</p>
										<h2 className='line-clamp-2 text-xl font-black uppercase italic text-white md:text-3xl lg:text-4xl'>
											{current.title}
										</h2>
									</div>
								</motion.div>
							</AnimatePresence>

							<div className='mt-4 flex items-center justify-center gap-8'>
								<button
									type='button'
									aria-label='Poprzednie zdjęcie'
									onClick={() => go(-1)}
									className='cursor-pointer rounded-full bg-white/10 p-3 text-white transition-colors hover:text-brand md:hidden'>
									<ChevronLeft size={24} />
								</button>
								<span className='font-mono text-sm font-semibold text-white/50'>
									{selected.index + 1} / {filtered.length}
								</span>
								<button
									type='button'
									aria-label='Następne zdjęcie'
									onClick={() => go(1)}
									className='cursor-pointer rounded-full bg-white/10 p-3 text-white transition-colors hover:text-brand md:hidden'>
									<ChevronRight size={24} />
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
