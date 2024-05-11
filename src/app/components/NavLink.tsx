import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface NavLinkProps extends ComponentProps<"a"> {
  isActive?: boolean;
}

export function NavLink({ isActive = false, ...props }: NavLinkProps) {
  return (
    <a
      {...props}
      className={twMerge(
        `text-sm font-medium ${isActive ? "text-zinc-50" : "text-zinc-200"}`,
        props.className
      )}
    />
  )
}