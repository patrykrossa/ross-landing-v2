'use client';

import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import { services } from '@/content/services';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { serviceIcons } from '@/components/ui/icons';

export default function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const [offerOpen, setOfferOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

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
			<header
				className={`sticky top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${
					scrolled
						? 'bg-black/90 border-white/10 py-2 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)]'
						: 'bg-black/80 border-white/5 py-4'
				}`}>
				<div className='container mx-auto px-6 flex items-center justify-between'>
					<Logo imgClassName={scrolled ? 'h-9' : 'h-11'} />

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
							<div className='invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100'>
								<div className='w-170 rounded-2xl border border-white/10 bg-zinc-950/95 p-3 shadow-2xl backdrop-blur-md'>
									<ul className='grid grid-cols-2 gap-1'>
										{services.map((s) => {
											const Icon = serviceIcons[s.slug];
											return (
												<li key={s.slug}>
													<Link
														href={`/${s.slug}`}
														className={`group/item flex items-start gap-3 rounded-xl p-3 normal-case tracking-normal transition-colors ${
															isActive(`/${s.slug}`)
																? 'bg-white/5'
																: 'hover:bg-white/5'
														}`}>
														{Icon && (
															<span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/60 text-brand ring-1 ring-white/10 transition-colors group-hover/item:bg-brand group-hover/item:text-black'>
																<Icon size={20} />
															</span>
														)}
														<span className='min-w-0'>
															<span
																className={`block text-sm font-bold ${isActive(`/${s.slug}`) ? 'text-brand' : 'text-white'}`}>
																{s.name}
															</span>
															<span className='mt-0.5 line-clamp-2 block text-xs font-normal leading-snug text-gray-500'>
																{s.tileText}
															</span>
														</span>
													</Link>
												</li>
											);
										})}
									</ul>
									<Link
										href='/oferta'
										className='mt-2 flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-xs font-bold uppercase tracking-widest text-brand transition-colors hover:bg-white/5'>
										Zobacz całą ofertę <ChevronRight size={14} strokeWidth={3} />
									</Link>
								</div>
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
						<Button variant='primary' size='sm'>
							ZAPYTAJ O WYCENĘ <ChevronRight size={12} strokeWidth={3} />
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
