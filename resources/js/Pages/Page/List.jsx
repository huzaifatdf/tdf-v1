import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState, useEffect } from "react"
import { Head, router, usePage } from "@inertiajs/react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button as SDButton } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function List() {
    const { pages, filters: initialFilters, sort: initialSort } = usePage().props;

        const [sorting, setSorting] = useState(initialSort || []);
        const [columnFilters, setColumnFilters] = useState(initialFilters || []);
        const [columnVisibility, setColumnVisibility] = useState({})
        const [rowSelection, setRowSelection] = useState({})
        const [pagination, setPagination] = useState({
            pageIndex: pages.current_page - 1,
            pageSize: pages.per_page,
        })

        const columns = [
            {
                id: "select",
                header: ({ table }) => (
                    <Checkbox
                        checked={
                            table.getIsAllPageRowsSelected() ||
                            (table.getIsSomePageRowsSelected() && "indeterminate")
                        }
                        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                        aria-label="Select all"
                    />
                ),
                cell: ({ row }) => (
                    <Checkbox
                        checked={row.getIsSelected()}
                        onCheckedChange={(value) => row.toggleSelected(!!value)}
                        aria-label="Select row"
                    />
                ),
                enableSorting: false,
                enableHiding: false,
            },
            {
                accessorKey: "id",
                header: "ID",
                cell: ({ row }) => <div>{row.getValue("id")}</div>,
            },
            {
                accessorKey: "title",
                header: "Title",
                cell: ({ row }) => <div>{row.getValue("title")}</div>,
            },
            {
                accessorKey: "slug",
                header: ({ column }) => (
                    <Button
                        variant="slug"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "slug")}
                    >
                        Slug
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                ),
                cell: ({ row }) => <div className="lowercase">{row.getValue("slug")}</div>,
            },
            {
                accessorKey: "status",
                header: "Status",
                cell: ({ row }) => <div>{row.getValue("status")}</div>,
            },
            {
                accessorKey: "created_at",
                header: "Joined At",
                cell: ({ row }) => new Date(row.getValue("created_at")).toLocaleDateString(),
            },
            {
                id: "actions",
                enableHiding: false,
                cell: ({ row }) => {
                    const page = row.original
                    return (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem onClick={() => router.get(route('page.edit', page.id))} className="cursor-pointer">Edit page</DropdownMenuItem>
                               <Dialog>
                                <DialogTrigger asChild>
                                    <DropdownMenuItem className="cursor-pointer" onSelect={(e) => e.preventDefault()}>
                                    Delete page
                                    </DropdownMenuItem>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                    <DialogTitle>Delete page</DialogTitle>
                                    <DialogDescription>
                                        Are you sure you want to delete this page? This action cannot be undone.
                                    </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                    {/* Optional content */}
                                    </div>
                                    <DialogFooter>
                                    <Button variant="destructive" onClick={() => {router.delete(route('page.destroy', page.id))}}>Confirm Delete</Button>
                                    </DialogFooter>
                                </DialogContent>
                                </Dialog>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    )
                },
            },
        ]

        // Handle server-side pagination, sorting, and filtering
        useEffect(() => {
            const params = {};

            if (columnFilters.length > 0) {
                params.filters = Object.fromEntries(
                    columnFilters.map(filter => [filter.id, filter.value])
                );
            }

            if (sorting.length > 0) {
                params.sort = {
                    key: sorting[0].id,
                    order: sorting[0].desc ? 'desc' : 'asc'
                };
            }

            params.page = pagination.pageIndex + 1;
            params.perPage = pagination.pageSize;

            router.get(route('page.index'), params, {
                preserveState: true,
                replace: true,
            });
        }, [columnFilters, sorting, pagination]);

        const table = useReactTable({
            data: pages.data,
            columns,
            pageCount: pages.last_page,
            state: {
                sorting,
                columnFilters,
                columnVisibility,
                rowSelection,
                pagination,
            },
            onSortingChange: setSorting,
            onColumnFiltersChange: setColumnFilters,
            onColumnVisibilityChange: setColumnVisibility,
            onRowSelectionChange: setRowSelection,
            onPaginationChange: setPagination,
            getCoreRowModel: getCoreRowModel(),
            getPaginationRowModel: getPaginationRowModel(),
            getSortedRowModel: getSortedRowModel(),
            getFilteredRowModel: getFilteredRowModel(),
            manualPagination: true,
            manualSorting: true,
            manualFiltering: true,
        })




    return (
        <AuthenticatedLayout>
            <Head title="Pages" />

            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2 p-10">
 <div className="w-full">
                        <div className="flex items-center py-4">
                            <Input
                                placeholder="Filter title..."
                                value={table.getColumn("title")?.getFilterValue() ?? ""}
                                onChange={(event) =>
                                    table.getColumn("title")?.setFilterValue(event.target.value)
                                }
                                className="max-w-sm"
                            />
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="ml-auto">
                                        Columns <ChevronDown className="ml-2 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    {table
                                        .getAllColumns()
                                        .filter((column) => column.getCanHide())
                                        .map((column) => (
                                            <DropdownMenuCheckboxItem
                                                key={column.id}
                                                className="capitalize"
                                                checked={column.getIsVisible()}
                                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                            >
                                                {column.id}
                                            </DropdownMenuCheckboxItem>
                                        ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    {table.getHeaderGroups().map((headerGroup) => (
                                        <TableRow key={headerGroup.id}>
                                            {headerGroup.headers.map((header) => (
                                                <TableHead key={header.id}>
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}
                                                </TableHead>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableHeader>
                                <TableBody>
                                    {table.getRowModel().rows?.length ? (
                                        table.getRowModel().rows.map((row) => (
                                            <TableRow
                                                key={row.id}
                                                data-state={row.getIsSelected() && "selected"}
                                            >
                                                {row.getVisibleCells().map((cell) => (
                                                    <TableCell key={cell.id}>
                                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                                No results.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>

                        <div className="flex items-center justify-end space-x-2 py-4">
                            <div className="flex-1 text-sm text-muted-foreground">
                                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                                {pages.total} row(s) selected.
                            </div>
                            <div className="space-x-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => table.previousPage()}
                                    disabled={!table.getCanPreviousPage()}
                                >
                                    Previous
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => table.nextPage()}
                                    disabled={!table.getCanNextPage()}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                  {/* Floating Action Button */}
                <div className="fixed bottom-8 right-8 z-50">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                            <Button
                                size="md"
                                className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-shadow"
                                onClick={() => router.get(route('page.create'))}
                            >
                                <Plus className="h-6 w-6" />
                                <span className="sr-only">Add page</span>
                            </Button>
                      </TooltipTrigger>
                        <TooltipContent>
                        <p>Add page</p>
                        </TooltipContent>
                    </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
