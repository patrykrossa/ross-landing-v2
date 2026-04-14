import Hero from '@/components/oferta/Hero';
import OfferSection from '@/components/oferta/Section';
import {
	Speaker,
	Lightbulb,
	Layers,
	Tent,
	Sofa,
	Truck,
	Palette,
	PenTool,
	MonitorPlay,
	Clapperboard,
} from 'lucide-react';

export default function OfertaPage() {
	return (
		<main className='bg-black min-h-screen'>
			<Hero />

			<OfferSection
				title='Technika i Sprzęt'
				imageSrc='https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop'
				imageBadge='Technika'
				imagePosition='left'
				features={[
					{
						icon: <Speaker size={24} />,
						title: 'Systemy Audio',
						description:
							'Koncertowe nagłośnienie L-Acoustics oraz systemy bezprzewodowe Shure.',
					},
					{
						icon: <Lightbulb size={24} />,
						title: 'Oświetlenie Sceniczne',
						description:
							'Inteligentne głowice ruchome, efekty laserowe i sterowniki MA Lighting.',
					},
					{
						icon: <Layers size={24} />,
						title: 'Konstrukcje i Sceny',
						description:
							'Aluminiowe systemy kratownicowe, podesty i zadaszenia Prolyte.',
					},
				]}
			/>

			<OfferSection
				title='Infrastruktura Eventowa'
				imageSrc='https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop'
				imagePosition='right'
				features={[
					{
						icon: <Tent size={24} />,
						title: 'Namioty Premium',
						description:
							'Stylowe namioty typu Star, hale namiotowe i pawilony VIP.',
					},
					{
						icon: <Sofa size={24} />,
						title: 'Meble Eventowe',
						description:
							'Designerskie sofy, krzesła bankietowe i podświetlane stoły barowe.',
					},
					{
						icon: <Truck size={24} />,
						title: 'Logistyka',
						description:
							'Własny transport, agregaty prądotwórcze i zaplecze sanitarne.',
					},
				]}
			/>

			<OfferSection
				imagePosition='left'
				title='Produkcja i Kreacja'
				description='Przekształcamy idee w zapadające w pamięć spektakle. Nasz zespół kreatywny czuwa nad każdym detalem scenografii.'
				imageSrc='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop'
				mainIcon={<Palette size={32} />}
				features={[
					{ icon: <PenTool size={18} />, title: 'Concept Design' },
					{ icon: <MonitorPlay size={18} />, title: 'Scenografia 3D' },
					{ icon: <Layers size={18} />, title: 'Management' },
					{ icon: <Clapperboard size={18} />, title: 'Reżyseria Eventu' },
				]}
			/>
		</main>
	);
}
