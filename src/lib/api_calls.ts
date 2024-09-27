import {
    DashboardAllChatsResponse,
    DashboardMessagesResponse,
  } from "@/lib/types";
  import { urlConfig } from "@/config"
  
  export async function getAllChats(
    bot_id: string
  ): Promise<DashboardAllChatsResponse> {
    // Ensure bot_id is properly encoded to be included in a URL
    const encodedBotId = encodeURIComponent(bot_id);
    const baseUrl = urlConfig.pythonBackendBaseURL;
    // Construct the URL with the bot_id query parameter
    let url = `${baseUrl}/get-all-chats/?bot_id=${encodedBotId}`;
    console.log("Making API request to: ", url);
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const analytics_response = await response.json();
    //console.log("Received response conversations: ", analytics_response);
  
    return analytics_response;
  }

  export async function getDetailedMessages(
    chat_id: string
  ): Promise<DashboardMessagesResponse> {
    const baseUrl = urlConfig.serverSideBaseURL;
    // Construct the URL with the chat_id query parameter
    let url = `${baseUrl}/api/get-detailed-messages`;
    console.log("Making API request to FOR MESSAGES: ", url);
    const response = await fetch(url, {
      // cache: "no-cache",
      next: { revalidate: 600 },
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chat_id: chat_id }),
    });
  
    if (!response.ok) {
      console.log("Here is the not OK response: ", response);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const messages_response = await response.json();
    console.log("Received response conversations: ", messages_response);
  
    return messages_response;
  }