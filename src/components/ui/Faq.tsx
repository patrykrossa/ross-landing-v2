import Reveal from '@/components/motion/Reveal';
import type { FaqItem } from '@/content/services';
import FaqAccordion from './FaqAccordion';

export default function Faq({
	title,
	items,
}: {
	title: string;
	items: FaqItem[];
}) {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: items.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: { '@type': 'Answer', text: item.a },
		})),
	};

	return (
		<section className='relative py-20 lg:py-24 border-t border-white/5 bg-zinc-950'>
			<div className='container mx-auto px-6 max-w-4xl'>
				<Reveal>
					<h2 className='text-3xl md:text-4xl font-black mb-10'>{title}</h2>
				</Reveal>
				<FaqAccordion items={items} />
			</div>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
				}}
			/>
		</section>
	);
}
