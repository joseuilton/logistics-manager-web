import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableRowProps extends ComponentProps<"tr"> {}

export function TableRow(props: TableRowProps) {
  return (
    <tr
      {...props}
      className={twMerge("border-y border-y-zinc-50/10 hover:bg-zinc-50/5", props.className)}
    />
  )
}