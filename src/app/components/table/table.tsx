import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableProps extends ComponentProps<"table"> {}

export function Table(props: TableProps) {
  return (
    <div className="border border-zinc-50/10 rounded-lg">
      <table {...props} className={twMerge("w-full", props.className)} />
    </div>
  )
}