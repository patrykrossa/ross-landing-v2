import Contact from '@/components/layout/contact';
import Faq from '@/components/ui/Faq';
import PageHero from '@/components/ui/PageHero';
import { contact, contactPage as page } from '@/content/site';
import type { Metadata } from 'next';
import { Check, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
	title: { absolute: page.metaTitle },
	description: page.metaDescription,
	alternates: { canonical: '/kontakt' },
};

export default function ContactPage() {
	return (
		<main className='bg-black'>
			<PageHero
				h1={page.h1}
				tagline={page.tagline}
				text={page.intro}
				image='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop'
				imageAlt={page.imageAlt}
			/>

			<section className='py-20 lg:py-24'>
				<div className='container mx-auto px-6 grid gap-12 lg:grid-cols-2'>
					<div>
						<h2 className='text-3xl md:text-4xl font-black mb-4'>
							{page.quoteTitle}
						</h2>
						<p className='text-gray-300 text-lg mb-6'>{page.quoteLead}</p>
						<ul className='space-y-3'>
							{page.quoteList.map((li) => (
								<li key={li} className='flex items-start gap-3'>
									<Check className='text-brand mt-1 shrink-0' size={18} />
									<span className='text-gray-300'>{li}</span>
								</li>
							))}
						</ul>
					</div>

					<div className='space-y-10'>
						<div>
							<h2 className='text-3xl md:text-4xl font-black mb-6'>
								{page.dataTitle}
							</h2>
							<p className='text-xl font-bold mb-4'>ROSS Events</p>
							<ul className='space-y-4'>
								<li className='flex items-center gap-3'>
									<Phone className='text-brand' size={20} />
									<a
										href={contact.phoneHref}
										className='text-gray-300 hover:text-brand transition-colors'>
										{contact.phone}
									</a>
								</li>
								<li className='flex items-center gap-3'>
									<Mail className='text-brand' size={20} />
									<a
										href={contact.emailHref}
										className='text-gray-300 hover:text-brand transition-colors'>
										{contact.email}
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className='text-2xl font-black mb-3'>{page.coverageTitle}</h2>
							<p className='text-gray-400 leading-relaxed'>
								{page.coverageText}
							</p>
						</div>
					</div>
				</div>
			</section>

			<Contact
				id='formularz'
				eyebrow='Formularz'
				title={page.quoteTitle}
				text={page.quoteLead + ' termin, lokalizację, rodzaj wydarzenia i zakres usług.'}
				submitLabel={page.submit}
			/>

			<Faq title={page.faqTitle} items={page.faq} />
		</main>
	);
}
