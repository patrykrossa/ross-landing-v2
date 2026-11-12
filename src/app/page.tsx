import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import ServiceMarquee from '@/components/home/ServiceMarquee';
import Reveal from '@/components/motion/Reveal';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import Offer from '@/components/home/Offer';
import Partners from '@/components/home/Partners';
import Realizations from '@/components/home/Realizations';
import Contact from '@/components/layout/contact';
import FeatureGrid from '@/components/sections/FeatureGrid';
import Faq from '@/components/ui/Faq';
import { home } from '@/content/site';

export const metadata: Metadata = {
	title: { absolute: home.metaTitle },
	description: home.metaDescription,
	alternates: { canonical: '/' },
};

export default function HomePage() {
	return (
		<>
			<Hero />
			<ServiceMarquee />

			<section className='py-20 lg:py-24'>
				<Reveal className='container mx-auto px-6 max-w-4xl text-center'>
					<h2 className='text-3xl md:text-5xl font-black mb-6'>
						{home.intro.title}
					</h2>
					<p className='text-gray-300 text-lg md:text-xl leading-relaxed'>
						{home.intro.text}
					</p>
				</Reveal>
			</section>

			<Offer />

			<FeatureGrid
				tone='darker'
				title={home.why.title}
				items={home.why.items}
				columns={4}
			/>

			<FeatureGrid
				title={home.forWhom.title}
				items={home.forWhom.items}
				columns={3}
			/>

			<ProcessTimeline title={home.process.title} steps={home.process.steps} />

			<Realizations />
			<Partners />

			<section className='py-20 lg:py-24'>
				<Reveal className='container mx-auto px-6 max-w-4xl text-center'>
					<h2 className='text-3xl md:text-5xl font-black mb-6'>
						{home.coverage.title}
					</h2>
					<p className='text-gray-300 text-lg leading-relaxed'>
						{home.coverage.text}
					</p>
				</Reveal>
			</section>

			<Faq title={home.faqTitle} items={home.faq} />

			<Contact
				eyebrow={home.closing.eyebrow}
				title={home.closing.title}
				text={home.closing.text}
				submitLabel={home.closing.button}
			/>
		</>
	);
}
