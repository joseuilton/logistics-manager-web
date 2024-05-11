"use client";
import { IconButton } from "@/app/components/IconButton";
import { Table } from "@/app/components/table/table";
import { TableCell } from "@/app/components/table/table-cell";
import { TableHeading } from "@/app/components/table/table-heading";
import { TableRow } from "@/app/components/table/table-row";
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon, EllipsisIcon, SearchIcon, TrashIcon } from "lucide-react";

import { itens } from "@/app/data/itens";
import Link from "next/link";
import Barcode from "react-barcode";

export default function DashProductItensPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Nome do produto</h1>
      </div>

      <Table>
        <thead>
          <tr>
            <TableHeading>
              <input
                type="checkbox"
                name=""
                id=""
                className="size-4 bg-zinc-950 border-zinc-50/10 text-emerald-400 rounded 
                           focus:ring-emerald-400"
              />
            </TableHeading>
            <TableHeading>Código de barras</TableHeading>
            <TableHeading></TableHeading>
          </tr>
        </thead>

        <tbody>
          {itens.slice(0, 10).map((item) => (
            <TableRow key={item.id}>
              <TableCell className="size-4">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="size-4 bg-zinc-950 border-zinc-50/10 text-emerald-400 rounded 
                           focus:emerald-400"
                />
              </TableCell>
              <TableCell>
                <Barcode
                  value={String(item.eanCode)}
                  displayValue={false}
                  height={50}
                />
              </TableCell>
              <TableCell className="flex items-center justify-end gap-4">
                <IconButton className="" transparent>
                  <TrashIcon className="text-red-500" size={16} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>

        <tfoot>
          <tr className="text-sm text-zinc-200">
            <td colSpan={2} className="pl-4">
              <p>Mostrando 10 de {itens.length} itens</p>
            </td>
            <td colSpan={1} className="py-3 pr-4">
              <div className="flex items-center justify-end gap-8">
                <p>Página 1 de 10</p>

                <div className="flex items-center gap-1.5">
                  <IconButton>
                    <ChevronsLeftIcon size={16} />
                  </IconButton>
                  <IconButton>
                    <ChevronLeftIcon size={16} />
                  </IconButton>
                  <IconButton>
                    <ChevronRightIcon size={16} />
                  </IconButton>
                  <IconButton>
                    <ChevronsRightIcon size={16} />
                  </IconButton>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}