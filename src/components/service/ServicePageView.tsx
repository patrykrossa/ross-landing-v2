import Contact from '@/components/layout/contact';
import Faq from '@/components/ui/Faq';
import PageHero from '@/components/ui/PageHero';
import { getService, type ServicePage } from '@/content/services';
import { Check, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicePageView({ service }: { service: ServicePage }) {
	const related = service.related
		.map((slug) => getService(slug))
		.filter((s): s is ServicePage => Boolean(s));

	return (
		<main className='bg-black'>
			<PageHero
				h1={service.h1}
				tagline={service.tagline}
				text={service.intro}
				image={service.heroImage}
				imageAlt={service.heroImageAlt}
				cta={{ label: service.heroCta, href: '/kontakt' }}
			/>

			{service.blocks.map((block, i) => (
				<section
					key={block.title}
					className={`py-16 lg:py-20 ${i % 2 === 1 ? 'bg-zinc-950 border-y border-white/5' : ''}`}>
					<div className='container mx-auto px-6'>
						<h2 className='text-3xl md:text-4xl font-black mb-6 max-w-3xl'>
							{block.title}
						</h2>
						{block.text && (
							<p className='text-gray-300 text-lg leading-relaxed max-w-3xl mb-8'>
								{block.text}
							</p>
						)}
						{block.items && (
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								{block.items.map((item) => (
									<div
										key={item.title}
										className='rounded-2xl border border-white/10 bg-zinc-900 p-7'>
										<h3 className='text-xl font-bold mb-3'>{item.title}</h3>
										<p className='text-gray-400 leading-relaxed'>{item.text}</p>
									</div>
								))}
							</div>
						)}
						{block.list && (
							<ul className='space-y-4 max-w-3xl'>
								{block.list.map((li) => (
									<li key={li} className='flex items-start gap-3'>
										<Check className='text-brand mt-1 shrink-0' size={20} />
										<span className='text-gray-300 text-lg'>{li}</span>
									</li>
								))}
							</ul>
						)}
					</div>
				</section>
			))}

			{related.length > 0 && (
				<section className='py-16 lg:py-20 border-t border-white/5'>
					<div className='container mx-auto px-6'>
						<h2 className='text-2xl md:text-3xl font-black mb-8'>
							Zobacz także
						</h2>
						<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
							{related.map((r) => (
								<li key={r.slug}>
									<Link
										href={`/${r.slug}`}
										className='group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 hover:border-brand transition-colors'>
										<span className='font-bold'>{r.name}</span>
										<ChevronRight
											size={18}
											className='text-brand transition-transform group-hover:translate-x-1'
										/>
									</Link>
								</li>
							))}
							<li>
								<Link
									href='/kontakt'
									className='group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 hover:border-brand transition-colors'>
									<span className='font-bold'>Kontakt i wycena</span>
									<ChevronRight
										size={18}
										className='text-brand transition-transform group-hover:translate-x-1'
									/>
								</Link>
							</li>
						</ul>
					</div>
				</section>
			)}

			<Faq title={service.faqTitle} items={service.faq} />

			<Contact
				title={service.closingTitle}
				text={service.closingText}
				submitLabel={service.closingCta}
				defaultSubject={service.name}
			/>
		</main>
	);
}
