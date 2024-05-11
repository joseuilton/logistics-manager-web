import { TrashIcon } from "lucide-react";
import { IconButton } from "../components/IconButton";
import { Table } from "../components/table/table";
import { TableCell } from "../components/table/table-cell";
import { TableHeading } from "../components/table/table-heading";
import { TableRow } from "../components/table/table-row";

export default function BeepingPage() {
  return (
    <div className="grid grid-cols-2 gap-16">
      <div>
        <button className="block w-16 h-16 mx-auto rounded-full bg-emerald-400"></button>
        <h2 className="mt-6 text-center font-bold">
          Clique acima para bipar um código de barras
        </h2>
      </div>

      <div>
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
              <TableHeading></TableHeading>
            </tr>
          </thead>

          <tbody>
              <TableRow>
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
                  Oi
                </TableCell>
                <TableCell>
                  R$
                </TableCell>
                <TableCell className="flex items-center justify-end gap-4">
                  <IconButton className="ml-auto" transparent>
                    <TrashIcon className="text-red-500" size={16} />
                  </IconButton>
                </TableCell>
              </TableRow>
          </tbody>

          <tfoot>
            <tr className="text-sm text-zinc-200">
              <td colSpan={4} className="py-2 pl-4">
                <p>Quantidade de itens: </p>
                <p>Total: R$</p>
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </div>
  )
}