import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva("inline-flex items-center justify-center rounded-md text-sm font-medium transition disabled:opacity-50", { variants: { variant: { default: "bg-primary text-white hover:opacity-90", secondary: "bg-mutedgreen text-primary", outline: "border border-gray-200", destructive: "bg-red-600 text-white" }, size: { default: "h-10 px-4", sm: "h-9 px-3", lg: "h-11 px-8" } }, defaultVariants: { variant: "default", size: "default" } });
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />);
Button.displayName = "Button";
export { Button };
