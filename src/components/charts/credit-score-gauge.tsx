"use client";
import { RadialBar, RadialBarChart, PolarAngleAxis, ResponsiveContainer } from "recharts";
export function CreditScoreGauge({ score }: { score: number }) { return <div className="h-64 w-full"><ResponsiveContainer><RadialBarChart innerRadius="70%" outerRadius="100%" data={[{ value: score, fill: "#1e6f3f" }]} startAngle={180} endAngle={0} barSize={20}><PolarAngleAxis type="number" domain={[0, 100]} tick={false} /><RadialBar dataKey="value" /></RadialBarChart></ResponsiveContainer></div>; }
