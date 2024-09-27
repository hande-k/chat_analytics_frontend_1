import { ComponentType } from "react";

export type DateTime = string;

export type TotalMessageCount = {
  date: string;
  chats_with_messages_count: number;
  chats_without_messages_count: number;
};

export type Message = {
  message_id: string;
  identity: "user" | "bot";
  message_content: string;
  timestamp: DateTime;
};

export type DashboardMessagesResponse = {
  chat_id: string;
  messages: Message[];
};

export type DataTableItem = {
  chat_id: string;
  bot_id: string;
  conversation_start_time: DateTime;
  number_of_messages: number;
  conversation_duration_secs: number;
  engagement_level: "low" | "medium" | "high" | "very_high";
};

export type DashboardAllChatsResponse = {
  dashboard_all_chats_item_list: DataTableItem[];
  count_chats_with_message: number;
  count_chats_without_message: number;
  daily_distribution_of_chats: TotalMessageCount[];
};

export interface EngagementLevel {
  value: "low" | "medium" | "high" | "very_high";
  label: string;
  icon?: ComponentType<{
    className?: string;
  }>;
}
