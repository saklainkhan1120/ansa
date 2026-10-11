import React from "react";
import { CheckCircleIcon, ClockIcon } from "./icons";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "aquatic" | "teal" | "navy" | "gold" | "verified" | "pending" | "neutral";
  size?: "sm" | "md";
  children: React.ReactNode;
}

export function Badge({
  variant = "aquatic",
  size = "md",
  className = "",
  children,
  ...props
}: BadgeProps) {
  const baseStyles = "inline-flex items-center gap-1.5 font-medium rounded-full border transition-colors";
  
  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-xs md:text-sm px-3 py-1"
  };

  const variantStyles = {
    aquatic: "bg-sky-50 text-sky-800 border-sky-200/80",
    teal: "bg-teal-50 text-teal-800 border-teal-200",
    navy: "bg-slate-900 text-white border-slate-700",
    gold: "bg-amber-50 text-amber-900 border-amber-200",
    verified: "bg-emerald-50 text-emerald-800 border-emerald-200 font-semibold",
    pending: "bg-amber-100/60 text-amber-900 border-amber-300 text-xs",
    neutral: "bg-slate-100 text-slate-700 border-slate-200"
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {variant === "verified" && <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
      {variant === "pending" && <ClockIcon className="w-3.5 h-3.5 text-amber-700 shrink-0" />}
      {children}
    </span>
  );
}
