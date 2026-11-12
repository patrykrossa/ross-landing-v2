import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Button from './Button';

interface PageHeroProps {
	eyebrow?: string;
	h1: string;
	tagline?: string;
	text?: string;
	image: string;
	imageAlt: string;
	cta?: { label: string; href: string };
}

export default function PageHero({
	eyebrow,
	h1,
	tagline,
	text,
	image,
	imageAlt,
	cta,
}: PageHeroProps) {
	return (
		<section className='relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10'>
			<div className='absolute inset-0 z-0'>
				<div className='absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/40 z-10' />
				<div
					role='img'
					aria-label={imageAlt}
					className='w-full h-full bg-cover bg-center'
					style={{ backgroundImage: `url('${image}')` }}
				/>
			</div>

			<div className='container mx-auto px-6 relative z-20'>
				<div className='max-w-3xl'>
					{eyebrow && (
						<p className='text-brand font-bold tracking-[0.2em] uppercase mb-4 text-sm'>
							{eyebrow}
						</p>
					)}
					<h1 className='text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight'>
						{h1}
					</h1>
					{tagline && (
						<p className='text-brand text-xl md:text-2xl font-bold mb-5'>
							{tagline}
						</p>
					)}
					{text && (
						<p className='text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl'>
							{text}
						</p>
					)}
					{cta && (
						<Link href={cta.href} className='inline-block mt-10'>
							<Button variant='primary'>
								{cta.label} <ChevronRight size={18} />
							</Button>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
}
