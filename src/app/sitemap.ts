import type { MetadataRoute } from 'next';
import { services } from '@/content/services';
import { SITE_URL } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
	const pages = ['', '/oferta', '/realizacje', '/o-nas', '/kontakt'];
	return [
		...pages.map((p) => ({ url: `${SITE_URL}${p}` })),
		...services.map((s) => ({ url: `${SITE_URL}/${s.slug}` })),
	];
}
