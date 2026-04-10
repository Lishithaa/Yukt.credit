import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { Role } from "@prisma/client";
import { prisma } from "@/lib/prisma";
export async function POST(request: Request){ try{ const body=await request.json(); const existing=await prisma.user.findUnique({where:{email:body.email}}); if(existing) return NextResponse.json({error:"Email already exists"},{status:400}); const user=await prisma.user.create({data:{email:body.email,name:body.name,password:await hash(body.password,10),phone:body.phone,role:Role.CA,caProfile:{create:{icaiRegNo:body.icaiRegNo,firmName:body.firmName,city:body.city}}}}); return NextResponse.json({id:user.id}); } catch { return NextResponse.json({error:"Unable to register"},{status:500}); } }
