'use client';

import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import { services } from '@/content/services';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const [offerOpen, setOfferOpen] = useState(false);

	const isActive = (href: string) => pathname === href;
	const offerActive =
		pathname === '/oferta' || services.some((s) => pathname === `/${s.slug}`);

	const getLinkClassName = (active: boolean) => {
		const baseClasses = 'transition pb-1 tracking-widest uppercase';
		return active
			? `${baseClasses} text-brand border-b border-brand`
			: `${baseClasses} text-white/70 hover:text-white`;
	};

	const close = () => {
		setIsOpen(false);
		setOfferOpen(false);
	};

	return (
		<>
			<header className='sticky top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 py-4'>
				<div className='container mx-auto px-6 flex items-center justify-between'>
					<Logo />

					{/* DESKTOP MENU */}
					<nav className='hidden lg:flex items-center gap-8 text-xs font-bold tracking-widest text-white/70'>
						<Link href='/' className={getLinkClassName(isActive('/'))}>
							STRONA GŁÓWNA
						</Link>

						<div className='relative group'>
							<Link
								href='/oferta'
								className={`${getLinkClassName(offerActive)} inline-flex items-center gap-1`}>
								OFERTA <ChevronDown size={14} />
							</Link>
							<div className='invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all absolute left-0 top-full pt-4'>
								<ul className='w-72 rounded-lg border border-white/10 bg-zinc-950/95 backdrop-blur-md p-2 shadow-2xl'>
									{services.map((s) => (
										<li key={s.slug}>
											<Link
												href={`/${s.slug}`}
												className={`block rounded px-4 py-2.5 normal-case tracking-normal text-sm font-medium ${
													isActive(`/${s.slug}`)
														? 'text-brand'
														: 'text-white/80 hover:bg-white/5 hover:text-white'
												}`}>
												{s.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						<Link
							href='/realizacje'
							className={getLinkClassName(isActive('/realizacje'))}>
							REALIZACJE
						</Link>
						<Link href='/o-nas' className={getLinkClassName(isActive('/o-nas'))}>
							O NAS
						</Link>
						<Link
							href='/kontakt'
							className={getLinkClassName(isActive('/kontakt'))}>
							KONTAKT
						</Link>
					</nav>

					<Link href='/kontakt' className='hidden lg:block'>
						<Button variant='primary' className='px-5 py-2.5 text-xs'>
							ZAPYTAJ O WYCENĘ <ChevronRight size={14} strokeWidth={3} />
						</Button>
					</Link>

					<button
						className='lg:hidden'
						aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
						onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
			</header>

			{/* MOBILE MENU */}
			<div
				className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out lg:hidden flex flex-col items-center justify-start overflow-y-auto pt-28 pb-10 gap-6 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}>
				<nav className='flex flex-col items-center gap-6'>
					<Link
						href='/'
						onClick={close}
						className='text-2xl font-bold tracking-widest text-white hover:text-brand transition-colors'>
						Strona główna
					</Link>

					<div className='flex flex-col items-center gap-4'>
						<button
							type='button'
							onClick={() => setOfferOpen(!offerOpen)}
							className='flex items-center gap-2 text-2xl font-bold tracking-widest text-white hover:text-brand transition-colors'>
							Oferta{' '}
							<ChevronDown
								size={22}
								className={`transition-transform ${offerOpen ? 'rotate-180' : ''}`}
							/>
						</button>
						{offerOpen && (
							<ul className='flex flex-col items-center gap-3'>
								<li>
									<Link
										href='/oferta'
										onClick={close}
										className='text-base text-brand'>
										Cała oferta
									</Link>
								</li>
								{services.map((s) => (
									<li key={s.slug}>
										<Link
											href={`/${s.slug}`}
											onClick={close}
											className='text-base text-white/80 hover:text-brand'>
											{s.name}
										</Link>
									</li>
								))}
							</ul>
						)}
					</div>

					<Link
						href='/realizacje'
						onClick={close}
						className='text-2xl font-bold tracking-widest text-white hover:text-brand transition-colors'>
						Realizacje
					</Link>
					<Link
						href='/o-nas'
						onClick={close}
						className='text-2xl font-bold tracking-widest text-white hover:text-brand transition-colors'>
						O nas
					</Link>
					<Link
						href='/kontakt'
						onClick={close}
						className='text-2xl font-bold tracking-widest text-white hover:text-brand transition-colors'>
						Kontakt
					</Link>
				</nav>

				<Link href='/kontakt' onClick={close} className='mt-4'>
					<Button variant='primary' className='px-10 py-4 text-sm'>
						ZAPYTAJ O WYCENĘ <ChevronRight size={14} strokeWidth={3} />
					</Button>
				</Link>
			</div>
		</>
	);
}
