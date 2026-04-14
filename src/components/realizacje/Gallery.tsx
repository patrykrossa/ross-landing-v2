'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { projects } from '@/utils/consts';

export default function Gallery() {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (selectedIndex === null) return;
			if (e.key === 'Escape') setSelectedIndex(null);
			if (e.key === 'ArrowRight') nextImage();
			if (e.key === 'ArrowLeft') prevImage();
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [selectedIndex]);

	const nextImage = () => {
		if (selectedIndex !== null) {
			setSelectedIndex((selectedIndex + 1) % projects.length);
		}
	};

	const prevImage = () => {
		if (selectedIndex !== null) {
			setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length);
		}
	};

	const getItemClasses = (index: number, total: number) => {
		const remainder = total % 4;
		const isLastGroup = index >= total - remainder;

		if (isLastGroup) {
			if (remainder === 1)
				return 'col-span-1 md:col-span-2 lg:col-span-4 row-span-1';
			if (remainder === 2)
				return 'col-span-1 md:col-span-1 lg:col-span-2 row-span-1';
			if (remainder === 3) {
				if (index === total - 3)
					return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1';
				return 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1';
			}
		}

		const pos = index % 4;
		if (pos === 0)
			return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2';
		if (pos === 1 || pos === 2)
			return 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1';
		return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1';
	};

	return (
		<section className='py-20 bg-black min-h-screen'>
			<div className='container mx-auto px-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] lg:auto-rows-[300px] gap-4 md:gap-6 grid-flow-dense'>
					{projects.map((project, index) => (
						<div
							key={project.id}
							onClick={() => setSelectedIndex(index)}
							className={`group relative overflow-hidden rounded-xl bg-zinc-900 cursor-pointer ${getItemClasses(index, projects.length)}`}>
							<div
								className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 md:grayscale group-hover:grayscale-0'
								style={{ backgroundImage: `url(${project.src})` }}
							/>
							<div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500' />

							<div className='absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<Maximize2
									className='absolute top-6 right-6 text-white/50'
									size={20}
								/>
								<p className='text-brand text-xs font-bold uppercase tracking-widest mb-1'>
									{project.category}
								</p>
								<h3 className='text-white font-bold text-xl uppercase italic'>
									{project.title}
								</h3>
							</div>
						</div>
					))}
				</div>

				{selectedIndex !== null && (
					<div className='fixed inset-0 z-100 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 pt-16 md:p-10'>
						<button
							onClick={() => setSelectedIndex(null)}
							className='absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white transition-colors z-110 bg-black/50 p-2 rounded-full md:bg-transparent md:p-0'>
							<X size={32} className='md:w-10 md:h-10' />
						</button>

						{/* DESKTOP */}
						<button
							onClick={(e) => {
								e.stopPropagation();
								prevImage();
							}}
							className='hidden cursor-pointer md:block absolute left-4 lg:left-10 text-white/30 hover:text-brand transition-colors z-110'>
							<ChevronLeft size={60} strokeWidth={1} />
						</button>
						<button
							onClick={(e) => {
								e.stopPropagation();
								nextImage();
							}}
							className='hidden cursor-pointer md:block absolute right-4 lg:right-10 text-white/30 hover:text-brand transition-colors z-110'>
							<ChevronRight size={60} strokeWidth={1} />
						</button>

						<div
							className='relative w-full max-w-5xl flex flex-col items-center flex-1 min-h-0'
							onClick={() => setSelectedIndex(null)}>
							<div
								className='relative w-full h-[50vh] md:h-[70vh] bg-contain bg-center bg-no-repeat transition-all duration-500 rounded-lg'
								style={{
									backgroundImage: `url(${projects[selectedIndex].src})`,
								}}
								onClick={(e) => e.stopPropagation()}
							/>

							<div
								className='mt-6 md:mt-8 w-full flex flex-col items-center gap-4'
								onClick={(e) => e.stopPropagation()}>
								<div className='text-center px-4'>
									<p className='text-brand font-bold uppercase tracking-widest text-xs md:text-sm mb-1 md:mb-2'>
										{projects[selectedIndex].category}
									</p>
									<h2 className='text-xl md:text-3xl lg:text-4xl font-black uppercase italic text-white line-clamp-2'>
										{projects[selectedIndex].title}
									</h2>
								</div>

								{/* MOBILE */}
								<div className='flex md:hidden items-center justify-center gap-8 mt-2'>
									<button
										onClick={prevImage}
										className='text-white hover:text-brand transition-colors bg-white/10 p-3 rounded-full'>
										<ChevronLeft size={24} />
									</button>
									<span className='text-white/50 text-sm font-semibold font-mono'>
										{selectedIndex + 1} / {projects.length}
									</span>
									<button
										onClick={nextImage}
										className='text-white hover:text-brand transition-colors bg-white/10 p-3 rounded-full'>
										<ChevronRight size={24} />
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
