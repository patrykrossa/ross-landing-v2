'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

interface PageHeroProps {
	eyebrow?: string;
	h1: string;
	tagline?: string;
	text?: string;
	image: string;
	imageAlt: string;
	cta?: { label: string; href: string };
	chips?: string[];
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function PageHero({
	eyebrow,
	h1,
	tagline,
	text,
	image,
	imageAlt,
	cta,
	chips,
}: PageHeroProps) {
	const reduce = useReducedMotion();
	const { scrollY } = useScroll();
	const bgY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 140]);

	const item = (i: number) => ({
		initial: reduce ? false : { opacity: 0, y: 26 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease },
	});

	return (
		<section className='relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10'>
			<div className='absolute inset-0 z-0'>
				<div className='absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/40 z-10' />
				<motion.div className='absolute -inset-y-16 inset-x-0' style={{ y: bgY }}>
					<Image
						src={image}
						alt={imageAlt}
						fill
						priority
						sizes='100vw'
						className='object-cover'
					/>
				</motion.div>
				<div
					aria-hidden
					className='animate-float absolute -left-24 top-1/3 z-10 h-80 w-80 rounded-full bg-brand/20 blur-[110px]'
				/>
			</div>

			<div className='container mx-auto px-6 relative z-20'>
				<div className='max-w-3xl'>
					{eyebrow && (
						<motion.p
							{...item(0)}
							className='text-brand font-bold tracking-[0.2em] uppercase mb-4 text-sm'>
							{eyebrow}
						</motion.p>
					)}
					<motion.h1
						{...item(1)}
						className='text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight'>
						{h1}
					</motion.h1>
					{tagline && (
						<motion.p
							{...item(2)}
							className='text-brand text-xl md:text-2xl font-bold mb-5'>
							{tagline}
						</motion.p>
					)}
					{text && (
						<motion.p
							{...item(3)}
							className='text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl'>
							{text}
						</motion.p>
					)}
					{chips && chips.length > 0 && (
						<motion.ul
							{...item(4)}
							aria-label='Zakres usługi'
							className='mt-8 flex flex-wrap gap-2'>
							{chips.map((c) => (
								<li
									key={c}
									className='rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-sm'>
									{c}
								</li>
							))}
						</motion.ul>
					)}
					{cta && (
						<motion.div {...item(5)} className='mt-10'>
							<Link href={cta.href} className='inline-block'>
								<Button variant='primary'>
									{cta.label} <ChevronRight size={18} />
								</Button>
							</Link>
						</motion.div>
					)}
				</div>
			</div>
		</section>
	);
}
