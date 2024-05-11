import { IconButton } from "@/app/components/IconButton";
import { Table } from "@/app/components/table/table";
import { TableCell } from "@/app/components/table/table-cell";
import { TableHeading } from "@/app/components/table/table-heading";
import { TableRow } from "@/app/components/table/table-row";
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon, EllipsisIcon, SearchIcon, TrashIcon } from "lucide-react";

import { products } from "@/app/data/products";
import Link from "next/link";

export default function DashProductsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Produtos</h1>
        <div
          className="min-w-[280px] flex items-center gap-3 px-3 py-1.5 border border-zinc-50/10 
                     rounded-lg"
        >
          <SearchIcon className="size-4 text-emerald-300" />
          <input
            type="search"
            name="search-customers"
            id="search-customers"
            placeholder="Buscar Produtos..."
            className="p-0 text-sm bg-transparent outline-none placeholder:text-zinc-200 flex-1
                       border-0 focus:ring-transparent"
          />
        </div>
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
            <TableHeading>Nome</TableHeading>
            <TableHeading>Preço</TableHeading>
            <TableHeading className="size-7"></TableHeading>
          </tr>
        </thead>

        <tbody>
          {products.slice(0, 10).map((product) => (
            <TableRow key={product.id}>
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
                {product.name}
              </TableCell>
              <TableCell>
                R$ {product.price}
              </TableCell>
              <TableCell className="flex items-center justify-end gap-4">
                <Link href={`/dash/products/${product.id}`} className="text-emerald-400">
                  <IconButton className="ml-auto" transparent>
                    <EllipsisIcon size={16} />
                  </IconButton>
                </Link>

                <IconButton className="" transparent>
                  <TrashIcon className="text-red-500" size={16} />
                </IconButton>
              </TableCell>
            </TableRow>

          ))}

        </tbody>

        <tfoot>
          <tr className="text-sm text-zinc-200">
            <td colSpan={3} className="pl-4">
              <p>Mostrando 10 de {products.length} itens</p>
            </td>
            <td colSpan={3} className="py-3 pr-4">
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