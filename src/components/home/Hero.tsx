import { ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
	return (
		<section className='relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-red'>
			{/* --- VIDEO BG --- */}
			<div className='absolute inset-0 z-0'>
				<div className='absolute inset-0 bg-black/60 z-10' />

				<video
					autoPlay
					loop
					muted
					playsInline
					poster='/images/home-hero-bg-poster.png'
					preload='metadata'
					className='absolute inset-0 w-full h-full object-cover z-0'>
					<source src='/videos/hero-bg.webm' type='video/webm' />
					Twój przeglądarka nie obsługuje tagu wideo.
				</video>
			</div>

			<div className='container mx-auto px-6 relative z-20'>
				<div className='max-w-3xl'>
					<p className='text-brand font-bold tracking-widest mb-4 uppercase text-sm md:text-base'>
						Tworzymy wydarzenia, które robią
					</p>
					<h1 className='text-white text-6xl md:text-8xl font-black mb-6 leading-tight italic'>
						EFEKT <span className='text-brand'>WOW!</span>
					</h1>
					<p className='text-gray-300 text-lg md:text-xl mb-10 max-w-xl font-light'>
						Kompleksowa organizacja eventów na najwyższym poziomie. Światło,
						dźwięk, scena, ekrany LED, namioty i atrakcje dla dzieci – wszystko
						w jednym miejscu.
					</p>
					<div className='flex flex-wrap gap-4'>
						<a href='#kontakt' className='lg:block'>
							<Button variant='primary'>
								ZAMÓW WYCENĘ <ChevronRight size={20} />
							</Button>
						</a>
						<a href='#realizacje' className='lg:block'>
							<Button variant='outline'>ZOBACZ REALIZACJE</Button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
