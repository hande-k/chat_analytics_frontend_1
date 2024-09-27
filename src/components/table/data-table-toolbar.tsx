"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { EngagementLevel } from "@/lib/types";

import { Button } from "@/components/ui/button";
import { DataTableViewOptions } from "@/components/table/data-table-view-options";
import { DataTableFacetedFilter } from "@/components/table/data-table-faceted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  engagementLevels: EngagementLevel[];
}

export function DataTableToolbar<TData>({
  table,
  engagementLevels,
}: DataTableToolbarProps<TData>) {

  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {table.getColumn("engagement_level") && (
          <DataTableFacetedFilter
            column={table.getColumn("engagement_level")}
            title="Engagement Level"
            options={engagementLevels}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            {"Reset"}
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
