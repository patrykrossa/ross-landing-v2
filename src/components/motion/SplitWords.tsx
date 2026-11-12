import type { CSSProperties } from 'react';

/** Nagłówek odsłaniany słowo po słowie (czysty CSS, działa też bez JS, nie opóźnia LCP). */
export default function SplitWords({ text }: { text: string }) {
	return (
		<>
			{text.split(' ').map((word, i) => (
				<span
					key={`${word}-${i}`}
					className='word'
					style={{ '--i': i } as CSSProperties}>
					{word}
					{' '}
				</span>
			))}
		</>
	);
}
