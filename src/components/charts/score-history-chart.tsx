"use client";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
export function ScoreHistoryChart({ data }: { data: Array<{ month: string; score: number }> }) { return <div className="h-64 w-full"><ResponsiveContainer><AreaChart data={data}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis domain={[0, 100]} /><Tooltip /><Area type="monotone" dataKey="score" stroke="#1e6f3f" fill="#d8efe2" /></AreaChart></ResponsiveContainer></div>; }
