import Image from 'next/image';
import Link from 'next/link';

export default function Logo({
	className = '',
	imgClassName = 'h-11',
}: {
	className?: string;
	imgClassName?: string;
}) {
	return (
		<Link
			href='/'
			aria-label='ROSS Events — strona główna'
			className={`inline-flex items-center ${className}`}>
			<Image
				src='/logos/ross-events-logo.svg'
				alt='ROSS Events'
				width={1326}
				height={582}
				priority
				unoptimized
				className={`w-auto transition-[height] duration-300 ${imgClassName}`}
			/>
		</Link>
	);
}
