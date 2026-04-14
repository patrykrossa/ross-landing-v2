import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/Button';
import { projects } from '@/utils/consts';

export default function ProjectArchive() {
	const homeProjects = projects.slice(0, 4);

	console.log('Home Projects:', homeProjects);
	console.log('All Projects:', projects);

	const getItemClasses = (index: number, totalLength: number) => {
		const remainder = totalLength % 4;
		const isLastGroup = index >= totalLength - remainder;

		if (isLastGroup) {
			if (remainder === 1) {
				return 'col-span-1 md:col-span-2 lg:col-span-4 row-span-1 lg:row-span-2';
			}
			if (remainder === 2) {
				return 'col-span-1 md:col-span-1 lg:col-span-2 row-span-1 md:row-span-2';
			}
			if (remainder === 3) {
				if (index === totalLength - 3)
					return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1';
				return 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1';
			}
		}

		const position = index % 4;

		if (position === 0) {
			return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2';
		}
		if (position === 1 || position === 2) {
			return 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1';
		}
		if (position === 3) {
			return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1';
		}
		return '';
	};

	return (
		<section id='realizacje' className='py-24 overflow-hidden'>
			<div className='container mx-auto px-6'>
				<div className='flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6'>
					<div>
						<p className='text-brand uppercase font-bold tracking-widest mb-4 text-sm'>
							Realizacje
						</p>
						<h2 className='text-4xl md:text-5xl font-black '>
							Nasze <span className='text-brand'>REALIZACJE</span>
						</h2>
					</div>

					<Link href='/realizacje' className='shrink-0'>
						<Button variant='outline' className='px-6 py-3'>
							ZOBACZ WSZYSTKIE REALIZACJE <ChevronRight size={16} />
						</Button>
					</Link>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] lg:auto-rows-[300px] gap-4 md:gap-6 grid-flow-dense'>
					{homeProjects.map((project, index) => (
						<div
							key={project.id}
							className={`group relative overflow-hidden rounded-lg bg-zinc-900 cursor-pointer ${getItemClasses(index, homeProjects.length)}`}>
							<div
								className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 md:grayscale group-hover:grayscale-0'
								style={{ backgroundImage: `url('${project.src}')` }}
							/>

							{/* <div className='absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500 flex flex-col justify-end p-6'>
								<h3 className='text-white font-bold text-xl md:text-2xl uppercase tracking-wider translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>
									{project.title}
								</h3>
								<p className='text-brand text-sm font-semibold tracking-widest uppercase mt-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75'>
									Zobacz szczegóły
								</p>
							</div> */}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
