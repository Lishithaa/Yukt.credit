export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function GET(){ const [ca,msme,lender,apps]=await Promise.all([prisma.cAProfile.count(),prisma.mSMEProfile.count(),prisma.lenderProfile.count(),prisma.loanApplication.count()]); return NextResponse.json({users:{ca,msme,lender},applications:apps}); }
