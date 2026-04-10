"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

const base = ["name", "email", "phone", "password"];

export function RegisterForm({ role }: { role: "CA" | "MSME" | "LENDER" }) {
  const [form, setForm] = useState<Record<string, string>>({ role });
  const [loading, setLoading] = useState(false);

  const fields = useMemo(
    () =>
      role === "CA"
        ? [...base, "icaiRegNo", "firmName", "city"]
        : role === "LENDER"
          ? [...base, "institutionName", "institutionType"]
          : [...base, "businessName", "gstNumber", "yearsInBusiness", "monthlyTurnover"],
    [role]
  );

  const endpoint =
    role === "CA" ? "/api/register/ca" : role === "LENDER" ? "/api/register/lender" : "/api/register/msme";

  const submit = async () => {
    setLoading(true);
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    setLoading(false);
    if (res.ok) {
      toast.success("Registered");
      window.location.href = "/login";
    } else {
      toast.error("Registration failed");
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle>{role} Registration</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {fields.map((f) => (
            <div key={f}>
              <Label>{f}</Label>
              {f === "institutionType" ? (
                <Select value={form[f] || "Bank"} onChange={(e) => setForm((p) => ({ ...p, [f]: e.target.value }))}>
                  <option>Bank</option>
                  <option>NBFC</option>
                </Select>
              ) : (
                <Input
                  type={f.includes("password") ? "password" : "text"}
                  value={form[f] || ""}
                  onChange={(e) => setForm((p) => ({ ...p, [f]: e.target.value }))}
                />
              )}
            </div>
          ))}
          <div className="md:col-span-2">
            <Button className="w-full" onClick={submit} disabled={loading}>
              {loading ? "Submitting..." : "Register"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
