import type { FaqItem } from './services';

export const SITE_URL = 'https://ross.pl';

export const contact = {
	phone: '+48 508 176 775',
	phoneHref: 'tel:+48508176775',
	email: 'contact@ross-events.pl',
	emailHref: 'mailto:contact@ross-events.pl',
};

// UZUPEŁNIJ danych administratora przed publikacją (wyświetlane w polityce prywatności).
export const legal = {
	companyName: 'ROSS Events [UZUPEŁNIJ: pełna nazwa firmy i forma prawna]',
	address: '[UZUPEŁNIJ: adres siedziby]',
	nip: '[UZUPEŁNIJ: NIP]',
	updated: '12 listopada 2026',
};

export const organizationLd = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	'@id': `${SITE_URL}/#organization`,
	name: 'ROSS Events',
	url: SITE_URL,
	email: contact.email,
	telephone: contact.phone.replace(/\s/g, ''),
	description:
		'Organizacja wydarzeń, technika sceniczna i koordynacja eventów w całej Polsce.',
	areaServed: { '@type': 'Country', name: 'Polska' },
	contactPoint: {
		'@type': 'ContactPoint',
		contactType: 'sales',
		telephone: contact.phone.replace(/\s/g, ''),
		email: contact.email,
		areaServed: 'PL',
		availableLanguage: 'pl',
	},
};

export const footerDescription =
	'ROSS Events — organizacja wydarzeń, technika sceniczna i koordynacja eventów w całej Polsce. Nagłośnienie, oświetlenie, sceny, ekrany LED, namioty i multimedia na koncerty, konferencje oraz imprezy firmowe.';

// ---------- STRONA GŁÓWNA ----------
export const home = {
	metaTitle: 'Obsługa Techniczna Eventów w Całej Polsce | ROSS Events',
	metaDescription:
		'ROSS Events: organizacja i koordynacja eventów, nagłośnienie, oświetlenie, sceny, ekrany LED i namioty. Kompleksowa obsługa wydarzeń w całej Polsce.',
	hero: {
		eyebrow: 'ROSS EVENTS — OD KONCEPCJI DO REALIZACJI',
		h1: 'Kompleksowa obsługa eventów w całej Polsce',
		text: 'Organizujemy, produkujemy i koordynujemy wydarzenia. Zapewniamy technikę sceniczną, nagłośnienie, oświetlenie, sceny, ekrany LED, namioty i wsparcie organizacyjne — wszystko dopasowane do charakteru Twojego eventu.',
		primary: 'Zapytaj o wycenę',
		secondary: 'Poznaj nasze usługi',
		imageAlt:
			'Profesjonalna scena koncertowa z nagłośnieniem, oświetleniem i ekranami LED',
	},
	intro: {
		title: 'Twój event. Nasza realizacja.',
		text: 'Dobry event to połączenie pomysłu, sprawnej organizacji i niezawodnego zaplecza technicznego. W ROSS Events pomagamy przełożyć wizję organizatora na przemyślany plan działania — od doboru rozwiązań scenicznych po koordynację przebiegu wydarzenia na miejscu. Obsługujemy zarówno wydarzenia firmowe i konferencje, jak i koncerty, festiwale oraz imprezy plenerowe w całej Polsce.',
	},
	services: {
		title: 'Nasze usługi eventowe',
		text: 'Jedno wydarzenie, wiele elementów do połączenia. Wybierz kompleksową obsługę lub zamów wyłącznie te usługi, których potrzebujesz.',
	},
	why: {
		title: 'Dlaczego ROSS Events?',
		items: [
			{
				title: 'Spójna obsługa wydarzenia',
				icon: 'layers',
				text: 'Pomagamy połączyć organizację, technikę sceniczną i koordynację w jeden czytelny plan realizacji.',
			},
			{
				title: 'Rozwiązania dopasowane do potrzeb',
				icon: 'sliders',
				text: 'Zakres usług ustalamy na podstawie miejsca, terminu, programu, liczby uczestników i budżetu.',
			},
			{
				title: 'Koordynacja na miejscu',
				icon: 'radio',
				text: 'Dbamy o przepływ informacji między organizatorem, obsługą techniczną, artystami i podwykonawcami.',
			},
			{
				title: 'Działamy w całej Polsce',
				icon: 'mappin',
				text: 'Obsługujemy wydarzenia w różnych lokalizacjach na terenie kraju. Warunki logistyczne i dostępność terminu ustalamy indywidualnie.',
			},
		],
	},
	forWhom: {
		title: 'Obsługujemy wydarzenia różnego typu',
		items: [
			{
				title: 'Koncerty i festiwale',
				icon: 'music',
				text: 'Sceny, nagłośnienie, oświetlenie, multimedia i koordynacja techniczna.',
			},
			{
				title: 'Konferencje i kongresy',
				icon: 'mic',
				text: 'Czytelny dźwięk, prezentacje, transmisje i sprawny przebieg programu.',
			},
			{
				title: 'Eventy firmowe',
				icon: 'building',
				text: 'Produkcja wydarzeń, oprawa sceniczna, atrakcje i koordynacja.',
			},
			{
				title: 'Gale i bankiety',
				icon: 'sparkles',
				text: 'Scenografia, oświetlenie, nagłośnienie i multimedia.',
			},
			{
				title: 'Pikniki i imprezy plenerowe',
				icon: 'tent',
				text: 'Namioty, sceny, zaplecze techniczne i atrakcje.',
			},
			{
				title: 'Premiery i wydarzenia promocyjne',
				icon: 'rocket',
				text: 'Oprawa wizualna, prezentacje i wsparcie realizacyjne.',
			},
		],
	},
	process: {
		title: 'Od zapytania do gotowego wydarzenia',
		steps: [
			{
				title: 'Rozmawiamy o Twoim pomyśle',
				text: 'Poznajemy termin, lokalizację, liczbę uczestników, program i oczekiwania.',
			},
			{
				title: 'Dobieramy zakres usług',
				text: 'Proponujemy rozwiązania techniczne i organizacyjne odpowiednie do projektu.',
			},
			{
				title: 'Przygotowujemy plan realizacji',
				text: 'Ustalamy harmonogram, zakres odpowiedzialności i potrzeby logistyczne.',
			},
			{
				title: 'Realizujemy wydarzenie',
				text: 'W uzgodnionym zakresie koordynujemy przygotowania, przebieg i zakończenie eventu.',
			},
		],
	},
	realizations: {
		eyebrow: 'Realizacje',
		title: 'Wydarzenia, które warto zobaczyć',
		text: 'Zobacz przykłady wydarzeń i rozwiązań eventowych. Zdjęcia z rzeczywistych realizacji najlepiej pokazują skalę, jakość oprawy i możliwości techniczne.',
		button: 'Zobacz realizacje',
	},
	coverage: {
		title: 'Obsługa eventów w całej Polsce',
		text: 'Pracujemy przy wydarzeniach organizowanych w różnych regionach Polski — w dużych miastach i mniejszych miejscowościach. Niezależnie od tego, czy planujesz konferencję w Warszawie, koncert w Krakowie, galę we Wrocławiu czy imprezę plenerową w innej lokalizacji, skontaktuj się z nami, aby omówić możliwości realizacji.',
	},
	faqTitle: 'Najczęstsze pytania',
	faq: [
		{
			q: 'Czy ROSS Events obsługuje wydarzenia w całej Polsce?',
			a: 'Tak, oferujemy obsługę wydarzeń na terenie całego kraju. Możliwość realizacji zależy od terminu, lokalizacji i zakresu zamówienia.',
		},
		{
			q: 'Czy mogę zamówić tylko jedną usługę?',
			a: 'Tak. Możesz zapytać o wybrane elementy, takie jak nagłośnienie, oświetlenie, scena, ekran LED, namiot lub koordynator eventu.',
		},
		{
			q: 'Jak otrzymać wycenę eventu?',
			a: 'Prześlij termin, lokalizację, rodzaj wydarzenia, przewidywaną liczbę uczestników i potrzebny zakres usług. Na tej podstawie możemy przygotować propozycję współpracy.',
		},
		{
			q: 'Czy zapewniacie koordynatora wydarzenia na miejscu?',
			a: 'Tak, koordynacja eventu może być częścią kompleksowej obsługi lub osobną usługą, której zakres ustalamy przed wydarzeniem.',
		},
	] as FaqItem[],
	closing: {
		eyebrow: 'Kontakt',
		title: 'Planujesz wydarzenie? Porozmawiajmy.',
		text: 'Opowiedz nam o swoim evencie. Pomożemy dobrać odpowiednie rozwiązania i ustalić zakres obsługi.',
		button: 'Poproś o wycenę',
	},
};

// ---------- OFERTA (przegląd) ----------
export const offerPage = {
	metaTitle: 'Oferta — Organizacja i Technika Eventowa | ROSS Events',
	metaDescription:
		'Oferta ROSS Events: organizacja eventów, technika sceniczna, nagłośnienie, oświetlenie, sceny, ekrany LED, namioty, streaming, atrakcje i koordynacja.',
	eyebrow: 'Oferta ROSS Events',
	h1: 'Nasze usługi eventowe',
	text: 'Jedno wydarzenie, wiele elementów do połączenia. Wybierz kompleksową obsługę lub zamów wyłącznie te usługi, których potrzebujesz.',
};

// ---------- REALIZACJE ----------
export const realizationsPage = {
	metaTitle: 'Realizacje Eventów, Koncertów i Konferencji | ROSS',
	metaDescription:
		'Poznaj realizacje ROSS Events: koncerty, konferencje, gale i imprezy plenerowe. Zobacz oprawę techniczną i rozwiązania eventowe.',
	eyebrow: 'Realizacje',
	h1: 'Nasze realizacje eventowe',
	tagline: 'Każde wydarzenie ma własną historię.',
	text: 'Zobacz projekty i wydarzenia, przy których ROSS Events odpowiadało za uzgodniony zakres organizacji, techniki scenicznej lub koordynacji.',
	imageAlt: 'Publiczność przed oświetloną sceną podczas wydarzenia plenerowego',
	categories: [
		{
			title: 'Koncerty i festiwale',
			icon: 'music',
			text: 'Nagłośnienie, oświetlenie, scena, multimedia i współpraca ekip podczas wydarzeń muzycznych.',
		},
		{
			title: 'Konferencje i gale',
				icon: 'mic',
			text: 'Oprawa techniczna wydarzeń biznesowych, prezentacji, wystąpień i uroczystości.',
		},
		{
			title: 'Eventy firmowe i plenerowe',
				icon: 'tent',
			text: 'Infrastruktura eventowa, atrakcje, namioty i koordynacja programu.',
		},
	],
	closing: {
		eyebrow: 'Kontakt',
		title: 'Chcesz podobną realizację?',
		text: 'Opowiedz nam o planowanym wydarzeniu, a przygotujemy propozycję współpracy.',
		button: 'Zapytaj o realizację eventu',
	},
};

// ---------- O NAS ----------
export const aboutPage = {
	metaTitle: 'O Nas — Organizacja i Technika Eventowa | ROSS',
	metaDescription:
		'Poznaj ROSS Events — organizacja wydarzeń, technika sceniczna i koordynacja eventów na terenie całej Polski. Sprawdź, jak pracujemy.',
	imageAlt: 'Zespół techniczny przygotowujący zaplecze sceniczne wydarzenia',
	h1: 'ROSS Events — tworzymy zaplecze udanych wydarzeń',
	tagline: 'Łączymy organizację, technikę i koordynację.',
	intro:
		'ROSS Events to oferta usług związanych z przygotowaniem i realizacją wydarzeń. Pomagamy organizatorom koncertów, konferencji, gal i imprez firmowych dobrać odpowiednie rozwiązania techniczne oraz zadbać o przebieg eventu.',
	howTitle: 'Jak pracujemy?',
	howText:
		'Zaczynamy od rozmowy o celu wydarzenia. Analizujemy lokalizację, termin, program, potrzeby techniczne i oczekiwany efekt. Następnie ustalamy zakres współpracy i sposób koordynacji działań.',
	valuesTitle: 'Co jest dla nas ważne?',
	values: [
		{
			title: 'Dobra komunikacja',
				icon: 'message',
			text: 'Jasne ustalenia między organizatorem a wykonawcami ułatwiają sprawną realizację.',
		},
		{
			title: 'Dopasowanie do projektu',
				icon: 'sliders',
			text: 'Nie każde wydarzenie potrzebuje tych samych rozwiązań. Dobieramy zakres usług do rzeczywistych potrzeb.',
		},
		{
			title: 'Spójna realizacja',
				icon: 'layers',
			text: 'Technika sceniczna, multimedia i harmonogram powinny wspierać program, a nie go komplikować.',
		},
		{
			title: 'Współpraca w całej Polsce',
				icon: 'mappin',
			text: 'Podejmujemy się realizacji wydarzeń w różnych regionach kraju, po ustaleniu dostępności i logistyki.',
		},
	],
	offerTitle: 'Nasza oferta',
	offerText:
		'Organizacja eventów, technika sceniczna, nagłośnienie, oświetlenie, sceny, ekrany LED, namioty, streaming, atrakcje i koordynacja wydarzeń.',
	closing: {
		eyebrow: 'Kontakt',
		title: 'Poznajmy Twój projekt',
		text: 'Opowiedz nam o swoim evencie, a pomożemy ustalić zakres obsługi.',
		button: 'Skontaktuj się z nami',
	},
};

// ---------- KONTAKT ----------
export const contactPage = {
	metaTitle: 'Kontakt i Wycena Eventu | ROSS Events',
	metaDescription:
		'Skontaktuj się z ROSS Events. Zapytaj o organizację eventu, technikę sceniczną, nagłośnienie, oświetlenie lub koordynację wydarzenia w Polsce.',
	imageAlt: 'Przygotowanie sceny i obsługa techniczna wydarzenia',
	h1: 'Kontakt — porozmawiajmy o Twoim wydarzeniu',
	tagline: 'Masz pomysł na event? Pomożemy zaplanować jego realizację.',
	intro:
		'Niezależnie od tego, czy potrzebujesz kompleksowej obsługi wydarzenia, samego nagłośnienia, sceny, ekranu LED czy koordynatora na miejscu — prześlij nam podstawowe informacje. Wrócimy z propozycją dalszych kroków.',
	quoteTitle: 'Zapytaj o wycenę',
	quoteLead: 'Aby sprawniej przygotować ofertę, podaj:',
	quoteList: [
		'Imię i nazwisko lub nazwę firmy.',
		'Adres e-mail i numer telefonu.',
		'Termin wydarzenia.',
		'Miasto i lokalizację.',
		'Rodzaj wydarzenia.',
		'Szacunkową liczbę uczestników.',
		'Zakres potrzebnych usług.',
		'Dodatkowe informacje, np. rider techniczny lub ramowy harmonogram.',
	],
	dataTitle: 'Dane kontaktowe',
	coverageTitle: 'Obsługa eventów w całej Polsce',
	coverageText:
		'Działamy na terenie całego kraju. Prześlij miejsce i termin wydarzenia, aby ustalić dostępność oraz warunki realizacji.',
	faqTitle: 'FAQ — kontakt i wycena',
	faq: [
		{
			q: 'Czy wycena jest przygotowywana indywidualnie?',
			a: 'Tak, zakres i koszt usług zależą od szczegółów wydarzenia.',
		},
		{
			q: 'Jakie dane przyspieszą przygotowanie oferty?',
			a: 'Termin, lokalizacja, liczba uczestników, program i lista potrzebnych usług.',
		},
		{
			q: 'Czy mogę przesłać rider techniczny?',
			a: 'Tak, warto dołączyć go do zapytania, jeśli wydarzenie obejmuje występy artystyczne.',
		},
		{
			q: 'Czy mogę zapytać o kilka usług jednocześnie?',
			a: 'Tak. W jednym zapytaniu możesz wskazać wszystkie potrzebne elementy realizacji.',
		},
	] as FaqItem[],
	submit: 'Wyślij zapytanie',
};
