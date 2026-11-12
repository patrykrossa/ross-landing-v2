'use client';

import { services } from '@/content/services';
import useEmblaCarousel from 'embla-carousel-react';
import ServiceTile from '../ui/ServiceTile';

/** Poprzednia wersja listy usług (karuzela). Używana, gdy BENTO_TILES = false. */
export default function OfferCarousel() {
	const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, []);

	return (
		<div className='pl-6 md:pl-[max(1.5rem,calc((100vw-1536px)/2+1.5rem))]'>
				<div className='overflow-hidden' ref={emblaRef}>
					<div className='flex touch-pan-y'>
						{services.map((service, index) => (
							<div
								key={index}
								className='cursor-grab flex-[0_0_85%] md:flex-[0_0_35%] lg:flex-[0_0_25%] min-w-0 pr-6'>
								<ServiceTile
									title={service.name}
									description={service.tileText}
									href={`/${service.slug}`}
									buttonLabel={service.tileButton}
									imageSrc={service.heroImage}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
	);
}
