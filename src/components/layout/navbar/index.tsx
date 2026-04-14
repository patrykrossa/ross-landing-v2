'use client';

import Button from '@/components/ui/Button';
import { ChevronRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const getLinkClassName = (href: string) => {
		const baseClasses = 'transition pb-1 tracking-widest uppercase';

		const isActive = pathname === href;

		return isActive
			? `${baseClasses} text-brand border-b border-brand`
			: `${baseClasses} text-white/70 hover:text-white`;
	};

	return (
		<>
			<header className='sticky top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 py-4'>
				<div className='container mx-auto px-6 flex items-center justify-between'>
					<Link href='/' className='flex items-center gap-1'>
						<span className='text-2xl font-black italic'>
							ROSS<span className='text-brand'>R</span>
						</span>
						<span className='text-[10px] tracking-[0.3em] uppercase mt-2'>
							events
						</span>
					</Link>

					{/* DESKTOP MENU */}
					<nav className='hidden lg:flex gap-8 text-xs font-bold tracking-widest text-white/70'>
						<Link href='/' className={getLinkClassName('/')}>
							STRONA GŁÓWNA
						</Link>
						<Link href='/oferta' className={getLinkClassName('/oferta')}>
							OFERTA
						</Link>
						<Link
							href='/realizacje'
							className={getLinkClassName('/realizacje')}>
							REALIZACJE
						</Link>
						<a href='#kontakt' className={getLinkClassName('#kontakt')}>
							KONTAKT
						</a>
					</nav>

					<a href='#kontakt' className='hidden lg:block'>
						<Button variant='primary' className='px-5 py-2.5 text-xs'>
							ZAMÓW WYCENĘ <ChevronRight size={14} strokeWidth={3} />
						</Button>
					</a>

					<button className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
			</header>

			{/*  MOBILE MENU */}
			<div
				className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out lg:hidden flex flex-col items-center justify-center gap-8 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}>
				<nav className='flex flex-col items-center gap-8'>
					<Link
						href='/'
						onClick={() => setIsOpen(false)}
						className='text-2xl font-bold tracking-widest text-white hover:text-brand transition-colors'>
						Strona główna
					</Link>
					<Link
						href='/oferta'
						onClick={() => setIsOpen(false)}
						className='text-2xl font-bold tracking-widest text-white hover:text-brand transition-colors'>
						Oferta
					</Link>
					<Link
						href='/realizacje'
						onClick={() => setIsOpen(false)}
						className='text-2xl font-bold tracking-widest text-white hover:text-brand transition-colors'>
						Realizacje
					</Link>
					<a
						href='#kontakt'
						onClick={() => setIsOpen(false)}
						className='text-2xl font-bold tracking-widest text-white hover:text-brand transition-colors'>
						Kontakt
					</a>
				</nav>

				<a href='#kontakt' onClick={() => setIsOpen(false)} className='mt-4'>
					<Button variant='primary' className='px-10 py-4 text-sm'>
						ZAMÓW WYCENĘ <ChevronRight size={14} strokeWidth={3} />
					</Button>
				</a>
			</div>
		</>
	);
}
