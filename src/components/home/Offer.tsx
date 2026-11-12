import Reveal from '@/components/motion/Reveal';
import BentoGrid from '@/components/ui/BentoGrid';
import { BENTO_TILES } from '@/content/featureFlags';
import { home } from '@/content/site';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/Button';
import OfferCarousel from './OfferCarousel';

export default function OfferPreview() {
	return (
		<section
			id='uslugi'
			className='relative py-24 overflow-hidden scroll-mt-20'>
			<div className='container mx-auto px-6 mb-12'>
				<Reveal>
					<div className='flex flex-col md:flex-row md:items-end justify-between gap-6'>
						<div className='max-w-2xl'>
							<p className='text-brand uppercase font-bold tracking-widest mb-3 text-sm'>
								Nasza oferta
							</p>
							<h2 className='text-4xl md:text-5xl font-black mb-4'>
								{home.services.title}
							</h2>
							<p className='text-gray-400 text-lg'>{home.services.text}</p>
						</div>

						<Link href='/oferta' className='hidden md:block shrink-0'>
							<Button variant='outline' className='px-6 py-3'>
								ZOBACZ PEŁNĄ OFERTĘ <ChevronRight size={16} />
							</Button>
						</Link>
					</div>
				</Reveal>
			</div>

			{BENTO_TILES ? (
				<div className='container mx-auto px-6'>
					<BentoGrid />
				</div>
			) : (
				<OfferCarousel />
			)}

			<div className='container mx-auto px-6 mt-10 md:hidden'>
				<Link href='/oferta' className='block'>
					<Button variant='outline' className='w-full'>
						ZOBACZ PEŁNĄ OFERTĘ <ChevronRight size={16} />
					</Button>
				</Link>
			</div>
		</section>
	);
}
