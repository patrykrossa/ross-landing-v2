import ServicePageView from '@/components/service/ServicePageView';
import { getService, services } from '@/content/services';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
	return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<Params>;
}): Promise<Metadata> {
	const { slug } = await params;
	const service = getService(slug);
	if (!service) return {};
	return {
		title: { absolute: service.metaTitle },
		description: service.metaDescription,
		alternates: { canonical: `/${service.slug}` },
		openGraph: {
			title: service.metaTitle,
			description: service.metaDescription,
			url: `/${service.slug}`,
			images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
		},
	};
}

export default async function ServicePageRoute({
	params,
}: {
	params: Promise<Params>;
}) {
	const { slug } = await params;
	const service = getService(slug);
	if (!service) notFound();
	return <ServicePageView service={service} />;
}
