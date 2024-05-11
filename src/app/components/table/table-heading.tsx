import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableHeadingProps extends ComponentProps<"th"> {}

export function TableHeading(props: TableHeadingProps) {
  return (
    <th
      {...props}
      className={twMerge("py-3 px-4 text-sm font-semibold text-left", props.className)}
    />
  )
}