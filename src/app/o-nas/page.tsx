import Contact from '@/components/layout/contact';
import FeatureGrid from '@/components/sections/FeatureGrid';
import PageHero from '@/components/ui/PageHero';
import { aboutPage as page } from '@/content/site';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: { absolute: page.metaTitle },
	description: page.metaDescription,
	alternates: { canonical: '/o-nas' },
};

export default function AboutPage() {
	return (
		<main className='bg-black'>
			<PageHero
				h1={page.h1}
				tagline={page.tagline}
				text={page.intro}
				image='https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop'
				imageAlt={page.imageAlt}
			/>

			<section className='py-20 lg:py-24'>
				<div className='container mx-auto px-6 max-w-4xl'>
					<h2 className='text-3xl md:text-4xl font-black mb-6'>
						{page.howTitle}
					</h2>
					<p className='text-gray-300 text-lg leading-relaxed'>{page.howText}</p>
				</div>
			</section>

			<FeatureGrid title={page.valuesTitle} items={page.values} tone='darker' />

			<section className='py-20 lg:py-24'>
				<div className='container mx-auto px-6 max-w-4xl'>
					<h2 className='text-3xl md:text-4xl font-black mb-6'>
						{page.offerTitle}
					</h2>
					<p className='text-gray-300 text-lg leading-relaxed mb-6'>
						{page.offerText}
					</p>
					<Link href='/oferta' className='text-brand font-bold hover:underline'>
						Zobacz pełną ofertę →
					</Link>
				</div>
			</section>

			<Contact
				eyebrow={page.closing.eyebrow}
				title={page.closing.title}
				text={page.closing.text}
				submitLabel={page.closing.button}
			/>
		</main>
	);
}
