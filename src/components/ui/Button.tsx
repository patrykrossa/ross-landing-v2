import { ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
	variant?: 'primary' | 'outline';
	size?: 'md' | 'sm';
	className?: string;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
}

export default function Button({
	children,
	variant = 'primary',
	size = 'md',
	className = '',
	disabled = false,
	type = 'button',
	onClick,
}: ButtonProps) {
	const baseStyles =
		'cursor-pointer rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider hover:-translate-y-0.5 active:translate-y-0';

	const sizes = {
		md: 'px-8 py-4 text-sm',
		sm: 'px-4 py-2 text-xs',
	};

	const variants = {
		primary:
			'btn-shine bg-brand text-black hover:bg-brand/90 hover:shadow-[0_8px_30px_-8px_rgba(117,192,67,0.7)] border-2 border-transparent',

		outline: 'border-2 border-white text-white hover:bg-white hover:text-black',
	};

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			type={type}
			className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}>
			{children}
		</button>
	);
}
