import { contact, legal } from '@/content/site';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: { absolute: 'Polityka prywatności | ROSS Events' },
	description:
		'Polityka prywatności ROSS Events: zasady przetwarzania danych osobowych, prawa osób, których dane dotyczą, oraz pliki cookies.',
	alternates: { canonical: '/polityka-prywatnosci' },
};

const sections: { title: string; body: React.ReactNode }[] = [
	{
		title: '1. Administrator danych',
		body: (
			<p>
				Administratorem danych osobowych jest {legal.companyName}, z siedzibą:{' '}
				{legal.address}, NIP: {legal.nip} (dalej: „Administrator”). Kontakt w
				sprawach danych osobowych:{' '}
				<a className='text-brand underline' href={contact.emailHref}>
					{contact.email}
				</a>
				, tel. {contact.phone}.
			</p>
		),
	},
	{
		title: '2. Jakie dane przetwarzamy i w jakim celu',
		body: (
			<>
				<p>
					Przez formularz kontaktowy zbieramy dane podane przez Ciebie: imię i
					nazwisko lub nazwę firmy, adres e-mail, numer telefonu (opcjonalnie),
					informacje o wydarzeniu (termin, miejscowość, rodzaj, liczba uczestników,
					zakres usług) oraz treść wiadomości.
				</p>
				<ul className='list-disc pl-6 space-y-2 mt-4'>
					<li>
						Odpowiedź na zapytanie i przygotowanie wyceny, podstawa: art. 6 ust. 1
						lit. b RODO (działania przed zawarciem umowy na żądanie osoby, której
						dane dotyczą) oraz Twoja zgoda, art. 6 ust. 1 lit. a RODO.
					</li>
					<li>
						Realizacja zawartej umowy, podstawa: art. 6 ust. 1 lit. b RODO.
					</li>
					<li>
						Dochodzenie lub obrona roszczeń oraz obsługa korespondencji, podstawa:
						prawnie uzasadniony interes Administratora, art. 6 ust. 1 lit. f RODO.
					</li>
					<li>
						Wypełnienie obowiązków podatkowych i księgowych, podstawa: art. 6 ust.
						1 lit. c RODO.
					</li>
				</ul>
				<p className='mt-4'>
					Podanie danych oznaczonych w formularzu jako wymagane jest dobrowolne, ale
					niezbędne do udzielenia odpowiedzi.
				</p>
			</>
		),
	},
	{
		title: '3. Odbiorcy danych',
		body: (
			<p>
				Dane mogą być powierzane podmiotom wspierającym nas technicznie, w
				szczególności dostawcom hostingu i poczty elektronicznej, oraz podmiotom
				obsługującym księgowość i doradztwo prawne — wyłącznie w zakresie
				niezbędnym do realizacji ich usług i na podstawie umów powierzenia.
				Nie sprzedajemy danych osobowych.
			</p>
		),
	},
	{
		title: '4. Okres przechowywania',
		body: (
			<p>
				Dane z zapytań przechowujemy do czasu zakończenia korespondencji, a jeśli
				nie dojdzie do zawarcia umowy — nie dłużej niż 12 miesięcy od ostatniego
				kontaktu. Dane związane z umową przechowujemy przez okres jej realizacji,
				a następnie przez czas wymagany przepisami (np. 5 lat od końca roku
				podatkowego) lub do upływu terminów przedawnienia roszczeń. Dane
				przetwarzane na podstawie zgody — do czasu jej cofnięcia.
			</p>
		),
	},
	{
		title: '5. Twoje prawa',
		body: (
			<>
				<p>Masz prawo do:</p>
				<ul className='list-disc pl-6 space-y-2 mt-4'>
					<li>dostępu do danych oraz otrzymania ich kopii,</li>
					<li>sprostowania danych i ich usunięcia („prawo do bycia zapomnianym”),</li>
					<li>ograniczenia przetwarzania oraz przenoszenia danych,</li>
					<li>
						sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,
					</li>
					<li>
						cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem
						przetwarzania dokonanego przed jej cofnięciem,
					</li>
					<li>
						wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul.
						Stawki 2, 00-193 Warszawa).
					</li>
				</ul>
				<p className='mt-4'>
					Aby skorzystać z tych praw, napisz na adres{' '}
					<a className='text-brand underline' href={contact.emailHref}>
						{contact.email}
					</a>
					.
				</p>
			</>
		),
	},
	{
		title: '6. Pliki cookies i narzędzia analityczne',
		body: (
			<p>
				Strona korzysta wyłącznie z plików cookies i pamięci przeglądarki
				niezbędnych do jej działania. Nie stosujemy obecnie cookies
				analitycznych ani marketingowych. Jeśli w przyszłości je wprowadzimy,
				poprosimy o Twoją zgodę i zaktualizujemy tę politykę. Ustawieniami
				cookies możesz zarządzać w swojej przeglądarce.
			</p>
		),
	},
	{
		title: '7. Bezpieczeństwo i przekazywanie danych poza EOG',
		body: (
			<p>
				Stosujemy środki techniczne i organizacyjne chroniące dane, w tym
				szyfrowane połączenie HTTPS. Co do zasady nie przekazujemy danych poza
				Europejski Obszar Gospodarczy; jeśli nasz dostawca
				przetwarza dane poza EOG, odbywa się to z zastosowaniem zabezpieczeń
				przewidzianych w RODO (np. standardowe klauzule umowne).
			</p>
		),
	},
	{
		title: '8. Zmiany polityki',
		body: (
			<p>
				Polityka może być aktualizowana. Aktualna wersja jest zawsze dostępna na
				tej stronie.
			</p>
		),
	},
];

export default function PrivacyPolicyPage() {
	return (
		<main className='bg-black pt-32 pb-24'>
			<div className='container mx-auto px-6 max-w-3xl'>
				<p className='text-brand text-xs font-bold tracking-[0.3em] uppercase mb-4'>
					Dokumenty
				</p>
				<h1 className='text-4xl md:text-5xl font-black mb-4'>
					Polityka prywatności
				</h1>
				<p className='text-gray-500 text-sm mb-12'>
					Ostatnia aktualizacja: {legal.updated}
				</p>

				<div className='space-y-10'>
					{sections.map((s) => (
						<section key={s.title}>
							<h2 className='text-xl md:text-2xl font-bold mb-3'>{s.title}</h2>
							<div className='text-gray-300 leading-relaxed'>{s.body}</div>
						</section>
					))}
				</div>

				<Link
					href='/kontakt'
					className='inline-block mt-14 text-brand underline underline-offset-4'>
					Wróć do kontaktu
				</Link>
			</div>
		</main>
	);
}
