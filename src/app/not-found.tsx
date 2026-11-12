import Reveal from '@/components/motion/Reveal';
import Button from '@/components/ui/Button';
import { services } from '@/content/services';
import { ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: { absolute: 'Nie znaleziono strony | ROSS Events' },
	robots: { index: false, follow: true },
};

export default function NotFound() {
	return (
		<main className='relative flex min-h-[80vh] items-center overflow-hidden bg-black py-32'>
			<div aria-hidden className='bg-grid pointer-events-none absolute inset-0' />
			<div
				aria-hidden
				className='animate-float pointer-events-none absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-brand/20 blur-[120px]'
			/>

			<div className='container relative mx-auto px-6'>
				<Reveal>
					<p className='text-outline text-[8rem] font-black leading-none md:text-[12rem]'>
						404
					</p>
					<h1 className='mb-4 text-3xl font-black md:text-5xl'>
						Tej strony nie znaleźliśmy
					</h1>
					<p className='mb-10 max-w-xl text-lg text-gray-400'>
						Adres mógł się zmienić albo został wpisany z błędem. Wróć na stronę
						główną lub wybierz jedną z naszych usług.
					</p>
					<div className='flex flex-wrap gap-4'>
						<Link href='/'>
							<Button variant='primary'>
								Strona główna <ChevronRight size={18} />
							</Button>
						</Link>
						<Link href='/kontakt'>
							<Button variant='outline'>Skontaktuj się</Button>
						</Link>
					</div>
				</Reveal>

				<Reveal delay={0.15} className='mt-16'>
					<p className='mb-4 text-xs font-bold uppercase tracking-widest text-brand'>
						Nasze usługi
					</p>
					<ul className='flex flex-wrap gap-2'>
						{services.map((s) => (
							<li key={s.slug}>
								<Link
									href={`/${s.slug}`}
									className='inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition-colors hover:border-brand/60 hover:text-white'>
									{s.name}
								</Link>
							</li>
						))}
					</ul>
				</Reveal>
			</div>
		</main>
	);
}
