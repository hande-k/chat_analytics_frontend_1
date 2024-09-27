import { getAllChats } from "@/lib/api_calls";
import { RadialChartComponent } from "@/components/custom/bounce-rate-radial-chart";
import { StackedBarChartComponent } from "@/components/custom/conversation-number-stacked-bar-chart";
import { DataTable } from "@/components/table/data-table";
import { CopyBotUrlDialog } from "@/components/custom/copy-bot-url-dialog";

export default async function ConversationOverview({
  params,
}: {
  params: { bot_id: string };
}) {
  const analytics_response = await getAllChats(params.bot_id);
  const {
    dashboard_all_chats_item_list,
    count_chats_with_message,
    count_chats_without_message,
    daily_distribution_of_chats,
  } = analytics_response;

  const radialChartData = [
    {
      chat_with_message: count_chats_with_message,
      chat_without_message: count_chats_without_message,
    },
  ];

  const stackedBarChartData = daily_distribution_of_chats;
  const share_url: string = `https://your_domain/your_bot/${params.bot_id}`;

  return (
    <>
      <div className="hidden 2xl:mx-auto 2xl:max-w-7xl lg:flex flex-col px-10 py-6 justify-center bg-background gap-4">
        <div className="row-span-4 w-full grid grid-cols-12 gap-4 h-[280px]">
          <div className="h-[280px] col-span-3 grid grid-rows-4 px-4 gap-2 items-center">
            <h2 className="text-2xl font-bold tracking-tight row-span-1">
              Welcome!
            </h2>
            <p className="text-muted-foreground row-span-1">
              Here are the insights from your bot's recent conversations!
            </p>
            <p className="text-muted-foreground row-span-1">
              {"You can share a link to your bot here:"}
            </p>
            <div className="row-span-1 mb-3">
              <CopyBotUrlDialog shareURL={share_url} />
            </div>
          </div>
          <div className="h-[280px] col-span-3 overflow-hidden">
            <RadialChartComponent chartData={radialChartData} />
          </div>
          <div className="h-[280px] col-span-6">
            <StackedBarChartComponent chartData={stackedBarChartData} />
          </div>
        </div>
        <DataTable data={dashboard_all_chats_item_list} botId={params.bot_id} />
      </div>
    </>
  );
}
