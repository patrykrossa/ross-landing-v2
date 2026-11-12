export interface FaqItem {
	q: string;
	a: string;
}

export interface ContentBlock {
	title: string;
	text?: string;
	items?: { title: string; text: string }[];
	list?: string[];
}

export interface ServicePage {
	slug: string;
	/** krótka nazwa do menu, kafelków i formularza */
	name: string;
	/** opis na kafelku (strona główna / oferta) */
	tileText: string;
	/** etykieta przycisku na kafelku */
	tileButton: string;
	metaTitle: string;
	metaDescription: string;
	h1: string;
	tagline: string;
	intro: string;
	heroCta: string;
	heroImage: string;
	heroImageAlt: string;
	blocks: ContentBlock[];
	faqTitle: string;
	faq: FaqItem[];
	closingTitle: string;
	closingText?: string;
	closingCta: string;
	related: string[];
}

// Zdjęcia poglądowe (tło). Podmień na autentyczne fotografie realizacji ROSS Events.
const IMG = {
	festival:
		'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop',
	conference:
		'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2070&auto=format&fit=crop',
	picnic:
		'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop',
	gala: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
	concert:
		'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop',
	corporate:
		'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop',
	studio:
		'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop',
	tent: '/images/namioty.jpeg',
};

export const services: ServicePage[] = [
	{
		slug: 'organizacja-eventow',
		name: 'Organizacja eventów',
		tileText:
			'Planowanie i realizacja imprez firmowych, konferencji, gal, koncertów i wydarzeń plenerowych. Pomagamy połączyć wszystkie elementy wydarzenia w spójną całość.',
		tileButton: 'Organizacja eventów',
		metaTitle: 'Organizacja Eventów i Imprez Firmowych | ROSS Events',
		metaDescription:
			'Organizacja eventów w całej Polsce: konferencje, gale, imprezy firmowe, koncerty i wydarzenia plenerowe. Poznaj ofertę ROSS Events.',
		h1: 'Organizacja eventów i kompleksowa obsługa wydarzeń',
		tagline: 'Od pierwszego pomysłu po ostatni punkt programu.',
		intro:
			'ROSS Events pomaga przygotowywać wydarzenia firmowe, konferencje, gale, koncerty i imprezy plenerowe. Łączymy planowanie z doborem infrastruktury, techniki scenicznej, multimediów i atrakcji, aby każdy element wydarzenia współgrał z jego celem.',
		heroCta: 'Zapytaj o organizację eventu',
		heroImage: IMG.gala,
		heroImageAlt:
			'Elegancka sala przygotowana na firmową galę i wydarzenie biznesowe',
		blocks: [
			{
				title: 'Kompleksowa organizacja imprez',
				text: 'Dobre wydarzenie zaczyna się od jasnego planu. Ustalamy charakter eventu, jego odbiorców, miejsce i harmonogram, a następnie dobieramy rozwiązania organizacyjne i techniczne. Możesz zlecić nam szeroki zakres prac albo skorzystać z wybranych usług.',
			},
			{
				title: 'Jakie wydarzenia obsługujemy?',
				items: [
					{
						title: 'Eventy firmowe i integracyjne',
						text: 'Spotkania zespołów, jubileusze, wydarzenia dla klientów i partnerów biznesowych. Dbamy o spójną oprawę i odpowiednie zaplecze.',
					},
					{
						title: 'Konferencje i kongresy',
						text: 'Wydarzenia wymagające czytelnego nagłośnienia, prezentacji multimedialnych, sprawnego harmonogramu i koordynacji prelegentów.',
					},
					{
						title: 'Gale i bankiety',
						text: 'Uroczyste wydarzenia z oprawą świetlną, sceną, multimediami i programem artystycznym.',
					},
					{
						title: 'Koncerty i festiwale',
						text: 'Wydarzenia muzyczne, w których kluczową rolę odgrywają technika sceniczna, logistyka i współpraca ekip.',
					},
					{
						title: 'Pikniki i wydarzenia plenerowe',
						text: 'Imprezy na otwartej przestrzeni, wymagające zaplecza namiotowego, scenicznego i atrakcji dla uczestników.',
					},
				],
			},
			{
				title: 'Co możemy przygotować?',
				list: [
					'Koncepcję i ramowy plan wydarzenia.',
					'Dobór sceny, nagłośnienia, oświetlenia i multimediów.',
					'Rozwiązania namiotowe i wyposażenie przestrzeni.',
					'Wsparcie przy harmonogramie i współpracy podwykonawców.',
					'Koordynację przebiegu eventu na miejscu.',
				],
			},
			{
				title: 'Dlaczego warto połączyć organizację z techniką sceniczną?',
				text: 'Jedna spójna koncepcja pozwala lepiej zaplanować przestrzeń, program i potrzeby techniczne. Dzięki temu łatwiej uniknąć rozbieżności między scenariuszem a możliwościami miejsca realizacji.',
			},
		],
		faqTitle: 'FAQ — organizacja eventów',
		faq: [
			{
				q: 'Ile kosztuje organizacja eventu?',
				a: 'Koszt zależy od rodzaju wydarzenia, lokalizacji, liczby gości, programu i zakresu usług. Każde zapytanie wyceniamy indywidualnie.',
			},
			{
				q: 'Czy organizujecie eventy w całej Polsce?',
				a: 'Tak. Obsługujemy wydarzenia na terenie całego kraju, po potwierdzeniu dostępności i warunków realizacji.',
			},
			{
				q: 'Czy mogę zamówić wyłącznie obsługę techniczną?',
				a: 'Tak. Organizator może zlecić nam wybrane usługi, bez zamawiania kompleksowej organizacji eventu.',
			},
			{
				q: 'Kiedy najlepiej rozpocząć przygotowania?',
				a: 'Im większe wydarzenie, tym wcześniej warto rozpocząć planowanie. Termin ustalamy indywidualnie, biorąc pod uwagę dostępność sprzętu i wykonawców.',
			},
		],
		closingTitle: 'Zaplanuj event z ROSS Events',
		closingText:
			'Prześlij podstawowe informacje o wydarzeniu. Pomożemy ustalić zakres potrzebnych usług.',
		closingCta: 'Poproś o wycenę eventu',
		related: ['koordynacja-eventow', 'technika-sceniczna', 'atrakcje-eventowe'],
	},
	{
		slug: 'technika-sceniczna',
		name: 'Technika sceniczna',
		tileText:
			'Zaplecze techniczne wydarzeń: nagłośnienie, oświetlenie, konstrukcje sceniczne i multimedia, wraz z ustalonym zakresem obsługi.',
		tileButton: 'Technika sceniczna',
		metaTitle: 'Technika Sceniczna i Obsługa Techniczna | ROSS Events',
		metaDescription:
			'Technika sceniczna na koncerty, konferencje i eventy. Nagłośnienie, oświetlenie, sceny, ekrany LED i obsługa techniczna w całej Polsce.',
		h1: 'Technika sceniczna i obsługa techniczna eventów',
		tagline: 'Zaplecze techniczne, które wspiera każde wydarzenie.',
		intro:
			'ROSS Events oferuje rozwiązania z zakresu techniki scenicznej na koncerty, festiwale, konferencje, gale i imprezy firmowe. Dobieramy nagłośnienie, oświetlenie, sceny oraz multimedia do charakteru i skali wydarzenia.',
		heroCta: 'Zamów obsługę techniczną',
		heroImage: IMG.festival,
		heroImageAlt: 'Stanowisko realizacji techniki scenicznej podczas koncertu',
		blocks: [
			{
				title: 'Kompleksowa technika sceniczna',
				text: 'Każda realizacja wymaga uwzględnienia przestrzeni, programu, liczby uczestników i wymagań technicznych. Pomagamy połączyć sprzęt, konstrukcje i pracę zespołów w spójny plan.',
			},
			{
				title: 'Zakres usług technicznych',
				items: [
					{
						title: 'Nagłośnienie',
						text: 'Systemy audio na koncerty, konferencje i wydarzenia plenerowe, dobierane do warunków akustycznych i rodzaju programu.',
					},
					{
						title: 'Oświetlenie sceniczne',
						text: 'Oprawa świetlna, która poprawia widoczność i buduje atmosferę wydarzenia.',
					},
					{
						title: 'Sceny i konstrukcje',
						text: 'Rozwiązania sceniczne dla artystów, prelegentów i prowadzących, dopasowane do potrzeb wydarzenia.',
					},
					{
						title: 'Multimedia i ekrany LED',
						text: 'Prezentacje, animacje, materiały wideo i obraz z kamer jako część oprawy wizualnej.',
					},
				],
			},
			{
				title: 'Obsługa techniczna od przygotowań po zakończenie',
				text: 'W zależności od uzgodnionego zakresu współpraca może obejmować planowanie techniczne, dostarczenie urządzeń, montaż, konfigurację, obsługę podczas wydarzenia i demontaż.',
			},
			{
				title: 'Dla jakich wydarzeń?',
				text: 'Realizujemy rozwiązania techniczne dla koncertów, festiwali, konferencji, gal, wydarzeń promocyjnych i imprez firmowych w całej Polsce.',
			},
		],
		faqTitle: 'FAQ — technika sceniczna',
		faq: [
			{
				q: 'Co obejmuje obsługa techniczna eventu?',
				a: 'Zakres może obejmować nagłośnienie, oświetlenie, scenę, multimedia, montaż i obsługę. Szczegóły zależą od projektu.',
			},
			{
				q: 'Czy mogę wynająć tylko sprzęt do jednego elementu wydarzenia?',
				a: 'Możesz zapytać o wybrane rozwiązania, np. samo nagłośnienie lub oświetlenie. Dostępność i warunki ustalamy indywidualnie.',
			},
			{
				q: 'Jak przygotować zapytanie?',
				a: 'Podaj datę, miejsce, liczbę uczestników, program i ewentualne wymagania techniczne wykonawców.',
			},
			{
				q: 'Czy obsługujecie wydarzenia plenerowe?',
				a: 'Tak. Dobór urządzeń i konstrukcji musi uwzględniać warunki lokalizacji oraz wymagania bezpieczeństwa.',
			},
		],
		closingTitle: 'Technika sceniczna dopasowana do Twojego eventu',
		closingText:
			'Porozmawiajmy o wymaganiach wydarzenia i możliwych rozwiązaniach.',
		closingCta: 'Zapytaj o ofertę',
		related: [
			'naglosnienie-imprez',
			'oswietlenie-sceniczne',
			'wynajem-scen',
			'ekrany-led',
		],
	},
	{
		slug: 'naglosnienie-imprez',
		name: 'Nagłośnienie imprez',
		tileText:
			'Systemy audio dobierane do przestrzeni, programu i liczby uczestników — od konferencji po koncerty plenerowe.',
		tileButton: 'Nagłośnienie',
		metaTitle: 'Nagłośnienie Imprez i Koncertów | ROSS Events',
		metaDescription:
			'Nagłośnienie koncertów, konferencji i imprez firmowych w całej Polsce. Dobór systemów audio i obsługa techniczna wydarzeń. Zapytaj o wycenę.',
		h1: 'Nagłośnienie imprez, koncertów i konferencji',
		tagline: 'Dobry dźwięk to podstawa udanego wydarzenia.',
		intro:
			'ROSS Events oferuje nagłośnienie koncertów, konferencji, gal i imprez plenerowych. Pomagamy dobrać system audio do miejsca, liczby uczestników i charakteru programu.',
		heroCta: 'Zapytaj o nagłośnienie',
		heroImage: IMG.concert,
		heroImageAlt: 'Konsoleta realizatora dźwięku i scena koncertowa w tle',
		blocks: [
			{
				title: 'Profesjonalne nagłośnienie wydarzeń',
				text: 'Odpowiednio dobrany dźwięk wpływa na komfort odbioru muzyki, wystąpień i prezentacji. Przy planowaniu nagłośnienia uwzględniamy układ przestrzeni, sposób wykorzystania sceny oraz wymagania organizatora.',
			},
			{
				title: 'Gdzie wykorzystujemy systemy audio?',
				items: [
					{
						title: 'Nagłośnienie koncertów',
						text: 'Systemy dla występów muzycznych, uwzględniające wymagania wykonawców i charakter koncertu.',
					},
					{
						title: 'Nagłośnienie konferencji',
						text: 'Rozwiązania zapewniające czytelność mowy podczas wystąpień, paneli i prezentacji.',
					},
					{
						title: 'Nagłośnienie imprez firmowych',
						text: 'Oprawa audio gal, bankietów, jubileuszy i spotkań integracyjnych.',
					},
					{
						title: 'Nagłośnienie wydarzeń plenerowych',
						text: 'Dobór systemów do wielkości terenu, rozmieszczenia uczestników i warunków realizacji.',
					},
				],
			},
			{
				title: 'Co wpływa na dobór nagłośnienia?',
				text: 'Lokalizacja, liczba odbiorców, rodzaj programu, wymagania artystów, dostęp do zasilania oraz czas montażu. Warto przesłać rider techniczny, jeśli wydarzenie obejmuje koncert.',
			},
		],
		faqTitle: 'FAQ — nagłośnienie',
		faq: [
			{
				q: 'Ile kosztuje nagłośnienie imprezy?',
				a: 'Cena zależy od skali wydarzenia, rodzaju sprzętu, transportu i zakresu obsługi. Przygotowujemy indywidualną wycenę.',
			},
			{
				q: 'Czy nagłośnienie na konferencję różni się od koncertowego?',
				a: 'Tak. Podczas konferencji priorytetem jest zrozumiałość mowy, a koncert wymaga dopasowania systemu do muzyki i warunków występu.',
			},
			{
				q: 'Czy można połączyć nagłośnienie z oświetleniem?',
				a: 'Tak. Oba elementy mogą być częścią jednej obsługi technicznej wydarzenia.',
			},
			{
				q: 'Jakie dane są potrzebne do wyceny?',
				a: 'Termin, miejsce, typ imprezy, liczba uczestników, program i ewentualny rider techniczny.',
			},
		],
		closingTitle: 'Zadbaj o dźwięk swojego wydarzenia',
		closingCta: 'Zamów wycenę nagłośnienia',
		related: ['technika-sceniczna', 'oswietlenie-sceniczne', 'wynajem-scen'],
	},
	{
		slug: 'oswietlenie-sceniczne',
		name: 'Oświetlenie sceniczne',
		tileText:
			'Światło, które buduje atmosferę, eksponuje scenę i podkreśla najważniejsze momenty wydarzenia.',
		tileButton: 'Oświetlenie',
		metaTitle: 'Oświetlenie Sceniczne i Eventowe | ROSS Events',
		metaDescription:
			'Oświetlenie sceniczne na koncerty, gale i eventy firmowe. Oprawa świetlna, efekty i obsługa techniczna wydarzeń w całej Polsce.',
		h1: 'Oświetlenie sceniczne i eventowe',
		tagline: 'Światło, które tworzy atmosferę.',
		intro:
			'ROSS Events oferuje oświetlenie sceniczne i eventowe na koncerty, gale, konferencje i imprezy firmowe. Dobieramy oprawę świetlną do scenografii, programu i charakteru wydarzenia.',
		heroCta: 'Zapytaj o oświetlenie',
		heroImage: IMG.festival,
		heroImageAlt: 'Efektowne oświetlenie sceniczne podczas koncertu',
		blocks: [
			{
				title: 'Oświetlenie dopasowane do wydarzenia',
				text: 'Światło może podkreślać artystów, prowadzących i elementy scenografii, a także budować nastrój przestrzeni. Ważne jest połączenie efektu wizualnego z funkcjonalnością i komfortem uczestników.',
			},
			{
				title: 'Rodzaje zastosowań',
				items: [
					{
						title: 'Oświetlenie koncertowe',
						text: 'Dynamiczna oprawa występów muzycznych, dostosowana do sceny i programu artystycznego.',
					},
					{
						title: 'Oświetlenie gal i bankietów',
						text: 'Eleganckie doświetlenie przestrzeni, sceny, dekoracji i najważniejszych momentów uroczystości.',
					},
					{
						title: 'Oświetlenie konferencji',
						text: 'Funkcjonalne oświetlenie prelegentów i sceny, uwzględniające prezentacje oraz rejestrację obrazu.',
					},
					{
						title: 'Oświetlenie dekoracyjne',
						text: 'Podkreślenie architektury, stref dla gości i identyfikacji wizualnej wydarzenia.',
					},
				],
			},
			{
				title: 'Spójna oprawa sceniczna',
				text: 'Oświetlenie można zaplanować wspólnie z nagłośnieniem, sceną i ekranami LED, aby cała oprawa wydarzenia tworzyła jednolitą całość.',
			},
		],
		faqTitle: 'FAQ — oświetlenie sceniczne',
		faq: [
			{
				q: 'Ile kosztuje wynajem oświetlenia?',
				a: 'Cena zależy od liczby urządzeń, wielkości przestrzeni, czasu pracy i zakresu obsługi.',
			},
			{
				q: 'Czy oświetlenie jest potrzebne podczas konferencji?',
				a: 'Tak, odpowiednie doświetlenie prelegentów i sceny poprawia odbiór wydarzenia oraz jakość rejestracji wideo.',
			},
			{
				q: 'Czy można zamówić oświetlenie bez nagłośnienia?',
				a: 'Można zapytać o samodzielną usługę oświetleniową; zakres ustalamy indywidualnie.',
			},
			{
				q: 'Czy przygotowujecie oświetlenie wydarzeń plenerowych?',
				a: 'Tak, z uwzględnieniem lokalizacji, warunków technicznych i potrzeb wydarzenia.',
			},
		],
		closingTitle: 'Stwórz odpowiedni klimat wydarzenia',
		closingCta: 'Zapytaj o wycenę oświetlenia',
		related: ['wynajem-scen', 'ekrany-led', 'technika-sceniczna'],
	},
	{
		slug: 'wynajem-scen',
		name: 'Wynajem scen',
		tileText:
			'Rozwiązania sceniczne na koncerty, festiwale, wydarzenia firmowe i imprezy plenerowe.',
		tileButton: 'Sceny i konstrukcje',
		metaTitle: 'Wynajem Scen na Koncerty i Eventy | ROSS Events',
		metaDescription:
			'Sceny i konstrukcje sceniczne na koncerty, festiwale, konferencje i imprezy plenerowe. Zapytaj o wynajem sceny i obsługę techniczną.',
		h1: 'Wynajem scen i konstrukcji scenicznych',
		tagline: 'Scena dopasowana do skali Twojego wydarzenia.',
		intro:
			'ROSS Events oferuje rozwiązania sceniczne na koncerty, festiwale, imprezy firmowe i wydarzenia plenerowe. Pomagamy dopasować konstrukcję do programu, dostępnej przestrzeni i potrzeb technicznych.',
		heroCta: 'Zapytaj o wynajem sceny',
		heroImage: IMG.concert,
		heroImageAlt: 'Duża scena plenerowa przygotowana na koncert',
		blocks: [
			{
				title: 'Sceny na różne wydarzenia',
				text: 'Odpowiednio zaplanowana scena zapewnia przestrzeń dla artystów, prowadzących i prelegentów oraz umożliwia montaż elementów oprawy technicznej.',
				items: [
					{
						title: 'Sceny koncertowe',
						text: 'Rozwiązania dla wydarzeń muzycznych, z uwzględnieniem potrzeb zespołów i obsługi technicznej.',
					},
					{
						title: 'Sceny na festiwale',
						text: 'Konstrukcje dopasowane do programu, wielkości publiczności i warunków terenu.',
					},
					{
						title: 'Podesty i sceny eventowe',
						text: 'Przestrzeń do wystąpień, prezentacji, gal i wydarzeń firmowych.',
					},
				],
			},
			{
				title: 'Scena wraz z oprawą techniczną',
				text: 'W ramach projektu można zaplanować także nagłośnienie, oświetlenie i multimedia. Zakres dostawy, montażu i obsługi ustalamy indywidualnie.',
			},
			{
				title: 'Co przygotować do wyceny?',
				text: 'Datę i miejsce wydarzenia, wymiary dostępnej przestrzeni, rodzaj programu, wymagania techniczne i planowany czas użytkowania sceny.',
			},
		],
		faqTitle: 'FAQ — wynajem scen',
		faq: [
			{
				q: 'Ile kosztuje wynajem sceny?',
				a: 'Cena zależy od wielkości konstrukcji, lokalizacji, czasu wynajmu i zakresu prac technicznych.',
			},
			{
				q: 'Czy można wynająć scenę na jeden dzień?',
				a: 'Czas wynajmu ustalamy indywidualnie, uwzględniając montaż i demontaż.',
			},
			{
				q: 'Czy scena może być ustawiona na zewnątrz?',
				a: 'Tak, po dobraniu rozwiązania do warunków lokalizacji i wymagań technicznych.',
			},
			{
				q: 'Czy można zamówić scenę z oświetleniem i nagłośnieniem?',
				a: 'Tak, można połączyć te elementy w ramach jednego projektu.',
			},
		],
		closingTitle: 'Przygotuj scenę na swoje wydarzenie',
		closingCta: 'Zamów wycenę sceny',
		related: ['naglosnienie-imprez', 'oswietlenie-sceniczne', 'technika-sceniczna'],
	},
	{
		slug: 'ekrany-led',
		name: 'Ekrany LED i multimedia',
		tileText:
			'Oprawa wizualna wydarzeń: ekrany LED, prezentacje, animacje, obraz z kamer i materiały promocyjne.',
		tileButton: 'Ekrany LED',
		metaTitle: 'Wynajem Ekranów LED na Eventy | ROSS Events',
		metaDescription:
			'Ekrany LED na koncerty, konferencje, targi i gale. Oprawa multimedialna, prezentacje i obraz z kamer. Zapytaj ROSS Events o ofertę.',
		h1: 'Wynajem ekranów LED na eventy i koncerty',
		tagline: 'Obraz, który przyciąga uwagę.',
		intro:
			'ROSS Events oferuje ekrany LED i rozwiązania multimedialne na wydarzenia firmowe, koncerty, targi, konferencje i gale. Pomagamy zaplanować czytelną i atrakcyjną oprawę wizualną.',
		heroCta: 'Zapytaj o ekran LED',
		heroImage: IMG.concert,
		heroImageAlt: 'Duży ekran LED jako tło sceny podczas wydarzenia',
		blocks: [
			{
				title: 'Ekrany LED na wydarzenia',
				text: 'Ekran LED może pełnić funkcję tła scenicznego, powierzchni prezentacyjnej, nośnika informacji lub elementu scenografii. Dobór rozwiązania zależy od miejsca i rodzaju prezentowanych treści.',
			},
			{
				title: 'Zastosowania ekranów LED',
				items: [
					{
						title: 'Koncerty i festiwale',
						text: 'Animacje, grafiki i obraz z kamer wspierające oprawę występów.',
					},
					{
						title: 'Konferencje i kongresy',
						text: 'Prezentacje, materiały informacyjne, identyfikacja wizualna i wyświetlanie wystąpień.',
					},
					{
						title: 'Gale i eventy firmowe',
						text: 'Wizualna oprawa sceny, komunikaty, materiały sponsorów i filmy promocyjne.',
					},
					{
						title: 'Targi i premiery produktów',
						text: 'Prezentacje marek, animacje i treści przyciągające uwagę odbiorców.',
					},
				],
			},
			{
				title: 'Multimedia jako część techniki scenicznej',
				text: 'Ekrany LED można łączyć z oświetleniem, sceną, nagłośnieniem i transmisją obrazu. Przy planowaniu ważne są rozdzielczość materiałów, odległość widzów i warunki oświetleniowe.',
			},
		],
		faqTitle: 'FAQ — ekrany LED',
		faq: [
			{
				q: 'Ile kosztuje wynajem ekranu LED?',
				a: 'Cena zależy od powierzchni, parametrów, lokalizacji, czasu użytkowania i obsługi.',
			},
			{
				q: 'Czy ekran LED nadaje się do pleneru?',
				a: 'Tak, jeśli jest to konstrukcja i ekran przeznaczony do zastosowań zewnętrznych.',
			},
			{
				q: 'Czy na ekranie można pokazać obraz z kamer?',
				a: 'Tak, po odpowiednim przygotowaniu systemu realizacji obrazu.',
			},
			{
				q: 'Jak dobrać wielkość ekranu?',
				a: 'Należy uwzględnić odległość odbiorców, rodzaj treści i wielkość przestrzeni.',
			},
		],
		closingTitle: 'Pokaż swoje wydarzenie w najlepszym świetle',
		closingCta: 'Zapytaj o wynajem ekranu LED',
		related: ['streaming-eventow', 'wynajem-scen', 'technika-sceniczna'],
	},
	{
		slug: 'namioty-eventowe',
		name: 'Namioty eventowe',
		tileText:
			'Przestrzeń dla gości, wystawców i organizatorów — namioty i rozwiązania infrastrukturalne na wydarzenia plenerowe.',
		tileButton: 'Namioty eventowe',
		metaTitle: 'Wynajem Namiotów Eventowych | ROSS Events',
		metaDescription:
			'Namioty eventowe na bankiety, imprezy firmowe, targi, pikniki i wydarzenia plenerowe w całej Polsce. Zapytaj o dostępność i wycenę.',
		h1: 'Wynajem namiotów eventowych na imprezy plenerowe',
		tagline: 'Wygodna przestrzeń dla Twoich gości.',
		intro:
			'ROSS Events oferuje rozwiązania namiotowe na wydarzenia firmowe, bankiety, targi, pikniki i imprezy plenerowe. Pomagamy zaplanować przestrzeń odpowiadającą liczbie uczestników i charakterowi wydarzenia.',
		heroCta: 'Zapytaj o namiot eventowy',
		heroImage: IMG.tent,
		heroImageAlt: 'Oświetlony namiot eventowy przygotowany na bankiet plenerowy',
		blocks: [
			{
				title: 'Namioty na różne okazje',
				text: 'Odpowiednio dobrany namiot pozwala wydzielić strefy dla gości, wystawców, gastronomii lub zaplecza organizacyjnego. Przy wyborze konstrukcji liczą się powierzchnia, układ terenu i planowana funkcja przestrzeni.',
				items: [
					{
						title: 'Namioty na imprezy firmowe',
						text: 'Przestrzeń na spotkania integracyjne, jubileusze i wydarzenia dla klientów.',
					},
					{
						title: 'Namioty na bankiety i gale',
						text: 'Zadaszona przestrzeń, którą można uzupełnić o odpowiednią aranżację i oświetlenie.',
					},
					{
						title: 'Namioty na pikniki i festiwale',
						text: 'Strefy wypoczynku, gastronomii, obsługi i aktywności uczestników.',
					},
					{
						title: 'Namioty targowe',
						text: 'Przestrzeń do prezentacji produktów i prowadzenia działań promocyjnych.',
					},
				],
			},
			{
				title: 'Wyposażenie przestrzeni',
				text: 'W zależności od potrzeb projekt może obejmować oświetlenie, nagłośnienie, meble i dodatkowe elementy infrastruktury. Dostępność konkretnych opcji potwierdzamy podczas wyceny.',
			},
		],
		faqTitle: 'FAQ — namioty eventowe',
		faq: [
			{
				q: 'Ile kosztuje wynajem namiotu?',
				a: 'Koszt zależy od wielkości, rodzaju konstrukcji, czasu wynajmu, transportu i wyposażenia.',
			},
			{
				q: 'Jak dobrać wielkość namiotu?',
				a: 'Trzeba uwzględnić liczbę gości, ustawienie stołów, strefy komunikacyjne i funkcję przestrzeni.',
			},
			{
				q: 'Czy namiot można wynająć na kilka dni?',
				a: 'Termin i czas wynajmu ustalamy indywidualnie.',
			},
			{
				q: 'Czy namiot można wyposażyć w oświetlenie?',
				a: 'Tak, można zaplanować oprawę świetlną i inne elementy wyposażenia, zależnie od dostępności.',
			},
		],
		closingTitle: 'Zaplanuj przestrzeń na wydarzenie',
		closingCta: 'Poproś o wycenę namiotu',
		related: ['organizacja-eventow', 'atrakcje-eventowe'],
	},
	{
		slug: 'streaming-eventow',
		name: 'Streaming i transmisje',
		tileText:
			'Obsługa multimedialna konferencji, wydarzeń hybrydowych i transmisji na żywo.',
		tileButton: 'Streaming',
		metaTitle: 'Streaming Eventów i Transmisje na Żywo | ROSS',
		metaDescription:
			'Streaming konferencji, koncertów i wydarzeń hybrydowych. Obsługa multimedialna, realizacja obrazu i dźwięku. Zapytaj ROSS Events.',
		h1: 'Streaming eventów i transmisje na żywo',
		tagline: 'Twoje wydarzenie również dla odbiorców online.',
		intro:
			'ROSS Events oferuje rozwiązania multimedialne do transmisji konferencji, koncertów i wydarzeń hybrydowych. Pomagamy przygotować obraz, dźwięk i prezentacje na potrzeby odbiorców zdalnych.',
		heroCta: 'Zapytaj o streaming',
		heroImage: IMG.studio,
		heroImageAlt: 'Kamera wideo nagrywająca konferencję na żywo',
		blocks: [
			{
				title: 'Profesjonalna transmisja wydarzenia',
				text: 'Streaming wymaga odpowiedniego przygotowania technicznego: kamer, dźwięku, realizacji obrazu i stabilnego połączenia internetowego. Zakres usługi dobieramy do programu i oczekiwań organizatora.',
			},
			{
				title: 'Jakie wydarzenia można transmitować?',
				items: [
					{
						title: 'Konferencje i szkolenia',
						text: 'Transmisje wystąpień, paneli dyskusyjnych i prezentacji.',
					},
					{
						title: 'Koncerty i wydarzenia artystyczne',
						text: 'Realizacja obrazu i dźwięku dla publiczności online.',
					},
					{
						title: 'Wydarzenia firmowe',
						text: 'Prezentacje produktów, spotkania biznesowe i wydarzenia wewnętrzne.',
					},
					{
						title: 'Eventy hybrydowe',
						text: 'Połączenie udziału uczestników na miejscu z odbiorem przez internet.',
					},
				],
			},
			{
				title: 'Co warto przygotować przed transmisją?',
				text: 'Platformę docelową, program, listę prelegentów, materiały multimedialne, informacje o internecie i wymagania dotyczące nagrania.',
			},
		],
		faqTitle: 'FAQ — streaming eventów',
		faq: [
			{
				q: 'Ile kosztuje streaming konferencji?',
				a: 'Cena zależy od liczby kamer, czasu trwania, lokalizacji i zakresu obsługi.',
			},
			{
				q: 'Czy transmisja wymaga internetu na miejscu?',
				a: 'Tak. Należy zapewnić odpowiednio stabilne połączenie i rozważyć łącze zapasowe.',
			},
			{
				q: 'Czy można transmitować wydarzenie z kilku kamer?',
				a: 'Tak, jeśli zakres techniczny projektu przewiduje realizację wielokamerową.',
			},
			{
				q: 'Czy można jednocześnie prowadzić event stacjonarny i online?',
				a: 'Tak. Taki format nazywa się wydarzeniem hybrydowym.',
			},
		],
		closingTitle: 'Dotrzyj do odbiorców poza salą wydarzenia',
		closingCta: 'Zapytaj o transmisję na żywo',
		related: ['ekrany-led', 'naglosnienie-imprez'],
	},
	{
		slug: 'atrakcje-eventowe',
		name: 'Atrakcje eventowe',
		tileText:
			'Dodatkowe elementy programu, strefy aktywności i rozwiązania zwiększające zaangażowanie uczestników.',
		tileButton: 'Atrakcje',
		metaTitle: 'Atrakcje na Eventy i Imprezy Firmowe | ROSS',
		metaDescription:
			'Atrakcje eventowe na imprezy firmowe, pikniki, gale i wydarzenia promocyjne. Dopasuj program do uczestników z pomocą ROSS Events.',
		h1: 'Atrakcje eventowe na imprezy firmowe i plenerowe',
		tagline: 'Dodaj wydarzeniu energii i wyjątkowego charakteru.',
		intro:
			'ROSS Events pomaga dobierać atrakcje i elementy dodatkowe do imprez firmowych, pikników, wydarzeń promocyjnych i spotkań integracyjnych. Program dopasowujemy do uczestników, miejsca i celu wydarzenia.',
		heroCta: 'Zapytaj o atrakcje',
		heroImage: IMG.picnic,
		heroImageAlt: 'Strefa atrakcji i fotobudka podczas imprezy firmowej',
		blocks: [
			{
				title: 'Atrakcje dopasowane do wydarzenia',
				text: 'Dodatkowe aktywności mogą zachęcać do integracji, tworzyć okazje do wspólnych zdjęć i urozmaicać program. Kluczowe jest dopasowanie ich do wieku uczestników i charakteru imprezy.',
			},
			{
				title: 'Przykładowe kierunki atrakcji',
				items: [
					{
						title: 'Fotobudki i strefy zdjęciowe',
						text: 'Miejsca do tworzenia pamiątkowych fotografii i angażowania gości.',
					},
					{
						title: 'Animacje i aktywności integracyjne',
						text: 'Rozwiązania dla uczestników wydarzeń firmowych i rodzinnych.',
					},
					{
						title: 'Strefy relaksu',
						text: 'Przestrzenie do odpoczynku i rozmów podczas dłuższych wydarzeń.',
					},
					{
						title: 'Oprawa artystyczna',
						text: 'Elementy programu scenicznego i występy dopasowane do charakteru imprezy.',
					},
				],
			},
			{
				title: 'Atrakcje jako część kompleksowej realizacji',
				text: 'Dobór atrakcji warto skoordynować z harmonogramem, nagłośnieniem, oświetleniem i infrastrukturą wydarzenia.',
			},
		],
		faqTitle: 'FAQ — atrakcje eventowe',
		faq: [
			{
				q: 'Jakie atrakcje wybrać na imprezę firmową?',
				a: 'Zależy to od liczby uczestników, charakteru spotkania i celu wydarzenia.',
			},
			{
				q: 'Czy atrakcje można zamówić oddzielnie?',
				a: 'Możliwość realizacji samodzielnej usługi ustalamy indywidualnie.',
			},
			{
				q: 'Ile kosztują atrakcje eventowe?',
				a: 'Cena zależy od rodzaju atrakcji, czasu trwania i lokalizacji.',
			},
			{
				q: 'Jak zaplanować atrakcje na piknik rodzinny?',
				a: 'Warto uwzględnić różne grupy wiekowe, przestrzeń i harmonogram imprezy.',
			},
		],
		closingTitle: 'Urozmaić program swojego eventu',
		closingCta: 'Zapytaj o dostępne atrakcje',
		related: ['organizacja-eventow', 'namioty-eventowe'],
	},
	{
		slug: 'koordynacja-eventow',
		name: 'Koordynator eventu na miejscu',
		tileText:
			'Jedna osoba nadzorująca harmonogram, współpracę ekip i przebieg wydarzenia — także jako samodzielna usługa.',
		tileButton: 'Koordynacja eventów',
		metaTitle: 'Koordynator Eventu i Koordynacja Imprez | ROSS',
		metaDescription:
			'Koordynator eventu na miejscu: nadzór nad harmonogramem, ekipami i podwykonawcami. Samodzielna usługa koordynacji wydarzeń w całej Polsce.',
		h1: 'Koordynacja eventów — koordynator wydarzenia na miejscu',
		tagline: 'Ty zajmujesz się gośćmi. My pilnujemy przebiegu eventu.',
		intro:
			'ROSS Events oferuje koordynację wydarzeń na miejscu. Koordynator nadzoruje harmonogram, wspiera komunikację między zespołami, współpracuje z artystami i podwykonawcami oraz reaguje na bieżące sytuacje organizacyjne.',
		heroCta: 'Wynajmij koordynatora eventu',
		heroImage: IMG.corporate,
		heroImageAlt:
			'Koordynator wydarzenia z radiotelefonem nadzoruje przygotowanie sceny',
		blocks: [
			{
				title: 'Kim jest koordynator eventu?',
				text: 'To osoba odpowiedzialna za operacyjne prowadzenie wydarzenia zgodnie z ustalonym scenariuszem. Stanowi punkt kontaktowy między organizatorem, obsługą obiektu, ekipami technicznymi, prowadzącymi i wykonawcami.',
			},
			{
				title: 'Co robi koordynator podczas eventu?',
				items: [
					{
						title: 'Przed rozpoczęciem',
						text: 'Sprawdza stan przygotowań, ustala gotowość zespołów, weryfikuje harmonogram i pomaga skoordynować ostatnie działania.',
					},
					{
						title: 'W trakcie wydarzenia',
						text: 'Pilnuje kolejności punktów programu, przepływu informacji i uzgodnionych godzin wejść artystów, prelegentów oraz obsługi technicznej.',
					},
					{
						title: 'Gdy pojawiają się zmiany',
						text: 'Pomaga szybko ustalić priorytety i wdrożyć uzgodnione korekty, ograniczając zakłócenia przebiegu wydarzenia.',
					},
					{
						title: 'Po zakończeniu',
						text: 'Wspiera koordynację działań końcowych i komunikację z zaangażowanymi zespołami w uzgodnionym zakresie.',
					},
				],
			},
			{
				title: 'Samodzielna usługa koordynatora',
				text: 'Masz już scenariusz, ekipę i wykonawców? Nie musisz zlecać całej organizacji wydarzenia. Możesz zamówić samą koordynację na miejscu. Przed eventem ustalamy zakres odpowiedzialności, osoby kontaktowe, zasady podejmowania decyzji i harmonogram.',
			},
			{
				title: 'Kiedy warto wynająć koordynatora?',
				list: [
					'Podczas konferencji z wieloma prelegentami.',
					'Na gali z rozbudowanym scenariuszem.',
					'Przy koncercie wymagającym współpracy wielu ekip.',
					'Na imprezie firmowej z atrakcjami i podwykonawcami.',
					'Podczas wydarzenia plenerowego z kilkoma strefami.',
				],
			},
			{
				title: 'Koordynator a organizator wydarzenia',
				text: 'Organizator przygotowuje koncepcję, budżet i zasoby. Koordynator skupia się na przebiegu wydarzenia w dniu realizacji. Te role mogą się uzupełniać, ale nie są tożsame.',
			},
		],
		faqTitle: 'FAQ — koordynacja eventów',
		faq: [
			{
				q: 'Ile kosztuje koordynator eventu?',
				a: 'Cena zależy od czasu pracy, lokalizacji, skali wydarzenia i zakresu odpowiedzialności.',
			},
			{
				q: 'Czy mogę wynająć koordynatora bez organizacji całej imprezy?',
				a: 'Tak. Koordynacja na miejscu może być samodzielną usługą.',
			},
			{
				q: 'Kiedy koordynator zaczyna pracę?',
				a: 'Godzinę rozpoczęcia ustalamy na podstawie harmonogramu przygotowań i wydarzenia.',
			},
			{
				q: 'Czy koordynator zastępuje realizatora dźwięku lub światła?',
				a: 'Nie. Koordynator nadzoruje współpracę zespołów, ale nie zastępuje specjalistów odpowiedzialnych za obsługę techniczną.',
			},
			{
				q: 'Czy usługa jest dostępna w całej Polsce?',
				a: 'Tak, po uzgodnieniu terminu, miejsca i warunków realizacji.',
			},
		],
		closingTitle: 'Oddaj koordynację wydarzenia w dobre ręce',
		closingText:
			'Opowiedz nam o scenariuszu, liczbie podwykonawców i przebiegu wydarzenia. Zaproponujemy odpowiedni zakres koordynacji.',
		closingCta: 'Zapytaj o koordynatora eventu',
		related: ['organizacja-eventow', 'technika-sceniczna'],
	},
];

export const getService = (slug: string) =>
	services.find((s) => s.slug === slug);
