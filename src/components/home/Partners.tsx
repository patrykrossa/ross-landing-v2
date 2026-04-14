import { partners } from '@/utils/consts';
import Image from 'next/image';

export default function Partners() {
	return (
		<section className='py-20 bg-zinc-950 border-y border-white/5 overflow-hidden'>
			<div className='container mx-auto px-6 mb-12 text-center'>
				<p className='text-brand uppercase font-bold tracking-widest mb-3 text-xs md:text-sm'>
					Zaufały nam setki firm
				</p>
				<h2 className='text-3xl md:text-4xl font-black'>
					Dołącz do grona naszych klientów
				</h2>
			</div>

			<div className='marquee-container flex w-full overflow-hidden pt-6 mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]'>
				{[1, 2].map((listIndex) => (
					<ul
						key={listIndex}
						className='flex shrink-0 items-center justify-around min-w-full gap-16 px-8 animate-marquee'
						aria-hidden={listIndex === 2 ? true : undefined}>
						{partners.map((partner, index) => (
							<li key={index} className='flex items-center justify-center'>
								{/* <Image 
                  src={partner.src} 
                  alt={`Logo ${partner.name}`} 
                  width={140} 
                  height={60} 
                  className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                /> 
                */}

								<div className='text-2xl font-black text-white/30 uppercase tracking-widest hover:text-white transition-colors duration-300 cursor-default'>
									{partner.name}
								</div>
							</li>
						))}
					</ul>
				))}
			</div>
		</section>
	);
}
