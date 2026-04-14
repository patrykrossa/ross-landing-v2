import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Contact from '@/components/layout/contact';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = {
	title: 'Ross Events | Kompleksowa Organizacja Eventów',
	description: 'Tworzymy wydarzenia, które robią efekt WOW!',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pl'>
			<body className={`${inter.className} bg-black text-white antialiased`}>
				<Navbar />
				{children}
				<Contact />
				<Footer />
			</body>
		</html>
	);
}
