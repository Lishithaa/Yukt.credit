"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [{ href: "/", label: "Home" }, { href: "/ca/dashboard", label: "CA" }, { href: "/msme/dashboard", label: "MSME" }, { href: "/lender/dashboard", label: "Lender" }, { href: "/admin", label: "Admin" }, { href: "/login", label: "Login" }];
export function Navbar() { const pathname = usePathname(); return <header className="sticky top-0 z-30 border-b bg-white/90"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4"><Link href="/" className="text-lg font-bold text-primary">YUKT Credit</Link><nav className="flex items-center gap-2 text-sm">{links.map((l) => <Link key={l.href} href={l.href} className={`rounded-md px-3 py-1.5 ${pathname === l.href ? "bg-mutedgreen text-primary" : "hover:bg-mutedgreen"}`}>{l.label}</Link>)}</nav></div></header>; }
