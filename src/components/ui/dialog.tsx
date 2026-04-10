"use client";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
export function ConfirmDialog({ open, title, description, onCancel, onConfirm }: { open: boolean; title: string; description: string; onCancel: () => void; onConfirm: () => void }) { if (!open) return null; return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"><div className="w-full max-w-md rounded-xl bg-white p-6"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm text-gray-600">{description}</p><div className="mt-6 flex justify-end gap-2"><Button variant="outline" onClick={onCancel}>Cancel</Button><Button onClick={onConfirm}>Confirm</Button></div></div></div>; }
export const Modal = ({ open, children }: { open: boolean; children: ReactNode }) => open ? <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">{children}</div> : null;
