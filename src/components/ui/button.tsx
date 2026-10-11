import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "navy" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className = "",
      disabled,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    const base = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs md:text-sm px-3.5 py-1.5",
      md: "text-sm md:text-base px-5 py-2.5",
      lg: "text-base md:text-lg px-6 py-3.5 font-semibold"
    };

    const variantStyles = {
      primary: "bg-teal-600 hover:bg-teal-700 text-white shadow-sm hover:shadow-md focus-visible:ring-teal-500",
      navy: "bg-slate-900 hover:bg-slate-950 text-white shadow-sm hover:shadow focus-visible:ring-slate-800",
      outline: "border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 shadow-2xs focus-visible:ring-sky-500",
      ghost: "text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 focus-visible:ring-slate-400",
      whatsapp: "bg-[#25D366] hover:bg-[#20ba59] text-white shadow-sm hover:shadow focus-visible:ring-emerald-500 font-semibold"
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`${base} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
