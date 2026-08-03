"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMessage(data: {
    name: string;
    email: string;
    message: string;
}) {
    try {
        console.log('envoi mail')
        await resend.emails.send({
            from: "Portfolio <contact@send.alexisbriet.fr>",
            to: process.env.CONTACT_EMAIL!,
            subject: `Nouveau message de ${data.name}`,
            replyTo: data.email,
            html: `
        <h2>Nouveau contact portfolio</h2>

        <p><strong>Nom :</strong> ${data.name}</p>
        <p><strong>Email :</strong> ${data.email}</p>

        <hr />

        <p>${data.message.replace(/\n/g, "<br />")}</p>
      `,
        });

        return {
            success: true,
        };

    } catch (error) {
        console.error(error);

        return {
            success: false,
        };
    }
}