import Image from "next/image";
import { NavLink } from "./NavLink";

export function Header() {
  return (
    <header className="py-2 flex items-center gap-8">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" width="50" height="50" alt="Logo" />
        <h1 className="font-bold">Logistics manager</h1>
      </div>

      <nav className="flex items-center gap-5">
        <NavLink href="/" isActive>Clientes</NavLink>
        <NavLink href="/dash/products">Produtos</NavLink>
        <NavLink href="/beeping">Bipagem</NavLink>
      </nav>
    </header>
  )
}