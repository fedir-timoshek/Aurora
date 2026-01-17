import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/formSchema";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = leadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ success: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  console.log("New lead", data);

  const emailTo = process.env.EMAIL_TO;
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;
  const crmEndpoint = process.env.CRM_ENDPOINT;

  if (emailTo) {
    console.log("EMAIL_TO integration placeholder", emailTo);
  }

  if (telegramToken && telegramChatId) {
    console.log("Telegram integration placeholder", telegramChatId);
  }

  if (crmEndpoint) {
    console.log("CRM integration placeholder", crmEndpoint);
  }

  return NextResponse.json({ success: true });
}
