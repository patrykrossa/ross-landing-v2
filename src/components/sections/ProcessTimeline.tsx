'use client';

import { motion, useReducedMotion } from 'motion/react';

interface Step {
	title: string;
	text: string;
}

export default function ProcessTimeline({
	title,
	steps,
}: {
	title: string;
	steps: Step[];
}) {
	const reduce = useReducedMotion();
	const ease = [0.22, 1, 0.36, 1] as const;

	return (
		<section className='relative overflow-hidden bg-zinc-950 py-20 lg:py-28'>
			<div aria-hidden className='bg-grid pointer-events-none absolute inset-0' />
			<div
				aria-hidden
				className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/40 to-transparent'
			/>

			<div className='container relative mx-auto px-6'>
				<motion.h2
					className='mb-16 max-w-3xl text-3xl font-black md:text-5xl'
					initial={reduce ? false : { opacity: 0, y: 28 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, ease }}>
					{title}
				</motion.h2>

				<div className='relative grid gap-12 lg:grid-cols-4 lg:gap-8'>
					{/* linia pozioma (desktop), rysuje się przy przewijaniu */}
					<div
						aria-hidden
						className='absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-white/10 lg:block'>
						<motion.div
							className='h-full origin-left bg-brand'
							initial={reduce ? false : { scaleX: 0 }}
							whileInView={{ scaleX: 1 }}
							viewport={{ once: true, amount: 0.6 }}
							transition={{ duration: 1.8, ease: 'easeOut' }}
						/>
					</div>

					{steps.map((step, i) => (
						<motion.div
							key={step.title}
							className='relative pl-20 lg:pl-0 lg:text-center'
							initial={reduce ? false : { opacity: 0, y: 28 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.7, delay: i * 0.25, ease }}>
							{/* linia pionowa (mobile) */}
							{i < steps.length - 1 && (
								<span
									aria-hidden
									className='absolute left-7 top-14 -bottom-12 w-px bg-brand/30 lg:hidden'
								/>
							)}
							<span className='absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full border border-brand bg-black text-xl font-black text-brand shadow-[0_0_30px_-6px_rgba(117,192,67,0.6)] lg:static lg:mx-auto lg:mb-6'>
								{i + 1}
							</span>
							<h3 className='mb-2 text-xl font-bold'>{step.title}</h3>
							<p className='leading-relaxed text-gray-400'>{step.text}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
