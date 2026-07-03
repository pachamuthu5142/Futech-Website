import React from "react";
import { cn } from "@/components/ui/Button";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div className={cn("rounded-[24px] glass-card overflow-hidden", className)} {...props} />
  );
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={cn("p-8", className)} {...props} />;
}
