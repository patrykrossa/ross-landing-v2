'use client';

import Button from '@/components/ui/Button';
import { Send } from 'lucide-react';
import { useState, useRef } from 'react';

export default function Contact() {
	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		try {
			const formData = new FormData(e.currentTarget);
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: formData.get('name'),
					email: formData.get('email'),
					subject: formData.get('subject'),
					message: formData.get('message'),
				}),
			});

			if (response.ok) {
				setSubmitted(true);
				formRef.current?.reset();
				setTimeout(() => setSubmitted(false), 5000);
			} else {
				alert('Błąd przy wysyłaniu wiadomości. Spróbuj ponownie.');
			}
		} catch (error) {
			console.error('Błąd:', error);
			alert('Błąd przy wysyłaniu wiadomości. Spróbuj ponownie.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<section
			id='kontakt'
			className='relative py-24 overflow-hidden min-h-150 flex items-center'>
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
							Gotowi na współpracę?
						</p>
						<h2 className='text-5xl md:text-7xl font-black mb-8 leading-tight italic uppercase'>
							Zróbmy to <br />
							<span className='text-brand'>razem!</span>
						</h2>
						<p className='text-gray-300 text-lg max-w-md leading-relaxed'>
							Skontaktuj się z nami, a przygotujemy ofertę dopasowaną do Twoich
							potrzeb i budżetu. Twój event zaczyna się od tej wiadomości.
						</p>
					</div>

					<div className='bg-zinc-900/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl'>
						{submitted && (
							<div className='mb-5 p-4 bg-green-500/20 border border-green-500/50 rounded-lg'>
								<p className='text-green-300 text-sm font-medium'>
									✓ Wiadomość została wysłana! Odpowiemy w ciągu 24h.
								</p>
							</div>
						)}
						<form ref={formRef} onSubmit={handleSubmit} className='space-y-5'>
							<div className='grid md:grid-cols-2 gap-5'>
								<div className='space-y-2'>
									<label className='text-xs font-bold uppercase tracking-wider text-gray-400 ml-1'>
										Imię i Nazwisko
									</label>
									<input
										type='text'
										name='name'
										required
										placeholder='Jan Kowalski'
										className='w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all'
									/>
								</div>
								<div className='space-y-2'>
									<label className='text-xs font-bold uppercase tracking-wider text-gray-400 ml-1'>
										E-mail
									</label>
									<input
										type='email'
										name='email'
										required
										placeholder='kontakt@firma.pl'
										className='w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all'
									/>
								</div>
							</div>

							<div className='space-y-2'>
								<label className='text-xs font-bold uppercase tracking-wider text-gray-400 ml-1'>
									Temat wydarzenia
								</label>
								<select
									name='subject'
									className='w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-all appearance-none cursor-pointer'>
									<option className='bg-zinc-900' value='Organizacja Eventu'>
										Organizacja Eventu
									</option>
									<option className='bg-zinc-900' value='Technika Sceniczna'>
										Technika Sceniczna
									</option>
									<option className='bg-zinc-900' value='Namioty Eventowe'>
										Namioty Eventowe
									</option>
									<option className='bg-zinc-900' value='Inne'>
										Inne
									</option>
								</select>
							</div>

							<div className='space-y-2'>
								<label className='text-xs font-bold uppercase tracking-wider text-gray-400 ml-1'>
									Wiadomość
								</label>
								<textarea
									name='message'
									required
									rows={4}
									placeholder='Opisz krótko swoje wydarzenie...'
									className='w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all resize-none'
								/>
							</div>

							<Button
								variant='primary'
								disabled={loading}
								type='submit'
								className='w-full py-4 mt-4'>
								{loading ? 'WYSYŁANIE...' : 'WYŚLIJ WIADOMOŚĆ'}{' '}
								<Send size={18} />
							</Button>

							<p className='text-[10px] text-gray-500 text-center uppercase tracking-widest mt-4'>
								Gwarantujemy odpowiedź w ciągu 24h
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
