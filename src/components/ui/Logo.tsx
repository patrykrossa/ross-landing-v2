import Link from 'next/link';

// Tymczasowo logo tekstowe. Po dodaniu plików SVG do public/logos
// wystarczy podmienić zawartość tego komponentu na <Image src='/logos/...' />.
export default function Logo({ className = '' }: { className?: string }) {
	return (
		<Link
			href='/'
			aria-label='ROSS Events — strona główna'
			className={`flex items-center gap-1 ${className}`}>
			<span className='text-2xl font-black italic'>
				ROSS<span className='text-brand'>R</span>
			</span>
			<span className='text-[10px] tracking-[0.3em] uppercase mt-2'>events</span>
		</Link>
	);
}
