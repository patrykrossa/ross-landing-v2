'use client';

import Button from '@/components/ui/Button';
import { services } from '@/content/services';
import { Send } from 'lucide-react';
import { useRef, useState } from 'react';

interface ContactProps {
	eyebrow?: string;
	title?: string;
	text?: string;
	submitLabel?: string;
	defaultSubject?: string;
	id?: string;
}

const inputClass =
	'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all';
const labelClass =
	'text-xs font-bold uppercase tracking-wider text-gray-400 ml-1';

const eventTypes = [
	'Koncert / festiwal',
	'Konferencja / kongres',
	'Event firmowy',
	'Gala / bankiet',
	'Piknik / impreza plenerowa',
	'Premiera / wydarzenie promocyjne',
	'Inne',
];

export default function Contact({
	eyebrow = 'Kontakt',
	title = 'Planujesz wydarzenie? Porozmawiajmy.',
	text = 'Opowiedz nam o swoim evencie. Pomożemy dobrać odpowiednie rozwiązania i ustalić zakres obsługi.',
	submitLabel = 'Wyślij zapytanie',
	defaultSubject,
	id = 'kontakt',
}: ContactProps) {
	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setError(false);

		try {
			const formData = new FormData(e.currentTarget);
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: formData.get('name'),
					email: formData.get('email'),
					phone: formData.get('phone'),
					date: formData.get('date'),
					city: formData.get('city'),
					eventType: formData.get('eventType'),
					participants: formData.get('participants'),
					subject: formData.get('subject'),
					message: formData.get('message'),
				}),
			});

			if (response.ok) {
				setSubmitted(true);
				formRef.current?.reset();
				setTimeout(() => setSubmitted(false), 8000);
			} else {
				setError(true);
			}
		} catch (err) {
			console.error('Błąd:', err);
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section
			id={id}
			className='relative py-24 overflow-hidden min-h-150 flex items-center scroll-mt-20'>
			<div className='absolute inset-0 z-0'>
				<div className='absolute inset-0 bg-black/70 md:bg-linear-to-r md:from-black md:via-black/60 md:to-black/40 z-10' />
				<div
					className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
					aria-hidden='true'
				/>
			</div>

			<div className='container mx-auto px-6 relative z-20'>
				<div className='grid lg:grid-cols-2 gap-16 items-center'>
					<div>
						<p className='text-brand font-bold tracking-[0.2em] uppercase mb-4 text-sm'>
							{eyebrow}
						</p>
						<h2 className='text-4xl md:text-6xl font-black mb-8 leading-tight'>
							{title}
						</h2>
						<p className='text-gray-300 text-lg max-w-md leading-relaxed'>
							{text}
						</p>
					</div>

					<div className='bg-zinc-900/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl'>
						{submitted && (
							<div
								role='status'
								className='mb-5 p-4 bg-green-500/20 border border-green-500/50 rounded-lg'>
								<p className='text-green-300 text-sm font-medium'>
									✓ Zapytanie zostało wysłane. Wrócimy z propozycją dalszych
									kroków.
								</p>
							</div>
						)}
						{error && (
							<div
								role='alert'
								className='mb-5 p-4 bg-red-500/20 border border-red-500/50 rounded-lg'>
								<p className='text-red-300 text-sm font-medium'>
									Błąd przy wysyłaniu wiadomości. Spróbuj ponownie lub napisz
									bezpośrednio na adres e-mail.
								</p>
							</div>
						)}
						<form ref={formRef} onSubmit={handleSubmit} className='space-y-5'>
							<div className='grid md:grid-cols-2 gap-5'>
								<div className='space-y-2'>
									<label className={labelClass}>Imię i nazwisko / firma</label>
									<input
										type='text'
										name='name'
										required
										maxLength={120}
										placeholder='Jan Kowalski'
										className={inputClass}
									/>
								</div>
								<div className='space-y-2'>
									<label className={labelClass}>E-mail</label>
									<input
										type='email'
										name='email'
										required
										maxLength={160}
										placeholder='kontakt@firma.pl'
										className={inputClass}
									/>
								</div>
							</div>

							<div className='grid md:grid-cols-2 gap-5'>
								<div className='space-y-2'>
									<label className={labelClass}>Telefon</label>
									<input
										type='tel'
										name='phone'
										maxLength={40}
										placeholder='+48 000 000 000'
										className={inputClass}
									/>
								</div>
								<div className='space-y-2'>
									<label className={labelClass}>Termin wydarzenia</label>
									<input
										type='text'
										name='date'
										maxLength={80}
										placeholder='np. 14.06.2027'
										className={inputClass}
									/>
								</div>
							</div>

							<div className='grid md:grid-cols-2 gap-5'>
								<div className='space-y-2'>
									<label className={labelClass}>Miasto / lokalizacja</label>
									<input
										type='text'
										name='city'
										maxLength={120}
										placeholder='np. Wrocław'
										className={inputClass}
									/>
								</div>
								<div className='space-y-2'>
									<label className={labelClass}>Liczba uczestników</label>
									<input
										type='text'
										name='participants'
										maxLength={60}
										placeholder='np. ok. 300'
										className={inputClass}
									/>
								</div>
							</div>

							<div className='grid md:grid-cols-2 gap-5'>
								<div className='space-y-2'>
									<label className={labelClass}>Rodzaj wydarzenia</label>
									<select
										name='eventType'
										defaultValue={eventTypes[0]}
										className={`${inputClass} appearance-none cursor-pointer`}>
										{eventTypes.map((t) => (
											<option key={t} className='bg-zinc-900' value={t}>
												{t}
											</option>
										))}
									</select>
								</div>
								<div className='space-y-2'>
									<label className={labelClass}>Zakres usług</label>
									<select
										name='subject'
										defaultValue={defaultSubject ?? 'Kompleksowa obsługa eventu'}
										className={`${inputClass} appearance-none cursor-pointer`}>
										<option
											className='bg-zinc-900'
											value='Kompleksowa obsługa eventu'>
											Kompleksowa obsługa eventu
										</option>
										{services.map((s) => (
											<option key={s.slug} className='bg-zinc-900' value={s.name}>
												{s.name}
											</option>
										))}
										<option className='bg-zinc-900' value='Inne'>
											Inne
										</option>
									</select>
								</div>
							</div>

							<div className='space-y-2'>
								<label className={labelClass}>Dodatkowe informacje</label>
								<textarea
									name='message'
									required
									rows={4}
									maxLength={4000}
									placeholder='Opisz krótko swoje wydarzenie, np. ramowy harmonogram lub wymagania z ridera technicznego...'
									className={`${inputClass} resize-none`}
								/>
							</div>

							<Button
								variant='primary'
								disabled={loading}
								type='submit'
								className='w-full py-4 mt-4'>
								{loading ? 'WYSYŁANIE...' : submitLabel} <Send size={18} />
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
