'use client';

import { services } from '@/utils/consts';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/Button';
import ServiceTile from '../ui/ServiceTile';

export default function OfferPreview() {
	const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, []);

	return (
		<section className='py-24 overflow-hidden relative'>
			<div className='container mx-auto px-6 mb-12'>
				<div className='flex flex-col md:flex-row md:items-end justify-between gap-6'>
					<div>
						<p className='text-brand uppercase font-bold tracking-widest mb-3 text-sm'>
							Nasza Oferta
						</p>
						<h2 className='text-4xl md:text-5xl font-black'>
							Wszystko do <span className='text-brand italic'>UDANEGO</span>{' '}
							wydarzenia
						</h2>
					</div>

					<Link href='/oferta' className='hidden md:block shrink-0'>
						<Button variant='outline' className='px-6 py-3'>
							ZOBACZ PEŁNĄ OFERTĘ <ChevronRight size={16} />
						</Button>
					</Link>
				</div>
			</div>

			<div className='pl-6 md:pl-[max(1.5rem,calc((100vw-1536px)/2+1.5rem))]'>
				<div className='overflow-hidden' ref={emblaRef}>
					<div className='flex touch-pan-y'>
						{services.map((service, index) => (
							<div
								key={index}
								className='cursor-grab flex-[0_0_85%] md:flex-[0_0_35%] lg:flex-[0_0_25%] min-w-0 pr-6'>
								<ServiceTile
									title={service.title}
									description={service.description}
									href={service.href}
									imageSrc={
										service?.imageFilename
											? `/images/${service.imageFilename}`
											: undefined
									}
								/>
							</div>
						))}
					</div>
				</div>
			</div>

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
