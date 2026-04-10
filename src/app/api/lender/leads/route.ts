export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function GET(){ const apps=await prisma.loanApplication.findMany({include:{msmeProfile:true,caClient:true},orderBy:{createdAt:"desc"}}); const leads=apps.map((app)=>({id:app.id,msmeName:app.msmeProfile?.businessName||app.caClient?.businessName||"Unknown",loanAmount:app.loanAmount,creditScore:app.creditScore||0,sellerConnected:app.sellerConnected,status:app.status,aiRecommendation:app.aiRecommendation||"Review Manually"})); return NextResponse.json({leads}); }
