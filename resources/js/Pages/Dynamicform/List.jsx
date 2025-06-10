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
import { ArrowUpDown, ChevronDown, MoreHorizontal, Eye, Download, Archive } from "lucide-react"

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

export default function DynamicFormList() {
    const { submissions, form, formFields, dynamicColumns, filters: initialFilters, sort: initialSort, slug } = usePage().props;

    const [sorting, setSorting] = useState(initialSort || []);
    const [columnFilters, setColumnFilters] = useState(initialFilters || []);
    const [columnVisibility, setColumnVisibility] = useState({})
    const [rowSelection, setRowSelection] = useState({})
    const [pagination, setPagination] = useState({
        pageIndex: submissions.current_page - 1,
        pageSize: submissions.per_page,
    })

    // Build dynamic columns based on form fields
    const buildColumns = () => {
        const baseColumns = [
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
                header: ({ column }) => (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        S.No
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                ),
                cell: ({ row }) => <div className="font-medium">{row.index + 1}</div>,
            }
        ];

        // Add dynamic columns for form fields
        const fieldColumns = formFields.map(field => ({
            accessorKey: `flattened_data.${field.name}`,
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    {field.label}
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => {
                const value = row.original.flattened_data?.[field.name];
                if (field.type === 'file' && value) {
                    return <Button variant="link" size="sm">View File</Button>;
                }
                if (field.type === 'checkbox') {
                    return value ? <Badge variant="secondary">Yes</Badge> : <Badge variant="outline">No</Badge>;
                }
                return <div className="max-w-[200px] truncate">{value || '-'}</div>;
            },
        }));

        const endColumns = [
            {
                accessorKey: "status",
                header: "Status",
                cell: ({ row }) => {
                    const status = row.getValue("status");
                    const statusColors = {
                        'new': 'bg-blue-100 text-blue-800',
                        'read': 'bg-green-100 text-green-800',
                        'archived': 'bg-gray-100 text-gray-800'
                    };
                    return (
                        <Badge className={statusColors[status] || 'bg-gray-100 text-gray-800'}>
                            {status?.charAt(0)?.toUpperCase() + status?.slice(1) || 'Unknown'}
                        </Badge>
                    );
                },
            },
            {
                accessorKey: "created_at",
                header: ({ column }) => (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Created At
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                ),
                cell: ({ row }) => new Date(row.getValue("created_at")).toLocaleDateString(),
            },
            {
                id: "actions",
                enableHiding: false,
                cell: ({ row }) => {
                    const submission = row.original;
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
                                <DropdownMenuItem
                                    onClick={() => router.get(route('form.submission.show', [slug, submission.id]))}
                                    className="cursor-pointer"
                                >
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => router.post(route('form.submission.export', [slug, submission.id]))}
                                    className="cursor-pointer"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Export
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <DropdownMenuItem className="cursor-pointer text-red-600" onSelect={(e) => {e.preventDefault();
                                             router.post(route('form.submission.archive', [slug, submission.id]), {}, {
                                                       onSuccess: () => {
                                                           // Page will refresh with updated data
                                                       }
                                                   });
                                        }}>
                                            <Archive className="mr-2 h-4 w-4" />
                                            Archive Submission
                                        </DropdownMenuItem>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Archive Submission</DialogTitle>
                                            <DialogDescription>
                                                Are you sure you want to archive this submission? This action can be undone later.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter>
                                            <Button
                                                variant="destructive"
                                                onClick={() => {
                                                    router.patch(route('dynamicform.submission.archive', [slug, submission.id]))
                                                }}
                                            >
                                                Confirm Archive
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )
                },
            },
        ];

        return [...baseColumns, ...fieldColumns, ...endColumns];
    };

    const columns = buildColumns();

    // Handle server-side pagination, sorting, and filtering
    useEffect(() => {
        const params = {};

        if (columnFilters.length > 0) {
            params.filters = Object.fromEntries(
                columnFilters.map(filter => [filter.id.replace('flattened_data.', ''), filter.value])
            );
        }

        if (sorting.length > 0) {
            params.sort = {
                key: sorting[0].id.replace('flattened_data.', ''),
                order: sorting[0].desc ? 'desc' : 'asc'
            };
        }

        params.page = pagination.pageIndex + 1;
        params.perPage = pagination.pageSize;

        router.get(route('form.submission.index', slug), params, {
            preserveState: true,
            replace: true,
        });
    }, [columnFilters, sorting, pagination]);

    const table = useReactTable({
        data: submissions.data,
        columns,
        pageCount: submissions.last_page,
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
            <Head title={`${form.name} - Submissions`} />

            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2 p-10">
                    <div className="w-full">
                        <div className="mb-4">
                            <h1 className="text-2xl font-bold">{form.name} Submissions</h1>
                            <p className="text-gray-600">{form.description}</p>
                        </div>

                        <div className="flex items-center py-4 gap-4">
                            <Input
                                placeholder="Filter by ID..."
                                value={table.getColumn("id")?.getFilterValue() ?? ""}
                                onChange={(event) =>
                                    table.getColumn("id")?.setFilterValue(event.target.value)
                                }
                                className="max-w-sm"
                            />

                            {/* Add filter for the first form field as example */}
                            {formFields.length > 0 && (
                                <Input
                                    placeholder={`Filter by ${formFields[0].label}...`}
                                    value={table.getColumn(`flattened_data.${formFields[0].name}`)?.getFilterValue() ?? ""}
                                    onChange={(event) =>
                                        table.getColumn(`flattened_data.${formFields[0].name}`)?.setFilterValue(event.target.value)
                                    }
                                    className="max-w-sm"
                                />
                            )}

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
                                                {column.id.replace('flattened_data.', '')}
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
                                                No submissions found.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>

                        <div className="flex items-center justify-end space-x-2 py-4">
                            <div className="flex-1 text-sm text-muted-foreground">
                                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                                {submissions.total} row(s) selected.
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
            </div>
        </AuthenticatedLayout>
    );
}
