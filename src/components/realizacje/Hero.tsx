export default function Hero() {
	return (
		<section className='relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10'>
			<div className='absolute inset-0 z-0'>
				<div className='absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/40 z-10' />
				<div
					className="w-full h-full bg-[url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
					aria-hidden='true'
				/>
			</div>

			<div className='container mx-auto px-6 relative z-20 text-center lg:text-left'>
				<div className='max-w-3xl'>
					<p className='text-brand font-bold tracking-[0.2em] uppercase mb-4 text-sm'>
						Nasze portfolio
					</p>
					<h1 className='text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase'>
						Wyjątkowe <br />
						<span className='text-brand italic font-black'>Wydarzenia</span>
					</h1>
					<p className='text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl'>
						Przejrzyj nasze archiwum projektów. Od kameralnych bankietów po
						wielkie festiwale i produkcje telewizyjne. Każde zdjęcie to inna
						historia sukcesu.
					</p>
				</div>
			</div>
		</section>
	);
}
