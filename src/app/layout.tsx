import "./globals.css";
import { Toaster } from "sonner";
import { Navbar } from "@/components/navbar";
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><Navbar /><main className="min-h-[calc(100vh-4rem)]">{children}</main><Toaster richColors position="top-right" /></body></html>; }
