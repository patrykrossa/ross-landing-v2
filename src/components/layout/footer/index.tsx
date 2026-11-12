import Button from '@/components/ui/Button';
import { services } from '@/content/services';
import { contact, footerDescription } from '@/content/site';
import { Check, ChevronRight, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaYoutube,
} from 'react-icons/fa6';
import Logo from '@/components/ui/Logo';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-black text-white pt-20 pb-6 border-t border-white/10'>
			<div className='container mx-auto px-6'>
				<div className='flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-12 border-b border-white/10'>
					<div>
						<p className='text-2xl font-black mb-1'>Planujesz wydarzenie?</p>
						<p className='text-gray-400'>
							Skontaktuj się z nami i zapytaj o indywidualną wycenę.
						</p>
					</div>
					<Link href='/kontakt' className='shrink-0'>
						<Button variant='primary'>
							Zapytaj o wycenę <ChevronRight size={18} />
						</Button>
					</Link>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
					<div>
						<Logo className='mb-6' />
						<p className='text-gray-400 text-sm mb-6 max-w-xs leading-relaxed'>
							{footerDescription}
						</p>
						<div className='flex gap-4'>
							<a
								href='#'
								aria-label='Facebook'
								className='bg-zinc-800 p-2 rounded-full hover:bg-brand hover:text-black transition-colors'>
								<FaFacebook size={20} />
							</a>
							<a
								href='#'
								aria-label='Instagram'
								className='bg-zinc-800 p-2 rounded-full hover:bg-brand hover:text-black transition-colors'>
								<FaInstagram size={20} />
							</a>
							<a
								href='#'
								aria-label='YouTube'
								className='bg-zinc-800 p-2 rounded-full hover:bg-brand hover:text-black transition-colors'>
								<FaYoutube size={20} />
							</a>
							<a
								href='#'
								aria-label='LinkedIn'
								className='bg-zinc-800 p-2 rounded-full hover:bg-brand hover:text-black transition-colors'>
								<FaLinkedin size={20} />
							</a>
						</div>
					</div>

					<div>
						<h4 className='text-sm font-bold uppercase tracking-wider mb-6 text-gray-300'>
							Kontakt
						</h4>
						<ul className='space-y-4'>
							<li className='flex items-start gap-3'>
								<Phone className='text-brand mt-1' size={18} />
								<a
									href={contact.phoneHref}
									className='text-gray-400 hover:text-brand transition-colors'>
									{contact.phone}
								</a>
							</li>
							<li className='flex items-start gap-3'>
								<Mail className='text-brand mt-1' size={18} />
								<a
									href={contact.emailHref}
									className='text-gray-400 hover:text-brand transition-colors'>
									{contact.email}
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='text-sm font-bold uppercase tracking-wider mb-6 text-gray-300'>
							Usługi
						</h4>
						<ul className='space-y-3'>
							{services.map((s) => (
								<li key={s.slug} className='flex items-center gap-2'>
									<Check className='text-brand shrink-0' size={16} />
									<Link
										href={`/${s.slug}`}
										className='text-sm text-gray-400 hover:text-white transition-colors'>
										{s.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className='text-sm font-bold uppercase tracking-wider mb-6 text-gray-300'>
							Odkryj nas
						</h4>
						<ul className='space-y-3'>
							{[
								{ name: 'Strona główna', href: '/' },
								{ name: 'Oferta', href: '/oferta' },
								{ name: 'Realizacje', href: '/realizacje' },
								{ name: 'O nas', href: '/o-nas' },
								{ name: 'Kontakt', href: '/kontakt' },
							].map((item) => (
								<li key={item.name} className='flex items-center gap-2'>
									<Check className='text-brand shrink-0' size={16} />
									<Link
										href={item.href}
										className='text-sm text-gray-400 hover:text-white transition-colors'>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className='flex flex-col md:flex-row justify-center items-center pt-6 border-t border-white/10 text-xs text-gray-500'>
					<p>© {currentYear} ROSS events. Wszelkie prawa zastrzeżone.</p>
				</div>
			</div>
		</footer>
	);
}
