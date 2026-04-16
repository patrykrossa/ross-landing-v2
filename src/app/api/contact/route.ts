import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { name, email, subject, message } = body;

		if (!name || !email || !subject || !message) {
			return NextResponse.json(
				{ error: 'Invalid request data' },
				{ status: 400 }
			);
		}

		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: parseInt(process.env.SMTP_PORT || '587'),
			secure: process.env.SMTP_SECURE === 'true',
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD,
			},
		});

		const requiredEnvVars = [
			'SMTP_HOST',
			'SMTP_PORT',
			'SMTP_USER',
			'SMTP_PASSWORD',
			'CONTACT_EMAIL',
		];
		const missingVars = requiredEnvVars.filter((v) => !process.env[v]);
		if (missingVars.length > 0) {
			console.error('Brakujące zmienne środowiskowe:', missingVars);
			return NextResponse.json({ error: 'Server error' }, { status: 500 });
		}

		await transporter.sendMail({
			from: process.env.SMTP_USER,
			to: process.env.CONTACT_EMAIL,
			subject: `Nowa wiadomość z formularza: ${subject}`,
			html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #333;">Nowa wiadomość z formularza kontaktowego</h2>
					<p><strong>Imię i Nazwisko:</strong> ${escapeHtml(name)}</p>
					<p><strong>Email:</strong> ${escapeHtml(email)}</p>
					<p><strong>Temat:</strong> ${escapeHtml(subject)}</p>
					<div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 15px;">
						<strong>Wiadomość:</strong>
						<p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
					</div>
					<hr style="margin-top: 20px; border: none; border-top: 1px solid #ddd;">
					<p style="color: #666; font-size: 12px; margin-top: 15px;">Ta wiadomość została wysłana z formularza kontaktowego na stronie ross.pl</p>
				</div>
			`,
			replyTo: email,
		});

		await transporter.sendMail({
			from: process.env.SMTP_USER,
			to: email,
			subject: 'Potwierdzenie otrzymania wiadomości - ross.pl',
			html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #333;">Dziękujemy za wiadomość</h2>
					<p>Cześć ${escapeHtml(name)},</p>
					<p>Dziękujemy za skontaktowanie się z nami. Otrzymaliśmy Twoją wiadomość i odpowiemy w ciągu 24 godzin.</p>
					<p style="color: #666; font-size: 12px; margin-top: 20px;">ross.pl</p>
				</div>
			`,
		});

		return NextResponse.json({ message: 'Success' }, { status: 200 });
	} catch (error) {
		console.error('Server error:', error);
		return NextResponse.json({ error: 'Server error' }, { status: 500 });
	}
}

function escapeHtml(text: string): string {
	const map: { [key: string]: string } = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#039;',
	};
	return text.replace(/[&<>"']/g, (m) => map[m]);
}
