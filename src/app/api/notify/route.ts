import { NextRequest, NextResponse } from "next/server";

type BookingDetails = {
  name: string;
};

export async function POST(req: NextRequest) {
  try {
    const body: BookingDetails = await req.json();

    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        { message: "Slack Webhook URL not configured" },
        { status: 500 }
      );
    }

    const message = {
      text: `🚀 *New Booking Received!*  
      👤 *User:* ${body.name}`,
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error(`Slack API Error: ${response.statusText}`);
    }

    return NextResponse.json(
      { message: "Notification sent!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Slack Notification Error:", error);
    return NextResponse.json(
      { message: "Error sending notification" },
      { status: 500 }
    );
  }
}
