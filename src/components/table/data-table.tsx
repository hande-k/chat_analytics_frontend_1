"use client";
import React, { useEffect, useState } from "react";
import { DashboardMessagesResponse, EngagementLevel } from "@/lib/types";
import {
  CheckCircledIcon,
  QuestionMarkCircledIcon,
  SketchLogoIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnMeta,
  RowData,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTableColumnHeader } from "./data-table-column-header";

import { DataTableRowActions } from "./data-table-row-actions";

import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";
import { getDetailedMessages } from "@/lib/api_calls";
import { ChatSheetComponent } from "../custom/chat-sheet";

interface DataTableProps<TData, TValue> {
  data: TData[];
  botId: string;
}

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    columnName: string;
  }
}

function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  if (minutes === 0) {
    return "0 minutes";
  } else if (minutes === 1) {
    return "1 minute";
  } else {
    return `${minutes} minutes`;
  }
}

export function DataTable<TData, TValue>({
  data,
  botId,
}: DataTableProps<TData, TValue>) {
  const engagementLevels: EngagementLevel[] = [
    {
      value: "low",
      label: "Low",
      icon: QuestionMarkCircledIcon,
    },
    {
      value: "medium",
      label: "Medium",
      icon: PlusCircledIcon,
    },
    {
      value: "high",
      label: "High",
      icon: CheckCircledIcon,
    },
    {
      value: "very_high",
      label: "Very High",
      icon: SketchLogoIcon,
    },
  ];

  // Define columns based on the updated schema and required fields
  const columns: ColumnDef<TData, TValue>[] = [
    {
      accessorKey: "conversation_start_time",
      meta: { columnName: "Start Time" },

      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={"Start Time"} />
      ),
      cell: ({ row }) => {
        const dateStr = row.getValue("conversation_start_time") as string; // Type assertion
        if (!dateStr) return <div>{"Time unavailable"}</div>;
        const date = new Date(dateStr);
        const formattedDate = date.toLocaleDateString("en", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        });
        return <div>{formattedDate}</div>;
      },
      enableSorting: true,
      sortingFn: "datetime",
      sortDescFirst: true,
    },
    {
      accessorKey: "conversation_duration_secs",
      meta: { columnName: "Conversation Duration" },

      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={"Conversation Duration"}
        />
      ),
      cell: ({ row }) => {
        const seconds = row.getValue("conversation_duration_secs") as number;
        const formattedDuration = formatDuration(seconds);
        return <div>{formattedDuration}</div>;
      },
      enableSorting: true,
    },
    {
      accessorKey: "number_of_messages",
      meta: { columnName: "Number of Messages" },

      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={"Number of Messages"} />
      ),
      cell: ({ row }) => <div>{row.getValue("number_of_messages")}</div>,
      enableSorting: true,
    },

    {
      accessorKey: "engagement_level",
      meta: { columnName: "Engagement Level" },

      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={"Engagement Level"} />
      ),
      cell: ({ row }) => {
        const engagement_level = engagementLevels.find(
          (engagement_level) =>
            engagement_level.value === row.getValue("engagement_level")
        );

        if (!engagement_level) {
          return null;
        }

        return (
          <div className="flex flex-row items-center">
            {engagement_level.icon && (
              <engagement_level.icon className="mr-2 h-4 w-4 text-muted-foreground" />
            )}
            <span>{engagement_level.label}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },

    {
      id: "actions",
      cell: ({ row }) => <DataTableRowActions row={row} />,
    },
  ];

  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: "conversation_start_time", desc: true },
  ]);
  const [pagination, setPaginationState] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    onPaginationChange: setPaginationState,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });
  const [isSheetVisible, setSheetVisible] = useState(false);
  const [loadedChatId, setLoadedChatId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatDetailsData, setChatDetailsData] =
    useState<DashboardMessagesResponse | null>(null);
  const [error, setError] = useState(null);

  const handleRowClick = async (rowData: TData) => {
    const chatId = (rowData as any).chat_id;
    setSheetVisible(true);

    if (chatId !== loadedChatId) {
      setIsLoading(true);

      try {
        const chat_details = await getDetailedMessages(chatId);
        setChatDetailsData(chat_details);
      } catch (error: any) {
        setError(error.message);
        console.log(
          "Error received when calling conversation analytics: ",
          error.message
        );
      } finally {
        setLoadedChatId(chatId);
        setIsLoading(false);
      }
    }
  };

  return (
    <Card className="h-fit overflow-scroll">
      <CardHeader className="h-1/6 items-center border-b sm:flex-row">
        <div className="grid gap-3 text-center sm:text-left">
          <CardTitle>{"Chats"}</CardTitle>
          <CardDescription>
            {"Here you can find the conversations that your bot is leading."}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="h-5/6 mt-3">
        <div className="max-w-full space-y-4">
          <DataTableToolbar table={table} engagementLevels={engagementLevels} />
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id} colSpan={header.colSpan}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      onClick={() => handleRowClick(row.original)}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      {"No results."}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="w-full">
            <DataTablePagination table={table} />
          </div>
        </div>
      </CardContent>
      {isSheetVisible && (
        <ChatSheetComponent
          setSheetOpen={setSheetVisible}
          sheetOpen={isSheetVisible}
          chatDetailsData={chatDetailsData}
          isLoading={isLoading}
        />
      )}
    </Card>
  );
}
