'use client';

import { AnimatePresence, motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/** Pływający przycisk „Zapytaj o wycenę”: pojawia się po przewinięciu, znika przy formularzu. */
export default function FloatingCta() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const [formVisible, setFormVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 500);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		setFormVisible(false);
		const targets = document.querySelectorAll('#kontakt, #formularz');
		if (!targets.length) return;
		const visible = new Set<Element>();
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) {
				if (e.isIntersecting) visible.add(e.target);
				else visible.delete(e.target);
			}
			setFormVisible(visible.size > 0);
		});
		targets.forEach((t) => io.observe(t));
		return () => io.disconnect();
	}, [pathname]);

	const show = scrolled && !formVisible;

	return (
		<AnimatePresence>
			{show && (
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 40 }}
					transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
					className='fixed inset-x-4 bottom-4 z-30 md:inset-x-auto md:right-6 md:bottom-6'>
					<Link
						href='/kontakt'
						className='btn-shine flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-[0_10px_40px_-8px_rgba(117,192,67,0.75)] transition-transform hover:-translate-y-0.5'>
						Zapytaj o wycenę <ChevronRight size={14} strokeWidth={3} />
					</Link>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
