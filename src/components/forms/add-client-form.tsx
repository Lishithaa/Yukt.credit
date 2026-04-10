"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export function AddClientForm({ caProfileId }: { caProfileId: string }) { const [form, setForm] = useState<Record<string, string>>({}); const [loading, setLoading] = useState(false); const fields = ["name", "businessName", "gstNumber", "annualTurnover", "loanAmountRequired", "gstCertificateBase64", "itrBase64", "bankStatementsBase64"]; const submit = async () => { setLoading(true); const res = await fetch("/api/ca/clients", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, caProfileId }) }); setLoading(false); if (res.ok) { toast.success("Client added"); window.location.reload(); } else toast.error("Failed"); }; return <Card><CardHeader><CardTitle>Add Client</CardTitle></CardHeader><CardContent className="space-y-3">{fields.map((f) => <div key={f}><Label>{f}</Label><Input value={form[f] || ""} onChange={(e) => setForm((p) => ({ ...p, [f]: e.target.value }))} /></div>)}<Button className="w-full" onClick={submit} disabled={loading}>{loading ? "Saving..." : "Save Client"}</Button></CardContent></Card>; }
