import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceTileProps {
	title: string;
	description: string;
	imageSrc?: string;
	href: string;
	buttonLabel?: string;
}

export default function ServiceTile({
	title,
	description,
	imageSrc,
	href,
	buttonLabel,
}: ServiceTileProps) {
	return (
		<Link
			href={href}
			draggable={false}
			className='group block relative h-100 w-full overflow-hidden rounded-lg bg-zinc-900'>
			<div className='absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110'>
				{imageSrc && (
					<Image
						src={imageSrc}
						alt=''
						fill
						sizes='(min-width: 1024px) 25vw, (min-width: 768px) 35vw, 85vw'
						className='object-cover'
					/>
				)}
			</div>

			<div className='absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90' />

			<div className='absolute inset-0 z-20 flex flex-col justify-end p-6'>
				<h3 className='text-2xl font-bold uppercase mb-2 text-white group-hover:text-brand transition-colors duration-300'>
					{title}
				</h3>
				<p className='text-sm text-gray-300 mb-4 line-clamp-4'>{description}</p>
				{buttonLabel && (
					<span className='flex items-center gap-2 text-brand font-bold text-sm tracking-widest uppercase'>
						{buttonLabel} <ChevronRight size={16} strokeWidth={3} />
					</span>
				)}
			</div>
		</Link>
	);
}
