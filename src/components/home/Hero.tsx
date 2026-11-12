import SplitWords from '@/components/motion/SplitWords';
import { home } from '@/content/site';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Hero() {
	return (
		<section className='relative min-h-[90vh] flex items-center overflow-hidden pt-20'>
			{/* --- VIDEO BG --- */}
			<div className='absolute inset-0 z-0'>
				<div className='absolute inset-0 bg-black/60 z-10' />

				<video
					aria-label={home.hero.imageAlt}
					autoPlay
					loop
					muted
					playsInline
					poster='/images/home-hero-bg-poster.webp'
					preload='metadata'
					className='absolute inset-0 w-full h-full object-cover z-0'>
					<source src='/videos/hero-bg.webm' type='video/webm' />
					Twoja przeglądarka nie obsługuje tagu wideo.
				</video>

				{/* poświaty */}
				<div
					aria-hidden
					className='animate-float absolute -left-32 top-1/4 z-10 h-96 w-96 rounded-full bg-brand/25 blur-[120px]'
				/>
				<div
					aria-hidden
					className='animate-float absolute -right-24 bottom-0 z-10 h-80 w-80 rounded-full bg-brand/15 blur-[110px] [animation-delay:-8s]'
				/>
				<div className='absolute inset-x-0 bottom-0 z-10 h-40 bg-linear-to-t from-black to-transparent' />
			</div>

			<div className='container mx-auto px-6 relative z-20'>
				<div className='max-w-3xl'>
					<p className='text-brand font-bold tracking-widest mb-4 uppercase text-sm md:text-base'>
						{home.hero.eyebrow}
					</p>
					<h1 className='text-white text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight'>
						<SplitWords text={home.hero.h1} />
					</h1>
					<p className='text-gray-300 text-lg md:text-xl mb-10 max-w-2xl font-light'>
						{home.hero.text}
					</p>
					<div className='flex flex-wrap gap-4'>
						<Link href='/kontakt'>
							<Button variant='primary'>
								{home.hero.primary} <ChevronRight size={20} />
							</Button>
						</Link>
						<a href='#uslugi'>
							<Button variant='outline'>{home.hero.secondary}</Button>
						</a>
					</div>
				</div>
			</div>

			<a
				href='#uslugi'
				aria-label='Przewiń do usług'
				className='animate-scroll-hint absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 text-white/70 md:block'>
				<ChevronDown size={28} />
			</a>
		</section>
	);
}
