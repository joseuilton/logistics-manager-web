"use client";

import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon, EllipsisIcon, SearchIcon } from "lucide-react";

import { IconButton } from "@/app/components/IconButton";
import { Table } from "@/app/components/table/table";
import { TableHeading } from "@/app/components/table/table-heading";
import { TableCell } from "@/app/components/table/table-cell";
import { TableRow } from "@/app/components/table/table-row";
import { customers } from "../../data/customers";
import { useEffect, useState } from "react";
import { api } from "@/app/lib/api";

interface Customer {
  customerId: string;
  name: string;
  email: string;
  phone: string;
  cnpj: string;
  address: string;
}

export function CustomersList() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get<Customer[]>("/customers");
      const fetchedCustomers = response.data.map((row) => ({
        customerId: row.customerId,
        name: row.name,
        email: row.email,
        phone: row.phone,
        cnpj: row.cnpj,
        address: row.address,
      }));

      setCustomers(fetchedCustomers);
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <div
          className="min-w-[280px] flex items-center gap-3 px-3 py-1.5 border border-zinc-50/10 
                     rounded-lg"
        >
          <SearchIcon className="size-4 text-emerald-300" />
          <input
            type="search"
            name="search-customers"
            id="search-customers"
            placeholder="Buscar Clientes..."
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
            <TableHeading>Telefone</TableHeading>
            <TableHeading>CNPJ</TableHeading>
            <TableHeading>Endereço</TableHeading>
            <TableHeading className="size-7"></TableHeading>
          </tr>
        </thead>

        <tbody>
          {customers.slice(0, 10).map((customer) => (
            <TableRow key={customer.customerId}>
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
                <div className="flex flex-col gap-1 ">
                  <span className="text-zinc-50 font-semibold">{customer.name}</span>
                  <span className="text-xs">{customer.email}</span>
                </div>
              </TableCell>
              <TableCell>
                {customer.phone}
              </TableCell>
              <TableCell>
                {customer.cnpj}
              </TableCell>
              <TableCell>
                {customer.address}
              </TableCell>
              <TableCell className="size-7">
                <IconButton className="ml-auto" transparent>
                  <EllipsisIcon size={16} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}

        </tbody>

        <tfoot>
          <tr className="text-sm text-zinc-200">
            <td colSpan={3} className="pl-4">
              <p>Mostrando 10 de {customers.length} itens</p>
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