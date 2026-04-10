import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export function StatsCard({ title, value }: { title: string; value: string }) { return <Card><CardHeader><CardTitle className="text-sm text-gray-500">{title}</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold text-primary">{value}</div></CardContent></Card>; }
