import { services } from '@/content/services';

/** Pasek z nazwami usług pod hero. */
export default function ServiceMarquee() {
	return (
		<div
			aria-hidden
			className='flex w-full overflow-hidden border-y border-white/10 bg-black py-5 mask-[linear-gradient(to_right,transparent_0,black_96px,black_calc(100%-96px),transparent_100%)]'>
			{[1, 2].map((n) => (
				<ul
					key={n}
					className='animate-marquee flex min-w-full shrink-0 items-center justify-around gap-12 px-6'>
					{services.map((s) => (
						<li
							key={s.slug}
							className='flex items-center gap-12 whitespace-nowrap text-sm font-bold uppercase tracking-[0.25em] text-white/50'>
							{s.name}
							<span className='h-1.5 w-1.5 rounded-full bg-brand' />
						</li>
					))}
				</ul>
			))}
		</div>
	);
}
