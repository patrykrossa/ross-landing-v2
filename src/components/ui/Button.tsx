import { ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
	variant?: 'primary' | 'outline';
	className?: string;
	onClick?: () => void;
}

export default function Button({
	children,
	variant = 'primary',
	className = '',
	onClick,
}: ButtonProps) {
	const baseStyles =
		'cursor-pointer px-8 py-4 rounded-md font-bold transition-all flex items-center justify-center gap-2 uppercase text-sm tracking-wider';

	const variants = {
		primary:
			'bg-brand text-black hover:bg-brand/90 border-2 border-transparent',

		outline: 'border-2 border-white text-white hover:bg-white hover:text-black',
	};

	return (
		<button
			onClick={onClick}
			className={`${baseStyles} ${variants[variant]} ${className}`}>
			{children}
		</button>
	);
}
