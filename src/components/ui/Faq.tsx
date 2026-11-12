import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/content/services';

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
		<section className='py-20 lg:py-24 border-t border-white/5 bg-zinc-950'>
			<div className='container mx-auto px-6 max-w-4xl'>
				<h2 className='text-3xl md:text-4xl font-black mb-10'>{title}</h2>
				<div className='divide-y divide-white/10 border-y border-white/10'>
					{items.map((item) => (
						<details key={item.q} className='group py-5'>
							<summary className='flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold [&::-webkit-details-marker]:hidden'>
								<h3 className='text-lg font-bold'>{item.q}</h3>
								<ChevronDown
									size={22}
									className='shrink-0 text-brand transition-transform group-open:rotate-180'
								/>
							</summary>
							<p className='mt-4 text-gray-400 leading-relaxed'>{item.a}</p>
						</details>
					))}
				</div>
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
