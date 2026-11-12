import Reveal from '@/components/motion/Reveal';
import { featureIcons } from '@/components/ui/icons';

interface FeatureGridProps {
	id?: string;
	eyebrow?: string;
	title: string;
	text?: string;
	items: { title: string; text: string; icon?: string }[];
	columns?: 2 | 3 | 4;
	tone?: 'dark' | 'darker';
}

const cols = {
	2: 'md:grid-cols-2',
	3: 'md:grid-cols-2 lg:grid-cols-3',
	4: 'md:grid-cols-2 lg:grid-cols-4',
};

export default function FeatureGrid({
	id,
	eyebrow,
	title,
	text,
	items,
	columns = 2,
	tone = 'dark',
}: FeatureGridProps) {
	const darker = tone === 'darker';

	return (
		<section
			id={id}
			className={`relative overflow-hidden py-20 lg:py-24 ${darker ? 'bg-zinc-950' : ''}`}>
			{darker && (
				<>
					<div
						aria-hidden
						className='bg-grid pointer-events-none absolute inset-0'
					/>
					<div
						aria-hidden
						className='pointer-events-none absolute -top-32 left-1/2 h-72 w-160 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl'
					/>
				</>
			)}
			<div
				aria-hidden
				className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/40 to-transparent'
			/>

			<div className='container relative mx-auto px-6'>
				<Reveal className='max-w-3xl mb-12'>
					{eyebrow && (
						<p className='text-brand uppercase font-bold tracking-widest mb-3 text-sm'>
							{eyebrow}
						</p>
					)}
					<h2 className='text-3xl md:text-5xl font-black mb-4'>{title}</h2>
					{text && (
						<p className='text-gray-400 text-lg leading-relaxed'>{text}</p>
					)}
				</Reveal>

				<div className={`grid grid-cols-1 gap-6 ${cols[columns]}`}>
					{items.map((item, i) => {
						const Icon = item.icon ? featureIcons[item.icon] : undefined;
						return (
							<Reveal key={item.title} delay={(i % columns) * 0.1 + 0.05}>
								<div className='group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-[0_20px_50px_-20px_rgba(117,192,67,0.4)]'>
									<div
										aria-hidden
										className='pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/0 blur-2xl transition-colors duration-500 group-hover:bg-brand/20'
									/>
									{Icon && (
										<span className='mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-black/60 text-brand ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-brand group-hover:text-black'>
											<Icon size={24} />
										</span>
									)}
									<h3 className='relative text-xl font-bold mb-3'>
										{item.title}
									</h3>
									<p className='relative text-gray-400 leading-relaxed'>
										{item.text}
									</p>
								</div>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
