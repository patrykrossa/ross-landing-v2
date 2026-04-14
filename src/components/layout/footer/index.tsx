import Link from 'next/link';
import { Phone, Mail, MapPin, Check } from 'lucide-react';
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaLinkedin,
} from 'react-icons/fa6';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-black text-white pt-20 pb-6 border-t border-white/10'>
			<div className='container mx-auto px-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
					<div>
						<Link href='/' className='flex items-center gap-2 mb-6'>
							<span className='text-white text-3xl font-black tracking-tighter'>
								ROSS<span className='text-brand'>R</span>
							</span>
							<span className='text-white text-sm font-light tracking-widest mt-2 -ml-1'>
								events
							</span>
						</Link>
						<p className='text-gray-400 text-sm mb-6 max-w-xs'>
							Organizacja eventów na najwyższym poziomie w całej Polsce.
						</p>
						<div className='flex gap-4'>
							<a
								href='#'
								className='bg-zinc-800 p-2 rounded-full hover:bg-brand hover:text-black transition-colors'>
								<FaFacebook size={20} />
							</a>
							<a
								href='#'
								className='bg-zinc-800 p-2 rounded-full hover:bg-brand hover:text-black transition-colors'>
								<FaInstagram size={20} />
							</a>
							<a
								href='#'
								className='bg-zinc-800 p-2 rounded-full hover:bg-brand hover:text-black transition-colors'>
								<FaYoutube size={20} />
							</a>
							<a
								href='#'
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
								<span className='text-gray-400 hover:text-brand transition-colors cursor-pointer'>
									+48 508 176 775
								</span>
							</li>
							<li className='flex items-start gap-3'>
								<Mail className='text-brand mt-1' size={18} />
								<span className='text-gray-400 hover:text-brand transition-colors cursor-pointer'>
									contact@ross-events.pl
								</span>
							</li>
						</ul>
					</div>

					<div className='hidden md:block'>
						<h4 className='text-sm font-bold uppercase tracking-wider mb-6 text-gray-300'>
							Usługi
						</h4>
						<ul className='space-y-3'>
							{[
								'Organizacja imprez',
								'Koordynacja eventów',
								'Multimedia',
								'Technika sceniczna',
								'Oświetlenie wydarzeń',
							].map((item) => (
								<li key={item} className='flex items-center gap-2'>
									<Check className='text-brand' size={16} />
									<Link
										href='/oferta'
										className='text-sm text-gray-400 hover:text-white transition-colors'>
										{item}
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
								{ name: 'Nasza oferta', href: '/oferta' },
								{ name: 'Realizacje', href: '/realizacje' },
								{ name: 'Rekomendacje', href: '#' },
								{ name: 'Kontakt', href: '#kontakt' },
							].map((item) => (
								<li key={item.name} className='flex items-center gap-2'>
									<Check className='text-brand' size={16} />
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

				<div className='flex flex-col  md:flex-row justify-center items-center pt-6 border-t border-white/10 text-xs text-gray-500'>
					<p>© {currentYear} ROSS events. Wszelkie prawa zastrzeżone.</p>
				</div>
			</div>
		</footer>
	);
}
