import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export interface OfferFeature {
	icon: React.ReactNode;
	title: string;
	description?: string;
}

interface OfferSectionProps {
	title: string;
	description?: string;
	imageSrc: string;
	variant?: 'split' | 'cards';
	imagePosition?: 'left' | 'right';
	imageBadge?: string;
	mainIcon?: React.ReactNode;
	features: OfferFeature[];
}

export default function OfferSection({
	title,
	description,
	imageSrc,
	variant = 'split',
	imagePosition = 'left',
	imageBadge,
	mainIcon,
	features,
}: OfferSectionProps) {
	if (variant === 'cards') {
		return (
			<section className='py-20 lg:py-32'>
				<div className='container mx-auto px-6'>
					<div className='grid lg:grid-cols-2 gap-8 lg:gap-12'>
						<div className='bg-zinc-900 p-10 lg:p-14 rounded-3xl border border-white/5 flex flex-col justify-between'>
							<div>
								{mainIcon && (
									<div className='bg-black/50 w-16 h-16 flex items-center justify-center rounded-2xl mb-8 text-brand'>
										{mainIcon}
									</div>
								)}
								<h2 className='text-3xl lg:text-4xl font-bold mb-6'>{title}</h2>
								{description && (
									<p className='text-gray-400 leading-relaxed mb-10'>
										{description}
									</p>
								)}

								<div className='grid grid-cols-2 gap-6 mb-12'>
									{features.map((feature, idx) => (
										<div key={idx} className='flex items-center gap-3'>
											<div className='text-brand'>{feature.icon}</div>
											<span className='text-sm font-semibold text-white/80'>
												{feature.title}
											</span>
										</div>
									))}
								</div>
							</div>
							<Link href='/#kontakt'>
								<Button variant='primary' className='w-full'>
									ZAMÓW WYCENĘ <ChevronRight size={18} />
								</Button>
							</Link>
						</div>

						<div className='relative h-125 lg:h-auto rounded-3xl overflow-hidden group'>
							<div
								className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
								style={{ backgroundImage: `url(${imageSrc})` }}
							/>
							<div className='absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500' />
						</div>
					</div>
				</div>
			</section>
		);
	}

	const isRight = imagePosition === 'right';

	const sectionBg = isRight ? 'bg-zinc-950 border-y border-white/5' : '';
	const textOrder = isRight ? 'order-2 lg:order-1' : 'order-2 lg:order-2';
	const imgOrder = isRight ? 'order-1 lg:order-2' : 'order-1 lg:order-1';
	const listLayout = isRight
		? 'flex gap-5 lg:flex-row-reverse lg:text-right'
		: 'flex gap-5';
	const iconBg = isRight ? 'bg-zinc-900 border border-white/5' : 'bg-zinc-900';
	const btnContainer = isRight ? 'flex lg:justify-end' : '';

	return (
		<section className={`py-20 lg:py-32 ${sectionBg}`}>
			<div className='container mx-auto px-6'>
				<div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
					<div className={textOrder}>
						<h2 className='text-4xl lg:text-5xl font-bold mb-10'>{title}</h2>
						<ul className='space-y-8 mb-10'>
							{features.map((feature, idx) => (
								<li key={idx} className={listLayout}>
									<div
										className={`mt-1 p-3 rounded-lg h-fit text-brand ${iconBg}`}>
										{feature.icon}
									</div>
									<div className='flex-1'>
										<h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
										<p className='text-gray-400 text-sm leading-relaxed'>
											{feature.description}
										</p>
									</div>
								</li>
							))}
						</ul>
						<div className={btnContainer}>
							<Link href='#kontakt'>
								<Button
									variant={isRight ? 'outline' : 'primary'}
									className={`w-full sm:w-auto ${isRight ? 'bg-black' : ''}`}>
									ZAMÓW WYCENĘ <ChevronRight size={18} />
								</Button>
							</Link>
						</div>
					</div>

					<div
						className={`relative h-100 lg:h-125 rounded-2xl overflow-hidden group ${imgOrder}`}>
						<div
							className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
							style={{ backgroundImage: `url(${imageSrc})` }}
						/>
						<div className='absolute inset-0 bg-black/20' />
						{imageBadge && (
							<div className='absolute bottom-6 left-6 bg-brand text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded'>
								{imageBadge}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
