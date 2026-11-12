import Contact from '@/components/layout/contact';
import PageHero from '@/components/ui/PageHero';
import BentoGrid from '@/components/ui/BentoGrid';
import ServiceTile from '@/components/ui/ServiceTile';
import { BENTO_TILES } from '@/content/featureFlags';
import { services } from '@/content/services';
import { offerPage } from '@/content/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: { absolute: offerPage.metaTitle },
	description: offerPage.metaDescription,
	alternates: { canonical: '/oferta' },
};

export default function OfertaPage() {
	return (
		<main className='bg-black min-h-screen'>
			<PageHero
				eyebrow={offerPage.eyebrow}
				h1={offerPage.h1}
				text={offerPage.text}
				image='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop'
				imageAlt='Oprawa sceniczna wydarzenia: światło, scena i publiczność'
				cta={{ label: 'Zapytaj o wycenę', href: '/kontakt' }}
			/>

			<section className='py-20'>
				<div className='container mx-auto px-6'>
					{BENTO_TILES ? (
						<BentoGrid />
					) : (
						<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{services.map((s) => (
							<li key={s.slug}>
								<ServiceTile
									title={s.name}
									description={s.tileText}
									href={`/${s.slug}`}
									buttonLabel={s.tileButton}
									imageSrc={s.heroImage}
								/>
							</li>
						))}
					</ul>
					)}
				</div>
			</section>

			<Contact />
		</main>
	);
}
