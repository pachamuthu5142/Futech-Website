import React from "react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group";
    
    const variants = {
      primary: "bg-[#111111] text-[#FFFFFF] hover:bg-[#111111]/90 shadow-[0_8px_20px_rgba(17,17,17,0.1)] hover:shadow-[0_12px_25px_rgba(198,169,107,0.2)] border border-transparent hover:border-gold-500/50",
      secondary: "bg-white text-[#111111] hover:bg-[#FAFAFA] border border-[#111111]/10 shadow-sm",
      outline: "border border-[#111111]/20 bg-transparent text-[#111111] hover:bg-[#111111]/5 hover:border-[#111111]/40",
      ghost: "text-[#6B6B6B] hover:text-[#111111] hover:bg-[#111111]/5",
    };
    
    const sizes = {
      sm: "h-9 px-5 text-xs",
      md: "h-12 px-8 text-sm",
      lg: "h-14 px-10 text-base",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    const content = (
      <>
        <span className="relative z-10 flex items-center justify-center gap-2">{props.children}</span>
        {variant === 'primary' && (
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] transition-all duration-500" />
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";
