import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    variant?: "default" | "secondary" | "outline" | "urgent" | "success";
  }
>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-emerald-100 text-emerald-800 border-emerald-200/50",
    secondary: "bg-charcoal-100 text-charcoal-700 border-charcoal-200/50",
    outline: "bg-transparent text-charcoal-600 border-charcoal-200",
    urgent: "bg-amber-50 text-amber-700 border-amber-200/50",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200/50",
  };

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export { Badge };
