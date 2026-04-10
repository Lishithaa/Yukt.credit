import * as React from "react";
import { cn } from "@/lib/utils";
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => <input className={cn("h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm", className)} ref={ref} {...props} />);
Input.displayName = "Input";
