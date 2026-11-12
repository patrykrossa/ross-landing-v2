import Contact from '@/components/layout/contact';
import Gallery from '@/components/realizacje/Gallery';
import FeatureGrid from '@/components/sections/FeatureGrid';
import PageHero from '@/components/ui/PageHero';
import { realizationsPage as page } from '@/content/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: { absolute: page.metaTitle },
	description: page.metaDescription,
	alternates: { canonical: '/realizacje' },
};

export default function RealizacjePage() {
	return (
		<main className='bg-black min-h-screen'>
			<PageHero
				eyebrow={page.eyebrow}
				h1={page.h1}
				tagline={page.tagline}
				text={page.text}
				image='https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop'
				imageAlt={page.imageAlt}
			/>
			<FeatureGrid
				title='Rodzaje realizacji'
				items={page.categories}
				columns={3}
				tone='darker'
			/>
			<Gallery />
			<Contact
				eyebrow={page.closing.eyebrow}
				title={page.closing.title}
				text={page.closing.text}
				submitLabel={page.closing.button}
			/>
		</main>
	);
}
