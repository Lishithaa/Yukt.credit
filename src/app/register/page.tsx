export const dynamic = "force-dynamic";

import { RegisterForm } from "@/components/forms/register-form";

export default function RegisterPage({
  searchParams
}: {
  searchParams?: { role?: string };
}) {
  const roleParam = (searchParams?.role || "MSME").toUpperCase();
  const role = roleParam === "CA" || roleParam === "LENDER" ? roleParam : "MSME";

  return <RegisterForm role={role} />;
}
