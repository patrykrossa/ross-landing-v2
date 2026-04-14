export default function Hero() {
	return (
		<section className='relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10'>
			<div className='absolute inset-0 z-0'>
				<div className='absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/40 z-10' />
				<div
					className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
					aria-hidden='true'
				/>
			</div>

			<div className='container mx-auto px-6 relative z-20'>
				<div className='max-w-3xl'>
					<p className='text-brand font-bold tracking-[0.2em] uppercase mb-4 text-sm'>
						Specjaliści od wydarzeń
					</p>
					<h1 className='text-5xl md:text-7xl font-black mb-6 tracking-tighter'>
						NASZA PEŁNA <br />
						<span className='text-brand italic'>OFERTA</span>
					</h1>
					<p className='text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl'>
						Zapewniamy kompleksowe wsparcie techniczne, logistyczne i kreatywne
						dla najbardziej wymagających produkcji eventowych. Od wizji po
						perfekcyjną realizację.
					</p>
				</div>
			</div>
		</section>
	);
}
