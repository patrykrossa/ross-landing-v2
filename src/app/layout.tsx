import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import FloatingCta from '@/components/layout/FloatingCta';
import ScrollProgress from '@/components/motion/ScrollProgress';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL, home, organizationLd } from '@/content/site';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: home.metaTitle,
	description: home.metaDescription,
	openGraph: {
		type: 'website',
		locale: 'pl_PL',
		siteName: 'ROSS Events',
		title: home.metaTitle,
		description: home.metaDescription,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pl'>
			<body className={`${inter.className} bg-black text-white antialiased`}>
				<JsonLd data={organizationLd} />
				<ScrollProgress />
				<Navbar />
				{children}
				<Footer />
				<FloatingCta />
			</body>
		</html>
	);
}
