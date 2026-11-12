import Reveal from '@/components/motion/Reveal';
import { getService, services, type ServicePage } from '@/content/services';
import BentoTile from './BentoTile';
import { serviceIcons } from './icons';

// Kolejność i rozmiary kafelków (siatka 4-kolumnowa na lg, 2-kolumnowa na md, 1 na mobile).
// Układ domyka się idealnie dla 10 usług; przy zmianie liczby usług dopasuj tablicę.
const ORDER = [
	'organizacja-eventow',
	'naglosnienie-imprez',
	'oswietlenie-sceniczne',
	'wynajem-scen',
	'namioty-eventowe',
	'technika-sceniczna',
	'streaming-eventow',
	'atrakcje-eventowe',
	'ekrany-led',
	'koordynacja-eventow',
];

const SPANS = [
	'md:col-span-2 lg:row-span-2', // duży
	'',
	'',
	'md:col-span-2', // szeroki
	'',
	'md:col-span-2 lg:row-span-2', // duży
	'',
	'',
	'',
	'md:col-span-2 lg:col-span-4', // baner
];

const LARGE = new Set([0, 5, 9]);

export default function BentoGrid() {
	const ordered = ORDER.map((slug) => getService(slug)).filter(
		(s): s is ServicePage => Boolean(s),
	);
	// usługi spoza listy ORDER (np. dodane później) trafiają na koniec
	const rest = services.filter((s) => !ORDER.includes(s.slug));
	const all = [...ordered, ...rest];

	return (
		<ul className='grid grid-flow-dense auto-rows-[290px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[260px]'>
			{all.map((s, i) => {
				const Icon = serviceIcons[s.slug];
				return (
				<li key={s.slug} className={`min-h-0 ${SPANS[i] ?? ''}`}>
					<Reveal delay={(i % 4) * 0.08} className='h-full'>
						<BentoTile
							href={`/${s.slug}`}
							title={s.name}
							description={s.tileText}
							buttonLabel={s.tileButton}
							image={s.heroImage}
							index={i}
							icon={Icon ? <Icon size={22} /> : undefined}
							large={LARGE.has(i)}
						/>
					</Reveal>
				</li>
				);
			})}
		</ul>
	);
}
