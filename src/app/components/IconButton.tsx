import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}

export function IconButton({ transparent = false, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        `flex items-center justify-center size-7 border border-zinc-50/10 box-border 
         rounded-md text-white disabled:opacity-50 ${transparent ? "bg-black/20" : "bg-zinc-50/5"}`,
         props.className
      )}
    />
  )
}