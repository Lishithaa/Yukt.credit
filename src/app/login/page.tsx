"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function LoginPage() { const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [loading, setLoading] = useState(false); const login = async () => { setLoading(true); const r = await signIn("credentials", { email, password, redirect: false }); setLoading(false); if (r?.ok) { toast.success("Logged in"); window.location.href = "/"; } else toast.error("Invalid credentials"); }; return <div className="mx-auto max-w-md px-4 py-10"><Card><CardHeader><CardTitle>Login</CardTitle></CardHeader><CardContent className="space-y-4"><div><Label>Email</Label><Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/></div><div><Label>Password</Label><Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/></div><Button className="w-full" onClick={login} disabled={loading}>{loading?"Signing in...":"Sign In"}</Button><Button className="w-full" variant="outline" onClick={() => signIn("google")}>Continue with Google</Button></CardContent></Card></div>; }
