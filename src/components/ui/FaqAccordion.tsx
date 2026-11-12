'use client';

import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';
import type { FaqItem } from '@/content/services';

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
	const [open, setOpen] = useState<number | null>(null);
	const uid = useId();

	return (
		<div className='divide-y divide-white/10 border-y border-white/10'>
			{items.map((item, i) => {
				const isOpen = open === i;
				return (
					<div
						key={item.q}
						className={`transition-colors duration-300 ${isOpen ? 'bg-white/2' : ''}`}>
						<h3>
							<button
								type='button'
								aria-expanded={isOpen}
								aria-controls={`${uid}-${i}`}
								onClick={() => setOpen(isOpen ? null : i)}
								className='group flex w-full cursor-pointer items-center justify-between gap-6 px-2 py-5 text-left text-lg font-bold'>
								<span
									className={`transition-colors duration-300 group-hover:text-brand ${isOpen ? 'text-brand' : ''}`}>
									{item.q}
								</span>
								<motion.span
									animate={{ rotate: isOpen ? 180 : 0 }}
									transition={{ duration: 0.3 }}
									className='shrink-0 text-brand'>
									<ChevronDown size={22} />
								</motion.span>
							</button>
						</h3>
						<AnimatePresence initial={false}>
							{isOpen && (
								<motion.div
									id={`${uid}-${i}`}
									role='region'
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
									className='overflow-hidden'>
									<p className='px-2 pb-6 leading-relaxed text-gray-400'>
										{item.a}
									</p>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				);
			})}
		</div>
	);
}
