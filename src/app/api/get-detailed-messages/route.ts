import { NextRequest } from "next/server";
import { urlConfig } from "@/config";

export const maxDuration = 200;

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const chatId = reqBody.chat_id;
  console.log(`Incoming request for chat ID: ${chatId}`);

  const url = `${urlConfig.pythonBackendBaseURL}/get-detailed-messages`;
  console.log("API request URL:", url);

  try {
    const response = await fetch(url, {
      cache: "no-cache",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId }),
    });

    if (!response.ok) {
      console.error(`API error: ${response.status}`);
      return new Response("Error fetching data", { status: response.status });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Fetch error:", error);
    return new Response("Server error", { status: 500 });
  }
}
