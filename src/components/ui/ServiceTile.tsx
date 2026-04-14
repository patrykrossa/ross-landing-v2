interface ServiceTileProps {
	title: string;
	description: string;
	imageSrc?: string;
	href: string;
}

export default function ServiceTile({
	title,
	description,
	imageSrc,
	href,
}: ServiceTileProps) {
	return (
		// <Link
		// 	href={href}
		// 	className='group block relative h-100 w-full overflow-hidden rounded-lg bg-zinc-900'>
		<div className='group block relative h-100 w-full overflow-hidden rounded-lg bg-zinc-900'>
			<div
				className='absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110'
				style={{
					backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			/>

			<div className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80' />

			<div className='absolute inset-0 z-20 flex flex-col justify-end p-6'>
				<h3 className='text-2xl font-bold uppercase mb-2 text-white group-hover:text-brand transition-colors duration-300'>
					{title}
				</h3>
				<p className='text-sm text-gray-300 mb-4 line-clamp-2'>{description}</p>
				{/* <div className='flex items-center gap-2 text-brand font-bold text-sm tracking-widest uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300'>
					Dowiedz się więcej <ArrowRight size={16} strokeWidth={3} />
				</div> */}
			</div>
		</div>
		// </Link>
	);
}
