import { env } from "@/env";

/**
 * Creates a WhatsApp message link with the given text.
 * @param text The message text to be sent
 * @returns A URL string for sending the message via WhatsApp
 */
export function createWhatsAppMessageLink(text: string): string {
  const phoneNumber = env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER;

  if (!phoneNumber) {
    throw new Error(
      "WHATSAPP_PHONE_NUMBER is not set in the environment variables",
    );
  }

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${phoneNumber}?text=${encodedText}`;
}
