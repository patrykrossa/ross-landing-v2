import Contact from '@/components/layout/contact';
import Reveal from '@/components/motion/Reveal';
import SpotlightCard from '@/components/motion/SpotlightCard';
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

			{service.blocks.map((block, i) => {
				const darker = i % 2 === 1;
				return (
					<section
						key={block.title}
						className={`relative overflow-hidden py-16 lg:py-24 ${darker ? 'bg-zinc-950' : ''}`}>
						{darker && (
							<>
								<div
									aria-hidden
									className='bg-grid pointer-events-none absolute inset-0'
								/>
								<div
									aria-hidden
									className='pointer-events-none absolute -top-24 right-0 h-64 w-120 rounded-full bg-brand/10 blur-3xl'
								/>
							</>
						)}
						<div
							aria-hidden
							className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/40 to-transparent'
						/>

						<div className='container relative mx-auto px-6'>
							<Reveal>
								<h2 className='text-3xl md:text-4xl font-black mb-6 max-w-3xl'>
									{block.title}
								</h2>
							</Reveal>
							{block.text && (
								<Reveal delay={0.1}>
									<p className='text-gray-300 text-lg leading-relaxed max-w-3xl mb-10'>
										{block.text}
									</p>
								</Reveal>
							)}

							{block.items && (
								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									{block.items.map((item, n) => (
										<Reveal
											key={item.title}
											delay={(n % 2) * 0.1 + 0.05}
											className={`h-full ${block.items!.length % 2 === 1 && n === block.items!.length - 1 ? 'md:col-span-2' : ''}`}>
											<SpotlightCard>
												<div className='p-7 md:p-8'>
													<span className='text-outline mb-5 block text-5xl font-black leading-none select-none transition-all duration-500 group-hover:translate-x-1'>
														{String(n + 1).padStart(2, '0')}
													</span>
													<h3 className='text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-brand'>
														{item.title}
													</h3>
													<p className='text-gray-400 leading-relaxed'>
														{item.text}
													</p>
												</div>
											</SpotlightCard>
										</Reveal>
									))}
								</div>
							)}

							{block.list && (
								<ul className='space-y-4 max-w-3xl'>
									{block.list.map((li, n) => (
										<li key={li}>
											<Reveal delay={n * 0.08}>
												<div className='group flex items-start gap-4 rounded-xl border border-white/10 bg-zinc-900/60 px-5 py-4 transition-all duration-300 hover:translate-x-2 hover:border-brand/50'>
													<span className='mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-black'>
														<Check size={16} strokeWidth={3} />
													</span>
													<span className='text-gray-300 text-lg'>{li}</span>
												</div>
											</Reveal>
										</li>
									))}
								</ul>
							)}
						</div>
					</section>
				);
			})}

			{related.length > 0 && (
				<section className='relative py-16 lg:py-20'>
					<div
						aria-hidden
						className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/40 to-transparent'
					/>
					<div className='container mx-auto px-6'>
						<Reveal>
							<h2 className='text-2xl md:text-3xl font-black mb-8'>
								Zobacz także
							</h2>
						</Reveal>
						<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
							{[
								...related.map((r) => ({
									href: `/${r.slug}`,
									label: r.name,
								})),
								{ href: '/kontakt', label: 'Kontakt i wycena' },
							].map((r, n) => (
								<li key={r.href}>
									<Reveal delay={n * 0.08} className='h-full'>
										<SpotlightCard>
											<Link
												href={r.href}
												className='flex h-full items-center justify-between gap-3 px-5 py-5'>
												<span className='font-bold transition-colors duration-300 group-hover:text-brand'>
													{r.label}
												</span>
												<ChevronRight
													size={18}
													className='text-brand transition-transform duration-300 group-hover:translate-x-1.5'
												/>
											</Link>
										</SpotlightCard>
									</Reveal>
								</li>
							))}
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
