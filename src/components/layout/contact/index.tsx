'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import { services } from '@/content/services';
import { Check, Send } from 'lucide-react';
import Image from 'next/image';
import { useId, useRef, useState } from 'react';

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
	const uid = useId();
	const [selectedServices, setSelectedServices] = useState<string[]>(
		defaultSubject ? [defaultSubject] : [],
	);
	const today = new Date().toISOString().slice(0, 10);

	const toggleService = (name: string) =>
		setSelectedServices((cur) =>
			cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name],
		);

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
					subject:
						selectedServices.length > 0
							? selectedServices.join(', ')
							: 'Nie wskazano zakresu usług',
					message: formData.get('message'),
					consent: formData.get('consent') === 'on',
				}),
			});

			if (response.ok) {
				setSubmitted(true);
				formRef.current?.reset();
				setSelectedServices([]);
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
				<Image
					src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop'
					alt=''
					fill
					sizes='100vw'
					className='object-cover'
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
									<label htmlFor={`${uid}-name`} className={labelClass}>
										Imię i nazwisko / firma
									</label>
									<input
										id={`${uid}-name`}
										autoComplete='name'
										type='text'
										name='name'
										required
										maxLength={120}
										placeholder='Jan Kowalski'
										className={inputClass}
									/>
								</div>
								<div className='space-y-2'>
									<label htmlFor={`${uid}-email`} className={labelClass}>
										E-mail
									</label>
									<input
										id={`${uid}-email`}
										autoComplete='email'
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
									<label htmlFor={`${uid}-phone`} className={labelClass}>
										Telefon
									</label>
									<input
										id={`${uid}-phone`}
										autoComplete='tel'
										type='tel'
										name='phone'
										maxLength={40}
										placeholder='+48 000 000 000'
										className={inputClass}
									/>
								</div>
								<div className='space-y-2'>
									<label htmlFor={`${uid}-date`} className={labelClass}>
										Termin wydarzenia
									</label>
									<input
										id={`${uid}-date`}
										type='date'
										name='date'
										min={today}
										className={`${inputClass} scheme-dark`}
									/>
								</div>
							</div>

							<div className='grid md:grid-cols-2 gap-5'>
								<div className='space-y-2'>
									<label htmlFor={`${uid}-city`} className={labelClass}>
										Miasto / lokalizacja
									</label>
									<input
										id={`${uid}-city`}
										autoComplete='address-level2'
										type='text'
										name='city'
										maxLength={120}
										placeholder='np. Wrocław'
										className={inputClass}
									/>
								</div>
								<div className='space-y-2'>
									<label htmlFor={`${uid}-participants`} className={labelClass}>
										Liczba uczestników
									</label>
									<input
										id={`${uid}-participants`}
										type='text'
										name='participants'
										maxLength={60}
										placeholder='np. ok. 300'
										className={inputClass}
									/>
								</div>
							</div>

							<div className='space-y-2'>
								<label htmlFor={`${uid}-eventType`} className={labelClass}>
									Rodzaj wydarzenia
								</label>
								<select
									id={`${uid}-eventType`}
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

							<fieldset className='space-y-3'>
								<legend className={labelClass}>
									Zakres usług{' '}
									<span className='font-normal normal-case tracking-normal text-gray-500'>
										(możesz zaznaczyć kilka)
									</span>
								</legend>
								<div className='flex flex-wrap gap-2'>
									{[
										...services.map((s) => s.name),
										'Kompleksowa obsługa eventu',
										'Inne',
									].map((name) => {
										const checked = selectedServices.includes(name);
										return (
											<label
												key={name}
												className={`flex cursor-pointer items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-semibold transition-all has-focus-visible:ring-2 has-focus-visible:ring-brand ${
													checked
														? 'border-brand bg-brand text-black'
														: 'border-white/15 bg-white/5 text-white/70 hover:border-brand/60 hover:text-white'
												}`}>
												<input
													type='checkbox'
													className='sr-only'
													checked={checked}
													onChange={() => toggleService(name)}
												/>
												{checked && <Check size={14} strokeWidth={3} />}
												{name}
											</label>
										);
									})}
								</div>
							</fieldset>

							<div className='space-y-2'>
								<label htmlFor={`${uid}-message`} className={labelClass}>
									Dodatkowe informacje
								</label>
								<textarea
									id={`${uid}-message`}
									name='message'
									required
									rows={4}
									maxLength={4000}
									placeholder='Opisz krótko swoje wydarzenie, np. ramowy harmonogram lub wymagania z ridera technicznego...'
									className={`${inputClass} resize-none`}
								/>
							</div>

							<div className='flex items-start gap-3'>
								<input
									id={`${uid}-consent`}
									type='checkbox'
									name='consent'
									required
									className='mt-1 size-4 shrink-0 accent-brand'
								/>
								<label
									htmlFor={`${uid}-consent`}
									className='text-xs leading-relaxed text-gray-400'>
									Zapoznałem/am się z{' '}
									<Link
										href='/polityka-prywatnosci'
										target='_blank'
										className='text-brand underline underline-offset-2'>
										polityką prywatności
									</Link>{' '}
									i wyrażam zgodę na przetwarzanie moich danych osobowych w celu
									odpowiedzi na zapytanie.
								</label>
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
